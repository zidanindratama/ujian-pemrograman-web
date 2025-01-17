import { z } from "zod";

export const dreamSchema = z.object({
  username: z
    .string({
      required_error: "Username cannot be empty",
      invalid_type_error: "Username cannot be empty",
    })
    .min(1, { message: "Username cannot be empty" })
    .max(50, { message: "Username must be at most 50 characters long" }),
  title: z
    .string({
      required_error: "Title cannot be empty",
      invalid_type_error: "Title cannot be empty",
    })
    .min(1, { message: "Title cannot be empty" })
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(50, { message: "Title must be at most 50 characters long" }),
  description: z
    .string({
      required_error: "Description cannot be empty",
      invalid_type_error: "Description must be a valid string",
    })
    .min(1, { message: "Description cannot be empty" })
    .min(5, { message: "Description must be at least 5 characters long" })
    .max(150, { message: "Description must be at most 150 characters long" }),
  image: z.any(),
});

export type TDreamForm = z.infer<typeof dreamSchema>;
