import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/users/hooks/useAuth';
import AppPage from '@/pages/AppPage';
import HomePage from '@/pages/HomePage';

interface ProtectedRouteProps {
  children?: React.ReactNode;
  requireAuth?: boolean;
  isRootPage?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
  isRootPage = false,
}) => {
  const { user, loading } = useAuth();

  // 認証状態が未確定のとき
  if (loading) return <div>Loading...</div>;

  // ルートページの場合は認証状態で分岐
  if (isRootPage) {
    return user ? <AppPage /> : <HomePage />;
  }

  // 通常のProtectedRouteロジック
  if (requireAuth && !user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
