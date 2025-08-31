import { TaskStatus } from 'types/task';
import CheckListIcon from './CheckListIcon';
import EmptyPlateIcon from './EmptyPlateIcon';
import FryingPanIcon from './FryingPanIcon';
import PancakeStack3Icon from './PancakeStack3Icon';

interface Props {
  status: TaskStatus;
  className?: string;
  size?: number;
  ariaLabel?: string;
}

export const TaskStatusIcon: React.FC<Props> = (props) => {
  switch (props.status) {
    case 'empty':
      return <EmptyPlateIcon {...props} />;
    case 'prep':
      return <CheckListIcon {...props} />;
    case 'cooking':
      return <FryingPanIcon {...props} />;
    case 'done':
      return <PancakeStack3Icon {...props} />;
    default:
      return <EmptyPlateIcon {...props} />;
  }
};
