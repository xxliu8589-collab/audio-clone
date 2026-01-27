'use client';

import SettingsForm from '../components/settings-form';

const SettingsPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">设置</h1>
      <div className="card p-6">
        <SettingsForm />
      </div>
    </div>
  );
};

export default SettingsPage;
