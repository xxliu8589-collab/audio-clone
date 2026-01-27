# 声音克隆网站

使用 Fish Audio API 构建的个人声音克隆和文本转语音网站。

## 功能特性

### 1. 声音克隆功能 (/clone)
- 上传参考音频文件（支持 MP3、WAV 格式）
- 输入参考文本（用于提高克隆准确性）
- 预览和选择克隆声音
- 保存和管理克隆的声音模板

### 2. 文本转语音功能 (/tts)
- 文本输入区域（支持多行输入）
- 选择声音模板（默认声音或已克隆的声音）
- 音频格式选择（MP3、WAV）
- 音频质量设置
- 实时预览和下载生成的音频

### 3. 历史记录管理 (/history)
- 查看所有生成的音频记录
- 搜索和筛选功能
- 重新生成音频
- 下载和删除操作

### 4. 设置页面 (/settings)
- API 密钥管理
- 音频默认设置
- 语言偏好
- 主题设置（浅色/深色）

## 技术栈

- **前端**: Next.js 14+ + TypeScript + React
- **样式**: Tailwind CSS v4
- **数据库**: Prisma + SQLite
- **API**: Fish Audio SDK
- **部署**: Docker + Docker Compose

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置数据库

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 3. 配置环境变量

创建 `.env` 文件并添加以下内容：

```env
DATABASE_URL="file:./data.db"
FISH_AUDIO_API_KEY="your_api_key_here"
```

### 4. 启动开发服务器

```bash
npm run dev
```

### 5. 访问网站

打开浏览器访问 `http://localhost:3000`

## 部署

### 使用 Docker Compose

```bash
npm run docker:compose
```

### 手动部署

```bash
npm run build
npm run start
```

## API 文档

详细的 API 文档请参考 `fish_audio_api_docs.md` 文件。

## 项目结构

```
/                      # 项目根目录
├── app/               # Next.js 应用目录
│   ├── components/    # 可复用组件
│   ├── api/           # API 路由
│   ├── clone/         # 声音克隆页面
│   ├── tts/           # 文本转语音页面
│   ├── history/       # 历史记录页面
│   └── settings/      # 设置页面
├── src/               # 源文件目录
│   ├── types/         # 类型定义
│   ├── utils/         # 工具函数
│   └── generated/     # 生成的文件
├── prisma/            # Prisma 数据库配置
├── public/            # 公共资源
├── package.json       # 项目依赖
├── next.config.mjs    # Next.js 配置
├── tsconfig.json      # TypeScript 配置
├── tailwind.config.ts # Tailwind CSS 配置
├── Dockerfile         # Docker 配置
└── docker-compose.yml # Docker Compose 配置
```

## 注意事项

- 本项目仅供个人使用，不得用于商业用途
- 请遵守 Fish Audio API 的使用条款
- 音频文件会保存在本地数据库中，请注意数据安全
