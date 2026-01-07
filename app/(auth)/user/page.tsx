import { UserButton, currentUser } from "@clerk/nextjs";
import React from 'react';
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon, GiftIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import Introduction from "@/components/event/Introduction";




async function UserPage() {
  
  try {
    const user = await currentUser();
    console.log("User data:", user); // Add logging for debugging
    
    //// CHECK #1: If user is null/undefined, we RETURN EARLY and EXIT the function
    if (!user) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream-light">
          <div>
            Please <Link href="/sign-in">sign in</Link> to continue.
          </div>
        </div>
      );
    } //Function ENDS here if no user - code below NEVER runs

    return (

        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream-light">       
                <header className="w-full">
                        <div className="flex justify-end p-4">
                        <UserButton afterSignOutUrl="/" />
                        </div>
                    </header>

             <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
               🎉 Welcome
             </h1>

             
                        <div className="mt-6 flex w-full max-w-4xl flex-wrap items-stretch justify-around sm:w-full">
                        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 bg-cream-light">

                       <Link href="/exchange" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-coral-primary rounded-full w-72 h-12">
                       <div className="flex items-end flex-grow">
                         <GiftIcon className="w-6 h-6 mr-2" />
                         Start Gift Exchange
                         </div>
                          <span>→</span>
                       </Link>       
         
                         <Link href="/create-event" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-coral-primary rounded-full w-72 h-12">
                             <div className="flex items-end flex-grow">
                               <ShoppingBagIcon className="w-6 h-6 mr-2" />
                                 Events
                               </div>
                              <span>→</span>
                           </Link>   
         
                           <Link href="/wishlist" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-coral-primary rounded-full w-72 h-12">
                             <div className="flex items-end flex-grow">
                                 <HeartIcon className="w-6 h-6 mr-2" />
                                     My WishList
                                 </div>
                               <span>→</span>
                           </Link>
         
                         
         
                           <Link href="/request" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-coral-primary rounded-full w-72 h-12">
                               <div className="flex items-center flex-grow">
                               <EnvelopeOpenIcon className="w-6 h-6 mr-2" />
                               Request a WishList
                               </div>
                                 <span>→</span>
                             </Link>
         
         
                               </div>
                        
                               <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-coral-primary">
                                 <Introduction/>
                                   </div>
                                 </div>
                      </main>
                   </div>
      );
} catch (error) {  // ← ADD THIS: Catches any errors from the try block
    console.error("Error in UserPage:", error);
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream-light">
        <div>An error occurred. Please try again.</div>
      </div>
    );
  } 
}

export default UserPage;