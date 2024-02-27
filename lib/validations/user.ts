import * as z from "zod";

// const participantSchema = z.object({
//     name: z.string().min(1, 'Participant name is required'),
//     email: z.string().email('Invalid email address'),
//   });

export const userSchema = z.object({
    eventName: z.string(),
    budget: z.string().regex(/^\d+$/, "Budget must be a number"), // Assign a valid Zod type to the budget property
    eventDate: z.date(),
    invitationMessage: z.string().min(2).max(244),
    // participants: z.array(participantSchema).min(1),

});