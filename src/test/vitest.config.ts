import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watch: false,
    globals: true,
    coverage: {
      include: ['src/**'],
      thresholds: {
        statements: 70,
        branches: 60, // branches 通常最低，因為難測
        functions: 75,
        lines: 75,
      },
    },
  },
})
