import { NextResponse } from 'next/server';
import { prisma } from '@/src/utils/prisma-client';

export async function POST() {
  try {
    // 检查表是否已存在
    const existingTemplate = await prisma.$queryRaw`
      SELECT name FROM sqlite_master WHERE type='table' AND name='AudioTemplate'
    `;

    if (existingTemplate && Array.isArray(existingTemplate) && existingTemplate.length > 0) {
      return NextResponse.json({
        success: true,
        message: '数据库表已存在，无需初始化'
      });
    }

    // 创建表（通过 prisma db push 的等效操作）
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "AudioTemplate" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "referenceId" TEXT NOT NULL,
        "description" TEXT,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" DATETIME NOT NULL
      )
    `;

    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "AudioHistory" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "text" TEXT NOT NULL,
        "audioUrl" TEXT NOT NULL,
        "templateId" TEXT,
        "duration" REAL NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;

    return NextResponse.json({
      success: true,
      message: '数据库初始化成功'
    });
  } catch (error: any) {
    console.error('数据库初始化错误:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: '请使用 POST 请求来初始化数据库'
  });
}
