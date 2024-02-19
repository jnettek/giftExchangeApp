"use client"
import React from "react";
import Introduction from "@/app/components/Introduction";
import DatePicker from "@/app/components/DatePicker";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { userSchema } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/clerk-react";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";





const exchangePage = () => {

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      eventName: "",
      eventDate: new Date(),
      budget: "",
      invitationMessage: "",
      participants: [],
    },
  })


  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    console.log(values);
  }



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
                  <form onSubmit={form.handleSubmit(onSubmit)}>
               
                  <FormField //// EVENT NAME
                    name="eventName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">
                          Event Name
                          </FormLabel>
                        <FormControl>
                      <Input 
                      type="text"
                      {...field} placeholder="Event Name" />
                      </FormControl>
                      </FormItem>
                    )}
                  /> 

                  
                    <FormField // DATE OF GIFT EXCHANGE
                      name="eventDate"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">
                            Date of Gift Exchange
                          </FormLabel>
                          <FormControl>
                            <DatePicker 
                              // {...field}
                              // selected={field.value} // Assuming your DatePicker accepts a 'selected' prop for the current value
                              // onChange={(date) => field.onChange(date)} // Ensuring onChange from DatePicker updates the form
                              // dateFormat="MMMM d, yyyy" // Customize the date format as needed
                              // placeholderText="Select date"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField // BUDGET
                      name="budget"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">
                            Budget
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="number"
                              {...field}
                              placeholder="Budget" />
                          </FormControl>
                        </FormItem>
                      )}
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
                  </form>
                    </Form> 
                  

                  </div>
                  <Button
                      type="submit"
                      className="p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12"
                      variant="default" // or any other variant you see fit
                      size="sm" // or "sm", "lg", etc., according to your needs
                      >
                      CONTINUE
                    </Button>

                    <div className="self-end w-full text-right">
                        <Link href="/user">
                          <p className="text-sm">← Back</p> {/* Adjust text size and other styles as needed */}
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