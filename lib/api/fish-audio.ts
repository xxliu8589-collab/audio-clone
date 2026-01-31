import { FishAudioConfig, TTSRequest, TTSResponse, VoiceCloneRequest, VoiceCloneResponse, APIError } from '@/lib/types/api';

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

    // 如果是 FormData 请求，不要设置 Content-Type，让浏览器自动处理
    const headers: Record<string, string> = {};
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }
    if (options.headers) {
      Object.assign(headers, options.headers);
    }

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal: AbortSignal.timeout(10000), // 10秒超时
      });

      // 先读取响应体内容到内存中，避免多次读取导致的错误
      let responseText: string | undefined;
      let responseArrayBuffer: ArrayBuffer | undefined;

      if (endpoint.includes('/tts')) {
        responseArrayBuffer = await response.arrayBuffer();
      } else {
        responseText = await response.text();
      }

      if (!response.ok) {
        let errorData;
        try {
          errorData = endpoint.includes('/tts')
            ? { message: `API 请求失败 (${response.status} ${response.statusText})` }
            : JSON.parse(responseText!);
        } catch (e) {
          console.error('API 响应不是有效的 JSON:', responseText);
          errorData = { message: `API 请求失败 (${response.status} ${response.statusText})` };
        }

        // 针对特定错误状态码提供更友好的提示
        let userFriendlyMessage = errorData.message || 'API 请求失败';
        if (response.status === 402) {
          userFriendlyMessage = 'API 密钥无效或账户余额不足。新注册用户需要先充值才能使用鱼耳音频 API 服务。请检查 API 密钥配置或前往鱼耳音频官网充值。';
        } else if (response.status === 401) {
          userFriendlyMessage = 'API 密钥认证失败，请检查密钥配置是否正确';
        }

        throw new Error(JSON.stringify({
          code: response.status,
          message: userFriendlyMessage,
          details: errorData,
        }));
      }

      if (endpoint.includes('/tts')) {
        return { audioData: responseArrayBuffer, format: 'mp3' } as T;
      }

      try {
        return JSON.parse(responseText!) as T;
      } catch (parseError) {
        console.error('响应解析为 JSON 失败:', parseError);
        console.error('原始响应内容:', responseText);
        throw new Error(JSON.stringify({
          code: 500,
          message: '响应格式错误',
          details: { originalResponse: responseText?.slice(0, 200) },
        }));
      }
    } catch (error) {
      console.error('API 请求失败:', error);

      if (error instanceof Error) {
        // 区分网络错误和其他错误
        if (error.message.includes('Failed to fetch') || error.message.includes('Timeout') || error.message.includes('Network')) {
          throw {
            code: 503,
            message: '无法连接到音频 API 服务器，请检查网络连接或稍后重试',
            details: error,
          } as APIError;
        }

        try {
          let apiError: APIError;
          try {
            apiError = JSON.parse(error.message) as APIError;
          } catch (e) {
            throw {
              code: 500,
              message: error.message,
              details: error,
            } as APIError;
          }

          // 解析嵌套的错误信息
          if (typeof apiError.message === 'string' && apiError.message.startsWith('{')) {
            try {
              const nestedError = JSON.parse(apiError.message);
              throw {
                code: nestedError.code || apiError.code || 500,
                message: nestedError.message || 'API 请求失败',
                details: nestedError.details || apiError.details || error,
              } as APIError;
            } catch (e) {
              throw apiError;
            }
          }

          throw apiError;
        } catch (e) {
          throw {
            code: 500,
            message: error.message,
            details: error,
          } as APIError;
        }
      }

      throw {
        code: 500,
        message: '未知错误',
        details: error,
      } as APIError;
    }
  }

  async tts(request: TTSRequest): Promise<TTSResponse> {
    return this.request<TTSResponse>('/v1/tts', {
      method: 'POST',
      headers: {
        'model': request.model || 's1',
      },
      body: JSON.stringify({
        text: request.text,
        format: request.format || 'mp3',
        reference_id: request.referenceId,
      }),
    });
  }

  async cloneVoice(request: VoiceCloneRequest): Promise<VoiceCloneResponse> {
    // 创建 FormData 来发送二进制数据
    const formData = new FormData();
    formData.append('type', 'tts');
    formData.append('title', 'Custom Voice'); // 默认标题
    formData.append('train_mode', 'fast');
    formData.append('visibility', 'private'); // 设置为私有模型，避免需要封面图片
    if (request.text) {
      formData.append('texts', request.text);
    }

    // 将 base64 音频数据转换为 Blob
    const audioBlob = this.base64ToBlob(request.audio, 'audio/mp3');
    formData.append('voices', audioBlob, 'reference.mp3');

    return this.request<VoiceCloneResponse>('/model', {
      method: 'POST',
      headers: {
        // 不设置 Content-Type，让浏览器自动设置 multipart/form-data 边界
      },
      body: formData,
    });
  }

  private base64ToBlob(base64: string, mimeType: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
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
