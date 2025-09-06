import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '@/features/users/hooks/useAuth';
import { db } from '@/libs/firebase';
import { Project } from '@/types/projects';

const getProjects = async (uid: string): Promise<Project[]> => {
  const q = query(
    collection(db, 'projects'),
    where('memberIds', 'array-contains', uid)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Project
  );
};

export const useProjects = () => {
  const { user, loading: isAuthLoading } = useAuth();
  const uid = user?.uid;

  console.log(uid);

  return useQuery<Project[]>({
    queryKey: ['projects', uid],
    queryFn: () => getProjects(uid!),
    enabled: !!uid && !isAuthLoading,
  });
};
