import { defineConfig } from 'astro/config';

export default defineConfig({
  // Disable dev toolbar
  devToolbar: {
    enabled: false
  },
  
  // Enable strict mode for better error detection
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
