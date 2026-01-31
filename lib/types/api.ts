/**
 * Fish Audio API 类型定义
 *
 * 包含文本转语音（TTS）和声音克隆功能的类型定义
 */

// API 配置选项
export interface FishAudioConfig {
  /** API 密钥 */
  apiKey?: string;
  /** API 基础 URL */
  baseUrl?: string;
  /** 请求超时时间（毫秒） */
  timeout?: number;
}

// TTS 请求参数
export interface TTSRequest {
  /** 要转换为语音的文本 */
  text: string;
  /** 输出音频格式 */
  format?: 'mp3' | 'wav';
  /** 参考音频 ID（用于声音克隆） */
  referenceId?: string;
  /** 模型名称 */
  model?: string;
}

// TTS 响应类型
export interface TTSResponse {
  /** 音频数据（二进制） */
  audioData: ArrayBuffer;
  /** 音频格式 */
  format: 'mp3' | 'wav';
  /** 响应头信息 */
  headers?: Record<string, string>;
}

// 声音克隆请求
export interface VoiceCloneRequest {
  /** 参考音频数据（Base64 编码） */
  audio: string;
  /** 参考音频的转录文本 */
  text: string;
}

// 声音克隆响应
export interface VoiceCloneResponse {
  /** 模型 ID */
  _id: string;
  /** 模型类型 */
  type: string;
  /** 模型标题 */
  title: string;
  /** 模型描述 */
  description?: string;
  /** 模型状态 */
  state: string;
  /** 标签 */
  tags?: string[];
  /** 创建时间 */
  created_at: string;
  /** 可见性 */
  visibility: string;
  /** 作者信息 */
  author: {
    _id: string;
    nickname: string;
    avatar: string;
  };
}

// API 错误类型
export interface APIError {
  /** 错误代码 */
  code: string | number;
  /** 错误消息 */
  message: string;
  /** 状态码 */
  status?: number;
  /** 原始响应 */
  response?: Response;
  /** 详细信息 */
  details?: unknown;
}

// 模型信息
export interface ModelInfo {
  /** 模型名称 */
  name: string;
  /** 模型描述 */
  description: string;
  /** 支持的语言 */
  languages: string[];
}

// 声音克隆参考音频
export interface VoiceCloneReference {
  /** 参考音频数据（Base64 编码） */
  audio: string;
  /** 参考音频的转录文本 */
  text: string;
}

// API 调用选项
export interface APICallOptions {
  /** 是否启用调试模式 */
  debug?: boolean;
  /** 自定义请求头 */
  headers?: Record<string, string>;
}

// 设置相关类型
export interface Settings {
  apiKey: string;
  defaultFormat: 'mp3' | 'wav';
  defaultQuality: 'high' | 'medium' | 'low';
  language: string;
  theme: 'light' | 'dark';
}
