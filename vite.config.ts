import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

import { resolve } from 'node:path'

import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'

export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ['src/components/'],
    }),
    react(),
    tsConfigPaths(),
    libInjectCss(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'p-lib',
      formats: ['es', 'umd'],
      fileName: (format) => `p-lib.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
}))
