import {
  type AvatarProps,
  Avatar as BraidAvatar,
  validAvatarSizes,
} from './Avatar';

export const Avatar = ({ size, ...restProps }: AvatarProps) => (
  <BraidAvatar
    size={size && validAvatarSizes.includes(size) ? size : undefined}
    {...restProps}
  />
);
