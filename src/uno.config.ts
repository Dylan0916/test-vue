import { defineConfig, presetWind3, presetAttributify, transformerVariantGroup, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: ['src/**/*.{js,ts,vue}'],
      // exclude: ['node_modules', '.git', '.next'],
    },
  },
  presets: [presetWind3(), presetAttributify()],
  transformers: [
    transformerVariantGroup(), // 支持 variant groups（例如 hover:bg-red-500）
    transformerDirectives(), // 支持 @apply 等指令
  ],
  rules: [
    ['overflow-y-overlay', { 'overflow-y': 'auto' }],
    // ref: https://unocss.dev/config/rules#special-symbols
    [
      /overflow-y-overlay$/,
      (_matchAry, { symbols }) => ({
        [symbols.parent]: '@supports (overflow-y: overlay)',
        'overflow-y': 'overlay',
      }),
    ],
  ],
  safelist: [],
  theme: {
    breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      desktop: '1024px',
    },
    colors: Object.freeze({ orange50: '#ff5537', teal40: '#A7D1C3', teal70: '#4D947C', gray60: '#a7a7a9', gray80: '#747476' }),
    fontSize: {
      small: '13px',
      normal: '15px',
      title: '17px',
    },
  },
})
