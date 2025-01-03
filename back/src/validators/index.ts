import { z } from "zod";

export const signUpValidator = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().email().trim().min(1),
  password: z.string().trim().min(4),
});

export const signInValidator = z.object({
  email: z.string().email().trim().min(1),
  password: z.string().trim().min(4),
});

export const messageValidator = z.object({
  senderId: z.string().trim().min(1),
  receiverId: z.string().trim().min(1),
  content: z.string().trim().min(1),
});
