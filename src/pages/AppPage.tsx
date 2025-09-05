import React from 'react';
import { MainLayout } from '@/ui/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout hasSidebar={true}>
      <h1 className="text-2xl font-bold">プロジェクトリスト</h1>
    </MainLayout>
  );
};

export default HomePage;
