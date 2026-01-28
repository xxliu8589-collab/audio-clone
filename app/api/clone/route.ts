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

    // 检查是否已存在同名模板
    if (name) {
      const existingTemplate = await DBOperations.getAudioTemplateByName(name);
      if (existingTemplate) {
        return NextResponse.json(
          { error: '已存在同名的声音模板，请使用不同的名称' },
          { status: 400 }
        );
      }
    }

    const api = new FishAudioAPI();
    const response = await api.cloneVoice({ audio, text });

    const template = await DBOperations.createAudioTemplate({
      name: name || response.title || '自定义声音',
      referenceId: response._id,
      description: description || response.description,
    });

    return NextResponse.json({
      success: true,
      template,
    });
  } catch (error: any) {
    console.error('声音克隆失败:', error);
    // 确保返回有效的 JSON 响应
    return NextResponse.json(
      {
        error: error.message || '声音克隆失败',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: error.code || 500 }
    );
  }
}
