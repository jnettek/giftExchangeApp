import Link from 'next/link';
import React from 'react';

interface Participant {
  name: string;
  email: string;
}

interface Props {
  id: string;
  eventName: string;
  budget: number;
  eventDate: string | Date; // Accept both Date object or ISO date string
  invitationMessage: string;
  participants: Participant[];
}

const DetailCard: React.FC<Props> = ({ 
  id, 
  eventName, 
  budget, 
  eventDate, 
  invitationMessage, 
  participants 
}) => {
  // Format date
  const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-full bg-[#f4a692] rounded-lg p-4">
    <h1 className="text-left text-xl font-semibold">{eventName}</h1>
    <p className="text-left font-light">Budget: ${budget}</p>
    <p className="text-left font-light">Date: {formattedDate}</p>
    <p className="text-left font-light">Invitation Message: {invitationMessage}</p>
    <h2 className="text-left text-lg font-semibold mt-4">Participants</h2>
    <ul className="list-none">
      {participants.map((participant, index) => (
        <li key={index} className="text-left font-light">{participant.name} - {participant.email}</li>
      ))}
    </ul>
  </div>
  
  );
};

export default DetailCard;
