import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineProject } from 'vitest/config';

/**
 * Separating the the configs so that vitest can pick up this packages version of react rather than adding it as a dependency to the workspace root
 */
export default defineProject({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
    css: true,
  },
  plugins: [react(), vanillaExtractPlugin()],
});
