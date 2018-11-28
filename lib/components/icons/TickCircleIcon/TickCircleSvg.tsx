import React, { Component } from 'react';

export default class TickCircleSvg extends Component {
  static displayName = 'TickCircleSvg';

  render() {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" {...this.props}>
        <path d="M8 .5C3.86.5.5 3.858.5 8c0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5C15.5 3.858 12.142.5 8 .5zm4.47 5.328l-5.59 5.98c-.14.152-.34.238-.546.238-.208 0-.405-.086-.547-.237L3.537 9.41c-.284-.303-.268-.777.034-1.06.303-.283.777-.27 1.062.033l1.7 1.814 5.042-5.397c.282-.303.758-.318 1.06-.036.302.284.32.758.036 1.06z" />
      </svg>
    );
  }
}
