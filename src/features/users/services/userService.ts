import { User } from '@/types';
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/api/firebase';

/**
 * ユーザープロファイルを取得
 */
export const getUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const docRef = doc(db, 'userProfiles', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as User;
    } else {
      return null;
    }
  } catch (error) {
    console.error('ユーザープロファイル取得エラー:', error);
    throw error;
  }
};

/**
 * ユーザープロファイルを作成
 */
export const createUserProfile = async (
  userId: string,
  profileData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>
): Promise<void> => {
  try {
    const docRef = doc(db, 'userProfiles', userId);
    await setDoc(docRef, {
      ...profileData,
      id: userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('ユーザープロファイル作成エラー:', error);
    throw error;
  }
};

/**
 * ユーザープロファイルを更新
 */
export const updateUserProfile = async (
  userId: string,
  updates: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<void> => {
  try {
    const docRef = doc(db, 'userProfiles', userId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('ユーザープロファイル更新エラー:', error);
    throw error;
  }
};
