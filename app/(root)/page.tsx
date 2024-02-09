import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream-light">
      <Head>
        <title>Party Gift Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          🎉 Party Gift Exchange
        </h1>

       

        <div className="mt-6 flex w-full max-w-4xl flex-wrap items-stretch justify-around sm:w-full">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 bg-[#f4a692]">
            <Image src="/assets/landing_image.png" alt="Gift Exchange" width={384} height={384} className="rounded-xl" />
            <p className="mt-6 text-lg flex-grow">
              Say goodbye to the hassle of coordinating gift exchanges.
            </p>
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
              <Link href="/sign-in" className="mb-2 w-full rounded-lg bg-[#f4a692] hover:bg-[#db9583] px-6 py-3 font-bold text-black text-center focus:outline-none">
                Sign In
              </Link>
              {/* <button  className="mb-2 w-full rounded-lg bg-[#f4a692] hover:bg-[#db9583] px-6 py-3 font-bold text-black focus:outline-none">
                Register
              </button> */}
               <Link href="/sign-up" className="mb-2 w-full rounded-lg bg-[#f4a692] hover:bg-[#db9583] px-6 py-3 font-bold text-black text-center focus:outline-none">
                Register
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
