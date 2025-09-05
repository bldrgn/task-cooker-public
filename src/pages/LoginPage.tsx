import { useState } from 'react';
import { LoginWithEmail } from '@/features/users/components/LoginWithEmail';
import { LoginWithGoogle } from '@/features/users/components/LoginWithGoogle';
import { useAuth } from '@/features/users/hooks/useAuth';
import { Card } from '@/ui/components';
import { MainLayout } from '@/ui/layouts/MainLayout';

export const LoginPage = () => {
  return (
    <MainLayout hasSidebar={false}>
      <LoginForm />
    </MainLayout>
  );
};

const LoginForm = () => {
  const { loading } = useAuth();
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSetError = (message: string) => {
    setFormError(message);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-base-900 dark:text-base-100">
            TaskCookerにログイン
          </h2>
        </div>

        <Card variant="default" padding="lg" className="shadow-lg">
          {formError && (
            <div className="rounded-md bg-cooking-50 p-4 border border-cooking-200 mb-6">
              <p className="text-sm text-cooking-800">{formError}</p>
            </div>
          )}

          <LoginWithEmail
            setFormError={handleSetError}
            isSubmitting={isSubmitting}
            loading={loading}
            setIsSubmitting={setIsSubmitting}
          />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-base-300 dark:border-base-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-base-500 dark:bg-base-800 dark:text-base-400">
                  または
                </span>
              </div>
            </div>

            <div className="mt-6">
              <LoginWithGoogle
                setFormError={handleSetError}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
