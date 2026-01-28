'use client';

import { useState, useEffect } from 'react';
import AudioPlayer from '../components/audio-player';
import { AudioTemplate } from '../../src/types/fish-audio';

const TTSPage = () => {
  const [text, setText] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [format, setFormat] = useState<'mp3' | 'wav'>('mp3');
  const [templates, setTemplates] = useState<AudioTemplate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [audioGenerated, setAudioGenerated] = useState(false);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/templates');
      const data = await response.json();
      if (data.success) {
        setTemplates(data.data);
      }
    } catch (error) {
      console.error('获取声音模板失败:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAudioGenerated(false);

    if (!text) {
      setError('请输入文本');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          templateId: templateId || undefined,
          format,
        }),
      });

      if (!response.ok) {
        // 读取响应内容并缓存
        const responseText = await response.text();
        console.error('错误响应:', responseText);
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch (parseError) {
          console.error('响应解析失败:', parseError);
          throw new Error('服务器响应格式错误');
        }
        throw new Error(errorData.error || '文本转语音失败');
      }

      // 检查响应是否是音频格式
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.startsWith('audio/')) {
        console.error('响应不是音频格式:', contentType);
        const responseText = await response.text();
        console.error('原始响应:', responseText);
        throw new Error('服务器返回了无效的音频数据');
      }

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      setAudioGenerated(true);
    } catch (error: any) {
      console.error('文本转语音失败:', error);
      setError(error.message || '文本转语音失败');
    }

    setLoading(false);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          templateId: templateId || undefined,
          format,
        }),
      });

      if (!response.ok) {
        // 读取响应内容并缓存
        const responseText = await response.text();
        console.error('错误响应:', responseText);
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch (parseError) {
          console.error('响应解析失败:', parseError);
          throw new Error('服务器响应格式错误');
        }
        throw new Error(errorData.error || '下载失败');
      }

      // 检查响应是否是音频格式
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.startsWith('audio/')) {
        console.error('响应不是音频格式:', contentType);
        const responseText = await response.text();
        console.error('原始响应:', responseText);
        throw new Error('服务器返回了无效的音频数据');
      }

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `audio-${Date.now()}.${format}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('下载失败:', error);
      setError(error.message || '下载失败');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">文本转语音</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                文本内容
              </label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="请输入要转换为语音的文本"
                className="input-field"
                rows={6}
              />
            </div>

            <div>
              <label htmlFor="template" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                声音模板
              </label>
              <select
                id="template"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
                className="input-field"
              >
                <option value="">默认声音</option>
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="format" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                音频格式
              </label>
              <select
                id="format"
                value={format}
                onChange={(e) => setFormat(e.target.value as 'mp3' | 'wav')}
                className="input-field"
              >
                <option value="mp3">MP3</option>
                <option value="wav">WAV</option>
              </select>
            </div>

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '生成中...' : '生成音频'}
              </button>
            </div>
          </form>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">音频预览</h3>
          {audioGenerated ? (
            <AudioPlayer
              audioUrl={audioUrl}
              format={format}
              onDownload={handleDownload}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-gray-500 dark:text-gray-400">
              <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V5l12-3v13M9 18c0 0 1.56 0 2.55-.582M9 18c0 0-.5.501-.5 1.517v.583m1.5-1.583c.871-.924 2.02-.045 2.255 1.583H9z" />
              </svg>
              <p>生成音频后将在此显示预览</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TTSPage;
