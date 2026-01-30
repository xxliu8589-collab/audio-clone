import { put, del, list } from '@vercel/blob';

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_TOKEN && process.env.NODE_ENV === 'production') {
  console.warn('BLOB_READ_WRITE_TOKEN not set, blob storage will not work');
}

export interface BlobUploadResult {
  url: string;
  pathname: string;
}

/**
 * 上传音频文件到 Vercel Blob
 */
export async function uploadAudio(
  audioData: Buffer | Uint8Array,
  filename?: string
): Promise<BlobUploadResult> {
  const timestamp = Date.now();
  const pathname = filename || `audio-${timestamp}.mp3`;

  // 确保 audioData 是 Buffer 类型
  const buffer = Buffer.isBuffer(audioData) ? audioData : Buffer.from(audioData);

  const blob = await put(pathname, buffer, {
    access: 'public',
    contentType: 'audio/mpeg',
    token: BLOB_TOKEN,
  });

  return {
    url: blob.url,
    pathname: blob.pathname,
  };
}

/**
 * 从 URL 删除音频文件
 */
export async function deleteAudio(url: string): Promise<void> {
  await del(url, {
    token: BLOB_TOKEN,
  });
}

/**
 * 列出所有音频文件
 */
export async function listAudios(options?: { prefix?: string; limit?: number }) {
  const blobs = await list({
    prefix: options?.prefix || 'audio-',
    limit: options?.limit || 100,
    token: BLOB_TOKEN,
  });

  return blobs.blobs;
}
