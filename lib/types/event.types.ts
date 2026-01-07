import { Participant } from './participant.types';
import { Match } from './match.types';

export interface Event {
  _id?: string;
  userId: string;
  eventName: string;
  budget: number;
  eventDate: Date | string;
  invitationMessage: string;
  participants: Participant[];
  matches?: Match[];
}

export interface CreateEventData {
  userId: string;
  eventName: string;
  budget: number;
  eventDate: Date | string;
  invitationMessage: string;
  participants: Participant[];
}
