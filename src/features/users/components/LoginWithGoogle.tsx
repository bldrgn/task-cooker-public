import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { useAuth } from '@/features/users/hooks/useAuth';
import { Button } from '@/ui/components';

type LoginWithGoogleProps = {
  setFormError: (message: string) => void;
  isSubmitting: boolean;
};

export const LoginWithGoogle = ({
  setFormError,
  isSubmitting,
}: LoginWithGoogleProps) => {
  const { loginWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setFormError(
        err instanceof Error
          ? err.message
          : 'Googleログインエラーが発生しました'
      );
    }
  };

  return (
    <Button
      type="button"
      variant="secondary"
      size="lg"
      onClick={handleGoogleLogin}
      disabled={isSubmitting || loading}
      className="w-full flex items-center justify-center gap-3"
      icon={<FontAwesomeIcon icon={faGoogle} />}
    >
      Googleでログイン
    </Button>
  );
};
