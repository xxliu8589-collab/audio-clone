import { NextRequest, NextResponse } from 'next/server';
import { DBOperations } from '@/lib/db/queries';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    // 如果有name参数，检查是否已存在同名模板
    if (name) {
      const existingTemplate = await DBOperations.getAudioTemplateByName(name);
      return NextResponse.json({
        exists: !!existingTemplate,
      });
    }

    // 否则返回所有模板
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

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: '缺少模板ID' },
        { status: 400 }
      );
    }

    await DBOperations.deleteAudioTemplate(id);

    return NextResponse.json({
      success: true,
      message: '模板删除成功',
    });
  } catch (error: any) {
    console.error('删除声音模板失败:', error);
    return NextResponse.json(
      { error: error.message || '删除声音模板失败' },
      { status: 500 }
    );
  }
}
