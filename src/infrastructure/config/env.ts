/**
 * Environment/config access layer.
 *
 * Keep reads from `process.env` (or Vite `import.meta.env`) centralised to avoid
 * configuration sprawl.
 */
export interface Env {
  apiBaseUrl: string;
  nodeEnv: string;
}

export const env: Env = {
  apiBaseUrl: "",
  nodeEnv: "development",
};

