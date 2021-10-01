import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { atoms, Atoms } from '../../css/atoms/atoms';
import {
  useBackgroundLightness,
  useBackground,
  BackgroundContextValue,
} from '../Box/BackgroundContext';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import * as typographyStyles from '../../hooks/typography/typography.css';

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
  backgroundContext: BackgroundContextValue,
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

  const linkStyles =
    weight === 'weak'
      ? typographyStyles.weakLink
      : [
          isPlainBackground(backgroundContext.lightMode, 'light')
            ? typographyStyles.lightModeTextLink[backgroundLightness.lightMode]
            : typographyStyles.weakLink,
          isPlainBackground(backgroundContext.darkMode, 'dark')
            ? typographyStyles.darkModeTextLink[backgroundLightness.darkMode]
            : typographyStyles.weakLink,
        ];

  return clsx(
    typographyStyles.textLink,
    linkStyles,
    showVisited
      ? [
          typographyStyles.textLinkVisitedLinkMode[
            backgroundLightness.lightMode
          ],
          typographyStyles.textLinkVisitedDarkMode[
            backgroundLightness.darkMode
          ],
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
  ({ weight, showVisited, hitArea, data, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    const classes = useLinkStyles({
      weight,
      showVisited,
      hitArea,
    });

    return (
      <LinkComponent
        ref={ref}
        {...props}
        className={classes}
        {...(data ? buildDataAttributes(data) : undefined)}
      />
    );
  },
);

TextLink.displayName = 'TextLink';
