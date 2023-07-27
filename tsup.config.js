import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'qrcode-with-react',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: true
})
