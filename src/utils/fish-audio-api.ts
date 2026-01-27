import { FishAudioConfig, TTSRequest, TTSResponse, VoiceCloneRequest, VoiceCloneResponse, ApiError } from '../types/fish-audio';

class FishAudioAPI {
  private apiKey: string;
  private baseUrl: string;

  constructor(config?: FishAudioConfig) {
    this.apiKey = config?.apiKey || process.env.FISH_AUDIO_API_KEY || '';
    this.baseUrl = config?.baseUrl || 'https://api.fish.audio';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          errorData = { message: response.statusText };
        }

        throw new Error(JSON.stringify({
          code: response.status,
          message: errorData.message || 'API 请求失败',
          details: errorData,
        }));
      }

      if (endpoint.includes('/tts')) {
        const audioData = await response.arrayBuffer();
        return { audioData, format: 'mp3' } as T;
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        try {
          const apiError = JSON.parse(error.message) as ApiError;
          throw apiError;
        } catch (e) {
          throw {
            code: 500,
            message: error.message,
            details: error,
          } as ApiError;
        }
      }

      throw {
        code: 500,
        message: '未知错误',
        details: error,
      } as ApiError;
    }
  }

  async tts(request: TTSRequest): Promise<TTSResponse> {
    return this.request<TTSResponse>('/v1/tts', {
      method: 'POST',
      body: JSON.stringify({
        text: request.text,
        format: request.format || 'mp3',
        reference_audio: request.referenceAudio,
        reference_text: request.referenceText,
        model: request.model || 's1',
      }),
    });
  }

  async cloneVoice(request: VoiceCloneRequest): Promise<VoiceCloneResponse> {
    return this.request<VoiceCloneResponse>('/v1/clone', {
      method: 'POST',
      body: JSON.stringify({
        reference_audio: request.audio,
        reference_text: request.text,
      }),
    });
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  getApiKey(): string {
    return this.apiKey;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}

const defaultAPI = new FishAudioAPI();

export { FishAudioAPI, defaultAPI };
