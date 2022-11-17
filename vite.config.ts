import { config } from 'dotenv';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// Import .env variables.
config();

export default defineConfig({
  envPrefix: "CL_",
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
