import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      'packages/*',
      {
        test: {
          name: 'integration',
          dir: './integration',
          globals: true,
        },
      },
    ],
  },
});
