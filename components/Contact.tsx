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
import { useState } from "react";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional(), 
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function ContactForm() {
  const [open, setOpen] = useState(false);

const [loading,setLoading]=useState(false);
  const { toast } = useToast()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });


  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("data is",data);
      if(loading){
        toast({
          title: `Please Wait`,
          description: "Your feedback is Being S!",
          className:"bg-cyan-200 text-white-400"
        })
      }
    try {
      const response = await axios.post("https://portfolio-backend-5inh.onrender.com/pushfeedback", {
        userName: data.name,
        userEmail: data.email,
        userFeedback: data.message,
      });
      if(response.data.success){
        toast({
          title: `Thank you ${data.name}`,
          description: "Your feedback has been successfully provided !",
          className:"bg-green-500 text-white-400"
        })
        setOpen(false); 
      }
      console.log("Response:", response.data);
    } catch (error:any) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
  variant="secondary"
  size="lg"
  className="text-xs lg:text-normal bg-emerald-400 text-white hover:bg-gray-300 transition duration-300"
  onClick={() => setOpen(true)}
>
  Contact me
</Button>
      <DialogContent className=" lg:w-[420px] w-[350px]">
        <DialogHeader>
          <DialogTitle>Let's Connect</DialogTitle>
          <DialogDescription>
            I love to hear any feedback from you guys. You are one form away from connecting with me. Please fill it up.
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
            <p className="text-sm text-muted-foreground">Feedback is all we need to be better</p>
          </div>
          <DialogFooter>
            <Button type="submit" className="flex gap-2 items-center justify-center" 
            disabled={loading}
            >
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
  );
}
