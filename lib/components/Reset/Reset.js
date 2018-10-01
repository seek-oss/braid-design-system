import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withTheme from '../private/withTheme';

export default withTheme(
  class Reset extends React.Component {
    static displayName = 'Reset';

    static propTypes = {
      theme: PropTypes.object.isRequired,
      component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
      className: PropTypes.string
    };

    static defaultProps = {
      component: 'div'
    };

    render() {
      const { theme, component, className, ...restProps } = this.props;

      return React.createElement(component, {
        className: classnames({
          [className]: className,
          [theme.atoms.reset[component]]: theme.atoms.reset[component]
        }),
        ...restProps
      });
    }
  }
);
