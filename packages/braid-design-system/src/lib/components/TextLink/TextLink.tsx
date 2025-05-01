import clsx from 'clsx';
import { type ReactElement, forwardRef, useContext } from 'react';

import { type Atoms, atoms } from '../../css/atoms/atoms';
import type { UseIconProps } from '../../hooks/useIcon';
import {
  useBackgroundLightness,
  useBackground,
} from '../Box/BackgroundContext';
import type { BoxBackgroundVariant } from '../Box/Box';
import {
  type LinkComponentProps,
  useLinkComponent,
} from '../BraidProvider/BraidProvider';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
import { AvoidWidowIcon } from '../private/AvoidWidowIcon/AvoidWidowIcon';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './TextLink.css';
import * as typographyStyles from '../../css/typography.css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

export interface TextLinkStyles {
  weight?: 'regular' | 'weak';
  showVisited?: boolean;
  hitArea?: 'standard' | 'large';
  iconPosition?: 'leading' | 'trailing';
}

export interface TextLinkProps
  extends TextLinkStyles,
    Omit<LinkComponentProps, 'className' | 'style'> {
  data?: DataAttributeMap;
  icon?: ReactElement<UseIconProps> | null;
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
    !headingContext && textContext?.tone !== 'neutral';

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
    weight !== 'weak' ? typographyStyles.fontWeight.medium : undefined,
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
    hitArea === 'large' && virtualTouchable,
  );
};

export const TextLinkContent = ({
  icon,
  iconPosition = 'leading',
  children,
}: Pick<TextLinkProps, 'icon' | 'iconPosition' | 'children'>) => (
  <>
    {icon && iconPosition === 'leading' ? (
      <AvoidWidowIcon iconPosition={iconPosition}>{icon}</AvoidWidowIcon>
    ) : null}
    {children}
    {icon && iconPosition === 'trailing' ? (
      <AvoidWidowIcon iconPosition={iconPosition}>{icon}</AvoidWidowIcon>
    ) : null}
  </>
);

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      weight,
      showVisited,
      hitArea,
      data,
      icon,
      children,
      iconPosition,
      ...restProps
    },
    ref,
  ) => {
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
      >
        <TextLinkContent icon={icon} iconPosition={iconPosition}>
          {children}
        </TextLinkContent>
      </LinkComponent>
    );
  },
);

TextLink.displayName = 'TextLink';
