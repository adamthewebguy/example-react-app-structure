import type { HttpClient, HttpRequestOptions } from "./types";
import { getSession } from "../../integrations/supabase/supabaseAuth"; // Even when using Supabase directly, we still want a single entry point - this file!


const baseUrl = "";

/**
 * This is the “ambient auth” trick:
 * - user identity is injected once
 * - features don’t pass userId around
 * 
 */
export async function withUserContext<T>(
  fn: (userId: string) => Promise<T>
): Promise<T> {
  const session = await getSession();
  if (!session) throw new Error("Not authenticated");

  return fn(session.user.id);
}

async function request<T>(
  method: "GET" | "POST",
  path: string,
  body: unknown,
  options?: HttpRequestOptions,
): Promise<T> {
  // NOTE: This is a minimal stub. Replace with fetch/axios + real error handling.
  // We intentionally do not hit the network here; this is just structure.
  const url = `${baseUrl}${path}`;
  console.log("HTTP request (stub)", { method, url, body, options });

  // Return a fake payload shaped by the caller; callers should replace this.
  return Promise.resolve({} as T);
}

export const httpClient: HttpClient = {
  async get<T>(path, options) {
    return request<T>("GET", path, undefined, options);
  },
  async post<T>(path, body, options) {
    return request<T>("POST", path, body, options);
  },
};

