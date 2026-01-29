import { NextRequest, NextResponse } from 'next/server';
import { FishAudioAPI } from '../../../src/utils/fish-audio-api';
import { DBOperations } from '../../../src/utils/db-operations';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, templateId } = body;
    const format = 'mp3';

    if (!text) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      );
    }

    const api = new FishAudioAPI();

    let response;
    if (templateId) {
      const template = await DBOperations.getAudioTemplate(templateId);
      if (!template) {
        return NextResponse.json(
          { error: '声音模板不存在' },
          { status: 404 }
        );
      }

      response = await api.tts({
        text,
        format,
        referenceId: template.referenceId,
      });
    } else {
      response = await api.tts({
        text,
        format,
      });
    }

    // 创建音频文件存储目录（如果不存在）
    const audioDir = path.join(process.cwd(), 'public', 'audio');
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    // 生成音频文件名和路径
    const filename = `${Date.now()}.${format}`;
    const audioPath = path.join(audioDir, filename);
    const audioUrl = `/audio/${filename}`;

    // 保存音频文件
    fs.writeFileSync(audioPath, Buffer.from(response.audioData));

    // 创建音频历史记录
    const history = await DBOperations.createAudioHistory({
      text,
      audioUrl,
      templateId,
      duration: 0,
    });

    return new NextResponse(response.audioData, {
      headers: {
        'Content-Type': `audio/${format}`,
        'Content-Disposition': `attachment; filename="audio-${history.id}.${format}"`,
      },
    });
  } catch (error: any) {
    console.error('文本转语音失败:', error);
    // 确保返回有效的 JSON 响应
    return NextResponse.json(
      {
        error: error.message || '文本转语音失败',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: error.code || 500 }
    );
  }
}
