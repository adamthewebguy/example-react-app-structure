import { posthog } from "./providers/posthog";
import { mixpanel } from "./providers/mixpanel";

export interface Analytics {
  track(event: string, properties?: Record<string, unknown>): void;
}

/**
 * Analytics adapter.
 *
 * Wire multiple vendors (or none) behind one API.
 */
export const analytics: Analytics = {
  track(event, properties) {
    posthog.capture(event, properties);
    mixpanel.track(event, properties);
  },
};

