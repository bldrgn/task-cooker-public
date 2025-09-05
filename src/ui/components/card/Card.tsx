import { HTMLAttributes } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';
import { COLORS } from '@/ui/colors';

// TaskCooker Card Variants
const cardVariants = tv({
  base: 'rounded-xl border transition-all',
  variants: {
    variant: {
      default: [
        COLORS.theme.primary.text,
        COLORS.theme.primary.bg,
        COLORS.theme.primary.border,
      ],
      secondary: [
        COLORS.theme.secondary.text,
        COLORS.theme.secondary.bg,
        COLORS.theme.secondary.border,
      ],
      task: [
        COLORS.theme.primary.bg,
        COLORS.theme.primary.border,
        'hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20',
      ],
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    },
    statusBorder: {
      empty: `border-l-4 ${COLORS.status.empty.border} rounded-l-xl`,
      prep: `border-l-4 ${COLORS.status.prep.border} rounded-l-xl`,
      cooking: `border-l-4 ${COLORS.status.cooking.border} rounded-l-xl`,
      done: `border-l-4 ${COLORS.status.done.border} rounded-l-xl`,
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    statusBorder: 'none',
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    CardVariants {}

export const Card: React.FC<CardProps> = ({
  className,
  variant,
  padding,
  statusBorder,
  ...props
}) => {
  return (
    <div
      className={cardVariants({ variant, padding, statusBorder, className })}
      {...props}
    />
  );
};
