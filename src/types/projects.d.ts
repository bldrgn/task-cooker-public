// Planning: This is the "planning" stage of the project. Tasks haven't started yet, and the overall picture is still being solidified.
// Cooking: This is the "cooking" stage of the project. Tasks are in progress, and concrete work is being done.
// On Hold: The project is "on hold." It has been paused for some reason.
// Completed: The project is "complete." The goal has been achieved, and all work has been completed.
export type ProjectStatus = 'planning' | 'cooking' | 'on_hold' | 'completed';

export interface Project {
  id?: string; // automatically generated docid
  // user-defined unique string. use in path.
  // e.g. https://../projects/${slog}/tasks
  slug?: string; // user-defined,
  name: string;
  overview: string; // Markdown
  ownerId: string; // auth UID
  memberIds?: string[]; // auth UIDs
  status: ProjectStatus;
  isArchived: boolean;

  // @see: https://firebase.google.com/docs/firestore/solutions/aggregation?hl=ja
  counts: {
    taskCount: number;
    noteCount: number;
    commentCount: number;
    emptyTaskCount: number;
    prepTaskCount: number;
    cookingTaskCount: number;
    doneTaskCount: number;
    highPriorityCount: number;
    mediumPriorityCount: number;
    lowPriorityCount: number;
  };

  progress: number; // calculated float value

  dates?: {
    startDate?: Date; // actual (planned) start date
    endDate?: Date; // actual end date
    dueDate?: Date; // planned end date
  };

  createdAt: Date;
  updatedAt: Date;
}

type ProjectCount = Pick<Project, 'counts'>;
type ProjectProgress = Pick<Project, 'progress'>;

// ProjectForm: create/edit project settings.
export interface ProjectFormInput
  extends Pick<
    Project,
    'slug' | 'name' | 'overview' | 'ownerId' | 'memberIds' | 'status'
  > {
  dates?: {
    startDate?: string; // actual (planned) start date
    endDate?: string; // actual end date
    dueDate?: string; // planned end date
  };
}
