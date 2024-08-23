import { z } from 'zod';


export const usernameValidation = z
    .string()
    .min(3, "Username atleast 3 characters")
    .max(20, "Username maximum limit 21 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username can't contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid E-mail Address"}),
    password: z.string().min(6, {message: "Password must be 6 characters"})
})