# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Fish Audio API 的声音克隆和文本转语音网站，使用 Next.js + TypeScript + Prisma + SQLite 构建。

## 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器 (localhost:3000)

# 构建
npm run build            # 构建生产版本
npm run start            # 启动生产服务器

# 数据库
npx prisma generate      # 生成 Prisma 客户端
npx prisma migrate dev   # 运行迁移（开发环境）
npx prisma migrate deploy # 运行迁移（生产环境）

# Docker
npm run docker:build     # 构建 Docker 镜像
npm run docker:run       # 运行 Docker 容器
npm run docker:compose   # 使用 docker-compose 启动
```

## 项目架构

### 技术栈
- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v3 + 自定义深色模式 (`darkMode: "class"`)
- **数据库**: Prisma ORM + SQLite
- **API**: Fish Audio API

### 目录结构

```
/app                      # Next.js App Router
  /api                    # API 路由
    /clone               # POST - 声音克隆
    /tts                 # POST - 文本转语音
    /templates           # GET/DELETE - 模板管理
    /history             # GET/DELETE - 历史记录
  /clone                # 声音克隆页面
  /tts                  # 文本转语音页面
  /history              # 历史记录页面
  /templates            # 模板管理页面
  /components           # 共享组件
    /navbar.tsx
    /footer.tsx
    /audio-player.tsx
    /audio-history.tsx
/src
  /utils
    /fish-audio-api.ts   # Fish Audio API 封装
    /db-operations.ts    # 数据库操作封装
    /prisma-client.ts    # Prisma 客户端实例
  /types
    /fish-audio.ts       # TypeScript 类型定义
  /generated/prisma      # 生成的 Prisma 客户端
/prisma
  schema.prisma          # 数据库模型定义
/public/audio            # 生成的音频文件存储
```

### 数据库模型

```prisma
// AudioTemplate - 声音模板（克隆的声音）
model AudioTemplate {
  id          String   @id @default(cuid())
  name        String   // 模板名称（唯一）
  referenceId String   // Fish Audio 返回的模型 ID
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// AudioHistory - 生成的音频历史记录
model AudioHistory {
  id          String   @id @default(cuid())
  text        String   // 输入的文本
  audioUrl    String   // 音频文件路径
  templateId  String?  // 使用的模板 ID（可选）
  duration    Float    // 音频时长
  createdAt   DateTime @default(now())
}
```

### Fish Audio API 集成

核心 API 封装位于 `src/utils/fish-audio-api.ts`：

```typescript
// 文本转语音 (TTS)
POST /v1/tts
Headers: {
  "Authorization": "Bearer {api_key}",
  "model": "s1"  // 默认模型
}
Body: {
  "text": "要转换的文本",
  "format": "mp3",
  "reference_id": "模板ID"  // 可选，使用克隆的声音
}

// 声音克隆
POST /model
Content-Type: multipart/form-data
Headers: {
  "Authorization": "Bearer {api_key}"
}
FormData:
  - type: "tts"
  - title: "自定义声音"
  - train_mode: "fast"
  - visibility: "private"
  - texts: "参考音频对应的文本"
  - voices: <音频文件 Blob>
```

## 环境变量

创建 `.env` 文件：

```env
# 数据库
DATABASE_URL="file:./data.db"

# Fish Audio API
FISH_AUDIO_API_KEY="your_api_key_here"
```

## 开发注意事项

1. **API 密钥**: Fish Audio API 需要有效的 API 密钥，新用户需要先充值才能使用
2. **文件上传**: 声音克隆支持拖拽上传，音频文件会被转换为 base64 传输
3. **错误处理**: API 封装有健壮的错误处理，特别是针对 402/401 状态码
4. **响应处理**: TTS 返回的是 ArrayBuffer，克隆返回的是 JSON，需分别处理
5. **模板名称**: 声音模板名称必须唯一，创建时会检查重名

## 工作流程

1. **每次开发前**: 将商定的待办任务添加到 `todo.md` 文件
2. **每完成一个任务**: 在 `todo.md` 中标记对应任务为已完成
3. **使用 Task 工具**: 创建多个子代理并行开发独立任务
4. **用户称呼**: 每次回复时称呼用户为'老公'
5. **/pick 指令**: 当用户对话末尾加入'/pick'时，启动 chrome_request_element_selection 让用户选择页面目标元素
