import { z } from 'zod';

export const userSchema = z.object({
  eventName: z.string(),
  budget: z.string().regex(/^\d+$/, "Budget must be a number"),
  eventDate: z.date(),
  invitationMessage: z.string().min(2).max(244),
  participants: z.array(z.object({
    name: z.string().min(1, 'Participant name is required'),
    email: z.string().email('Invalid email address'),
  })),
});
