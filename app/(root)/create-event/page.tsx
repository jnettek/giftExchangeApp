
import Introduction from "@/components/Introduction";
import { fetchUser } from "@/lib/actions/user.action";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default async function EventDetail() {

    const userEvent = await fetchUser();


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
                    🎉 Gift Events
                    </h1>
                    <div className="mt-6 flex w-full max-w-4xl flex-wrap items-stretch justify-around sm:w-full">
                    <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 bg-[#fff7e1]">   
                    <div className="flex p-2 mr-4 mt-2 mb-6 text-black">
                        <h1 className="text-black text-2xl">Events</h1>
                            </div>
                
                <div className='pt-2'>        
                    {userEvent?.length === 0 ? (
                        <p className='no-result'>No Events found</p>
                        ) : (
                            userEvent?.map((detail) => (
                                <div key={detail._id} className='w-full border p-2 rounded-lg shadow-md bg-white mb-2'>
                                <h2 className="text-black text-xl text-left">{detail.eventName}</h2>
                               

                                <Link href={`/event/${detail._id}`}
                                    className="text-black hover:text-blue-800 text-sm">View Details
                                 </Link>
                            </div>
                        ))
                        )}
                    </div>
                        <div className="self-end w-full text-right">
                               <Link href="/user">
                                  <div className="text-sm">← Back</div> {/* Adjust text size and other styles as needed */}
                              </Link>
                           </div>
            </div>
                        <div className="flex flex-col w-full md:w-1/2 p-4 text-left bg-[#f4a692]">
                       <Introduction />
                          </div>
                        </div>
                </main>
            </div>
    </>
)
}