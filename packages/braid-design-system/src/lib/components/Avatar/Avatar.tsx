import assert from 'assert';

import {
  useEffect,
  useState,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from 'react';

import { palette } from '../../color/palette';
import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { IconImageBroken, IconProfile } from '../icons';
import { Skeleton } from '../private/Skeleton/Skeleton';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Avatar.css';

export const validAvatarVariants = ['icon', 'initials'] as const;
export type AvatarVariant = (typeof validAvatarVariants)[number];

export const validAvatarSizes = [
  'small',
  'standard',
  'large',
  'xlarge',
] as const;
export type AvatarSize = (typeof validAvatarSizes)[number];

export interface AvatarProps {
  variant: AvatarVariant;
  name?: string;
  size?: AvatarSize;
  loading?: boolean;
  photoUrl?: string;
  photoError?: boolean;
  border?: boolean;
  icon?: ReactNode;
  data?: DataAttributeMap;
}

const backgroundColours = [
  { value: palette.seekPink[200], type: 'customLight' },
  { value: palette.seekBlueLight[200], type: 'customLight' },
  { value: palette.orange[200], type: 'customLight' },
  { value: palette.red[200], type: 'customLight' },
  { value: palette.purple[200], type: 'customLight' },
] as const;

const avatarSizeToBorderRadius = {
  xlarge: 'large',
  large: 'standard',
  standard: 'standard',
  small: 'standard',
} as const satisfies Record<
  AvatarSize,
  ComponentProps<typeof Box>['borderRadius']
>;

const avatarSizeToTextSize = {
  xlarge: 'large',
  large: 'large',
  standard: 'standard',
  small: 'small',
} as const satisfies Record<AvatarSize, ComponentProps<typeof Text>['size']>;

interface AvatarTextContentProps {
  size: AvatarSize;
  children: ReactNode;
}

const AvatarTextContent = ({ size, children }: AvatarTextContentProps) => {
  if (size !== 'xlarge') {
    return (
      <Text weight="strong" size={avatarSizeToTextSize[size]} baseline={false}>
        {children}
      </Text>
    );
  }

  return (
    <Heading level="3" component="span">
      {children}
    </Heading>
  );
};

const validCharactersRegex = /\p{L}/u;

const getInitials = (fullName: string): string | null => {
  let initials = '';
  const names = fullName
    .split(' ')
    .filter((name) => name.length > 0 && validCharactersRegex.test(name[0]));

  for (const name of names) {
    if (initials.length === 1) {
      break;
    }
    initials = initials + name[0];
  }

  if (initials.length === 0) {
    return null;
  }

  return initials.toLocaleUpperCase();
};

const backgroundColourForName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return backgroundColours[Math.abs(hash) % backgroundColours.length];
};

export const Avatar = ({
  name = '',
  variant,
  size = 'standard',
  loading = false,
  photoUrl,
  photoError = false,
  border = false,
  icon,
  data,
  ...restProps
}: AvatarProps): ReactElement => {
  assert(
    validAvatarVariants.indexOf(variant) >= 0,
    `Avatar variant of "${variant}" is not valid.`,
  );
  assert(
    validAvatarSizes.indexOf(size) >= 0,
    `Avatar size of "${size}" is not valid.`,
  );

  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [photoUrl]);

  const handleImageRef = (img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalHeight !== 0) {
      setImageLoaded(true);
    }
  };

  const commonBoxProps = {
    className: [styles.size[size], border ? styles.border : undefined],
    'aria-hidden': true as const,
    borderRadius: avatarSizeToBorderRadius[size],
    ...buildDataAttributes({ data, validateRestProps: restProps }),
  };

  if (loading) {
    return (
      <Box {...commonBoxProps} overflow="hidden">
        <Skeleton />
      </Box>
    );
  }

  if (photoError || (photoUrl && imageError)) {
    return (
      <Box
        {...commonBoxProps}
        display="flex"
        alignItems="center"
        justifyContent="center"
        background="neutralLight"
      >
        <AvatarTextContent size={size}>
          <IconImageBroken data={{ testid: 'broken-icon' }} />
        </AvatarTextContent>
      </Box>
    );
  }

  if (photoUrl) {
    return (
      <Box
        {...commonBoxProps}
        background="neutralLight"
        overflow="hidden"
        position="relative"
      >
        <Box
          component="img"
          ref={handleImageRef}
          src={photoUrl}
          alt=""
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
          className={[
            styles.image,
            imageLoaded ? styles.imageLoaded : undefined,
          ]}
        />
      </Box>
    );
  }

  const avatarIcon = icon ?? <IconProfile data={{ testid: 'fallback-icon' }} />;
  const initials = variant === 'initials' ? getInitials(name) : null;
  const textContent =
    variant === 'icon' ? avatarIcon : (initials ?? avatarIcon);

  const hasInitials = initials !== null;
  const colour = hasInitials ? backgroundColourForName(name) : null;

  return (
    <Box
      {...commonBoxProps}
      display="flex"
      alignItems="center"
      justifyContent="center"
      background={colour?.type ?? 'neutralSoft'}
      style={
        colour
          ? {
              background: colour.value,
            }
          : undefined
      }
    >
      <AvatarTextContent size={size}>{textContent}</AvatarTextContent>
    </Box>
  );
};

Avatar.displayName = 'Avatar';
