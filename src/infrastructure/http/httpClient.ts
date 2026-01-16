import type { HttpClient, HttpRequestOptions } from "./types";

const baseUrl = "";

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

