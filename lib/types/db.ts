/**
 * 数据库模型类型定义
 *
 * 包含 Prisma 模型的 TypeScript 类型
 */

// 音频模板（克隆的声音）
export interface AudioTemplate {
  id: string;
  name: string;
  referenceId: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// 音频历史记录
export interface AudioHistory {
  id: string;
  text: string;
  audioUrl: string;
  templateId: string | null;
  duration: number;
  createdAt: Date;
}

// 创建音频模板输入
export interface CreateAudioTemplateInput {
  name: string;
  referenceId: string;
  description?: string;
}

// 创建音频历史输入
export interface CreateAudioHistoryInput {
  text: string;
  audioUrl: string;
  templateId?: string;
  duration: number;
}
