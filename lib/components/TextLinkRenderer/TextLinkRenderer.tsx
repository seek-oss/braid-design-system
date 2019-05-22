import React, { CSSProperties, useContext, ReactElement } from 'react';
import { useClassNames } from 'sku/treat';
import ActionsContext from '../Actions/ActionsContext';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import * as styles from './TextLinkRenderer.treat';
import { useTheme } from '../private/ThemeContext';
import useReset from '../../hooks/useReset';

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
  const { atoms } = useTheme();
  const inActions = useContext(ActionsContext);
  const defaultStyles = [styles.root, useReset('a'), atoms.color.link];

  if (inline) {
    return children({
      style: {},
      className: useClassNames(defaultStyles),
    });
  }

  const touchableStyles = [
    atoms.paddingTop.standardTouchableText,
    atoms.paddingBottom.standardTouchableText,
  ];

  if (inActions) {
    const actionStyles = [
      styles.button,
      atoms.display.block,
      atoms.width.full,
      atoms.paddingLeft.small,
      atoms.paddingRight.small,
      atoms.borderRadius.standard,
    ];

    return (
      <Text baseline={false}>
        <span className={useClassNames(styles.overlayContainer)}>
          {children({
            style: {},
            className: useClassNames(
              defaultStyles,
              touchableStyles,
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
          atoms.display.inlineBlock,
        ),
      })}
    </Text>
  );
};
