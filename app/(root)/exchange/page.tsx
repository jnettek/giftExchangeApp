"use client"
import React from "react";
import * as z from "zod";
import Introduction from "@/components/Introduction";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { userSchema } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/clerk-react";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from 'date-fns';



const exchangePage = () => {

  

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      eventName: "",
      budget: "",
      eventDate: undefined,
      invitationMessage: "",
      // participants: [],
    },
  })


  const handleSubmit = (values: z.infer<typeof userSchema>) => {
    console.log({values});

  };



  return (
    <>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream-light">       
                 <header className="w-full">
                        <div className="flex justify-end p-4">
                        <UserButton afterSignOutUrl="/" />
                        </div>
                    </header>

             <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
               🎉 Start Gift Exchange
             </h1>
             <div className="mt-6 flex w-full max-w-4xl flex-wrap items-stretch justify-around sm:w-full">
               <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 bg-[#fff7e1]">  
                 <div className="flex p-2 mr-4 mt-2 mb-6 text-black">
                  <h1 className="text-black text-2xl">First, set up details about gifts</h1>
                  </div>

                 <div className="self-start text-left w-full p-4">
                   <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>

                    <FormField
                    control={form.control}
                    name="eventName"
                    render={({ field }) => {
                      return <FormItem>
                        <FormLabel className="text-sm">Event Name</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="Enter event name"
                          type="text"
                          {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    }}
                    />
                       
                         
            <FormField
            control={form.control}
            name="eventDate"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormItem>
                <FormLabel>Date of Event</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {value ? format(value, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={value}
                      onSelect={(date) => {
                        onChange(date);
                        // Ensure the date is properly set in your form state
                      }}
                      disabled={(date) => {
                        //Ensure disable past day
                        const currentDate = new Date();
                        const startOfToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                        return date < startOfToday;
                      }
                     }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {error && <FormMessage>{error.message}</FormMessage>}
              </FormItem>
            )}
          />

                     <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => {
                      return <FormItem>
                        <FormLabel className="text-sm">Budget</FormLabel>
                        <FormControl>
                          <Input 
                          placeholder="Amount"
                          type="text"
                          {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    }}
                    /> 

                    <FormField // INVITATION MESSAGE 
                    name="invitationMessage"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">
                          Invitation Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            placeholder="Invitation Message" />
                        </FormControl>
                      </FormItem>
                    )}
                    />

                  <Button
                      type="submit"
                      className="p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12"
                      variant="default" // or any other variant you see fit
                      size="sm" // or "sm", "lg", etc., according to your needs
                      >
                      CONTINUE
                    </Button>
                  </form>
                    </Form> 


                  </div>

                    <div className="self-end w-full text-right">
                        <Link href="/user">
                          <div className="text-sm">← Back</div> {/* Adjust text size and other styles as needed */}
                        </Link>
                      </div>
                      
                      </div>
               
                        <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-[#f4a692]">
                         <Introduction />
                          </div>
                        </div>
                      </main>
                </div>
    </>
  )
};      

export default exchangePage;    