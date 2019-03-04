import React, { Component, ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Text from '../Text/Text';
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
        {theme => {
          const defaultStyles = [
            styles.root,
            theme.atoms.reset.a,
            theme.atoms.color.link,
          ];

          if (inline) {
            return children({
              style: {},
              className: classnames(defaultStyles),
            });
          }

          return (
            <Text baseline={false}>
              {children({
                style: {},
                className: classnames(
                  defaultStyles,
                  theme.atoms.display.inlineBlock,
                  theme.atoms.paddingTop.standardTouchableText,
                  theme.atoms.paddingBottom.standardTouchableText,
                ),
              })}
            </Text>
          );
        }}
      </ThemeConsumer>
    );
  }
}
