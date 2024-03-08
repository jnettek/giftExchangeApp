"use server"

import User from "../models/user.model";
import { connectToDB } from "../validations/mongoose";


export async function createUser(userData: any): Promise<void> {
  await connectToDB();

  await User.create({
    eventName: userData.eventName,
    budget: userData.budget,
    eventDate: userData.eventDate,
    invitationMessage: userData.invitationMessage,
    participants: userData.participants,
  })
}