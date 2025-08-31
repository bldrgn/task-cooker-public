// Planning: This is the "planning" stage of the project. Tasks haven't started yet, and the overall picture is still being solidified.
// Cooking: This is the "cooking" stage of the project. Tasks are in progress, and concrete work is being done.
// On Hold: The project is "on hold." It has been paused for some reason.
// Completed: The project is "complete." The goal has been achieved, and all work has been completed.
export type ProjectStatus = 'planning' | 'cooking' | 'on_hold' | 'completed';

export interface Project {
  id?: string; // automatically generated docid
  slug?: string; // user-defined, if undefined, replaced slug.
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
    startDate?: Date;
    endDate?: Date; // actual end date
    dueDate?: Date; // planned end date
  };

  createdAt: Date;
  updatedAt: Date;
}

type ProjectCount = Pick<Project, 'counts'>;
type ProjectProgress = Pick<Project, 'progress'>;

export interface ProjectFormInput {
  slug?: string; // user-defined, if undefined, replaced slug.
  name: string;
  overview: string; // Markdown
  ownerId: string; // auth UID
  memberIds?: string[]; // auth UIDs
  status: ProjectStatus;
  isArchived: boolean;
  dates?: {
    startDate?: string;
    endDate?: string; // actual end date
    dueDate?: string; // planned end date
  };
}
