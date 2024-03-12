"use server"

import User from "../models/user.model";
import { connectToDB } from "../validations/mongoose";

interface UserData {
  // _id?: mongoose.Schema.Types.ObjectId,
  eventName: string;
  budget: number; // Assuming budget is a numerical value
  eventDate: Date; // or string if you are using ISO date strings
  invitationMessage: string;
  participants: Participant[];
}

interface Participant {
  name: string;
  email: string;
}

export async function createUser(userData: UserData): Promise<void> {
  await connectToDB();

  await User.create({
    eventName: userData.eventName,
    budget: userData.budget,
    eventDate: userData.eventDate,
    invitationMessage: userData.invitationMessage,
    participants: userData.participants,
  })
}


export async function fetchUser() {
  try {
    await connectToDB();
    const users = await User.find({});
    return users;
  }
  catch (error) {
    console.error('Error fetching user data', error);
  }
}