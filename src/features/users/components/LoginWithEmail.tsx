import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { useAuth } from '@/features/users/hooks/useAuth';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@/ui/components';

const loginSchema = z.object({
  email: z.email('有効なメールアドレスを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
});

type LoginFormData = z.infer<typeof loginSchema>;

type LoginWithEmailProps = {
  setFormError: (message: string) => void;
  isSubmitting: boolean;
  loading: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
};

export const LoginWithEmail = ({
  setFormError,
  isSubmitting,
  loading,
  setIsSubmitting,
}: LoginWithEmailProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      await login(data.email, data.password);
      navigate('/app');
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'ログインエラーが発生しました'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            isInvalid={fieldState.invalid}
            isDisabled={isSubmitting || loading}
            className="space-y-2"
          >
            <Label className="block text-sm font-medium text-base-700 dark:text-base-300">
              メールアドレス
            </Label>
            <Input
              type="email"
              placeholder="example@example.com"
              autoComplete="email"
            />
            {fieldState.error && (
              <FieldError>{fieldState.error.message}</FieldError>
            )}
          </TextField>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            isInvalid={fieldState.invalid}
            isDisabled={isSubmitting || loading}
            className="space-y-2"
          >
            <Label>パスワード</Label>
            <Input
              type="password"
              placeholder="パスワードを入力"
              autoComplete="current-password"
            />
            {fieldState.error && (
              <FieldError>{fieldState.error.message}</FieldError>
            )}
          </TextField>
        )}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting || loading}
        className="w-full"
      >
        {isSubmitting ? 'ログイン中...' : 'ログイン'}
      </Button>
    </Form>
  );
};
