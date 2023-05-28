import { initQueryClient } from "@ts-rest/solid-query";
import { apiContracts } from "contracts";
import { env } from "~/env";

export const queryClient = initQueryClient(apiContracts, {
	baseUrl: env.VITE_API_BASE_URL,
	baseHeaders: {},
	jsonQuery: true,
});
