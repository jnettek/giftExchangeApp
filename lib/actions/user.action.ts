"use server"
import { User } from "../models/user.model";
import { connectToDB } from "../validations/mongoose";

export async function createUser(): Promise<void> {
  await connectToDB();

  await User.findOneAndUpdate()
}