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
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [nameError, setNameError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0]);
      setUploadStatus('success');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('audio/')) {
        setAudioFile(file);
        setUploadStatus('success');
      } else {
        setUploadStatus('error');
      }
    }
  };

  const handleDragLeave = () => {
    // 可以添加拖拽离开的效果
  };

  const handleClick = () => {
    const fileInput = document.getElementById('audioFile') as HTMLInputElement;
    fileInput?.click();
  };

  const checkNameExists = async (inputName: string) => {
    if (!inputName.trim()) {
      return;
    }

    try {
      const response = await fetch(`/api/templates?name=${encodeURIComponent(inputName)}`);
      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          setError('已存在同名的声音模板，请使用不同的名称');
        } else {
          setError('');
        }
      }
    } catch (error) {
      console.error('检查名称失败:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setNameError('');

    // 验证输入
    if (!audioFile) {
      setError('请选择音频文件');
      setLoading(false);
      return;
    }

    if (!referenceText.trim()) {
      setError('请输入参考文本');
      setLoading(false);
      return;
    }

    if (!name.trim()) {
      setError('声音名称不能为空');
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
            name: name.trim(),
            description,
          }),
        });

        let data;
        try {
          // 读取响应体并缓存
          const responseText = await response.text();
          data = JSON.parse(responseText);
        } catch (parseError) {
          console.error('响应解析失败:', parseError);
          console.error('原始响应:', responseText);
          setError('服务器响应格式错误');
          setLoading(false);
          return;
        }

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
      console.error('提交失败:', error);
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
            <div
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
              onClick={handleClick}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                拖拽音频文件到此处，或者点击选择文件
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                支持 MP3、WAV 格式，建议时长 5-30 秒
              </p>
              {audioFile && (
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    已选择文件: {audioFile.name}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡到上传区域
                      setAudioFile(null);
                      setUploadStatus('idle');
                    }}
                    className="ml-4 text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    删除
                  </button>
                </div>
              )}
            </div>
            <input
              type="file"
              id="audioFile"
              accept="audio/mp3,audio/wav"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className={`mt-2 p-3 rounded-md text-sm font-medium ${
              uploadStatus === 'success'
                ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                : uploadStatus === 'error'
                ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                : 'bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
            }`}>
              {uploadStatus === 'success' ? '上传成功' : uploadStatus === 'error' ? '上传失败' : '未上传文件'}
            </div>
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
              声音名称 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (!e.target.value.trim()) {
                  setError('声音名称不能为空');
                } else {
                  checkNameExists(e.target.value);
                }
              }}
              onBlur={() => {
                if (!name.trim()) {
                  setError('声音名称不能为空');
                }
              }}
              placeholder="请输入声音名称"
              className="input-field"
              required
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
