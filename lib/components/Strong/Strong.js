import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withTheme from '../private/withTheme';

export default withTheme(
  class Strong extends React.Component {
    static displayName = 'Strong';

    static propTypes = {
      theme: PropTypes.object.isRequired,
      className: PropTypes.string
    };

    render() {
      const { theme, className, ...restProps } = this.props;

      return (
        <strong
          {...restProps}
          className={classnames(className, theme.atoms.fontWeight.strong)}
        />
      );
    }
  }
);
