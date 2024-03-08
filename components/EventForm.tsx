"use client"
import React from "react";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { userSchema } from "@/lib/validations/user";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from 'date-fns';
import { Control, UseFormHandleSubmit } from "react-hook-form";

// Define your prop types here
interface EventFormProps {
  control: Control<z.infer<typeof userSchema>>;
  handleSubmit: UseFormHandleSubmit<z.infer<typeof userSchema>>;
}


const EventForm: React.FC<EventFormProps> = ({ control, handleSubmit }) => {


  return (
    <>
    

                 <div className="self-start text-left w-full p-4">
                   
                    <form onSubmit={(e) => handleSubmit}>

                    <FormField
                    control={control}
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
            control={control}
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
                    control={control}
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
                    control={control}
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
                    
                       </div>
                 
    </>
  )
};      

export default EventForm;