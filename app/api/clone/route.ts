import { NextRequest, NextResponse } from 'next/server';
import { FishAudioAPI } from '../../../src/utils/fish-audio-api';
import { DBOperations } from '../../../src/utils/db-operations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { audio, text, name, description } = body;

    if (!audio || !text) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      );
    }

    const api = new FishAudioAPI();
    const response = await api.cloneVoice({ audio, text });

    const template = await DBOperations.createAudioTemplate({
      name: name || '自定义声音',
      referenceId: response.referenceId,
      description: description,
    });

    return NextResponse.json({
      success: true,
      template,
    });
  } catch (error: any) {
    console.error('声音克隆失败:', error);
    return NextResponse.json(
      { error: error.message || '声音克隆失败' },
      { status: error.code || 500 }
    );
  }
}
