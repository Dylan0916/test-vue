#!/usr/bin/env node

import { execSync } from 'child_process'

// 獲取已執行的測試檔案列表
function getExecutedTestFiles() {
  try {
    // 使用 list --filesOnly 來獲取變更的測試檔案
    const output = execSync('pnpm test list --changed origin/main --filesOnly', { encoding: 'utf8' })

    // 解析輸出，提取測試檔案路徑
    const lines = output
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.endsWith('.spec.ts'))

    return lines
  } catch (error) {
    console.warn('⚠️  無法獲取已執行的測試檔案列表:', error.message)
    return []
  }
}

console.log('🚀 執行 test:coverage:ci...')

try {
  execSync('pnpm test:coverage:ci', { stdio: 'inherit' })
  console.log('✅ test:coverage:ci 執行完成')
} catch (error) {
  console.error('❌ test:coverage:ci 執行失敗:', error.message)
  process.exit(1)
}

// 獲取已執行的測試檔案
const executedFiles = getExecutedTestFiles()

console.log('📋 已執行的測試檔案:', executedFiles)
console.log('🚀 執行 test (排除已執行的檔案)...')

try {
  const excludeArgs = executedFiles.map(file => `--exclude="${file}"`).join(' ')
  const testCommand = `pnpm test ${excludeArgs}`

  console.log('執行命令:', testCommand)

  execSync(testCommand, { stdio: 'inherit' })

  console.log('✅ test 執行完成')
} catch (error) {
  console.error('❌ test 執行失敗:', error.message)
  process.exit(1)
}

console.log('🎉 所有測試執行完成！')
