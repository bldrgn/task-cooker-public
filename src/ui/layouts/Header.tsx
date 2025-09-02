import React from 'react';
import PancakeStack3Icon from '@/ui/assets/PancakeStack3Icon';
import { Sidebar } from './Sidebar';

interface HeaderProps {
  hasSidebar: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hasSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-16 not-first:shadow-sm p-4 flex items-center gap-2">
      {hasSidebar && (
        <div className="block lg:hidden">
          <Sidebar isLargeScreen={false} />
        </div>
      )}
      <div className="flex items-center gap-2 mr-auto">
        <PancakeStack3Icon ariaLabel="" size={36} />
        <span className="font-bold text-xl">Task Cooker</span>
      </div>
    </header>
  );
};
