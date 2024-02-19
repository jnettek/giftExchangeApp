"use client"

import { UserButton } from "@clerk/clerk-react";
import Link from "next/link";


const wishlistPage = () => {
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream-light">
             <header className="w-full">
                        <div className="flex justify-end p-4">
                        <UserButton afterSignOutUrl="/" />
                        </div>
                    </header>
  
        <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          🎁 Wish List
          </h1>
          
         
  
          <div className="mt-6 flex w-full max-w-4xl flex-wrap items-stretch justify-around sm:w-full">
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 bg-[#f4a692]">
              <p className="mt-6 text-lg flex-grow">
                Say goodbye to the hassle of coordinating gift exchanges.
              </p>
              <div className="self-end w-full text-right">
                        <Link href="/user">
                          <p className="text-sm">← Back</p> {/* Adjust text size and other styles as needed */}
                        </Link>
                      </div>
            </div>
  
            <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-[#fff7e1]">
              <div className="justify-center flex-grow pt-8">
                 <p className="text-xl md:text-2xl pb-6">
                   Organize Gift Exchanges with Ease  </p>
                <div className="flex items-center my-8">
                  <span className="rounded-full bg-[#f4a692] px-3 py-1 text-sm font-semibold text-black mr-2">1</span>
                  Set up gift exchange details
                </div>
                <div className="flex items-center my-8">
                  <span className="rounded-full bg-[#f4a692] px-3 py-1 text-sm font-semibold text-black mr-2">2</span>
                  Add names
                </div>
                <div className="flex items-center my-8">
                  <span className="rounded-full bg-[#f4a692] px-3 py-1 text-sm font-semibold text-black mr-2">3</span>
                  Create your wishlist
                </div>
                <div className="flex items-center my-8">
                  <span className="rounded-full bg-[#f4a692] px-3 py-1 text-sm font-semibold text-black mr-2">4</span>
                  Send invitations
                </div>
              </div>
              <div className="mt-6 flex flex-row justify-center gap-4">
               
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}

export default wishlistPage;
