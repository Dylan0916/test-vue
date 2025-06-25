#!/usr/bin/env node

import { execSync } from 'child_process'

function getExecutedTestFiles() {
  try {
    const output = execSync('pnpm test:list --changed origin/main', { encoding: 'utf8' })
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

const executedFiles = getExecutedTestFiles()

console.log('📋 已執行的測試檔案:', executedFiles)
console.log('🚀 執行 test (排除已執行的檔案)...')

try {
  // 先檢查排除後是否還有剩餘的測試檔案
  const allTestFiles = execSync('pnpm test:list', { encoding: 'utf8' })
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.endsWith('.spec.ts'))

  const remainingFiles = allTestFiles.filter(file => !executedFiles.includes(file))

  if (remainingFiles.length === 0) {
    console.log('✅ 所有測試檔案都已在 coverage 中執行過，跳過重複執行')
  } else {
    const excludeArgs = executedFiles.map(file => `--exclude="${file}"`).join(' ')
    const testCommand = `pnpm test ${excludeArgs}`

    console.log('執行命令:', testCommand)
    execSync(testCommand, { stdio: 'inherit' })
  }

  console.log('✅ test 執行完成')
} catch (error) {
  console.error('❌ test 執行失敗:', error.message)
  process.exit(1)
}

console.log('🎉 所有測試執行完成！')
