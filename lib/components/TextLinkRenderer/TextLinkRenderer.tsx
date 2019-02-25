import React, { Component, ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import styles from './TextLinkRenderer.css.js';

interface StyleProps {
  style: CSSProperties;
  className: string;
}
export interface TextLinkRendererProps {
  children: (styleProps: StyleProps) => ReactNode;
}

export default class TextLinkRenderer extends Component<TextLinkRendererProps> {
  static displayName = 'TextLinkRenderer';

  render() {
    const { children } = this.props;

    return (
      <ThemeConsumer>
        {theme =>
          children({
            style: {},
            className: classnames([
              theme.atoms.reset.a,
              theme.atoms.color.link,
              styles.textDecoration
            ])
          })
        }
      </ThemeConsumer>
    );
  }
}
