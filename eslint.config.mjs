import globals from 'globals'
import eslintJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import tsEslint from 'typescript-eslint'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

// global ignore ref: https://github.com/eslint/eslint/discussions/18304#discussioncomment-9069706
// libs 資料夾下的檔案理應都是 library 部署完畢的 code，所以不檢查
const globalIgnore = { ignores: ['**/src/libs/*', '/config/', '/dist/', '/test/unit/coverage/', '/src/assets/semantic-ui-calendar/', '**/*.d.ts'] }

export default tsEslint.config(
  eslintJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  eslintConfigPrettier,
  globalIgnore,
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
  },
  {
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'comma-dangle': ['error', 'only-multiline'], // 只有多行的情況可以在最後一個 prop 使用逗號
      'generator-star-spacing': 'off', // generator function 的空格規則
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // prod 不允許 debugger
      'space-before-function-paren': [
        'warn', // function 的括號前面是要有空格
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'no-prototype-builtins': 'off', // 不允許直接在 Object 上使用 prototype 的 methods
      'no-var': 'off',
      'prefer-const': 'off',
      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'vue/attribute-hyphenation': 'off', // attr 必須用連字符
      'vue/multi-word-component-names': 'off', // Vue Components 命名必須要多個單字
      'vue/valid-v-slot': [
        // v-slot 規則
        'error',
        {
          allowModifiers: true,
        },
      ],
      'vue/v-slot-style': 'off', // Vue Slot 使用規則
      'vue/no-v-html': 'off', // 不使用 v-html
      'vue/require-default-prop': 'off', // Vue Props 是否必須有 default
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: false,
          ignores: [],
        },
      ],
      'vue/block-lang': 'off',
      'vue/attributes-order': 'error',
      'vitest/no-commented-out-tests': 'off',
      'vitest/valid-title': 'off',
    },
  }
)
