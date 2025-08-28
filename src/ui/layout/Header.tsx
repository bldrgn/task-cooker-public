import { useDarkMode } from '@/hooks/useDarkMode';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500">
              <span className="text-sm font-bold text-white">🍅</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Task Cooker
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label={`${isDarkMode ? 'ライト' : 'ダーク'}に切り替える`}
            >
              <span className="inline">{isDarkMode ? `🌙` : `☀️`}</span>
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-2">
              <div className="bg-brand-500 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                T
              </div>
              <span className="hidden text-sm font-medium text-gray-700 sm:inline dark:text-gray-300">
                Taro
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
