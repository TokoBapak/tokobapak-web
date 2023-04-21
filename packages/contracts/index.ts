import { initContract } from "@ts-rest/core";
import { authenticationContract as authentication } from "./api/authentication";

const c = initContract();

export const apiContracts = c.router({
  authentication
});