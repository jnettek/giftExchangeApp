import EventMatch from "@/components/EventDetail";
import WishListAd from "@/components/WishListAd";
import { drawParticipants } from "@/lib/actions/user.action";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
    if (!params) return null;
    const matches = await drawParticipants(params.id);

    return (
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
         <h1 className="text-black text-2xl">Let's Connect the Dots!</h1>
         </div>
         <div className="self-start text-left w-full p-4 bg-white rounded-lg">
         <p className="text-sm font-light text-left pb-4"> Your mystery pair awaits—hover to unveil! But shh, let's keep the surprises under wraps for everyone else. 🙈</p>
        
    <EventMatch matches={matches} />
</div>

            <div className="self-end w-full text-right pt-6">
                  <Link href="/create-event">
                     <div className="text-sm">← Back</div> {/* Adjust text size and other styles as needed */}
                 </Link>
              </div>
             </div>
    
      
    
    
    
      {/* SECOND HALF PAGE */}
               <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-[#f4a692]">
                <WishListAd />
                 </div>
               </div>
             </main>
       </div>
    
)};

export default page;

