import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['text'],
      thresholds: {
        statements: 70,
        branches: 60, // branches 通常最低，因為難測
        functions: 75,
        lines: 75,
      },
    },
  },
})
