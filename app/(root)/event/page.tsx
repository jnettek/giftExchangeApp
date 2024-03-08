
const eventPage = () => {
    // function drawNames(participants) {
    //     let attempts = 0;
    //     while (true) { // In case we need to restart the drawing process
    //       let remainingParticipants = [...participants];
    //       let matches = [];
    //       let isSuccessfulDraw = true;
      
    //       while (remainingParticipants.length > 0) {
    //         const giverIndex = Math.floor(Math.random() * remainingParticipants.length);
    //         const giver = remainingParticipants[giverIndex];
    //         remainingParticipants.splice(giverIndex, 1); // Remove giver from pool
      
    //         let receiverIndex = Math.floor(Math.random() * remainingParticipants.length);
    //         if (remainingParticipants[receiverIndex] === giver) {
    //           // This condition mostly matters if we're on the last participant
    //           // and they're the only one left, hence matching with themselves
    //           isSuccessfulDraw = false;
    //           break;
    //         }
    //         const receiver = remainingParticipants.splice(receiverIndex, 1)[0]; // Remove receiver from pool and get the first item
      
    //         matches.push({ giver, receiver });
    //       }
      
    //       if (isSuccessfulDraw) {
    //         return matches;
    //       }
      
    //       attempts += 1;
    //       if (attempts > 100) { // Prevent infinite loop
    //         throw new Error("Failed to draw names after 100 attempts.");
    //       }
    //     }
    //   }
      
    //   // Example usage
    //   const participants = ["Alice", "Bob", "Charlie", "Diana", "Evan"];
    //   const matches = drawNames(participants);
    //   console.log(matches);
      
    return (
        <div>
            <h1>Shopping Page</h1>
        </div>
    )
}

export default eventPage;
