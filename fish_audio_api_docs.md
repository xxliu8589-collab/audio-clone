# Fish Audio API 文档

## 官方文档 - Python 快速开始

### 安装 Fish Audio SDK
```bash
pip install fish-audio-sdk
```

### 获取 API 密钥
1. 访问 [fish.audio/auth/signup](https://fish.audio/auth/signup) 注册账号并验证
2. 登录后前往 [API 密钥页面](https://fish.audio/app/api-keys/)
3. 点击“Create New Key”创建并安全保存密钥

### 基础使用示例
```python
from fishaudio import FishAudio
from fishaudio.utils import save

# 初始化客户端
client = FishAudio(api_key="your_api_key_here")

# 生成语音
audio = client.tts.convert(text="Hello! Welcome to Fish Audio.")
save(audio, "welcome.mp3")

print("✓ Audio saved to welcome.mp3")
```

### 运行脚本
```bash
python generate_speech.py
```

### 自定义声音
获取参考声音 ID（如 E-Girl 为 8ef4a238714b45718ce04243307c57a7），修改代码：
```python
import os
from fishaudio import FishAudio
from fishaudio.utils import save

client = FishAudio(api_key="your_api_key_here")

# 使用自定义声音生成语音
audio = client.tts.convert(
    text="This is a custom voice from Fish Audio!",
    reference_id=os.environ.get("REFERENCE_ID")
)
save(audio, "custom_voice.mp3")
```

### 播放音频
生成后可通过命令播放：
- macOS: `afplay welcome.mp3`
- Linux: `mpg123 welcome.mp3`
- Windows: `start welcome.mp3`

## Text-to-Speech (TTS) API

### POST /v1/tts

#### Description
Generates synthesized speech from the provided text using the Fish Audio Text-to-Speech API.

#### Method
POST

#### Endpoint
https://api.fish.audio/v1/tts

#### Parameters

##### Headers
- **Authorization** (string) - Required - Bearer token for authentication.
- **Content-Type** (string) - Required - Set to `application/json`.
- **model** (string) - Optional - Specifies the TTS model to use (e.g., `s1`). Defaults to the latest model.

##### Request Body
- **text** (string) - Required - The text to convert to speech.
- **format** (string) - Optional - The audio format for the output (e.g., `mp3`, `wav`). Defaults to `mp3`.
- **reference_audio** (string) - Optional - Base64 encoded audio data for voice cloning.
- **reference_text** (string) - Optional - Transcription of the `reference_audio` for voice cloning.

#### Request Example
```json
{
  "text": "Hello! Welcome to Fish Audio. This is my first AI-generated voice.",
  "format": "mp3"
}
```

#### Response
- **Success Response (200)** - Returns binary audio data in the requested format.

## cURL 示例

```bash
curl -X POST https://api.fish.audio/v1/tts \
  -H "Authorization: Bearer $FISH_API_KEY" \
  -H "Content-Type: application/json" \
  -H "model: s1" \
  -d '{
    "text": "Hello! Welcome to Fish Audio. This is my first AI-generated voice.",
    "format": "mp3"
  }' \
  --output welcome.mp3
```

## 自托管 API 示例

```bash
curl -X POST "http://localhost:8080/v1/tts" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Hello, this is a test",
    "reference_audio": "base64_encoded_audio",
    "reference_text": "Reference transcription",
    "format": "mp3"
  }' \
  --output output.mp3
```
