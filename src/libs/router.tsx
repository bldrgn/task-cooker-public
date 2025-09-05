import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@/features/users/components/ProtectedRoute';
import AppPage from '@/pages/AppPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute isRootPage={true} />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: (
      <ProtectedRoute requireAuth={false}>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  // logaut後はrootに飛ばす
  { path: '/logout', element: <Navigate to="/" /> },

  {
    path: '/app',
    element: (
      <ProtectedRoute requireAuth={true}>
        <AppPage />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: '/projects',
  //   element: (
  //     <ProtectedRoute requireAuth={true}>
  //       <ProjectListPage />
  //     </ProtectedRoute>
  //   )
  // },
  // {
  //   path: '/projects/:projectId/tasks',
  //   element: (
  //     <ProtectedRoute requireAuth={true}>
  //       <TaskListPage />
  //     </ProtectedRoute>
  //   )
  // },
  // {
  //   path: '/profile',
  //   element: (
  //     <ProtectedRoute requireAuth={true}>
  //       <UserProfilePage />
  //     </ProtectedRoute>
  //   )
  // },
]);
