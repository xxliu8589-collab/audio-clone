import { NextRequest, NextResponse } from 'next/server';
import { FishAudioAPI } from '@/lib/api/fish-audio';
import { DBOperations } from '@/lib/db/queries';
import { uploadAudio } from '@/lib/storage/blob';

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

    // 上传到 Vercel Blob 存储
    const filename = `audio-${Date.now()}.${format}`;
    const blobResult = await uploadAudio(
      Buffer.from(response.audioData),
      filename
    );

    // 创建音频历史记录
    const history = await DBOperations.createAudioHistory({
      text,
      audioUrl: blobResult.url,
      templateId,
      duration: 0,
    });

    // 返回包含音频 URL 的 JSON 响应
    return NextResponse.json({
      success: true,
      history: {
        id: history.id,
        text: history.text,
        audioUrl: blobResult.url,
        templateId: history.templateId,
        createdAt: history.createdAt,
      },
    });
  } catch (error: any) {
    console.error('文本转语音失败:', error);
    // 确保返回有效的 JSON 响应
    const statusCode = typeof error.status === 'number' ? error.status : 500;
    return NextResponse.json(
      {
        error: error.message || '文本转语音失败',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: statusCode }
    );
  }
}
