import { initQueryClient } from "@ts-rest/solid-query";
import { apiContracts } from "contracts";
import { env } from "~/env";

export const queryClient = initQueryClient(apiContracts, {
  // TODO: use zod to validate environment variables
  baseUrl: env.API_BASE_URL,
  baseHeaders: {},
  jsonQuery: true
});