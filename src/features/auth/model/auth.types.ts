export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
}

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
}

export interface AuthState {
  status: "anonymous" | "authenticated" | "loading";
  session: AuthSession | null;
}

