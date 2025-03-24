'use client';
import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional(), 
  message: z.string().min(5, "Message must be at least 5 characters"),
});

function ContactDetail() {
    const { toast } = useToast()


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(formSchema),
    });
  
  
    const onSubmit = async (data: any) => {
      console.log("data is",data);
      try {
        const response = await axios.post("http://localhost:4000/pushfeedback", {
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
        }
        console.log("Response:", response.data);
      } catch (error:any) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    };
  
  return (
<>
<div className="pb-10 w-full  flex flex-col gap-5 justify-center" id='contact'>
<h1 className="text-5xl px-40 text-white text-nowrap  ">Thank You for Visiting</h1>

<form onSubmit={handleSubmit(onSubmit)} className="flex  justify-start flex-col gap-8 py-10  p-40 rounded-lg mt-10 ">
<p className='text-white   font-normal'>Please leave some feedback!</p>

          <div className="flex items-center gap-4 w-2/5">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="" placeholder="Your name" {...register("name")} />
            {errors.name && <p className="text-red-500 col-span-6">{errors.name.message}</p>}
          </div>
          <div className="flex items-center  gap-4 w-2/5">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="flex items-center" placeholder="Your email" {...register("email")} />
            {errors.email && <p className="text-red-500 col-span-6">{errors.email.message}</p>}
          </div>
          <div className=" gap-1.5 w-2/5 ">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" placeholder="Type your message here." {...register("message")} />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            <p className="text-sm text-muted-foreground">Feedback is all we need to be better</p>
          </div>
            <Button type="submit" className='w-1/5'>Send</Button>
          {/* <DialogFooter>
          </DialogFooter> */}
        </form>
        </div>
</>  )
}

export default ContactDetail