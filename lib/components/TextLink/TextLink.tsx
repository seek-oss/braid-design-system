import React, { Component, AllHTMLAttributes } from 'react';
import { Omit } from 'utility-types';
import TextLinkRenderer, {
  TextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
export interface TextLinkProps
  extends Omit<TextLinkRendererProps, 'children'>,
    Omit<AnchorProps, 'className' | 'style'> {}

export default class TextLink extends Component<TextLinkProps> {
  static displayName = 'TextLink';

  render() {
    const { inline, ...restProps } = this.props;

    return (
      <TextLinkRenderer inline={inline}>
        {props => <a {...restProps} {...props} />}
      </TextLinkRenderer>
    );
  }
}
