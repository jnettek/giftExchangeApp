import { UserButton } from "@clerk/nextjs";
import React from 'react';
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon, GiftIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import Introduction from "@/components/Introduction";


const UserPage: React.FC = () => {


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
               <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 bg-[#fff7e1]">      

              <Link href="/exchange" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
              <div className="flex items-end flex-grow">
                <GiftIcon className="w-6 h-6 mr-2" />
                Start Gift Exchange
                </div>
                 <span>→</span>
              </Link>       

                <Link href="/create-event" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
                    <div className="flex items-end flex-grow">
                      <ShoppingBagIcon className="w-6 h-6 mr-2" />
                        Events
                      </div>
                     <span>→</span>
                  </Link>   

                  <Link href="/wishlist" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
                    <div className="flex items-end flex-grow">
                        <HeartIcon className="w-6 h-6 mr-2" />
                            My WishList
                        </div>
                      <span>→</span>
                  </Link>

                

                  <Link href="/request" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
                      <div className="flex items-center flex-grow">
                      <EnvelopeOpenIcon className="w-6 h-6 mr-2" />
                      Request a WishList
                      </div>
                        <span>→</span>
                    </Link>


                      </div>
               
                      <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-[#f4a692]">
                        <Introduction/>
                          </div>
                        </div>
                      </main>
                   </div>
      );
}

export default UserPage;