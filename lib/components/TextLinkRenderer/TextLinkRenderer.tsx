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

export interface TextLinkRendererProps {
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

function useTextLinkTone() {
  const backgroundContext = useBackground();
  const highlightLink =
    backgroundContext === 'body' ||
    backgroundContext === 'card' ||
    backgroundContext === 'neutralLight';
  return highlightLink ? 'link' : 'neutral';
}

function useLinkStyles(tone: 'link' | 'neutral', showVisited: boolean) {
  const styles = useStyles(styleRefs);
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useWeight('medium');

  return [
    tone === 'link' ? styles.underlineOnHoverOnly : styles.underlineAlways,
    useTextTone({ tone }),
    !inHeading ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink({
  showVisited = false,
  hitArea = 'standard',
  children,
}: TextLinkRendererProps) {
  const virtualTouchableStyle = useVirtualTouchable();
  const textLinkTone = useTextLinkTone();

  return (
    <TextLinkRendererContext.Provider value={textLinkTone}>
      {children({
        style: {},
        className: classnames(
          useLinkStyles(textLinkTone, showVisited),
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
  showVisited = false,
  hitArea,
  children,
}: TextLinkRendererProps) {
  const styles = useStyles(styleRefs);
  const textLinkTone = useTextLinkTone();
  const buttonLinkTextProps = {
    size: 'standard',
    tone: textLinkTone,
    baseline: false,
  } as const;

  assert(
    !hitArea,
    'TextLink components should not set "hitArea" within Actions',
  );

  return (
    <Box position="relative">
      <TextLinkRendererContext.Provider value={textLinkTone}>
        <TextContext.Provider value={buttonLinkTextProps}>
          {children({
            style: {},
            className: classnames(
              styles.button,
              useLinkStyles(textLinkTone, showVisited),
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
