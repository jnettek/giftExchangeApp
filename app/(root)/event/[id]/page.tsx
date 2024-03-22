// In pages/event/[id]/page.tsx
import { fetchEventById } from "@/lib/actions/user.action";
import DetailCard from "@/components/DetailCard";
// import { currentUser } from "@clerk/nextjs/server";
import WishListAd from "@/components/WishListAd";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

// getting params from the URL


const EventDetailPage = async ({params}: {params: {id: string}}) => {
  if (!params) return null;
  // const user = await currentUser();
  // if(!user) return null;

  const event = await fetchEventById(params.id);
  // console.log(event);


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
     <h1 className="text-black text-2xl">Inside Scoop 💖🎈</h1>
     </div>

    <div className="self-start text-left w-full p-4">
    <DetailCard
          key={event._id}
          id={event._id}
          eventName={event.eventName}
          budget={event.budget}
          eventDate={event.eventDate}
          invitationMessage={event.invitationMessage}
          participants={event.participants}
        />
        <div className="flex justify-center pt-4">
     <Link href={`/draw/${event._id}`}
      className="rounded-lg bg-white px-6 py-2 font-bold text-black text-center focus:outline-none">
        Draw Now
        </Link>
         </div>
     </div>
               <div className="self-end w-full text-right">
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

  );
}

export default EventDetailPage;
