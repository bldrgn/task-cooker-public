export interface Note {
  id?: string; // automatically generated docid
  projectRef: string; // related project docid
  authorId: string; // auth UID
  title: string;
  content: string; // Markdown
  tags?: string[];
  isPublic: boolean; // default: private
  createdAt: Date;
  updatedAt: Date;
}

export interface NoteFormInput {
  title: string;
  content: string; // Markdown
  tags?: string[];
  isPublic: boolean; // default: private
}
