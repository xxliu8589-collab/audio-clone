export interface FishAudioConfig {
  apiKey?: string;
  baseUrl?: string;
}

export interface TTSRequest {
  text: string;
  format?: 'mp3' | 'wav';
  referenceAudio?: string;
  referenceText?: string;
  model?: string;
}

export interface TTSResponse {
  audioData: ArrayBuffer;
  format: string;
}

export interface VoiceCloneRequest {
  audio: string;
  text: string;
}

export interface VoiceCloneResponse {
  referenceId: string;
}

export interface ApiError {
  code: number;
  message: string;
  details?: any;
}

export interface AudioTemplate {
  id: string;
  name: string;
  referenceId: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AudioHistory {
  id: string;
  text: string;
  audioUrl: string;
  templateId?: string;
  duration: number;
  createdAt: Date;
}

export interface Settings {
  apiKey: string;
  defaultFormat: 'mp3' | 'wav';
  defaultQuality: 'high' | 'medium' | 'low';
  language: string;
  theme: 'light' | 'dark';
}
