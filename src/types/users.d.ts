export interface User {
  id?: string; // Firestore documentID, equal to Firebase Auth UID
  userName: string;
  email: string;
  iconSrc?: string; // image url
  bio?: string;
  website?: string;

  authProvider: 'email' | 'google';

  // profile field can acceess project member.
  profile: {
    userName: string;
    email?: string; // user can set preffered email or not public.
    iconSrc?: string; // image url
    bio?: string;
    website?: string;
  };
  preferences?: {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
  };

  createdAt: Date;
  updatedAt: Date;

  lastActiveProjectId?: string; // docid or slug

  developerFlag?: boolean;
}
