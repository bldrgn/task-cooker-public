import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Separator,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { COLORS } from '@/ui/colors';

const popoverVariants = tv({
  base: [COLORS.theme.base.text, COLORS.theme.base.bg],
  variants: {
    variant: {
      popover: [
        `shadow-xl border rounded-md p-0 transform duration-200 ease-in-out w-52`,
        COLORS.theme.base.border,
      ],
      separator: ['my-1 border-b', COLORS.theme.base.border],
      item: [
        `rounded-md group flex w-full items-center gap-2 px-3 py-2 text-sm outline-none transition-colors`,
        `data-[focus]:bg-base-50 dark:data-[focus]:bg-base-900`,
      ],
    },
  },
});

export type MenuItemData = {
  id: string;
  label: string;
  linkTo?: string;
  icon?: IconProp;
  onAction?: () => void;
};

interface PopoverMenuProps {
  trigger: React.ReactNode;
  items: MenuItemData[];
}

export const PopoverMenu: React.FC<PopoverMenuProps> = ({ trigger, items }) => {
  return (
    <MenuTrigger>
      {trigger}
      <Popover
        placement="bottom right"
        offset={10}
        className={popoverVariants({ variant: 'popover' })}
      >
        <Menu>
          {items.map((item) =>
            item.label === 'separator' ? (
              <Separator
                key={item.id}
                className={popoverVariants({ variant: 'separator' })}
              />
            ) : (
              <MenuItem
                key={item.id}
                href={item.linkTo}
                onAction={item.onAction}
                className={popoverVariants({ variant: 'item' })}
              >
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-4 w-4 text-base-500"
                  />
                )}
                {item.label}
              </MenuItem>
            )
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};
