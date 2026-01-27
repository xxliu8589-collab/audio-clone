'use client';

import { useState } from 'react';

const ClonePage = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [referenceText, setReferenceText] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!audioFile || !referenceText) {
      setError('请选择音频文件并输入参考文本');
      setLoading(false);
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const audioData = e.target?.result as string;
        const base64Audio = audioData.split(',')[1];

        const response = await fetch('/api/clone', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            audio: base64Audio,
            text: referenceText,
            name: name || '自定义声音',
            description,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess('声音克隆成功！');
          setAudioFile(null);
          setReferenceText('');
          setName('');
          setDescription('');
        } else {
          setError(data.error || '声音克隆失败');
        }

        setLoading(false);
      };

      reader.readAsDataURL(audioFile);
    } catch (error: any) {
      setError(error.message || '声音克隆失败');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">声音克隆</h1>

      <div className="card p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="audioFile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              选择参考音频文件
            </label>
            <input
              type="file"
              id="audioFile"
              accept="audio/mp3,audio/wav"
              onChange={handleFileChange}
              className="input-field"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              支持 MP3、WAV 格式，建议时长 5-30 秒
            </p>
          </div>

          <div>
            <label htmlFor="referenceText" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              参考文本
            </label>
            <textarea
              id="referenceText"
              value={referenceText}
              onChange={(e) => setReferenceText(e.target.value)}
              placeholder="请输入与音频内容对应的文本"
              className="input-field"
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              声音名称
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="请输入声音名称（可选）"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              描述
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="请输入声音描述（可选）"
              className="input-field"
              rows={2}
            />
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
              disabled={loading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '克隆中...' : '克隆声音'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClonePage;
