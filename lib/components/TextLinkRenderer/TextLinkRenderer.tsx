import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import ActionsContext from '../Actions/ActionsContext';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import useBox from '../../hooks/useBox';
import { useTextColor, useTouchableSpace } from '../../hooks/typography';
import * as styleRefs from './TextLinkRenderer.treat';

interface StyleProps {
  style: CSSProperties;
  className: string;
}

export interface TextLinkRendererProps {
  inline?: boolean;
  children: (styleProps: StyleProps) => ReactElement;
}

export const TextLinkRenderer = ({
  inline = false,
  children,
}: TextLinkRendererProps) => {
  const styles = useStyles(styleRefs);
  const inActions = useContext(ActionsContext);
  const defaultStyles = [styles.root, useTextColor('link')];

  if (inline) {
    return children({
      style: {},
      className: classnames(defaultStyles, useBox({ component: 'a' })),
    });
  }

  const touchableStyles = useTouchableSpace('standard');

  if (inActions) {
    const actionStyles = useBox({
      component: 'a',
      display: 'block',
      width: 'full',
      paddingLeft: 'small',
      paddingRight: 'small',
      borderRadius: 'standard',
    });

    return (
      <Text baseline={false}>
        <span className={styles.overlayContainer}>
          {children({
            style: {},
            className: classnames(
              defaultStyles,
              touchableStyles,
              styles.button,
              actionStyles,
            ),
          })}
          <FieldOverlay variant="focus" className={styles.focusOverlay} />
        </span>
      </Text>
    );
  }

  return (
    <Text baseline={false}>
      {children({
        style: {},
        className: classnames(
          defaultStyles,
          touchableStyles,
          useBox({
            component: 'a',
            display: 'inlineBlock',
          }),
        ),
      })}
    </Text>
  );
};
