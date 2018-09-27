import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../private/ThemeContext';

export default class ThemeProvider extends React.Component {
  static displayName = 'ThemeProvider';

  static propTypes = {
    theme: PropTypes.object.isRequired
  };

  render() {
    const { theme, ...props } = this.props;

    return <ThemeContext.Provider value={theme} {...props} />;
  }
}
