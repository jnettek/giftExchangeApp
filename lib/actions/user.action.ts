"use server"

import { Match } from "@/components/EventDetail";
import User from "../models/user.model";
import { connectToDB } from "../validations/mongoose";

interface UserData {
  _id?: string;
  userId: string;
  eventName: string;
  budget: number; // Assuming budget is a numerical value
  eventDate: Date; // or string if you are using ISO date strings
  invitationMessage: string;
  participants: Participant[];
}

interface Participant {
  _id?: string;
  name: string;
  email: string;
}




export async function createUser(userData: UserData): Promise<void> {
  await connectToDB();

  await User.create({
    userId: userData.userId,
    eventName: userData.eventName,
    budget: userData.budget,
    eventDate: userData.eventDate,
    invitationMessage: userData.invitationMessage,
    participants: userData.participants,
  })
}


export async function fetchUser() {
  await connectToDB();
  try {
    const users = await User.find({});
    return users;
  }
  catch (error) {
    console.error('Error fetching user data', error);
  }
}

// /**
//  * Fetches a user by their ID.
//  * @param {string} userId - The ID of the user to fetch.
//  * @returns The user object if found, or null if not found.
//  */
export async function fetchEventById(Id: string) {
  await connectToDB(); // Ensure database connection

  try {
    const event = await User.findById(Id);
    if (!event) {
      throw new Error('User not found');
    }
    return event;
  } catch (err) {
    console.error("Error while fetching user by ID:", err);
    throw err; 
  }
}


///// shuffle function


//shuffle becomes a generic function that can shuffle arrays of any type, and the type of array will be the same as the items it contains.

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function drawParticipantsFunction(participants: Participant[]): Match[] {
  let shuffled = shuffle(participants);

  // Map through shuffled array to create matches using participant _id
  let matches: Match[] = shuffled.map((participant, index) => ({
    params: {
      id: participant._id || 'fallback-id', // Assuming each participant has a unique '_id'
    },
    giver: participant.name,
    receiver: shuffled[(index + 1) % shuffled.length].name, // Wrap around to the first at the end
  }));


  return matches;
}


// Assuming connectToDB, User model, shuffle, and drawParticipantsFunction are properly imported

export async function drawParticipants(eventId: string) {
  await connectToDB(); // Ensure database connection

  let eventDetails;
  try {
    eventDetails = await User.findById(eventId).exec();
    if (!eventDetails) {
      throw new Error('Event not found');
    }
  } catch (error) {
    console.error('Error fetching the event:', error);
    throw new Error('Failed to fetch event');
  }

  const matches = drawParticipantsFunction(eventDetails.participants);
  


  // Assuming you want to save the matches to the event or handle them somehow
  try {
    // Example: Saving matches to the event (adjust according to your schema)
    eventDetails.matches = matches;
    await eventDetails.save();
  } catch (error) {
    console.error('Error saving the matches:', error);
    throw new Error('Failed to save matches');
  }

  // Optionally, return the matches or handle as needed
  return matches;
}
