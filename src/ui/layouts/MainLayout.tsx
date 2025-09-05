import React, { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { COLORS } from '../colors';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  hasSidebar: boolean;
  children: ReactNode;
}

const containerVariants = tv({
  base: [COLORS.theme.base.text, COLORS.theme.base.bg, 'flex h-screen'],
});

export const MainLayout: React.FC<MainLayoutProps> = ({
  hasSidebar,
  children,
}) => {
  return (
    <div className={containerVariants()}>
      {hasSidebar && (
        <div className="hidden lg:block">
          <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 overflow-y-auto overflow-x-hidden scrollbar">
            <Sidebar isLargeScreen={true} />
          </aside>
        </div>
      )}

      <div className={`flex flex-1 flex-col pt-16 lg:ml-64`}>
        <Header hasSidebar={hasSidebar} />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-primary-100 dark:bg-base-900">
          {children}
        </main>
      </div>
    </div>
  );
};
