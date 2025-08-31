import React from 'react';
import Header from './Header';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* <TimerSection /> */}
          Here is Main contentarea!
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
