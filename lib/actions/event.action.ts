"use server"

import { Match, CreateEventData, Participant } from "@/lib/types";
import Event from "../models/event.model";
import { connectToDB } from "../validations/mongoose";

export async function createEvent(eventData: CreateEventData): Promise<void> {
  await connectToDB();

  await Event.create({
    userId: eventData.userId,
    eventName: eventData.eventName,
    budget: eventData.budget,
    eventDate: eventData.eventDate,
    invitationMessage: eventData.invitationMessage,
    participants: eventData.participants,
  })
}

export async function fetchEvents() {
  await connectToDB();
  try {
    const events = await Event.find({});
    return events;
  }
  catch (error) {
    console.error('Error fetching event data', error);
  }
}

export async function fetchEventById(Id: string) {
  await connectToDB();

  try {
    const event = await Event.findById(Id);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  } catch (err) {
    console.error("Error while fetching event by ID:", err);
    throw err;
  }
}

// Shuffle function
function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function drawParticipantsFunction(participants: Participant[]): Match[] {
  let shuffled = shuffle(participants);

  let matches: Match[] = shuffled.map((participant, index) => ({
    params: {
      id: participant._id || 'fallback-id',
    },
    giver: participant.name,
    receiver: shuffled[(index + 1) % shuffled.length].name,
  }));

  return matches;
}

export async function drawParticipants(eventId: string) {
  await connectToDB();

  let eventDetails;
  try {
    eventDetails = await Event.findById(eventId).exec();
    if (!eventDetails) {
      throw new Error('Event not found');
    }
  } catch (error) {
    console.error('Error fetching the event:', error);
    throw new Error('Failed to fetch event');
  }

  const matches = drawParticipantsFunction(eventDetails.participants);

  try {
    eventDetails.matches = matches;
    await eventDetails.save();
  } catch (error) {
    console.error('Error saving the matches:', error);
    throw new Error('Failed to save matches');
  }

  return matches;
}
