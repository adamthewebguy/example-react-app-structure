/**
 * Firebase client initialisation.
 *
 * Keep vendor SDK wiring in `integrations/`.
 */
export interface FirebaseClient {
  logEvent(name: string, properties?: Record<string, unknown>): void;
}

export const firebaseClient: FirebaseClient = {
  logEvent(name, properties) {
    console.log("Firebase event (stub)", { name, properties });
  },
};

