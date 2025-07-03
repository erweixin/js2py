# 🐍 Python 教程 for JavaScript 开发者

> 专为前端工程师设计的 Python 学习指南，从 JavaScript 视角快速掌握 Python

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 📖 项目简介

这是一个专门为 JavaScript/前端开发者设计的 Python 学习教程。通过对比 JavaScript 和 Python 的语法特性，帮助你快速理解 Python 的核心概念，并能够将其应用到实际项目中。

## 🎯 学习目标

- 从 JavaScript 开发者视角理解 Python 语法
- 掌握 Python 的模块化、异步编程、Web 开发
- 构建全栈开发能力
- 学会使用 Python 进行数据处理和自动化脚本

## 📚 课程模块

### 🚀 模块 0：入门引导与环境搭建
- Python 能做什么？为什么前端也该学 Python？
- Python vs JavaScript 语言特点概览
- 安装 Python + pip + venv
- VSCode 配置（与前端环境一致）
- 第一个 Python 脚本：Hello, Web!

### 🧱 模块 1：语法与数据结构映射
- 变量与作用域（无 var/let/const，作用域与缩进）
- 基本类型映射（None, int, float, str, bool）
- list vs Array：增删改查、切片
- dict vs Object：键值、遍历、嵌套
- tuple 和 set：新概念类比 ES6 特性
- 条件与循环（if, for, while, 列表推导式）
- 函数与闭包（def, lambda, *args, **kwargs）

### 🧰 模块 2：模块系统与项目组织
- import、from、as 的使用
- Python 模块 vs JS 的模块化（CommonJS/ESM）
- __main__ 和 __name__ 概念
- 项目目录结构规范
- 包管理工具：pip vs npm

### 🧠 模块 3：面向对象与函数式写法
- 定义类（class, __init__, self）
- 类变量与实例变量
- 类继承、super()、重写方法
- 特殊方法（__str__, __repr__, __eq__, __len__）
- 装饰器基础（类比 React HOC、Hook）
- 函数式工具箱：map, filter, reduce, lambda

### 🌐 模块 4：Python 异步编程
- 同步 vs 异步（事件循环机制）
- async def, await, asyncio.run
- asyncio.gather vs Promise.all
- aiohttp 请求 demo（类比 fetch + async/await）
- 异步迭代（async for, async with）

### 🧪 模块 5：调试、测试与类型注解
- 日志输出：print vs logging
- 单元测试：unittest vs pytest
- 类型注解（Python typing vs TypeScript）
- 静态检查工具（mypy, ruff）
- 调试工具：断点调试、pdb

### 🌍 模块 6：Python + Web for 前端
- Flask vs FastAPI（推荐 FastAPI）
- 构建 RESTful API
- 路由管理 vs 前端路由
- 与前端联调（跨域、数据格式）
- 模板引擎类比（Jinja2 vs React 模板语法）

### 📊 模块 7：数据处理与脚本自动化
- 文件处理（读取/写入 JSON、CSV）
- 正则处理 vs JS 正则
- 使用 pandas 进行数据清洗
- 常见脚本场景（爬虫、定时任务）

### 🧩 模块 8：实战项目集
- 项目 1：Python 自动简历批量格式化工具
- 项目 2：数据分析脚本
- 项目 3：前端构建状态同步的后端服务
- 项目 4：Python CLI 工具

### 🎓 模块 9：进阶与学习路径推荐
- 深入方向推荐
- Python + AI（OpenAI/LangChain）
- Python + 前端自动化
- 社区与资源推荐

## 🛠️ 技术栈

- **Python**: 3.8+
- **Web 框架**: FastAPI, Flask
- **异步**: asyncio, aiohttp
- **数据处理**: pandas, numpy
- **测试**: pytest, unittest
- **类型检查**: mypy
- **代码质量**: ruff, black

## 🚀 快速开始

### 环境要求

- Python 3.8 或更高版本
- pip（Python 包管理器）
- VSCode（推荐编辑器）

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/erweixin/js2py.git
   cd js2py
   ```

2. **创建虚拟环境**
   ```bash
   python -m venv venv
   source venv/bin/activate  # macOS/Linux
   # 或
   venv\Scripts\activate     # Windows
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

> **注意**: Python 依赖和示例代码将在后续模块开发中添加

## 📁 项目结构

```
js2py/
├── docs/                 # 文档目录
│   ├── module-0/        # 模块 0：入门引导
│   ├── module-1/        # 模块 1：语法映射
│   └── ...
├── examples/            # 代码示例 (后续添加)
├── exercises/          # 练习题 (后续添加)
├── tests/              # 测试文件 (后续添加)
└── README.md          # 项目说明
```

## 🎯 学习建议

1. **循序渐进**: 按照模块顺序学习，每个模块都有对应的练习
2. **动手实践**: 每个概念都要动手写代码验证
3. **对比学习**: 多思考 JavaScript 和 Python 的异同
4. **项目驱动**: 通过实战项目巩固所学知识

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个教程做出贡献的开发者！

## 📞 联系我们

- 项目主页: [GitHub](https://github.com/erweixin/js2py)
- 问题反馈: [Issues](https://github.com/erweixin/js2py/issues)

---

⭐ 如果这个项目对你有帮助，请给我们一个 Star！
