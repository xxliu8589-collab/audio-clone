import { NextResponse } from 'next/server';
import { DBOperations } from '../../../src/utils/db-operations';

export async function GET() {
  try {
    const templates = await DBOperations.getAudioTemplates();

    return NextResponse.json({
      success: true,
      data: templates,
    });
  } catch (error: any) {
    console.error('获取声音模板失败:', error);
    return NextResponse.json(
      { error: error.message || '获取声音模板失败' },
      { status: 500 }
    );
  }
}
