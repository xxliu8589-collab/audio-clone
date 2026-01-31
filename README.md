# 声音克隆网站

使用 Fish Audio API 构建的个人声音克隆和文本转语音网站。

## 功能特性

### 1. 声音克隆功能 (/clone)
- 上传参考音频文件（支持 MP3、WAV 格式，拖拽上传）
- 输入参考文本（用于提高克隆准确性）
- 创建和管理自定义声音模板
- 自动重名检测

### 2. 文本转语音功能 (/tts)
- 文本输入区域（支持多行输入）
- 选择声音模板（默认声音或已克隆的声音）
- 实时预览和下载生成的音频
- 音频自动保存到 Vercel Blob 存储

### 3. 声音模板管理 (/templates)
- 查看所有已创建的声音模板
- 显示模板详细信息（名称、描述、创建时间）
- 删除不需要的模板

### 4. 历史记录管理 (/history)
- 查看所有生成的音频记录
- 搜索和筛选功能
- 重新生成音频
- 播放、下载和删除操作

## 技术栈

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v3 + 自定义深色模式
- **数据库**: Prisma ORM + PostgreSQL
- **存储**: Vercel Blob Storage
- **API**: Fish Audio API
- **部署**: Docker + Docker Compose / Vercel

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置数据库

```bash
npx prisma generate
npx prisma migrate dev
```

### 3. 配置环境变量

创建 `.env` 文件并添加以下内容：

```env
# 数据库
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Fish Audio API
FISH_AUDIO_API_KEY="your_api_key_here"

# Vercel Blob 存储（可选，用于生产环境）
BLOB_READ_WRITE_TOKEN="vercel_blob_token"
```

**重要提示**: Fish Audio API 需要有效的 API 密钥，新用户需要先充值才能使用。

### 4. 启动开发服务器

```bash
npm run dev
```

### 5. 访问网站

打开浏览器访问 `http://localhost:3000`

## 部署

### Vercel 部署（推荐）

1. 推送代码到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署

### Docker 部署

```bash
# 构建镜像
npm run docker:build

# 使用 docker-compose 启动
npm run docker:compose
```

### 手动部署

```bash
npm run build
npm run start
```

## 项目结构

```
.
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   ├── clone/         # POST - 声音克隆
│   │   ├── tts/           # POST - 文本转语音
│   │   ├── templates/     # GET/DELETE - 模板管理
│   │   └── history/       # GET/DELETE - 历史记录
│   ├── clone/             # 声音克隆页面
│   ├── tts/               # 文本转语音页面
│   ├── templates/         # 模板管理页面
│   ├── history/           # 历史记录页面
│   └── components/        # 共享组件
│       ├── layout/        # 布局组件
│       │   ├── navbar.tsx
│       │   └── footer.tsx
│       └── ui/            # UI 组件
│           ├── audio-player.tsx
│           └── audio-history.tsx
├── lib/                   # 核心库代码
│   ├── api/               # Fish Audio API 客户端
│   │   └── fish-audio.ts
│   ├── db/                # 数据库相关
│   │   ├── prisma.ts      # Prisma 客户端
│   │   └── queries.ts     # 数据库查询函数
│   ├── storage/           # 存储服务
│   │   └── blob.ts        # Vercel Blob 存储
│   └── types/             # 类型定义
│       ├── api.ts         # API 相关类型
│       ├── db.ts          # 数据库模型类型
│       └── index.ts       # 统一导出
├── prisma/
│   ├── schema.prisma      # 数据库模型定义
│   └── migrations/        # 数据库迁移文件
├── public/
│   └── audio/             # 音频文件存储（本地开发）
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── Dockerfile
└── docker-compose.yml
```

## 数据库模型

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
  audioUrl    String   // 音频文件 URL
  templateId  String?  // 使用的模板 ID（可选）
  duration    Float    // 音频时长
  createdAt   DateTime @default(now())
}
```

## API 接口

### POST /api/clone
声音克隆接口

**请求体:**
```json
{
  "audio": "base64_encoded_audio",
  "text": "参考音频对应的文本",
  "name": "声音名称",
  "description": "声音描述（可选）"
}
```

### POST /api/tts
文本转语音接口

**请求体:**
```json
{
  "text": "要转换的文本",
  "templateId": "模板ID（可选）",
  "format": "mp3"
}
```

### GET /api/templates
获取所有声音模板

### DELETE /api/templates?id={id}
删除指定声音模板

### GET /api/history
获取所有历史记录

### DELETE /api/history?id={id}
删除指定历史记录

## 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器

# 构建
npm run build            # 构建生产版本
npm run start            # 启动生产服务器

# 数据库
npx prisma generate      # 生成 Prisma 客户端
npx prisma migrate dev   # 运行迁移（开发环境）
npx prisma migrate deploy # 运行迁移（生产环境）
npx prisma studio        # 打开 Prisma Studio

# Docker
npm run docker:build     # 构建 Docker 镜像
npm run docker:run       # 运行 Docker 容器
npm run docker:compose   # 使用 docker-compose 启动
```

## 注意事项

- 本项目仅供个人使用，不得用于商业用途
- 请遵守 Fish Audio API 的使用条款
- API 密钥需要充值才能使用，新用户请先前往 Fish Audio 官网充值
- 生产环境建议使用 Vercel Blob 存储音频文件
- 音频文件会保存在数据库中，请注意数据安全

## License

MIT License
