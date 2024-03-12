import { fetchUser } from "@/lib/actions/user.action";
// import { currentUser } from "@clerk/nextjs";




export default async function EventPage() {
    
    const userEvent = await fetchUser();
    // const user = await currentUser();
    // console.log(result);    

    return (
        <div>
            <h1>Event Page</h1>
            <ul>
            {userEvent.map(user => (
            <li key={user._id}>{user.eventName}</li>
        ))}
      </ul>

      <h1>Date</h1>
      <ul>
      {userEvent.map(user => (
       <li key={user._id}>{user.eventDate.toLocaleDateString()}</li>
  ))}
</ul>
 
        </div>
          
    );
};

