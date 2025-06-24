#!/usr/bin/env node

import { execSync } from 'child_process'
import { writeFileSync, existsSync } from 'fs'

const EXECUTED_FILES_LOG = '.test-executed-files.log'

// 獲取已執行的測試檔案列表
function getExecutedTestFiles() {
  try {
    // 使用 vitest list --filesOnly 來獲取變更的測試檔案
    const output = execSync('pnpm vitest list --config src/tests/vitest.config.ts --changed origin/main --filesOnly', {
      encoding: 'utf8',
    })

    // 解析輸出，提取測試檔案路徑
    const lines = output.split('\n').filter(line => line.trim())
    return lines
  } catch (error) {
    console.warn('⚠️  無法獲取已執行的測試檔案列表:', error.message)
    return []
  }
}

// 執行 test:coverage:ci
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

// 記錄已執行的檔案
writeFileSync(EXECUTED_FILES_LOG, executedFiles.join('\n'))

// 執行 test 但排除已執行的檔案
console.log('🚀 執行 test (排除已執行的檔案)...')
try {
  if (executedFiles.length > 0) {
    // 使用 vitest 的 --exclude 選項來排除已執行的檔案
    const excludeArgs = executedFiles.map(file => `--exclude="${file}"`).join(' ')
    const testCommand = `pnpm vitest --config src/tests/vitest.config.ts ${excludeArgs}`

    console.log('執行命令:', testCommand)
    execSync(testCommand, { stdio: 'inherit' })
  } else {
    // 如果沒有已執行的檔案，直接執行所有測試
    console.log('沒有已執行的檔案，執行所有測試...')
    execSync('pnpm test', { stdio: 'inherit' })
  }
  console.log('✅ test 執行完成')
} catch (error) {
  console.error('❌ test 執行失敗:', error.message)
  process.exit(1)
}

// 清理臨時檔案
if (existsSync(EXECUTED_FILES_LOG)) {
  execSync(`rm ${EXECUTED_FILES_LOG}`)
}

console.log('🎉 所有測試執行完成！')
