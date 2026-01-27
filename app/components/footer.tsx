const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2024 声音克隆网站. 仅供个人使用.</p>
          <p className="mt-1">
            使用 <a href="https://fish.audio" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">Fish Audio</a> API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
