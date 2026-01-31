'use client';

import { useState, useEffect } from 'react';
import { AudioTemplate } from '@/lib/types/db';

const TemplatesPage = () => {
  const [templates, setTemplates] = useState<AudioTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/templates');
      const data = await response.json();

      if (data.success) {
        setTemplates(data.data);
      } else {
        setError(data.error || '获取模板失败');
      }
    } catch (error: any) {
      setError(error.message || '获取模板失败');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这个声音模板吗？')) {
      return;
    }

    setDeletingId(id);
    try {
      const response = await fetch(`/api/templates?id=${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (data.success) {
        setTemplates(templates.filter(template => template.id !== id));
      } else {
        setError(data.error || '删除失败');
      }
    } catch (error: any) {
      setError(error.message || '删除失败');
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">声音模板管理</h1>
        <div className="text-center">加载中...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">声音模板管理</h1>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300 mb-6">
          {error}
        </div>
      )}

      {templates.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">
          暂无声音模板，请先创建一个模板。
        </div>
      ) : (
        <div className="grid gap-6">
          {templates.map(template => (
            <div
              key={template.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
                  {template.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {template.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>创建时间: {new Date(template.createdAt).toLocaleString()}</span>
                    <span>ID: {template.referenceId}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(template.id)}
                  disabled={deletingId === template.id}
                  className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deletingId === template.id ? '删除中...' : '删除'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplatesPage;
