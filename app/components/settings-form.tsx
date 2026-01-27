'use client';

import { useState, useEffect } from 'react';
import { Settings } from '../../src/types/fish-audio';
import { ApiKeyManager } from '../../src/utils/api-key-manager';

const SettingsForm = () => {
  const [settings, setSettings] = useState<Settings>({
    apiKey: '',
    defaultFormat: 'mp3',
    defaultQuality: 'medium',
    language: 'en',
    theme: 'light',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedSettings = ApiKeyManager.getSettings();
    setSettings(storedSettings);
    setLoading(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('设置保存成功');
        ApiKeyManager.saveSettings(data.data);
      } else {
        setError(data.error || '保存失败');
      }
    } catch (error: any) {
      setError(error.message || '保存失败');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-6">设置</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Fish Audio API 密钥
          </label>
          <input
            type="password"
            id="apiKey"
            name="apiKey"
            value={settings.apiKey}
            onChange={handleChange}
            placeholder="请输入 API 密钥"
            className="input-field"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            您可以在 <a href="https://fish.audio/app/api-keys/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">Fish Audio 控制台</a> 获取 API 密钥
          </p>
        </div>

        <div>
          <label htmlFor="defaultFormat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            默认音频格式
          </label>
          <select
            id="defaultFormat"
            name="defaultFormat"
            value={settings.defaultFormat}
            onChange={handleChange}
            className="input-field"
          >
            <option value="mp3">MP3</option>
            <option value="wav">WAV</option>
          </select>
        </div>

        <div>
          <label htmlFor="defaultQuality" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            默认音频质量
          </label>
          <select
            id="defaultQuality"
            name="defaultQuality"
            value={settings.defaultQuality}
            onChange={handleChange}
            className="input-field"
          >
            <option value="low">低</option>
            <option value="medium">中</option>
            <option value="high">高</option>
          </select>
        </div>

        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            语言
          </label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="input-field"
          >
            <option value="en">英语</option>
            <option value="zh">中文</option>
            <option value="ja">日语</option>
            <option value="ko">韩语</option>
            <option value="fr">法语</option>
            <option value="de">德语</option>
          </select>
        </div>

        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            主题
          </label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="input-field"
          >
            <option value="light">浅色</option>
            <option value="dark">深色</option>
          </select>
        </div>

        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md text-green-700 dark:text-green-300">
            {success}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? '保存中...' : '保存设置'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;
