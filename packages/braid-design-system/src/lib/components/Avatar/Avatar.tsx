import assert from 'assert';

import {
  forwardRef,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from 'react';

import { palette } from '../../color/palette';
import { Box, type BoxProps } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { IconImageBroken, IconProfile } from '../icons';
import { Skeleton } from '../private/Skeleton/Skeleton';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Avatar.css';

type AvatarSize = keyof typeof styles.size;

export interface AvatarProps {
  size?: AvatarSize;
  'aria-label'?: string;
  'aria-describedby'?: string;
  name?: string;
  imageUrl?: string;
  icon?: ReactElement;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: BoxProps['tabIndex'];
  data?: DataAttributeMap;
}

const backgroundColours = [
  { value: palette.seekPink[200], type: 'customLight' },
  { value: palette.seekBlueLight[200], type: 'customLight' },
  { value: palette.orange[200], type: 'customLight' },
  { value: palette.red[200], type: 'customLight' },
  { value: palette.purple[200], type: 'customLight' },
] as const;

const isNonSvgDataUri = (src: string) =>
  /^data:/i.test(src) && !/^data:image\/svg/i.test(src);

const isEmptyDecodedImage = (img: HTMLImageElement) =>
  img.naturalWidth === 0 && img.naturalHeight === 0;

const rasterDataUriFailedToDecode = (img: HTMLImageElement) =>
  img.complete && isEmptyDecodedImage(img) && isNonSvgDataUri(img.src);

const avatarSizeToBorderRadius = {
  xxlarge: 'large',
  xlarge: 'large',
  large: 'standard',
  standard: 'standard',
  medium: 'standard',
  small: 'standard',
  xsmall: 'standard',
} as const satisfies Record<
  AvatarSize,
  ComponentProps<typeof Box>['borderRadius']
>;

const avatarSizeToTextSize = {
  xxlarge: 'large',
  xlarge: 'large',
  large: 'large',
  standard: 'standard',
  medium: 'small',
  small: 'small',
  xsmall: 'xsmall',
} as const satisfies Record<AvatarSize, ComponentProps<typeof Text>['size']>;

interface AvatarTextContentProps {
  size: AvatarSize;
  children: ReactNode;
}

const AvatarTextContent = ({ size, children }: AvatarTextContentProps) => {
  if (size !== 'xxlarge') {
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
  const names = fullName
    .split(' ')
    .filter((part) => part.length > 0 && validCharactersRegex.test(part[0]));

  if (names.length === 0) {
    return null;
  }

  return names[0][0].toLocaleUpperCase();
};

const backgroundColourForName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return backgroundColours[Math.abs(hash) % backgroundColours.length];
};

const assertIconHasNoSize = (icon: ReactElement) => {
  assert(
    isValidElement(icon) &&
      (icon.props as { size?: unknown }).size === undefined,
    "Icons cannot set the 'size' prop when passed to an Avatar component",
  );
};

const isAvatarSize = (value: string): value is AvatarSize =>
  value in styles.size;

const resolveAvatarSize = (size: string): AvatarSize =>
  isAvatarSize(size) ? size : 'standard';

export const Avatar = forwardRef<HTMLElement, AvatarProps>(
  (
    {
      name = '',
      'aria-label': ariaLabel,
      size: sizeProp = 'standard',
      loading = false,
      imageUrl,
      icon,
      onClick,
      tabIndex,
      data,
      ...restProps
    },
    ref,
  ) => {
    const size = resolveAvatarSize(sizeProp);
    const focusable = tabIndex != null;

    assert(
      !onClick || Boolean(ariaLabel),
      'Avatar with onClick requires aria-label so the button has an accessible name.',
    );

    assert(
      !focusable || Boolean(ariaLabel),
      'Avatar with tabIndex requires aria-label so the focusable avatar has an accessible name.',
    );

    if (icon) {
      assertIconHasNoSize(icon);
    }

    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useLayoutEffect(() => {
      setImageError(false);
      const img = imageRef.current;
      // Firefox often fires load (not error) for invalid raster data URIs, or
      // marks them complete at 0×0. SVG placeholders can also report 0, so
      // only treat non-SVG data URIs as failed. Cached images must not wait
      // for onLoad.
      if (img && rasterDataUriFailedToDecode(img)) {
        setImageError(true);
        setImageLoaded(false);
        return;
      }
      setImageLoaded(Boolean(img?.complete));

      if (
        !img ||
        typeof img.decode !== 'function' ||
        !/^data:/i.test(img.src) ||
        /^data:image\/svg/i.test(img.src)
      ) {
        return;
      }

      let cancelled = false;
      img.decode().then(
        () => {
          if (cancelled) {
            return;
          }
          if (rasterDataUriFailedToDecode(img)) {
            setImageError(true);
          }
        },
        () => {
          if (!cancelled) {
            setImageError(true);
          }
        },
      );

      return () => {
        cancelled = true;
      };
    }, [imageUrl, loading]);

    const labelled = Boolean(ariaLabel);
    const clickable = Boolean(onClick);
    const borderRadius = avatarSizeToBorderRadius[size];

    let a11yProps;
    if (clickable) {
      a11yProps = {
        component: 'button' as const,
        type: 'button' as const,
        onClick,
        'aria-label': ariaLabel,
      };
    } else if (labelled) {
      a11yProps = { role: 'img' as const, 'aria-label': ariaLabel };
    } else if (!focusable) {
      a11yProps = { 'aria-hidden': true as const };
    } else {
      a11yProps = {};
    }

    const rootProps = {
      ref,
      tabIndex,
      display: 'flex' as const,
      borderRadius,
      className: [
        styles.root,
        styles.size[size],
        clickable ? styles.clickable : undefined,
        clickable &&
        (size === 'xsmall' || size === 'small' || size === 'medium')
          ? styles.enlargedHitArea
          : undefined,
      ],
      ...a11yProps,
      ...buildDataAttributes({ data, validateRestProps: restProps }),
      ...restProps,
    };

    const faceProps = {
      className: styles.keyline,
      borderRadius,
      overflow: 'hidden' as const,
      height: 'full' as const,
      width: 'full' as const,
    };

    const face = (() => {
      if (loading) {
        return (
          <Box {...faceProps}>
            <Skeleton />
          </Box>
        );
      }

      if (imageUrl && imageError) {
        return (
          <Box
            {...faceProps}
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="neutralLight"
          >
            <AvatarTextContent size={size}>
              <IconImageBroken />
            </AvatarTextContent>
          </Box>
        );
      }

      if (imageUrl) {
        return (
          <Box {...faceProps} background="neutralLight">
            <Box
              component="img"
              key={imageUrl}
              ref={imageRef}
              src={imageUrl}
              alt=""
              aria-hidden
              onError={() => setImageError(true)}
              onLoad={() => {
                const img = imageRef.current;
                if (
                  img &&
                  isEmptyDecodedImage(img) &&
                  isNonSvgDataUri(img.src)
                ) {
                  setImageError(true);
                  return;
                }
                setImageLoaded(true);
              }}
              className={[
                styles.image,
                imageLoaded ? styles.imageLoaded : undefined,
              ]}
            />
          </Box>
        );
      }

      const resolvedInitials = getInitials(name);
      const showCustomIcon = resolvedInitials === null && Boolean(icon);
      let textContent: ReactNode = resolvedInitials;
      if (showCustomIcon) {
        textContent = icon;
      } else if (resolvedInitials === null) {
        textContent = <IconProfile />;
      }

      const colour =
        resolvedInitials && !showCustomIcon
          ? backgroundColourForName(name)
          : null;

      return (
        <Box
          {...faceProps}
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
    })();

    return <Box {...rootProps}>{face}</Box>;
  },
);

Avatar.displayName = 'Avatar';
