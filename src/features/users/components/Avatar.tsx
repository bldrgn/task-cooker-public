import { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  photoURL?: string;
  displayName?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  photoURL,
  ...props
}: AvatarProps) => {
  const defaultImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=unknown`;
  return (
    <img
      src={photoURL || defaultImage}
      className="rounded-b-full h-8 w-8 object-contain"
      {...props}
    />
  );
};

export default Avatar;
