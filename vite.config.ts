import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

type UserConfigExport = {
  plugins: any[];
  test: {
    globals: boolean;
    environment: 'jsdom';
    setupFiles: string;
  };
};

// https://vite.dev/config/
export default defineConfig(<UserConfigExport>{
  plugins: [
    react({
      babel: {
        plugins: [['module:@preact/signals-react-transform']],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
