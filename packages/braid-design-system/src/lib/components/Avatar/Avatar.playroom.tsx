import {
  type AvatarProps,
  Avatar as BraidAvatar,
  validAvatarSizes,
  validAvatarVariants,
} from './Avatar';

export const Avatar = ({ variant, size, ...restProps }: AvatarProps) => (
  <BraidAvatar
    variant={
      variant && validAvatarVariants.includes(variant) ? variant : undefined
    }
    size={size && validAvatarSizes.includes(size) ? size : undefined}
    {...restProps}
  />
);
