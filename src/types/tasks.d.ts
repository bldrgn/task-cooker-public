export type TaskPriority = 'high' | 'medium' | 'low';

// empty: Not yet started
// prep: in preparation
// cooking: in progress
// done: completed
export type TaskStatus = 'empty' | 'prep' | 'cooking' | 'done';

export interface Task {
  id?: string; // firebase docID
  projectRef: string; // project's docID
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo?: string;

  dates?: {
    startDate?: Date; // actual (planned) start date
    endDate?: Date; // actual end date
    dueDate?: Date; // planned end date
  };

  position?: number; // User-defined sort order

  createdAt: Date;
  updatedAt: Date;
}

export interface TaskPriorityConfig {
  label: string;
  color: string;
}

export interface TaskStatusConfig {
  label: string;
  color: string;
}

export type TaskPriorityConfigMap = Record<TaskPriority, TaskPriorityConfig>;
export type TaskStatusConfigMap = Record<TaskStatus, TaskStatusConfig>;

export interface TaskFormInput
  extends Pick<
    Task,
    'title' | 'description' | 'status' | 'priority' | 'assignedTo' | 'position'
  > {
  dates?: {
    startDate?: string;
    endDate?: string; // actual end date
    dueDate?: string; // planned end date
  };
}
