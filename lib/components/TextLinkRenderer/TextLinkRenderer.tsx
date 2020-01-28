import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useStyles } from 'sku/react-treat';
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
  touchable?: boolean;
  children: (styleProps: StyleProps) => ReactElement;
}

export const TextLinkRenderer = (props: TextLinkRendererProps) => {
  const inActions = useContext(ActionsContext);

  if (process.env.NODE_ENV !== 'production') {
    // NODE_ENV is static so hook call is not conditional
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inText = useContext(TextContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inHeading = useContext(HeadingContext);

    if (!inText && !inHeading && !inActions) {
      throw new Error(
        'TextLink components must be rendered within a Text or Heading component.',
      );
    }
  }

  if (inActions) {
    return <ButtonLink {...props} />;
  }

  return <InlineLink {...props} />;
};

function useLinkStyles(showVisited: boolean) {
  const styles = useStyles(styleRefs);
  const inHeading = useContext(HeadingContext);
  const backgroundContext = useBackground();
  const mediumWeight = useWeight('medium');
  const highlightLink = backgroundContext === 'card' || !backgroundContext;

  return [
    highlightLink ? styles.underlineOnHoverOnly : styles.underlineAlways,
    useTextTone({ tone: highlightLink ? 'link' : 'neutral' }),
    !inHeading ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink({
  showVisited = false,
  touchable = false,
  children,
}: TextLinkRendererProps) {
  const virtualTouchableStyle = useVirtualTouchable();

  return (
    <TextLinkRendererContext.Provider value={true}>
      {children({
        style: {},
        className: classnames(
          useLinkStyles(showVisited),
          useBoxStyles({
            component: 'a',
            cursor: 'pointer',
          }),
          touchable && virtualTouchableStyle,
        ),
      })}
    </TextLinkRendererContext.Provider>
  );
}

const buttonLinkTextProps = {
  size: 'standard',
  tone: 'link',
  baseline: false,
} as const;
function ButtonLink({ showVisited = false, children }: TextLinkRendererProps) {
  const styles = useStyles(styleRefs);

  return (
    <Box position="relative">
      <TextContext.Provider value={buttonLinkTextProps}>
        {children({
          style: {},
          className: classnames(
            styles.button,
            useLinkStyles(showVisited),
            useText(buttonLinkTextProps),
            useTouchableSpace(buttonLinkTextProps.size),
            useBoxStyles({
              component: 'a',
              cursor: 'pointer',
              display: 'block',
              width: 'full',
              paddingX: 'small',
              borderRadius: 'standard',
              textAlign: 'center',
            }),
          ),
        })}
      </TextContext.Provider>
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
    </Box>
  );
}
