import { forwardRef } from 'react';

import { type AvatarProps, Avatar as BraidAvatar } from './Avatar';

import * as styles from './Avatar.css';

export const Avatar = forwardRef<
  HTMLElement,
  Omit<AvatarProps, 'size' | 'icon'> & {
    size?: string;
    icon?: AvatarProps['icon'] | boolean;
  }
>(({ size, icon, ...restProps }, ref) => (
  <BraidAvatar
    ref={ref}
    {...restProps}
    size={
      size && size in styles.size ? (size as AvatarProps['size']) : undefined
    }
    icon={typeof icon === 'boolean' ? undefined : icon}
  />
));

Avatar.displayName = 'Avatar';
