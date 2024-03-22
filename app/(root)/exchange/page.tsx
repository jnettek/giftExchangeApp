"use client"
import React, {useState} from "react";
import * as z from "zod";
import Introduction from "@/components/Introduction";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { userSchema } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/nextjs";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon} from "lucide-react";
import { PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from 'date-fns';
import Link from "next/link";
import { createUser } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: 'Step 1',
    name: 'Event Information',
    fields: ['eventName', 'budget', 'eventDate', 'invitationMessage']
  },
  {
    id: 'Step 2',
    name: 'Participant Information',
    fields: ['name', 'email']
  }
]

const exchangePage = () => {

  const router = useRouter();

  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    mode: 'onSubmit',
    defaultValues: {
      eventName: "",
      budget: "",
      eventDate: undefined,
      invitationMessage: "",
      participants: [{name: "", email: ""}],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "participants",
  });

  const handleSubmit = async (values: z.infer<typeof userSchema>) => {
    console.log({values});

    await createUser({
      eventName: values.eventName,
      budget: values.budget,
      eventDate: values.eventDate,
      invitationMessage: values.invitationMessage,
      participants: values.participants
    });

   router.push('/create-event');
  };



  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await form.trigger(fields, { shouldFocus: true })
  

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit((data) =>{
          console.log(data)
        })();
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
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
                  {/* ////////////////////////  EVENT FORM ///////////////////*/}
                   <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                    {currentStep === 0 && ( 
                    <><FormField
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
                            <FormMessage />
                          </FormItem>;
                        } } />
                        
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
                                    } }
                                    disabled={(date) => {
                                      //Ensure disable past day
                                      const currentDate = new Date();
                                      const startOfToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                                      return date < startOfToday;
                                    } }
                                    initialFocus />
                                </PopoverContent>
                              </Popover>
                              {error && <FormMessage>{error.message}</FormMessage>}
                            </FormItem>
                          )} />
                          
                          
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
                              <FormMessage />
                            </FormItem>;
                          } } /><FormField // INVITATION MESSAGE 

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
                          )} /></>
                    )}
                      {/* //////////////////PARTICIPANT */}
                   {/* Participant Section */}
                      {currentStep === 1 && (
                        <>
                          {fields.map((field, index) => (
                            // <React.Fragment key={field.id}>
                            <div key={field.id} className="flex space-x-4 mb-4">
                              <FormField
                                control={form.control}
                                name={`participants.${index}.name`} // Adjust field names according to array index
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
                                control={form.control}
                                name={`participants.${index}.email`} // Adjust field names according to array index
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

                            {/* </React.Fragment> */}
                            </div>
                          ))}
                           {/* Add Name Button */}
                              <Button
                                onClick={() => append({ name: "", email: "" })}
                                className=" text-black bg-transparent"
                                variant="default"
                                size="sm"
                              >
                                Add Name
                              </Button>
                              <Button
                                onClick={() => remove(fields.length - 1)}
                                className="text-black bg-transparent"
                                variant="default"
                                size="sm"
                              >
                                Remove
                              </Button>
                        </>
                      )}
                  <div className="flex">
                  <Button
                      // type="submit"
                      onClick={prev} disabled={currentStep === 0}
                      className="p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12"
                      variant="default" // or any other variant you see fit
                      size="sm" // or "sm", "lg", etc., according to your needs
                      >
                      Pervious
                    </Button>
                    <Button
                      type={currentStep < steps.length -1 ? "button" : "submit"}
                      // onClick={currentStep < steps.length - 1 ? next : () => form.handleSubmit(handleSubmit)()}
                      onClick={currentStep < steps.length - 1 ? next : undefined}
                      className="p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12"
                      variant="default" // or any other variant you see fit
                      size="sm" // or "sm", "lg", etc., according to your needs
                      >
                      {currentStep === steps.length - 1 ? "Create" : "Next"}
                    </Button>
                        </div>
                  </form>
                    </Form> 
                  </div>

                            <div className="self-end w-full text-right">
                               <Link href="/user">
                                  <div className="text-sm">← Back</div> {/* Adjust text size and other styles as needed */}
                              </Link>
                           </div>
                      </div>
               



               {/* SECOND HALF PAGE */}
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