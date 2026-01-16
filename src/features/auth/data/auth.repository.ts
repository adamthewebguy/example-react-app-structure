import type { AuthCredentials, AuthSession } from "../model/auth.types";
import { postLogin } from "./auth.api";

export interface AuthRepository {
  login(credentials: AuthCredentials): Promise<AuthSession>;
}

/**
 * Auth data access boundary (anti-corruption layer).
 *
 * Keep this stable even if the API shape changes.
 */
export const authRepository: AuthRepository = {
  async login(credentials) {
    return postLogin(credentials);
  },
};

