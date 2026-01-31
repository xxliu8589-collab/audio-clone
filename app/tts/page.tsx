'use client';

import { useState, useEffect } from 'react';
import AudioPlayer from '../components/ui/audio-player';
import type { AudioTemplate } from '@/lib/types/db';

const TTSPage = () => {
  const [text, setText] = useState('');
  const [templateId, setTemplateId] = useState('');
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
          format: 'mp3',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '文本转语音失败');
      }

      const data = await response.json();
      if (!data.success || !data.history?.audioUrl) {
        throw new Error('服务器返回了无效的响应');
      }

      setAudioUrl(data.history.audioUrl);
      setAudioGenerated(true);
    } catch (error: any) {
      console.error('文本转语音失败:', error);
      setError(error.message || '文本转语音失败');
    }

    setLoading(false);
  };

  const handleDownload = async () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `audio-${Date.now()}.mp3`;
    a.target = '_blank';
    a.click();
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
              onDownload={handleDownload}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-gray-500 dark:text-gray-400">
              <svg className="w-16 h-16 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
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
