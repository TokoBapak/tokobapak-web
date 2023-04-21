import { z } from "zod";

// any invalid env will get validated by this schema
const envSchema = z.object({
  VITE_API_BASE_URL: z.string(),
  BASE_URL: z.string(),
  MODE: z.string(),
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean()
});

export const env = envSchema.parse(import.meta.env);