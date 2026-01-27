# 声音克隆网站 - 开发任务

## 第一组：安装所需依赖
- [x] 初始化 Next.js 14+ 项目（TypeScript + App Router）
- [x] 安装并配置 Tailwind CSS v4
- [x] 安装 shadcn/ui 组件库
- [x] 安装 Prisma ORM
- [x] 安装其他所需依赖（如文件上传处理、音频处理等）

## 第二组：开发后端功能
- [x] 配置 Prisma 和 SQLite 数据库
- [x] 定义 Prisma 数据模型（AudioTemplate 和 AudioHistory）
- [x] 实现 Prisma 数据库操作（增删改查）
- [x] 封装 Fish Audio API 调用
- [x] 创建 Next.js API 路由：
  - [x] POST /api/clone - 声音克隆 API
  - [x] POST /api/tts - 文本转语音 API
  - [x] GET /api/templates - 获取声音模板列表
  - [x] GET /api/history - 获取历史记录
  - [x] DELETE /api/history/:id - 删除历史记录
  - [x] GET /api/settings - 获取设置
  - [x] POST /api/settings - 保存设置
- [x] 实现文件上传和处理功能

## 第三组：开发网站页面
- [x] 创建基础布局组件（导航栏、页脚等）
- [x] 实现首页 (/ )
- [x] 实现声音克隆页面 (/clone)
- [x] 实现文本转语音页面 (/tts)
- [x] 实现历史记录管理页面 (/history)
- [x] 实现设置页面 (/settings)
- [x] 实现基本的表单验证和错误处理

## 部署
- [x] 创建 Dockerfile 和 docker-compose.yml
- [ ] 测试本地部署
