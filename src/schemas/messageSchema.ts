import { z } from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "content atleast 12 characters"})
    .max(300, {message: "content can't be more than 300 characters"})
})