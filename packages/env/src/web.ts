import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  client: {
    // Add client-side environment variables here
  },
  runtimeEnv: {
    // Add runtime environment variables here
  },
  emptyStringAsUndefined: true,
});
