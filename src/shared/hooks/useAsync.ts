import { useCallback, useState } from "react";

export interface AsyncState<T> {
  data: T | null;
  error: unknown;
  isLoading: boolean;
}

/**
 * Generic async helper hook.
 *
 * Keep shared hooks here when they are not domain-specific.
 */
export function useAsync<TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => Promise<TResult>,
) {
  const [state, setState] = useState<AsyncState<TResult>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const run = useCallback(
    async (...args: TArgs) => {
      setState({ data: null, error: null, isLoading: true });
      try {
        const data = await fn(...args);
        setState({ data, error: null, isLoading: false });
        return data;
      } catch (error) {
        setState({ data: null, error, isLoading: false });
        throw error;
      }
    },
    [fn],
  );

  return { ...state, run };
}

