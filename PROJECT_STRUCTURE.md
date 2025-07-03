# 项目结构说明

## 📁 目录结构

```
js2py/
├── 📄 README.md                    # 项目主说明文档
├── 📄 .cursorrules                 # Cursor AI 助手规则配置
├── 📄 PROJECT_STRUCTURE.md         # 项目结构说明（本文件）
├── 📄 LICENSE                      # 开源许可证
├── 📄 CONTRIBUTING.md              # 贡献指南
├── 📄 .gitignore                   # Git 忽略文件配置
│
├── 📁 app/                         # Next.js 应用目录
│   ├── 📁 (home)/                  # 首页路由
│   │   ├── 📄 layout.tsx           # 首页布局
│   │   └── 📄 page.tsx             # 首页内容
│   ├── 📁 api/                     # API 路由
│   │   └── 📁 search/
│   │       └── 📄 route.ts         # 搜索 API
│   ├── 📁 docs/                    # 文档路由
│   │   ├── 📁 [[...slug]]/         # 动态文档路由
│   │   │   └── 📄 page.tsx         # 文档页面组件
│   │   └── 📄 layout.tsx           # 文档布局
│   ├── 📄 global.css               # 全局样式
│   ├── 📄 layout.config.tsx        # 布局配置
│   └── 📄 layout.tsx               # 根布局
│
├── 📁 components/                  # React 组件
│   ├── 📁 annotations/             # 代码注释组件
│   │   ├── 📄 callout.tsx          # 提示框组件
│   │   ├── 📄 token-transitions.client.tsx  # 客户端令牌转换
│   │   ├── 📄 token-transitions.tsx # 令牌转换组件
│   │   └── 📄 word-wrap.tsx        # 文字换行组件
│   ├── 📄 code.tsx                 # 代码高亮组件
│   └── 📄 scrollycoding.tsx        # 滚动编码组件
│
├── 📁 content/                     # 文档内容
│   └── 📁 docs/                    # 文档文件
│       ├── 📄 index.mdx            # 文档首页
│       └── 📄 scrollycoding.mdx    # 滚动编码示例
│
├── 📁 lib/                         # 工具库
│   └── 📄 source.ts                # 源码处理工具
│
├── 📁 examples/                    # Python 代码示例 (后续添加)
├── 📁 exercises/                   # 练习题 (后续添加)
├── 📁 tests/                       # 测试文件 (后续添加)
│
├── 📁 docs/                        # 文档目录（MDX 格式）
│   ├── 📁 module-0/                # 模块 0 文档
│   │   ├── 📄 getting-started.mdx  # 入门指南
│   │   ├── 📄 environment.mdx      # 环境搭建
│   │   └── 📄 first-script.mdx     # 第一个脚本
│   ├── 📁 module-1/                # 模块 1 文档
│   │   ├── 📄 variables.mdx        # 变量与作用域
│   │   ├── 📄 data-types.mdx       # 数据类型
│   │   ├── 📄 lists.mdx            # 列表操作
│   │   ├── 📄 dictionaries.mdx     # 字典操作
│   │   ├── 📄 tuples-sets.mdx      # 元组和集合
│   │   ├── 📄 control-flow.mdx     # 控制流
│   │   └── 📄 functions.mdx        # 函数
│   ├── 📁 module-2/                # 模块 2 文档
│   │   ├── 📄 imports.mdx          # 导入系统
│   │   ├── 📄 modules.mdx          # 模块系统
│   │   └── 📄 project-structure.mdx # 项目结构
│   ├── 📁 module-3/                # 模块 3 文档
│   │   ├── 📄 classes.mdx          # 类定义
│   │   ├── 📄 inheritance.mdx      # 继承
│   │   ├── 📄 magic-methods.mdx    # 特殊方法
│   │   ├── 📄 decorators.mdx       # 装饰器
│   │   └── 📄 functional.mdx       # 函数式编程
│   ├── 📁 module-4/                # 模块 4 文档
│   │   ├── 📄 async-basics.mdx     # 异步基础
│   │   ├── 📄 async-http.mdx       # 异步 HTTP
│   │   └── 📄 async-iteration.mdx  # 异步迭代
│   ├── 📁 module-5/                # 模块 5 文档
│   │   ├── 📄 logging.mdx          # 日志
│   │   ├── 📄 testing.mdx          # 测试
│   │   ├── 📄 type-hints.mdx       # 类型注解
│   │   └── 📄 debugging.mdx        # 调试
│   ├── 📁 module-6/                # 模块 6 文档
│   │   ├── 📄 web-frameworks.mdx   # Web 框架
│   │   ├── 📄 fastapi.mdx          # FastAPI
│   │   ├── 📄 rest-api.mdx         # REST API
│   │   └── 📄 templates.mdx        # 模板引擎
│   ├── 📁 module-7/                # 模块 7 文档
│   │   ├── 📄 file-handling.mdx    # 文件处理
│   │   ├── 📄 regex.mdx            # 正则表达式
│   │   ├── 📄 pandas.mdx           # Pandas
│   │   └── 📄 automation.mdx       # 自动化脚本
│   ├── 📁 module-8/                # 模块 8 文档
│   │   ├── 📄 project-1.mdx        # 项目 1
│   │   ├── 📄 project-2.mdx        # 项目 2
│   │   ├── 📄 project-3.mdx        # 项目 3
│   │   └── 📄 project-4.mdx        # 项目 4
│   └── 📁 module-9/                # 模块 9 文档
│       ├── 📄 advanced-topics.mdx  # 进阶主题
│       ├── 📄 ai-python.mdx        # Python + AI
│       ├── 📄 automation-tools.mdx # 自动化工具
│       └── 📄 resources.mdx        # 学习资源
│
├── 📁 config/                      # 配置文件
│   ├── 📄 python.json              # Python 配置
│   ├── 📄 vscode.json              # VSCode 配置
│   └── 📄 pre-commit.yaml          # Pre-commit 配置
│
├── 📁 scripts/                     # 构建和部署脚本
│   ├── 📄 build.sh                 # 构建脚本
│   ├── 📄 deploy.sh                # 部署脚本
│   └── 📄 setup.sh                 # 环境设置脚本
│
├── 📄 next.config.mjs              # Next.js 配置
├── 📄 package.json                 # Node.js 依赖
├── 📄 pnpm-lock.yaml               # pnpm 锁文件
├── 📄 postcss.config.js            # PostCSS 配置
├── 📄 source.config.ts             # 源码配置
├── 📄 tailwind.config.js           # Tailwind CSS 配置
└── 📄 tsconfig.json                # TypeScript 配置
```

