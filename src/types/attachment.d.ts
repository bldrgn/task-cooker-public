// The attachement feature will be implement in feature phase.
// Currently, we are only defining the type, not implementing it.

export type AttachmentType = 'google-drive' | 'storage';
export type FileExtension =
  | 'pdf'
  | 'docx'
  | 'xlsx'
  | 'jpg'
  | 'png'
  | 'gif'
  | 'mp4'
  | 'mov'
  | 'md'
  | 'txt'
  | 'zip'
  | 'other';

export interface Attachment {
  id?: string;
  projectRef: string; // related project docid
  name: string;
  url: string;
  type: AttachmentType;
  uploaderId: string;
  size: number;
  extension: FileExtension;
  createdAt: Date;
}
