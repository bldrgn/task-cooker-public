import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // If you were using an alias, you might need to update it
    alias: {
      '@': 'src',
    },
    globals: true, // If you're using global test APIs like 'describe'
    environment: 'jsdom', // For testing React components
  },
});
