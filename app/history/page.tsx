'use client';

import AudioHistory from '../components/ui/audio-history';

const HistoryPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">历史记录</h1>
      <AudioHistory />
    </div>
  );
};

export default HistoryPage;
