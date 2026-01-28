import { NextRequest, NextResponse } from 'next/server';
import { DBOperations } from '../../../src/utils/db-operations';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const history = await DBOperations.getAudioHistory();

    return NextResponse.json({
      success: true,
      data: history,
    });
  } catch (error: any) {
    console.error('获取历史记录失败:', error);
    return NextResponse.json(
      { error: error.message || '获取历史记录失败' },
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
        { error: '缺少必要参数' },
        { status: 400 }
      );
    }

    // 获取要删除的历史记录
    const historyItem = await DBOperations.getAudioHistoryById(id);
    if (historyItem) {
      // 删除对应的音频文件
      const audioPath = path.join(process.cwd(), 'public', historyItem.audioUrl.slice(1));
      if (fs.existsSync(audioPath)) {
        fs.unlinkSync(audioPath);
      }
    }

    // 删除数据库中的历史记录
    await DBOperations.deleteAudioHistory(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error('删除历史记录失败:', error);
    return NextResponse.json(
      { error: error.message || '删除历史记录失败' },
      { status: 500 }
    );
  }
}
