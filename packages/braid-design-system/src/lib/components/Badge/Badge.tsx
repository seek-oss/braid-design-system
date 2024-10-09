import React, { forwardRef, Children, useContext } from 'react';
import assert from 'assert';
import { type BoxProps, Box } from '../Box/Box';
import { Text } from '../Text/Text';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { Bleed } from '../Bleed/Bleed';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import * as styles from './Badge.css';

type ValueOrArray<T> = T | T[];

const validTones = [
  'promote',
  'info',
  'neutral',
  'positive',
  'caution',
  'critical',
] as const;
type Tone = (typeof validTones)[number];
type BadgeWeight = 'strong' | 'regular';
export interface BadgeProps {
  tone?: Tone;
  weight?: BadgeWeight;
  bleedY?: boolean;
  title?: string;
  children: ValueOrArray<string | number>;
  id?: string;
  data?: DataAttributeMap;
  tabIndex?: BoxProps['tabIndex'];
  'aria-describedby'?: string;
}

const lightModeBackgroundForTone = {
  positive: 'positiveLight',
  critical: 'criticalLight',
  info: 'infoLight',
  promote: 'promoteLight',
  neutral: 'neutralLight',
  caution: 'cautionLight',
} as const;

const stringifyChildren = (children: BadgeProps['children']): string => {
  if (typeof children === 'string') {
    return children;
  }

  if (typeof children === 'number') {
    return children.toString();
  }

  return children.join('');
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      tone = 'info',
      weight = 'regular',
      bleedY = false,
      title,
      children,
      id,
      data,
      tabIndex,
      'aria-describedby': ariaDescribedBy,
      ...restProps
    },
    ref,
  ) => {
    assert(
      validTones.indexOf(tone) >= 0,
      `Badge tone of "${tone}" is not valid.`,
    );

    assert(
      Children.toArray(children).every((child) =>
        ['string', 'number'].includes(typeof child),
      ),
      'Badge may only contain strings or numbers',
    );

    const textContext = useContext(TextContext);
    const headingContext = useContext(HeadingContext);
    const isInline = Boolean(textContext || headingContext);

    assert(
      !isInline || (isInline && bleedY === false),
      'A `Badge` cannot use `bleedY` when rendered inside a `Text` or `Heading` component.',
    );

    const content = (
      // Ensures the foreground text tone follows the default
      // for the selected background colour
      <DefaultTextPropsProvider tone="neutral">
        <TextContext.Provider value={null}>
          <Box
            component="span"
            id={id}
            ref={ref}
            tabIndex={tabIndex}
            aria-describedby={ariaDescribedBy}
            title={
              title ??
              (!ariaDescribedBy ? stringifyChildren(children) : undefined)
            }
            background={
              weight === 'strong' ? tone : lightModeBackgroundForTone[tone]
            }
            paddingY={styles.verticalPadding}
            paddingX="xsmall"
            borderRadius="standard"
            overflow="hidden"
            cursor="default"
            maxWidth="content"
            display={!isInline ? 'flex' : undefined}
            className={isInline ? styles.inline : undefined}
            {...buildDataAttributes({ data, validateRestProps: restProps })}
          >
            <Text size="xsmall" weight="medium" maxLines={1}>
              {children}
            </Text>
          </Box>
        </TextContext.Provider>
      </DefaultTextPropsProvider>
    );

    return bleedY ? (
      <Bleed component="span" vertical={styles.verticalPadding}>
        {content}
      </Bleed>
    ) : (
      content
    );
  },
);

Badge.displayName = 'Badge';
// @ts-expect-error
Badge.__isBadge__ = true;