## 📋 文件说明

### 核心配置文件
- `README.md`: 项目主说明文档，包含项目介绍、学习目标、课程模块等
- `.cursorrules`: Cursor AI 助手规则配置，定义 AI 助手的行为准则
- `PROJECT_STRUCTURE.md`: 项目结构说明文档（本文件）

### 应用目录 (`app/`)
- 使用 Next.js 14 App Router 架构
- 包含首页、文档页面和 API 路由
- 使用 Fumadocs 构建文档系统

### 组件目录 (`components/`)
- React 组件库，用于构建文档界面
- 包含代码高亮、注释、滚动编码等交互组件

### 内容目录 (`content/`)
- 存放 MDX 格式的文档内容
- 按模块组织，便于管理和维护

### 示例目录 (`examples/`) - 后续添加
- 按模块组织的 Python 代码示例
- 每个示例都有对应的 JavaScript 对比代码
- 包含完整的可运行代码和详细注释

### 练习题目录 (`exercises/`) - 后续添加
- 每个模块对应的练习题
- 包含题目描述、提示和解答
- 帮助学习者巩固所学知识

### 测试目录 (`tests/`) - 后续添加
- 单元测试文件
- 确保示例代码的正确性
- 提供测试用例参考

### 文档目录 (`docs/`)
- MDX 格式的详细文档
- 按模块组织，包含理论知识和实践指导
- 使用 Code Hike 提供交互式代码体验

### 配置目录 (`config/`)
- 各种工具的配置文件
- 包含 Python、VSCode、代码质量工具等配置

### 脚本目录 (`scripts/`)
- 构建、部署和环境设置脚本
- 自动化项目管理和部署流程

## 🎯 使用指南

### 开发环境设置
1. 克隆项目到本地
2. 安装 Node.js 依赖：`pnpm install`
3. 启动开发服务器：`pnpm dev`

> **注意**: Python 依赖管理将在开始编写代码示例和实战项目时添加

### 添加新内容
1. 在 `docs/` 目录下创建新的 MDX 文件
2. 更新 `content/docs/` 中的导航配置

> **注意**: 代码示例、练习题和测试将在后续模块开发中添加

### 代码质量
1. 使用 `ruff` 进行代码格式化：`ruff format .` (需要时)
2. 使用 `mypy` 进行类型检查：`mypy .` (需要时)
3. 运行测试：`pytest tests/` (需要时)

> **注意**: Python 代码质量工具将在开始编写 Python 代码时配置

### 部署
1. 构建项目：`pnpm build`
2. 部署到 Vercel 或其他平台

## 📝 注意事项

1. **文件命名**: 使用 kebab-case 命名 MDX 文件，使用 snake_case 命名 Python 文件
2. **代码注释**: 所有 Python 代码都要包含详细的中文注释
3. **对比示例**: 每个 Python 概念都要提供对应的 JavaScript 对比
4. **可运行性**: 所有示例代码都必须是可运行的
5. **测试覆盖**: 重要功能要有对应的测试用例

这个项目结构设计充分考虑了前端开发者的学习习惯，通过对比教学的方式帮助 JavaScript 开发者快速掌握 Python。 