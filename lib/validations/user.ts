import * as z from "zod";

export const userSchema = z.object({
    eventName: z.string(),
    eventDate: z.date(),
    budget: z.string(), // Assign a valid Zod type to the budget property
    invitationMessage: z.string().min(2).max(244),
});