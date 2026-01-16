export interface PosthogClient {
  capture(event: string, properties?: Record<string, unknown>): void;
}

export const posthog: PosthogClient = {
  capture(event, properties) {
    console.log("PostHog capture (stub)", { event, properties });
  },
};

