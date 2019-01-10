import React, { Component, AllHTMLAttributes } from 'react';

export type ChevronSvgProps = AllHTMLAttributes<SVGElement>;

export default class TickSvg extends Component<ChevronSvgProps> {
  static displayName = 'TickSvg';

  render() {
    return (
      <svg
        viewBox="90.471 302.809 823 823"
        width="16"
        height="16"
        {...this.props}
      >
        <path d="M365.407 1022.185L90.677 747.457l67.883-67.882L365.406 886.42l479.977-479.988 67.883 67.882" />
      </svg>
    );
  }
}
