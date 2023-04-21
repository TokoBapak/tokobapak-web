import { z } from "zod";
import { AppRoute, initContract } from "@ts-rest/core";
import {
  Authentication,
  LoginRequest,
  LoginResponse, LogoutRequest, RefreshRequest
} from "../stub/authentication/authentication";

const c = initContract();

const loginResponse = z.object({
  tokenSetReply: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresAt: z.coerce.number()
  }).optional()

}) satisfies z.ZodType<LoginResponse>;

const loginErrorResponse = z.object({
  loginErrorResponse: z.object({
    descriptors: z.array(z.object({
      message: z.string(),
      field: z.string(),
      rule: z.string()
    })),
    attemptsRemaining: z.coerce.number()
  })
}) satisfies z.ZodType<LoginResponse>;

export const authenticationContract = c.router({
  login: {
    method: "POST",
    path: "/login",
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8)
    }) satisfies z.ZodType<LoginRequest>,
    responses: {
      200: loginResponse,
      400: loginErrorResponse
    }
  },
  logout: {
    method: "POST",
    path: "/logout",
    body: z.object({
      accessToken: z.string(),
      refreshToken: z.string()
    }) satisfies z.ZodType<LogoutRequest>,
    responses: {
      200: z.object({})
    }
  },
  refresh: {
    method: "POST",
    path: "/refresh",
    body: z.object({
      refreshToken: z.string()
    }) satisfies z.ZodType<RefreshRequest>,
    responses: {
      200: loginResponse,
      400: loginErrorResponse
    }
  }
} satisfies Record<keyof Authentication, AppRoute>);