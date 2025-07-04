'use client'

import * as React from 'react'
import { useState, useEffect, ReactNode } from 'react'
import Editor from '@monaco-editor/react'

interface CodeBlock {
  language: string
  code: string
}

interface PythonEditorProps {
  children: ReactNode
  title?: string
  theme?: 'vs-light' | 'vs-dark'
  readOnly?: boolean
  showOutput?: boolean
  compare?: boolean
}

// 解析 MDX 中的代码块
const parseCodeBlocks = (children: ReactNode): CodeBlock[] => {
  const blocks: CodeBlock[] = []
  
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === 'pre') {
      const codeElement = child.props.children
      if (React.isValidElement(codeElement) && codeElement.type === 'code') {
        const className = (codeElement.props as any).className || ''
        const language = className.replace('language-', '')
        const code = (codeElement.props as any).children || ''
        
        blocks.push({ language, code })
      }
    }
  })
  
  return blocks
}

export default function PythonEditor({
  children,
  title = 'Python 代码编辑器',
  theme = 'vs-light',
  readOnly = false,
  showOutput = true,
  compare = false
}: PythonEditorProps) {
  const [pyodide, setPyodide] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [output, setOutput] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [pythonCode, setPythonCode] = useState<string>('')
  const [javascriptCode, setJavascriptCode] = useState<string>('')
  const [isRunning, setIsRunning] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  const codeBlocks = parseCodeBlocks(children)
  
  // 检查是否在客户端
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // 初始化 Pyodide
  useEffect(() => {
    if (!isClient) return
    
    const initPython = async () => {
      try {
        // 使用全局的 loadPyodide 函数
        const pyodideInstance = await (globalThis as any).loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.0/full/",
        });
        setPyodide(pyodideInstance)
        setIsLoading(false)
      } catch (err) {
        console.error('Pyodide 初始化失败:', err)
        setError('Python 环境初始化失败')
        setIsLoading(false)
      }
    }
    
    initPython()
  }, [isClient])
  
  // 解析代码块
  useEffect(() => {
    const pythonBlock = codeBlocks.find(block => block.language === 'python')
    const jsBlock = codeBlocks.find(block => block.language === 'javascript' || block.language === 'js')
    
    if (pythonBlock) {
      setPythonCode(pythonBlock.code)
    }
    if (jsBlock) {
      setJavascriptCode(jsBlock.code)
    }
  }, [codeBlocks])
  
  // 运行 Python 代码
  const runPythonCode = async () => {
    if (!pyodide || !pythonCode.trim()) return
    
    setIsRunning(true)
    setOutput('')
    setError('')
    
    try {
      // 设置输出捕获
      pyodide.runPython(`
import sys
import io
from contextlib import redirect_stdout

class StringIO:
    def __init__(self):
        self.buffer = []
    
    def write(self, text):
        self.buffer.append(text)
    
    def getvalue(self):
        return ''.join(self.buffer)

# 创建输出捕获器
output_capture = StringIO()
sys.stdout = output_capture
      `)
      
      // 执行用户代码
      pyodide.runPython(pythonCode)
      
      // 获取输出
      const output = pyodide.runPython(`
sys.stdout.getvalue()
      `)
      
      // 恢复标准输出
      pyodide.runPython(`
sys.stdout = sys.__stdout__
      `)
      
      setOutput(output || '')
      
    } catch (err: any) {
      setError(err.message || '代码执行出错')
    } finally {
      setIsRunning(false)
    }
  }
  
  // 运行 JavaScript 代码
  const runJavascriptCode = () => {
    if (!javascriptCode.trim()) return
    
    try {
      // 创建一个新的 console.log 来捕获输出
      const logs: string[] = []
      const originalLog = console.log
      console.log = (...args) => {
        logs.push(args.join(' '))
        originalLog(...args)
      }
      
      // 执行代码
      eval(javascriptCode)
      
      // 恢复 console.log
      console.log = originalLog
      
      setOutput(logs.join('\n'))
      setError('')
    } catch (err: any) {
      setError(err.message || 'JavaScript 代码执行出错')
    }
  }
  
  if (!isClient) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-600 dark:text-gray-400">
            正在加载...
          </div>
        </div>
      </div>
    )
  }
  
  if (isLoading) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-600 dark:text-gray-400">
            正在加载 Python 环境...
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900">
      {/* 标题栏 */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          {compare && javascriptCode && (
            <button
              onClick={runJavascriptCode}
              disabled={isRunning}
              className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              运行 JS
            </button>
          )}
          <button
            onClick={runPythonCode}
            disabled={isRunning || !pythonCode.trim()}
            className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            {isRunning ? '运行中...' : '运行 Python'}
          </button>
        </div>
      </div>
      
      {/* 编辑器区域 */}
      <div className="flex">
        {/* Python 编辑器 */}
        <div className="flex-1">
          <Editor
            height="300px"
            language="python"
            theme={theme}
            value={pythonCode}
            onChange={(value) => setPythonCode(value || '')}
            options={{
              readOnly,
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
        
        {/* JavaScript 编辑器（对比模式） */}
        {compare && javascriptCode && (
          <div className="flex-1 border-l">
            <Editor
              height="300px"
              language="javascript"
              theme={theme}
              value={javascriptCode}
              onChange={(value) => setJavascriptCode(value || '')}
              options={{
                readOnly,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        )}
      </div>
      
      {/* 输出区域 */}
      {showOutput && (output || error) && (
        <div className="border-t bg-gray-50 dark:bg-gray-800">
          <div className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-b">
            输出结果
          </div>
          <div className="p-4">
            {error ? (
              <pre className="text-red-600 dark:text-red-400 text-sm whitespace-pre-wrap">
                {error}
              </pre>
            ) : (
              <pre className="text-gray-800 dark:text-gray-200 text-sm whitespace-pre-wrap">
                {output}
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 