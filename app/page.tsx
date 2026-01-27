import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        声音克隆网站
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
        使用 Fish Audio API 进行个人声音克隆和文本转语音。上传参考音频，输入文本，即可生成您自己的合成声音。
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/clone" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-lg font-medium">
          开始克隆声音
        </Link>
        <Link href="/tts" className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 text-lg font-medium">
          文本转语音
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 card">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">声音克隆</h3>
          <p className="text-gray-600 dark:text-gray-400">
            上传参考音频文件，输入参考文本，即可克隆您的声音。
          </p>
        </div>

        <div className="p-6 card">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 12a5 5 0 010-7.072m2.828 9.9a9 9 0 010-12.728" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">文本转语音</h3>
          <p className="text-gray-600 dark:text-gray-400">
            输入文本，选择声音模板，即可生成合成音频。
          </p>
        </div>

        <div className="p-6 card">
          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">历史记录</h3>
          <p className="text-gray-600 dark:text-gray-400">
            查看和管理所有生成的音频记录。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
