import React from 'react';

interface Match {
  params: {
    id: string;
  };
  giver: string;
  receiver: string;
}

interface Props {
  matches: Match[];
}

const EventMatch: React.FC<Props> = ({ matches }) => {
  return (
    <table className="mx-auto text-center border-collapse">
      <thead>
        <tr>
          <th className="text-left p-2">Giver</th>
          <th className="text-left p-2">Receiver</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match, index) => (
          <tr key={index} className="group">
            <td className="align-middle text-left p-2">{match.giver}</td>
            <td className="align-middle text-left p-2 relative">
              <div className="receiver-cell invisible group-hover:visible">
                {match.receiver}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventMatch;
