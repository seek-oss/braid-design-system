import React from 'react';

export default class ChevronSvg extends React.Component {
  static displayName = 'ChevronSvg';

  render() {
    return (
      <svg width="16" height="16" viewBox="0 0 1024 1024" {...this.props}>
        <path d="M945 305l78 67-510 524-510-524 75-69 435 451 432-449z" />
      </svg>
    );
  }
}
