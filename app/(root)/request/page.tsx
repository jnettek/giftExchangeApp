import Introduction from "@/components/Introduction";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function RequestPage() {


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
   <h1 className="font-bold">COMING SOON ...</h1>
    <p className="text-left pt-4">While we're putting the finishing sparkles on this page, the magic of creating your next gift exchange is ready and waiting!</p>
    <div className="self-end w-full text-right pt-6">
              </div>
                  <Link href="/user">
                     <div className="text-sm">← Back</div> {/* Adjust text size and other styles as needed */}
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
