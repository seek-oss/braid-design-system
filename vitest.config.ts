import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      'packages/*',
      'storybook',
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
