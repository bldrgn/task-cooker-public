import React, { useEffect, useState } from 'react';

// ダミーデータ取得関数
const fetchProjects = async () => {
  // サーバーサイドからデータを取得するAPIコールをシミュレート
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'プロジェクトA' },
        { id: 2, name: 'プロジェクトB' },
        { id: 3, name: 'プロジェクトC' },
        { id: 4, name: 'プロジェクトD' },
        { id: 5, name: 'プロジェクトE' },
        { id: 6, name: 'プロジェクトF' },
        { id: 7, name: 'プロジェクトG' },
        { id: 8, name: 'プロジェクトH' },
        { id: 9, name: 'プロジェクトI' },
        { id: 10, name: 'プロジェクトJ' },
        { id: 11, name: 'プロジェクトJ' },
        { id: 12, name: 'プロジェクトJ' },
        { id: 13, name: 'プロジェクトJ' },
        { id: 14, name: 'プロジェクトJ' },
        { id: 15, name: 'プロジェクトJ' },
      ]);
    }, 0); // 1秒の遅延をシミュレート
  });
};

type Project = {
  id: number;
  name: string;
};

export const SidebarContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const data = (await fetchProjects()) as Project[];
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-500">プロジェクトを読み込み中...</div>;
  }

  return (
    <nav className="p-4">
      <h2 className="text-sm font-semibold text-gray-400 mb-2">Projects</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={`/projects/${project.id}`}
              className="block p-2 rounded-md hover:bg-primary-100 dark:hover:bg-base-600 transition-colors duration-200"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarContent;
