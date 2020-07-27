import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';
import classnames from 'classnames';
import TextLinkRendererContext from './TextLinkRendererContext';
import TextContext from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import ActionsContext from '../Actions/ActionsContext';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { useBoxStyles } from '../Box/useBoxStyles';
import { Box } from '../Box/Box';
import {
  useTextTone,
  useWeight,
  useTouchableSpace,
  useText,
} from '../../hooks/typography';
import * as styleRefs from './TextLinkRenderer.treat';
import { useBackground } from '../Box/BackgroundContext';
import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';

interface StyleProps {
  style: CSSProperties;
  className: string;
}

type TextLinkWeight = 'regular' | 'weak';
export interface TextLinkRendererProps {
  weight?: TextLinkWeight;
  showVisited?: boolean;
  hitArea?: 'standard' | 'large';
  children: (styleProps: StyleProps) => ReactElement;
}

export const TextLinkRenderer = (props: TextLinkRendererProps) => {
  const inActions = useContext(ActionsContext);

  assert(
    (() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inText = useContext(TextContext);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inHeading = useContext(HeadingContext);

      return inText || inHeading || inActions;
    })(),
    'TextLink components must be rendered within a Text or Heading component.',
  );

  if (inActions) {
    return <ButtonLink {...props} />;
  }

  return <InlineLink {...props} />;
};

function useDefaultLinkWeight() {
  const backgroundContext = useBackground();
  const inHeading = useContext(HeadingContext);
  const textContext = useContext(TextContext);

  const hasPlainBackground =
    backgroundContext === 'body' ||
    backgroundContext === 'card' ||
    backgroundContext === 'neutralLight';

  const inNeutralText =
    !textContext ||
    textContext.tone === undefined ||
    textContext.tone === 'neutral';

  return hasPlainBackground && (inHeading || inNeutralText)
    ? 'regular'
    : 'weak';
}

function useLinkStyles(weight: TextLinkWeight, showVisited: boolean) {
  const styles = useStyles(styleRefs);
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useWeight('medium');
  const linkTone = useTextTone({ tone: 'link' });

  return [
    weight === 'weak'
      ? styles.underlineAlways
      : [linkTone, styles.underlineOnHoverOnly],
    !inHeading && weight !== 'weak' ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink({
  weight: weightProp,
  showVisited = false,
  hitArea = 'standard',
  children,
}: TextLinkRendererProps) {
  const virtualTouchableStyle = useVirtualTouchable();
  const defaultWeight = useDefaultLinkWeight();
  const weight = weightProp ?? defaultWeight;

  return (
    <TextLinkRendererContext.Provider value={weight}>
      {children({
        style: {},
        className: classnames(
          useLinkStyles(weight, showVisited),
          useBoxStyles({
            component: 'a',
            cursor: 'pointer',
          }),
          hitArea === 'large' && virtualTouchableStyle,
        ),
      })}
    </TextLinkRendererContext.Provider>
  );
}

function ButtonLink({
  weight,
  showVisited = false,
  hitArea,
  children,
}: TextLinkRendererProps) {
  const styles = useStyles(styleRefs);
  const textLinkWeight = useDefaultLinkWeight();
  const tone = textLinkWeight === 'weak' ? 'neutral' : 'link';
  const buttonLinkTextProps = {
    size: 'standard',
    tone,
    baseline: false,
  } as const;

  assert(!weight, 'TextLink components should not set "weight" within Actions');

  assert(
    !hitArea,
    'TextLink components should not set "hitArea" within Actions',
  );

  return (
    <Box position="relative">
      <TextLinkRendererContext.Provider value={textLinkWeight}>
        <TextContext.Provider value={buttonLinkTextProps}>
          {children({
            style: {},
            className: classnames(
              styles.button,
              useLinkStyles(textLinkWeight, showVisited),
              useText(buttonLinkTextProps),
              useTouchableSpace(buttonLinkTextProps.size),
              useBoxStyles({
                component: 'a',
                cursor: 'pointer',
                outline: 'none',
                display: 'block',
                width: 'full',
                paddingX: 'small',
                borderRadius: 'standard',
                textAlign: 'center',
                userSelect: 'none',
              }),
            ),
          })}
        </TextContext.Provider>
      </TextLinkRendererContext.Provider>
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
    </Box>
  );
}
