'use client';

import { useState, useEffect } from 'react';
import { AudioHistory as AudioHistoryType } from '@/lib/types/db';
import AudioPlayer from './audio-player';

interface AudioHistoryProps {
  onRefresh?: () => void;
}

const AudioHistory = ({ onRefresh }: AudioHistoryProps) => {
  const [history, setHistory] = useState<AudioHistoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch('/api/history');
      const data = await response.json();
      if (data.success) {
        setHistory(data.data);
      }
    } catch (error: any) {
      setError(error.message || '获取历史记录失败');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('确定要删除这条历史记录吗？')) {
      try {
        const response = await fetch(`/api/history?id=${id}`, {
          method: 'DELETE',
        });

        const data = await response.json();
        if (data.success) {
          setHistory(history.filter((item) => item.id !== id));
          onRefresh?.();
        } else {
          throw new Error(data.error || '删除失败');
        }
      } catch (error: any) {
        setError(error.message || '删除失败');
      }
    }
  };

  const handleRegenerate = async (item: AudioHistoryType) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: item.text,
          templateId: item.templateId,
          format: item.audioUrl.includes('.mp3') ? 'mp3' : 'wav',
        }),
      });

      if (!response.ok) {
        throw new Error('重新生成失败');
      }

      window.location.reload();
    } catch (error: any) {
      setError(error.message || '重新生成失败');
    }
  };

  const filteredHistory = history.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">历史记录</h3>
        <input
          type="text"
          placeholder="搜索历史记录..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field max-w-xs"
        />
      </div>

      {filteredHistory.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>暂无历史记录</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredHistory.map((item) => (
            <div key={item.id} className="card p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium mb-1">{item.text.slice(0, 50)}{item.text.length > 50 ? '...' : ''}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRegenerate(item)}
                    className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-200"
                  >
                    重新生成
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200"
                  >
                    删除
                  </button>
                </div>
              </div>
              <AudioPlayer audioUrl={item.audioUrl} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AudioHistory;
