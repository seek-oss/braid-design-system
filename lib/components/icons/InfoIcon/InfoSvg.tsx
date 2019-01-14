import React, { Component, AllHTMLAttributes } from 'react';

export type ChevronSvgProps = AllHTMLAttributes<SVGElement>;

export default class InfoSvg extends Component<ChevronSvgProps> {
  static displayName = 'InfoSvg';

  render() {
    return (
      <svg
        x="0"
        y="0"
        width="16"
        height="16"
        viewBox="0 0 30 30"
        {...this.props}
      >
        <path
          d="M14.905,21.843c-0.552,0-1-0.447-1-1v-8.236c0-0.552,0.448-1,1-1s1,0.448,1,1v8.236
		C15.905,21.396,15.458,21.843,14.905,21.843z"
        />
        <path
          d="M14.905,10.208c-0.552,0-1-0.448-1-1s0.448-1.025,1-1.025s1,0.422,1,0.975v0.051
		C15.905,9.76,15.458,10.208,14.905,10.208z"
        />
        <path
          d="M15.001,28.499C7.556,28.499,1.499,22.443,1.499,15c0-7.444,6.057-13.5,13.502-13.5
		c7.442,0,13.498,6.056,13.498,13.5C28.499,22.443,22.443,28.499,15.001,28.499z M15.001,3.501C8.659,3.501,3.499,8.66,3.499,15
		c0,6.34,5.16,11.499,11.502,11.499c6.34,0,11.498-5.158,11.498-11.499C26.499,8.66,21.341,3.501,15.001,3.501z"
        />
      </svg>
    );
  }
}
