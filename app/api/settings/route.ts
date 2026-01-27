import { NextRequest, NextResponse } from 'next/server';
import { ApiKeyManager } from '../../../src/utils/api-key-manager';

export async function GET() {
  try {
    const settings = ApiKeyManager.getSettings();
    return NextResponse.json({
      success: true,
      data: settings,
    });
  } catch (error: any) {
    console.error('获取设置失败:', error);
    return NextResponse.json(
      { error: error.message || '获取设置失败' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const settings = ApiKeyManager.saveSettings(body);
    return NextResponse.json({
      success: true,
      data: settings,
    });
  } catch (error: any) {
    console.error('保存设置失败:', error);
    return NextResponse.json(
      { error: error.message || '保存设置失败' },
      { status: 500 }
    );
  }
}
