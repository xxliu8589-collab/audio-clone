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
- [x] 测试本地部署 - 项目已成功启动在 http://localhost:3000

## 修复
- [x] 修复 Tailwind CSS 配置问题：将 v4 降级到 v3 版本以解决兼容性问题
- [x] 修复输入框文字颜色问题：为 .input-field 类添加明确的文字颜色和背景色，确保深色模式下文字可见
- [x] 修复 Fish Audio API 响应解析错误：添加健壮的错误处理机制，防止 HTML 响应被解析为 JSON
- [x] 优化前端错误显示：改进响应解析错误处理，提供更友好的错误提示
- [x] 修复文本转语音功能错误处理：在生成音频和下载功能中添加与声音克隆页面相同的错误处理机制
- [x] 修复响应体多次读取错误：确保在响应状态码不是 200 时只读取一次响应内容并缓存
- [x] 分析并解决 Fish Audio API 402 错误：API 密钥无效或账户余额不足问题
- [x] 修复文本转语音 API 参数错误：修正 TTSRequest 类型定义和 API 调用参数，使用正确的 reference_id 参数名并添加 model 头部
- [x] 修复声音克隆页面 "Body is unusable: Body has already been read" 错误：分析并解决响应体多次读取问题
- [x] 去掉首页页面：将根路径重定向到声音克隆页面，并移除导航栏中的首页链接
- [x] 优化音频文件上传区域：添加拖拽上传功能，实现拖拽或点击选择文件，添加文件上传状态提示栏（绿色成功、红色失败、灰色未上传）
- [x] 修改导航栏文字：将"模型管理"改为"模板管理"，并更新对应的路由和页面文件名
- [x] 优化模型名称命名规则：添加同名模板检查功能，实时验证并给出错误提示
- [x] 将声音名称设置为必选项：修改表单验证和输入框提示，添加必填标识
- [x] 添加删除上传文件功能：在上传区域显示删除按钮，点击可删除已上传的文件
