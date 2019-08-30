import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import TextLinkRendererContext from './TextLinkRendererContext';
import TextContext from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import ActionsContext from '../Actions/ActionsContext';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import useBox from '../../hooks/useBox';
import { Box } from '../Box/Box';
import {
  useTextTone,
  useWeight,
  useTouchableSpace,
  useText,
} from '../../hooks/typography';
import * as styleRefs from './TextLinkRenderer.treat';

interface StyleProps {
  style: CSSProperties;
  className: string;
}

export interface TextLinkRendererProps {
  children: (styleProps: StyleProps) => ReactElement;
}

export const TextLinkRenderer = (props: TextLinkRendererProps) => {
  const inText = useContext(TextContext);
  const inHeading = useContext(HeadingContext);
  const inActions = useContext(ActionsContext);

  if (inActions) {
    return <ButtonLink {...props} />;
  }

  if (!inText && !inHeading) {
    return <TouchableLink {...props} />;
  }

  return <InlineLink {...props} />;
};

function useLinkStyles() {
  const styles = useStyles(styleRefs);
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useWeight('medium');

  return [
    styles.root,
    useTextTone({ tone: 'link' }),
    !inHeading ? mediumWeight : null,
  ];
}

function InlineLink({ children }: TextLinkRendererProps) {
  return (
    <TextLinkRendererContext.Provider value={true}>
      {children({
        style: {},
        className: classnames(useLinkStyles(), useBox({ component: 'a' })),
      })}
    </TextLinkRendererContext.Provider>
  );
}

function TouchableLink({ children }: TextLinkRendererProps) {
  return (
    <TextLinkRendererContext.Provider value={true}>
      <Box display="flex">
        {children({
          style: {},
          className: classnames(
            useLinkStyles(),
            useBox({ component: 'a', display: 'block' }),
          ),
        })}
      </Box>
    </TextLinkRendererContext.Provider>
  );
}

const buttonLinkTextProps = {
  size: 'standard',
  tone: 'link',
  baseline: false,
} as const;
function ButtonLink({ children }: TextLinkRendererProps) {
  const styles = useStyles(styleRefs);

  return (
    <Box position="relative">
      <TextContext.Provider value={buttonLinkTextProps}>
        {children({
          style: {},
          className: classnames(
            styles.button,
            useLinkStyles(),
            useText(buttonLinkTextProps),
            useTouchableSpace('standard'),
            useBox({
              component: 'a',
              display: 'block',
              width: 'full',
              paddingX: 'small',
              borderRadius: 'standard',
            }),
          ),
        })}
      </TextContext.Provider>
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
    </Box>
  );
}
