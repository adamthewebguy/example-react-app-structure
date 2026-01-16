export interface HttpRequestOptions {
  headers?: Record<string, string>;
}

export interface HttpClient {
  get<T>(path: string, options?: HttpRequestOptions): Promise<T>;
  post<T>(path: string, body: unknown, options?: HttpRequestOptions): Promise<T>;
}

