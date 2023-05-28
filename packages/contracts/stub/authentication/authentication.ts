/* eslint-disable */
import type { EmptyReply } from "../common/common";

export const protobufPackage = "authentication";

export enum LoginErrorState {
  /** LOGIN_ERROR_STATE_UNSPECIFIED - Null-value login error state */
  LOGIN_ERROR_STATE_UNSPECIFIED = 0,
  /** LOGIN_ERROR_STATE_INVALID_INPUT - Some fields are empty or missing */
  LOGIN_ERROR_STATE_INVALID_INPUT = 1,
  /** LOGIN_ERROR_STATE_USER_NOT_FOUND - User was not found */
  LOGIN_ERROR_STATE_USER_NOT_FOUND = 2,
  /** LOGIN_ERROR_STATE_INVALID_PASSWORD - Wrong password */
  LOGIN_ERROR_STATE_INVALID_PASSWORD = 3,
  /** LOGIN_ERROR_STATE_INVALID_REFRESH_TOKEN - Invalid (or maybe expired) refresh token */
  LOGIN_ERROR_STATE_INVALID_REFRESH_TOKEN = 4,
  UNRECOGNIZED = -1,
}

export interface TokenSetReply {
  /** Short-lived token to access resources on TokoBapak. */
  accessToken: string;
  /**
   * Long-lived (not so long-lived actually) token to
   * request a new access token.
   */
  refreshToken: string;
  /** Unix second date of the access_token's expiry. */
  expiresAt: number;
}

export interface LoginErrorResponse {
  descriptors: LoginErrorResponse_ErrorDescriptor[];
  attemptsRemaining: number;
}

export interface LoginErrorResponse_ErrorDescriptor {
  message: string;
  field: string;
  rule: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  tokenSetReply?: TokenSetReply | undefined;
  loginErrorResponse?: LoginErrorResponse | undefined;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface LogoutRequest {
  accessToken: string;
  refreshToken: string;
}

/** Authentication half-heartly implements OAuth2 specification. */
export interface Authentication {
  /**
   * The usual login mechanism, it doesn't support 2FA challenge yet
   * for the response (it can be done using oneof).
   * Right now, we're focusing on the fastest way to develop.
   */
  login(request: LoginRequest): Promise<LoginResponse>;
  /** Refresh acquires new TokenSet for expired access tokens. */
  refresh(request: RefreshRequest): Promise<LoginResponse>;
  /**
   * Sends a logout state for the user. The access and refresh token
   * will be invalidated.
   */
  logout(request: LogoutRequest): Promise<EmptyReply>;
}
