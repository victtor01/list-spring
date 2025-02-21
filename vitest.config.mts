import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'
 
export default defineConfig({

  plugins: [tsconfigPaths(), react()],
  test: {
			globals: true,
			setupFiles:["./vitest.setup.ts"],
			environment: 'jsdom',
  },
})