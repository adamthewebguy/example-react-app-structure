export interface MixpanelClient {
  track(event: string, properties?: Record<string, unknown>): void;
}

export const mixpanel: MixpanelClient = {
  track(event, properties) {
    console.log("Mixpanel track (stub)", { event, properties });
  },
};

