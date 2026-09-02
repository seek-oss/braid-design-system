import {
  type AvatarProps,
  Avatar as BraidAvatar,
  validAvatarSizes,
  validAvatarVariants,
} from './Avatar';

export const Avatar = ({ variant, size, icon, ...restProps }: AvatarProps) => (
  <BraidAvatar
    variant={
      variant && validAvatarVariants.includes(variant) ? variant : undefined
    }
    size={size && validAvatarSizes.includes(size) ? size : undefined}
    icon={typeof icon !== 'boolean' ? icon : undefined}
    {...restProps}
  />
);
