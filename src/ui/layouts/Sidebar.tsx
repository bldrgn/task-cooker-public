import React from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogTrigger, Modal } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { COLORS } from '../colors';
import { IconButton } from '../components';
import SidebarContent from './SidebarContent';

interface SidebarProps {
  isLargeScreen: boolean;
}

const dialogVariants = tv({
  base: [
    COLORS.theme.base.text,
    COLORS.theme.base.bg,
    'w-80 max-w-sm shadow-lg h-full overflow-hidden focus:outline-none',
  ],
});

export const Sidebar: React.FC<SidebarProps> = ({ isLargeScreen }) => {
  if (isLargeScreen) {
    return <SidebarContent />;
  }
  return (
    <DialogTrigger>
      <IconButton variant="transparent" icon={faBars} />
      <Modal className="fixed inset-0 z-[200] flex items-start justify-start bg-base-900/50 bg-opacity-50">
        <Dialog className={dialogVariants()}>
          {({ close }) => (
            <>
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-semibold">メニュー</h2>
                <IconButton
                  variant="transparent"
                  onPress={close}
                  icon={faTimes}
                />
              </div>
              <div className="flex-1 overflow-y-auto h-full">
                <SidebarContent />
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
