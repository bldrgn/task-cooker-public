import { create } from 'zustand';
import { Task } from '@/types/tasks';

type ModalType = 'TASK_FORM_MODAL' | null;
type DialogType = 'CONFIRM_DELETE' | null;

interface ModalProps {
  cardId?: number;
  taskId?: string;
  task?: Partial<Task>;
  onTaskUpdate?: (taskId: string, updates: Record<string, unknown>) => void;
  [key: string]: unknown;
}

interface DialogProps {
  title?: string;
  description?: string;
  onConfirm?: () => void;
  [key: string]: unknown;
}

interface UIState {
  isDrawerOpen: boolean;
  isModalOpen: boolean;
  modalType: ModalType;
  modalProps: ModalProps;
  isDialogOpen: boolean;
  dialogType: DialogType;
  dialogProps: DialogProps;

  openDrawer: () => void;
  openModal: (type: ModalType, props?: ModalProps) => void;
  openDialog: (type: DialogType, props?: DialogProps) => void;
  closeAll: () => void;
}

const useUIStore = create<UIState>((set) => ({
  isDrawerOpen: false,
  isModalOpen: false,
  modalType: null,
  modalProps: {},
  isDialogOpen: false,
  dialogType: null,
  dialogProps: {},

  openDrawer: () =>
    set({
      isDrawerOpen: true,
      isModalOpen: false,
      isDialogOpen: false,
      modalType: null,
      modalProps: {},
      dialogType: null,
      dialogProps: {},
    }),

  openModal: (type, props = {}) =>
    set({
      isModalOpen: true,
      modalType: type,
      modalProps: props,
      isDrawerOpen: false,
      isDialogOpen: false,
    }),

  openDialog: (type, props = {}) =>
    set({
      isDialogOpen: true,
      dialogType: type,
      dialogProps: props,
      isDrawerOpen: false,
      isModalOpen: false,
    }),

  closeAll: () =>
    set({
      isDrawerOpen: false,
      isModalOpen: false,
      modalType: null,
      modalProps: {},
      isDialogOpen: false,
      dialogType: null,
      dialogProps: {},
    }),
}));

export default useUIStore;
