import clsx from 'clsx';
import React, { forwardRef, useContext } from 'react';
import { atoms, Atoms } from '../../css/atoms/atoms';
import { useBackground } from '../Box/BackgroundContext';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
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
  backgroundContext: ReturnType<typeof useBackground>,
) =>
  backgroundContext === 'body' ||
  backgroundContext === 'surface' ||
  backgroundContext === 'neutralLight' ||
  backgroundContext === 'neutralSoft';

function useDefaultLinkWeight() {
  const backgroundContext = useBackground();
  const inHeading = useContext(HeadingContext);
  const textContext = useContext(TextContext);

  const inPlainText =
    !textContext ||
    textContext.tone === undefined ||
    textContext.tone === 'neutral' ||
    textContext.tone === 'secondary';

  return isPlainBackground(backgroundContext) && (inHeading || inPlainText)
    ? 'regular'
    : 'weak';
}

export function useLinkStyles({
  reset = 'a',
  weight: weightProp,
  showVisited = false,
  hitArea = 'standard',
}: Pick<TextLinkProps, 'weight' | 'showVisited' | 'hitArea'> & {
  reset?: Atoms['reset'] | false;
}) {
  const defaultWeight = useDefaultLinkWeight();
  const weight = weightProp ?? defaultWeight;

  return clsx(
    typographyStyles.textLink,
    weight === 'weak'
      ? typographyStyles.weakLink
      : typographyStyles.regularLink,
    showVisited ? typographyStyles.textLinkVisited : null,
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
}

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
