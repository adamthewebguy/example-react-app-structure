/**
 * Token provider abstraction.
 *
 * This is infrastructure (cross-cutting), so it should not import feature code.
 */
export interface TokenProvider {
  getAccessToken(): string | null;
  setAccessToken(token: string | null): void;
}

let token: string | null = null;

export const tokenProvider: TokenProvider = {
  getAccessToken() {
    return token;
  },
  setAccessToken(next) {
    token = next;
  },
};

