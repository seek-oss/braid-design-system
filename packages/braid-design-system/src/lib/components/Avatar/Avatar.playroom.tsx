import {
  type AvatarProps,
  Avatar as BraidAvatar,
  validAvatarSizes,
  validAvatarVariants,
} from './Avatar';

export const Avatar = ({
  variant = 'initials',
  size,
  icon,
  ...restProps
}: AvatarProps) => (
  <BraidAvatar
    variant={validAvatarVariants.includes(variant) ? variant : 'initials'}
    size={size && validAvatarSizes.includes(size) ? size : undefined}
    icon={typeof icon !== 'boolean' ? icon : undefined}
    {...restProps}
  />
);
