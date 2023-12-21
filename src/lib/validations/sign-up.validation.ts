import * as z from 'zod';

export const signUpValidationSchema = z.object({
  userName: z.string().min(2, {
    message: "User name must be at latest 2 characters.",
  }),
  name: z.string().min(2, {
    message: "The name must be at latest 2 characters.",
  }),
  email: z.string().email("This email invalid"),
  password: z.string().min(8, {
    message: "Password must be at latest 2 characters.",
  }),
});
