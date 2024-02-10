import { UserButton } from "@clerk/nextjs";
import React from 'react';
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon, GiftIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';


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

            <Link href="/" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
            <div className="flex items-end flex-grow">
              <HeartIcon className="w-6 h-6 mr-2" />
              My WishList
              </div>
               <span>→</span>
            </Link>

              <Link href="/" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
              <div className="flex items-end flex-grow">
                <GiftIcon className="w-6 h-6 mr-2" />
                Start Gift Exchange
                </div>
                 <span>→</span>
              </Link>

                  <Link href="/" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
                    <div className="flex items-end flex-grow">
                      <ShoppingBagIcon className="w-6 h-6 mr-2" />
                        Shopping
                      </div>
                     <span>→</span>
                  </Link>

                  <Link href="/" className="flex items-center justify-between p-4 mr-4 mt-2 mb-6 text-black bg-[#f4a692] rounded-full w-72 h-12">
                      <div className="flex items-center flex-grow">
                      <EnvelopeOpenIcon className="w-6 h-6 mr-2" />
                      Request a WishList
                      </div>
                        <span>→</span>
                    </Link>


                      </div>
               
               <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-[#f4a692]">
                   <div className="flex p-2 mr-4 mt-2 mb-6 text-black">
                    {/* <GiftTopIcon className="w-8 h-8 mr-3"/> */}
                      <div className="flex flex-col justify-center">
                        <h1 className="text-black text-2xl">Set up gift exchange details</h1>
                          <p className="text-sm font-light">
                          Create memorable moments with ease! Our platform allows you to effortlessly set up a gift exchange for any occasion.
                          </p>
                      </div>
                    </div>
                  
                        <div className="flex p-2 mr-4 mt-2 mb-6 text-black">
                        {/* <ArrowPathIcon className="w-8 h-8 mr-3"/> */}
                          <div className="flex flex-col justify-center">
                              <h1 className="text-black text-2xl">Participating in a Gift Exchange</h1>
                                <p className="text-sm font-light">
                                Join the fun in a unique and exciting way! When you're invited to a gift exchange, simply register here to participate.
                                </p>
                              </div>
                        </div>

                                <div className="flex p-2 mr-4 mt-2 mb-6 text-black">
                                {/* <HeartIcon className="w-6 h-6 mr-2" /> */}
                                  <div className="flex flex-col justify-center">
                                      <h1 className="text-black text-2xl">Wishlists</h1>
                                        <p className="text-sm font-light">
                                        Make gifting more personal and less of a guesswork. With our wishlist feature, you can list your preferences and desired items, making it easier for your secret gifter to pick the perfect present.
                                        </p>
                                    </div>
                                </div> 
                          </div>
                        </div>
                      </main>
                      </div>
      );
}

export default UserPage;