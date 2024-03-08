"use client"
import React, {useState} from "react";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { userSchema } from "@/lib/validations/user";
import { Control, UseFormHandleSubmit, useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"


// Define your prop types here
interface ParticipantFormProps {
  control: Control<z.infer<typeof userSchema>>;
  handleSubmit: UseFormHandleSubmit<z.infer<typeof userSchema>>;
}


const ParticipantForm: React.FC<ParticipantFormProps>= ({control, handleSubmit}) => {

  // const { control } = useFormContext(); // Use form context for control
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "participants",
  // });

  
  return (
    <>

                 <div className="self-start text-left p-4">
          
                    {/* <form onSubmit={form.handleSubmit(handleSubmit)}> */}
                    <form onSubmit={(e) => handleSubmit}> {/* Prevent default form submission */}
                      
                        <React.Fragment >
                          <div className="flex flex-row justify-between items-center mb-4">
                          <FormField
                                control={control}
                                name={`participants.name`} // Adjust field names according to array index
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="text"
                                        placeholder="Enter participant name"
                                
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                         <FormField
                                control={control}
                                name={`participants.email`} // Adjust field names according to array index
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter participant email"
                                        type="email"
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                                </div>
                                
                        </React.Fragment>
                      
                    </form>
                         
                       
                  </div>

             
    </>
  )
};      

export default ParticipantForm;    