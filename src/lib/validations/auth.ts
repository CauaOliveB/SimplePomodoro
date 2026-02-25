import { z } from "zod";

export const authSchema = z.object({
    email: z.
    string()
    .email()
    .nonempty()
    .min(3, "Email must be at least 3 characters long")
})