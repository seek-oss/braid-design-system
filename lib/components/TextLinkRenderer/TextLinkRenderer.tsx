import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useClassNames } from 'sku/treat';
import ActionsContext from '../Actions/ActionsContext';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import * as styles from './TextLinkRenderer.treat';
import useReset from '../../hooks/useReset';
import useBox from '../../hooks/useBox';
import { useTextColor, useTouchableSpace } from '../../hooks/typography';

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
  const inActions = useContext(ActionsContext);
  const defaultStyles = [styles.root, useReset('a'), useTextColor('link')];

  if (inline) {
    return children({
      style: {},
      className: useClassNames(defaultStyles),
    });
  }

  const touchableStyles = useTouchableSpace('standard');

  if (inActions) {
    const actionStyles = useBox({
      display: 'block',
      width: 'full',
      paddingLeft: 'small',
      paddingRight: 'small',
      borderRadius: 'standard',
    });

    return (
      <Text baseline={false}>
        <span className={useClassNames(styles.overlayContainer)}>
          {children({
            style: {},
            className: useClassNames(
              defaultStyles,
              touchableStyles,
              styles.button,
              actionStyles,
            ),
          })}
          <FieldOverlay
            variant="focus"
            className={useClassNames(styles.focusOverlay)}
          />
        </span>
      </Text>
    );
  }

  return (
    <Text baseline={false}>
      {children({
        style: {},
        className: useClassNames(
          defaultStyles,
          touchableStyles,
          useBox({ display: 'inlineBlock' }),
        ),
      })}
    </Text>
  );
};
