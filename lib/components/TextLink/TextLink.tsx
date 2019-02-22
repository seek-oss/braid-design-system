import React, { Component, AllHTMLAttributes } from 'react';
import { Omit } from 'utility-types';
import TextLinkRenderer from '../TextLinkRenderer/TextLinkRenderer';

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
export interface TextLinkProps
  extends Omit<AnchorProps, 'className' | 'style'> {}

export default class TextLink extends Component<TextLinkProps> {
  static displayName = 'TextLink';

  render() {
    return (
      <TextLinkRenderer>
        {props => <a {...this.props} {...props} />}
      </TextLinkRenderer>
    );
  }
}
