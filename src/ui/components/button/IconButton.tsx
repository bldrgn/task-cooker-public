import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { VariantProps, tv } from 'tailwind-variants';

const iconButtonVariants = tv({
  base: 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: ['bg-primary-500 text-primary-50', 'hover: bg-primary-700'],
      outline: [
        'bg-primary-50 dark:bg-transparent',
        'text-primary-700 dark:text-base-200',
        'hover:bg-primary-700 hover:text-primary-60',
      ],
      transparent: ['text-base-800 dark:text-base-200 bg-transparent'],
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      variant: ['primary', 'outline', 'transparent'],
      class: 'focus:ring-primary-500 active:scale-95',
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
});

export type IconButtonProps = AriaButtonProps & {
  icon: IconProp;
  variant?: 'primary' | 'outline' | 'transparent';
};

export type IconButtonVariants = VariantProps<typeof iconButtonVariants>;

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant,
  isDisabled,
  className,
  ...props
}) => {
  return (
    <AriaButton
      {...props}
      isDisabled={isDisabled}
      className={iconButtonVariants({
        variant,
        disabled: isDisabled,
        className,
      })}
    >
      <FontAwesomeIcon icon={icon} className="text-primary-400 h-6 w-6" />
    </AriaButton>
  );
};
export default IconButton;
