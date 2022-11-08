import clsx from 'clsx';
import React, { forwardRef, useContext } from 'react';
import type { Atoms } from '../../css/atoms/atoms';
import { atoms } from '../../css/atoms/atoms';
import {
  useBackgroundLightness,
  useBackground,
} from '../Box/BackgroundContext';
import type { BoxBackgroundVariant } from '../Box/Box';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import * as styles from './TextLink.css';

export interface TextLinkStyles {
  weight?: 'regular' | 'weak';
  showVisited?: boolean;
  hitArea?: 'standard' | 'large';
}

export interface TextLinkProps
  extends TextLinkStyles,
    Omit<LinkComponentProps, 'className' | 'style'> {
  data?: DataAttributeMap;
}

const isPlainBackground = (
  backgroundContext: BoxBackgroundVariant,
  contrast: 'dark' | 'light',
) =>
  (contrast === 'light' &&
    (backgroundContext === 'body' ||
      backgroundContext === 'surface' ||
      backgroundContext === 'neutralLight')) ||
  (contrast === 'dark' &&
    (backgroundContext === 'bodyDark' ||
      backgroundContext === 'surfaceDark' ||
      backgroundContext === 'neutral'));

export const useLinkStyles = ({
  reset = 'a',
  weight,
  showVisited = false,
  hitArea = 'standard',
}: Pick<TextLinkProps, 'weight' | 'showVisited' | 'hitArea'> & {
  reset?: Atoms['reset'] | false;
}) => {
  const backgroundLightness = useBackgroundLightness();
  const backgroundContext = useBackground();
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);

  // Links nested inside Text components that use coloured tones
  // are automatically converted to `weak` weight.
  const isWeakDueToTextTone =
    !headingContext &&
    textContext?.tone !== 'neutral' &&
    textContext?.tone !== 'secondary';

  const linkStyles =
    weight === 'weak' || isWeakDueToTextTone
      ? styles.weakLink
      : [
          isPlainBackground(backgroundContext.lightMode, 'light') ||
          weight === 'regular'
            ? styles.regularLinkLightMode[backgroundLightness.lightMode]
            : styles.weakLink,
          isPlainBackground(backgroundContext.darkMode, 'dark') ||
          weight === 'regular'
            ? styles.regularLinkDarkMode[backgroundLightness.darkMode]
            : styles.weakLink,
        ];

  return clsx(
    styles.base,
    linkStyles,
    showVisited
      ? [
          styles.visitedLightMode[backgroundLightness.lightMode],
          styles.visitedDarkMode[backgroundLightness.darkMode],
        ]
      : '',
    reset !== false
      ? atoms({
          reset: typeof reset === 'string' ? reset : 'a',
        })
      : null,
    atoms({
      cursor: 'pointer',
    }),
    hitArea === 'large' && virtualTouchable(),
  );
};

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ weight, showVisited, hitArea, data, ...restProps }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    const classes = useLinkStyles({
      weight,
      showVisited,
      hitArea,
    });

    return (
      <LinkComponent
        ref={ref}
        {...restProps}
        className={classes}
        {...buildDataAttributes({ data, validateRestProps: false })}
      />
    );
  },
);

TextLink.displayName = 'TextLink';
