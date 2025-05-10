'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"
import { useState, useEffect } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional(), 
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      reset();
      setToken("");
    }
  }, [open, reset]);

  const onSubmit = async (data: any) => {
    if (!token) {
      toast({
        title: "Error",
        description: "Catptcha is being verified.Please wait",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // const response = await axios.post("http://localhost:4000/pushfeedback", {
        
      const response = await axios.post("https://portfolio-backend-5inh.onrender.com/pushfeedback", {
        userName: data.name,
        userEmail: data.email,
        userFeedback: data.message,
        token: token,
      });

      if (response.data.success) {
        toast({
          title: `Thank you ${data.name}`,
          description: "Your feedback has been successfully provided!",
          className: "bg-green-500 text-white"
        });
        setOpen(false);
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to submit feedback",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const onVerify = (token: string) => {
    setToken(token);
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfbhTQrAAAAAB8b7slPLUStFZAVgXz62OO_qqGw">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="lg"
            className="text-xs lg:text-normal bg-emerald-400 text-white hover:bg-gray-300 transition duration-300"
          >
            Contact me
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:w-[420px] w-[350px] overflow-visible">
          <DialogHeader>
            <DialogTitle>Let's Connect</DialogTitle>
            <DialogDescription>
              I love to hear any feedback from you. You're one form away from connecting with me.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-5" placeholder="Your name" {...register("name")} />
              {errors.name && <p className="text-red-500 col-span-6">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-5" placeholder="Your email" {...register("email")} />
              {errors.email && <p className="text-red-500 col-span-6">{errors.email.message}</p>}
            </div>
            <div className="grid w-full gap-1.5 p-3">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" placeholder="Type your message here." {...register("message")} />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              <p className="text-sm text-muted-foreground">Feedback helps us improve</p>
            </div>
            
            {/* Hidden reCAPTCHA v3 component */}
            <GoogleReCaptcha onVerify={onVerify} />
            
            <DialogFooter>
              <Button type="submit" className="flex gap-2 items-center justify-center" disabled={loading}>
                {loading ? (
                  <>
                    Wait
                    <div className="w-4 h-4 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
                  </>
                ) : (
                  "Send"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </GoogleReCaptchaProvider>
  );
}