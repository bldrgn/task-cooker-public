import { Navigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const AuthGuard = ({ children, requireAuth = true }: AuthGuardProps) => {
  const { user, loading, initialized, initialize } = useAuthStore();
  const location = useLocation();

  // Initialize auth state
  useEffect(() => {
    initialize();
  }, [initialize]);

  // Show loading while initializing or loading
  if (!initialized || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse">
          <div className="bg-primary/20 h-8 w-8 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Redirect to login if auth required and not authenticated
  if (requireAuth && !user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Redirect to home if already authenticated on login page
  if (!requireAuth && user) {
    const from = location.state?.from || '/';
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
};
