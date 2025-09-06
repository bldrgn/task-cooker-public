import React from 'react';
import { useQueries } from '@tanstack/react-query';
import { collection, getDocs, query } from 'firebase/firestore';
import { useProjects } from '@/features/projects/hooks/useProjects';
import { useAuth } from '@/features/users/hooks/useAuth';
import { db } from '@/libs/firebase';
import { Task } from '@/types/tasks';
import { MainLayout } from '@/ui/layouts/MainLayout';

const AppPage = () => {
  return (
    <MainLayout hasSidebar={true}>
      <h1 className="text-2xl font-bold">プロジェクトリスト</h1>
      <ProjectList />
    </MainLayout>
  );
};

const getTasksForProject = async (projectId: string): Promise<Task[]> => {
  const q = query(collection(db, 'projects', projectId, 'tasks'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Task
  );
};

export const ProjectList = () => {
  const { loading: isAuthLoading } = useAuth();
  const { data: projects, isLoading: isProjectsLoading } = useProjects();

  const projectTaskQueries =
    projects?.map((project) => ({
      queryKey: ['tasks', project.id],
      queryFn: () => getTasksForProject(project.id!),
      enabled: !!project.id,
    })) || [];

  const taskResults = useQueries({
    queries: projectTaskQueries,
  });
  const isLoadingTasks = taskResults.some((result) => result.isLoading);

  if (isAuthLoading || isProjectsLoading || isLoadingTasks) {
    return <div>プロジェクトとタスクを読み込み中...</div>;
  }

  if (projects?.length === 0) {
    return <div>プロジェクトがありません。</div>;
  }

  return (
    <div>
      {projects?.map((project, index) => (
        <div key={project.id}>
          <h3>
            {project.slug} - {project.name}
          </h3>
          <p>
            Status: {project.status} Owner: {project.ownerId.substring(0, 6)}{' '}
            Menber: {project.memberIds?.join(',')}
          </p>
          <ul className="my-2">
            {taskResults[index]?.data?.map((task) => (
              <li key={task.id}>
                {task.title} (Status: {task.status}, Priority: {task.priority})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AppPage;
