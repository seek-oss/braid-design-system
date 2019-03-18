import React, { CSSProperties, useContext, ReactElement } from 'react';
import classnames from 'classnames';
import ActionsContext from '../Actions/ActionsContext';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import styles from './TextLinkRenderer.css.js';
import { useTheme } from '../private/ThemeContext';

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
  const defaultStyles = [styles.root, atoms.reset.a, atoms.color.link];

  if (inline) {
    return children({
      style: {},
      className: classnames(defaultStyles),
    });
  }

  const touchableStyles = [
    atoms.paddingTop.standardTouchableText,
    atoms.paddingBottom.standardTouchableText,
  ];

  if (inActions) {
    const actionStyles = [
      styles.root_isButton,
      atoms.display.block,
      atoms.width.full,
      atoms.paddingLeft.small,
      atoms.paddingRight.small,
      atoms.borderRadius.standard,
    ];

    return (
      <Text baseline={false}>
        <span className={styles.overlayContainer}>
          {children({
            style: {},
            className: classnames(defaultStyles, touchableStyles, actionStyles),
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
          atoms.display.inlineBlock,
        ),
      })}
    </Text>
  );
};
