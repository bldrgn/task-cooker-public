export interface Comment {
  id?: string; // automatically generated docid
  authorId: string; // firebase auth UID
  content: string; // Markdown
  createdAt: Date;
  updatedAt?: Date;
}

export interface Discussion {
  id?: string; // automatically generated docid
  projectRef: string; // related project docID
  title: string;
  status: 'open' | 'closed'; // default: open
  createdAt: Date;
  updatedAt: Date;
  // these fields will be implemented in the future:
  // body?: string; // Markdown
  // authorId?: string;
  // labels?: string[];
  // assigneeId?: string;
}
