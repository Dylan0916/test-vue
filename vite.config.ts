import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import WindiCSS from 'vite-plugin-windicss'
import { CompilerOptions } from 'vue/compiler-sfc'
import removeAttr from 'remove-attr'
import { resolve } from 'path'

// ref: https://stackoverflow.com/a/79312963/9636125
function removeElementAttrs(node: Parameters<CompilerOptions['nodeTransforms'][number]>[0]) {
  const isElementNode = node.type === 1

  if (!isElementNode) {
    return
  }

  const attrsToRemove = ['data-testid']

  node.props = node.props.filter(prop => {
    const isAttr = prop.type === 6
    const isDynamicAttr = prop.type === 7

    if (isAttr) {
      return !attrsToRemove.includes(prop.name)
    }
    if (isDynamicAttr && prop.rawName) {
      return !attrsToRemove.some(attr => prop.rawName.indexOf(attr) !== -1)
    }

    return true
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: process.env.NODE_ENV === 'production' ? [removeElementAttrs] : [],
        },
      },
    }),
    UnoCSS({
      configFile: resolve(__dirname, 'src/uno.config.ts'),
    }),
    // WindiCSS(),
    // removeAttr({
    //   extensions: ['vue'],
    //   attributes: ['data-testid'],
    // }),
  ],
  server: {
    https: {
      key: './https/localhost-key.pem',
      cert: './https/localhost.pem',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5678', // 这里是接口地址
        changeOrigin: true,
        cookiePathRewrite: {
          '*': '/', // 将所有 `Domain` 重写为空字符串，即使用请求域
        },
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },

  build: {
    sourcemap: true,
  },
})
