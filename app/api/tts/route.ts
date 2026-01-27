import { NextRequest, NextResponse } from 'next/server';
import { FishAudioAPI } from '../../../src/utils/fish-audio-api';
import { DBOperations } from '../../../src/utils/db-operations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, templateId, format = 'mp3' } = body;

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

    const audioUrl = `/api/audio/${Date.now()}.${format}`;
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
    return NextResponse.json(
      { error: error.message || '文本转语音失败' },
      { status: error.code || 500 }
    );
  }
}
