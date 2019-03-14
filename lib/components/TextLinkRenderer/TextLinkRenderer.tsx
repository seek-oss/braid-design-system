import React, { Component, ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import { ActionsConsumer } from '../Actions/ActionsContext';
import Text from '../Text/Text';
import FieldOverlay from '../private/FieldOverlay/FieldOverlay';
import styles from './TextLinkRenderer.css.js';

interface StyleProps {
  style: CSSProperties;
  className: string;
}

export interface TextLinkRendererProps {
  inline?: boolean;
  children: (styleProps: StyleProps) => ReactNode;
}

export default class TextLinkRenderer extends Component<TextLinkRendererProps> {
  static displayName = 'TextLinkRenderer';

  render() {
    const { inline = false, children } = this.props;

    return (
      <ThemeConsumer>
        {({ atoms }) => (
          <ActionsConsumer>
            {inActions => {
              const defaultStyles = [
                styles.root,
                atoms.reset.a,
                atoms.color.link,
              ];

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
                return (
                  <Text baseline={false}>
                    <span className={styles.overlayContainer}>
                      {children({
                        style: {},
                        className: classnames(defaultStyles, touchableStyles, [
                          styles.root_isButton,
                          atoms.display.block,
                          atoms.width.full,
                          atoms.paddingLeft.small,
                          atoms.paddingRight.small,
                          atoms.borderRadius.standard,
                        ]),
                      })}
                      <FieldOverlay
                        variant="focus"
                        className={styles.focusOverlay}
                      />
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
            }}
          </ActionsConsumer>
        )}
      </ThemeConsumer>
    );
  }
}
