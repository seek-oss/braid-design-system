import assert from 'assert';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Fragment, type FC } from 'react';

import { iconSize } from '../../hooks/useIcon';
import { type BoxProps, Box } from '../Box/Box';
import { type HeadingProps, Heading } from '../Heading/Heading';
import { type TextProps, Text } from '../Text/Text';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { iconSlotSpace } from '../private/iconSlotSpace';

import * as styles from './Skeleton.css';

type SkeletonWidth = keyof typeof styles.width | number;
type SkeletonRectangleHeight = keyof typeof styles.rectangleHeight | 'full';

interface SkeletonSharedProps {
  delayVisibility?: boolean;
  'aria-label'?: string;
  data?: DataAttributeMap;
  width?: SkeletonWidth;
}

export type SkeletonProps =
  | (SkeletonSharedProps & {
      type?: 'text';
      size?: TextProps['size'];
      baseline?: TextProps['baseline'];
      icon?: boolean | 'square' | 'circle';
      lines?: number;
      level?: never;
      height?: never;
    })
  | (SkeletonSharedProps & {
      type: 'heading';
      level: HeadingProps['level'];
      size?: never;
      baseline?: never;
      icon?: never;
      lines?: never;
      height?: never;
    })
  | (SkeletonSharedProps & {
      type: 'button';
      size?: never;
      baseline?: never;
      icon?: never;
      lines?: never;
      level?: never;
      height?: never;
    })
  | (SkeletonSharedProps & {
      type: 'rectangle';
      height?: SkeletonRectangleHeight;
      size?: never;
      baseline?: never;
      icon?: never;
      lines?: never;
      level?: never;
    });

type SkeletonType = NonNullable<SkeletonProps['type']>;

const resolveWidthClass = (width: SkeletonWidth | undefined) => {
  if (width === undefined) {
    return styles.width.full;
  }

  if (typeof width === 'number') {
    return styles.percentWidth;
  }

  return styles.width[width];
};

const resolveBoxHeight = (
  type: SkeletonType,
  height: SkeletonRectangleHeight | undefined,
): BoxProps['height'] => {
  if (type === 'button') {
    return 'touchable';
  }

  if (type === 'rectangle' && height === 'full') {
    return 'full';
  }

  return undefined;
};

export const Skeleton: FC<SkeletonProps> = ({
  type = 'text',
  size,
  level,
  width,
  height = type === 'rectangle' ? 'xxxlarge' : undefined,
  baseline = type === 'text' ? true : undefined,
  icon,
  lines = type === 'text' ? 1 : undefined,
  delayVisibility = false,
  'aria-label': ariaLabel,
  data,
  ...restProps
}) => {
  assert(
    size === undefined || type === 'text',
    'The "size" prop is only valid when type is "text"',
  );
  assert(
    baseline === undefined || type === 'text',
    'The "baseline" prop is only valid when type is "text"',
  );
  assert(
    icon === undefined || type === 'text',
    'The "icon" prop is only valid when type is "text"',
  );
  assert(
    lines === undefined || type === 'text',
    'The "lines" prop is only valid when type is "text"',
  );
  assert(
    lines === undefined || (Number.isInteger(lines) && lines >= 1),
    'The "lines" prop must be a positive integer',
  );
  assert(
    type !== 'heading' || level !== undefined,
    'The "level" prop is required when type is "heading"',
  );
  assert(
    height === undefined || type === 'rectangle',
    'The "height" prop is only valid when type is "rectangle"',
  );

  const labelled = Boolean(ariaLabel);
  const a11yProps = labelled
    ? {
        'aria-label': ariaLabel,
        role: 'status' as const,
        'aria-live': 'polite' as const,
      }
    : {
        'aria-hidden': true as const,
      };

  const delayClass = delayVisibility ? styles.delayVisibility : undefined;
  const customWidthStyle =
    typeof width === 'number'
      ? assignInlineVars({ [styles.percentWidthVar]: `${width}%` })
      : undefined;
  const spaceHeight =
    type === 'rectangle' && height && height !== 'full'
      ? styles.rectangleHeight[height]
      : undefined;

  let iconShape: 'circle' | 'square' | undefined;
  if (icon === 'circle') {
    iconShape = 'circle';
  } else if (icon === 'square' || icon === true) {
    iconShape = 'square';
  }

  const dataAttrs = buildDataAttributes({ data, validateRestProps: restProps });

  const rootClassName = [resolveWidthClass(width), spaceHeight, delayClass];
  const lineCount = type === 'text' && lines ? lines : 1;
  const multiline = lineCount > 1;
  const resolvedTextSize = size ?? 'standard';

  if (type === 'text' || type === 'heading') {
    const typeMeasure =
      type === 'heading' && level ? (
        <Heading level={level} component="span">
          {'\u00a0'}
        </Heading>
      ) : (
        <Text size={size} baseline={baseline} component="span">
          {Array.from({ length: lineCount }, (_, index) => (
            <Fragment key={index}>
              {index > 0 ? <br /> : null}
              {'\u00a0'}
            </Fragment>
          ))}
        </Text>
      );

    const iconBone = iconShape ? (
      <Box
        flexShrink={0}
        marginRight={iconSlotSpace}
        borderRadius={iconShape === 'circle' ? 'full' : 'standard'}
        className={[
          iconSize({ size: resolvedTextSize }),
          styles.shimmerAnimation,
        ]}
      />
    ) : null;

    let paint = (
      <Box
        overflow="hidden"
        borderRadius="full"
        className={[styles.typographyBar, styles.shimmerAnimation]}
      />
    );

    if (multiline) {
      paint = (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="spaceBetween"
          className={[
            styles.typographyBar,
            styles.textFontSize[resolvedTextSize],
          ]}
        >
          {Array.from({ length: lineCount }, (_, index) => {
            const isLastLine = index === lineCount - 1;

            return (
              <Box
                key={index}
                display="flex"
                alignItems={index === 0 && iconShape ? 'center' : undefined}
                className={[
                  styles.textLine,
                  styles.textCapHeight[resolvedTextSize],
                  styles.capBar,
                ]}
              >
                {index === 0 ? iconBone : null}
                <Box
                  minWidth={0}
                  height="full"
                  overflow="hidden"
                  borderRadius="full"
                  className={[
                    styles.shimmerAnimation,
                    isLastLine ? styles.width.medium : styles.width.full,
                  ]}
                />
              </Box>
            );
          })}
        </Box>
      );
    } else if (iconShape) {
      paint = (
        <Box
          display="flex"
          alignItems="center"
          className={styles.typographyBar}
        >
          {iconBone}
          <Box
            minWidth={0}
            height="full"
            overflow="hidden"
            borderRadius="full"
            className={[styles.shimmerAnimation, styles.width.full]}
          />
        </Box>
      );
    }

    return (
      <Box
        position="relative"
        pointerEvents="none"
        className={rootClassName}
        style={customWidthStyle}
        {...a11yProps}
        {...dataAttrs}
      >
        <Box aria-hidden className={styles.invisibleInFlow}>
          {typeMeasure}
        </Box>
        {paint}
      </Box>
    );
  }

  return (
    <Box
      overflow="hidden"
      pointerEvents="none"
      borderRadius="standard"
      height={resolveBoxHeight(type, height)}
      className={[...rootClassName, styles.shimmerAnimation]}
      style={customWidthStyle}
      {...a11yProps}
      {...dataAttrs}
    />
  );
};
