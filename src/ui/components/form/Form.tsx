import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
  Form as AriaForm,
  FormProps as AriaFormProps,
  Input as AriaInput,
  InputProps as AriaInputProps,
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { COLORS } from '@/ui/colors';

const inputVariants = tv({
  base: [
    'rounded-md border transition-colors focus:outline-none focus:ring-2 w-full',
    COLORS.theme.primary.bg,
    COLORS.theme.primary.text,
    COLORS.theme.primary.border,
    'placeholder:text-base-400 dark:placeholder:text-base-500',
    'focus:ring-primary-500 focus:border-primary-500',
  ],
  variants: {
    error: {
      true: 'border-error dark:border-error-dark focus:ring-error dark:focus:ring-error-dark focus:border-error dark:focus:border-error-dark',
    },
    size: {
      sm: 'px-2 py-2 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base',
    },
  },
});

export const Form: React.FC<AriaFormProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <AriaForm className={`space-y-4 ${className}`} {...props}>
      {children}
    </AriaForm>
  );
};

export const TextField: React.FC<AriaTextFieldProps> = ({
  children,
  ...props
}) => {
  return <AriaTextField {...props}>{children}</AriaTextField>;
};

interface LabelProps {
  required?: boolean;
}
export const Label: React.FC<LabelProps & AriaLabelProps> = ({
  children,
  required,
  ...props
}) => {
  return (
    <AriaLabel
      className="block text-sm font-medium text-base-700 dark:text-base-300"
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-error dark:text-error-dark">*</span>
      )}
    </AriaLabel>
  );
};

interface InputProps {
  size?: 'sm' | 'md' | 'lg';
  isError?: boolean;
}
export const Input: React.FC<InputProps & AriaInputProps> = ({
  size,
  isError,
  className,
  ...props
}) => {
  return (
    <AriaInput
      className={inputVariants({
        size,
        error: isError,
        className,
      })}
      {...props}
    />
  );
};

interface TextareaProps {
  size?: 'sm' | 'md' | 'lg';
  isError?: boolean;
}
export const Textarea: React.FC<TextareaProps & AriaTextAreaProps> = ({
  size,
  isError,
  className,
  ...props
}) => {
  return (
    <AriaTextArea
      className={inputVariants({
        size,
        error: isError,
        className,
      })}
      {...props}
    />
  );
};

export const FieldError: React.FC<AriaFieldErrorProps> = ({
  children,
  ...props
}) => {
  return (
    <AriaFieldError
      className="text-sm text-error dark:text-error-dark"
      {...props}
    >
      {children}
    </AriaFieldError>
  );
};
