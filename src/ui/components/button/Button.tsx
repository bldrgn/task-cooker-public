import { ReactNode } from 'react';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { type VariantProps, tv } from 'tailwind-variants';
import { COLORS } from '@/ui/colors';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: [
        'bg-primary-500',
        'text-white',
        'focus:ring-primary-500',
        'active:scale-95',
      ],
      secondary: [
        COLORS.theme.secondary.bg,
        COLORS.theme.primary.text,
        COLORS.theme.secondary.border,
        'border',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        'focus:ring-orange-500',
      ],
      destructive: [
        'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-600',
        'text-white',
        'focus:ring-red-500',
      ],
      ghost: ['text-base-800 dark:text-base-200 bg-transparent'],
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      icon: 'h-8 w-8 p-1',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      variant: ['ghost', 'secondary'],
      class: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends AriaButtonProps, ButtonVariants {
  children?: ReactNode;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}) => {
  return (
    <AriaButton
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children && <span>{children}</span>}
    </AriaButton>
  );
};
