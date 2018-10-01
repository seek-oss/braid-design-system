import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import styles from './Text.css.js';
import Box from '../Box/Box';

const componentsBySize = {
  standard: 'div'
};

export default withTheme(
  class Text extends React.Component {
    static displayName = 'Text';

    static propTypes = {
      theme: PropTypes.object.isRequired,
      component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      size: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      baseline: PropTypes.bool.isRequired,
      className: PropTypes.string,
      children: PropTypes.node.isRequired
    };

    static defaultProps = {
      size: 'body',
      color: 'neutral',
      weight: 'regular',
      baseline: true
    };

    render() {
      const {
        theme,
        component,
        size,
        color,
        weight,
        baseline,
        className,
        children,
        ...restProps
      } = this.props;

      const Component =
        component || componentsBySize[size] || componentsBySize.standard;

      return (
        <Box
          component={Component}
          className={classnames({
            [className]: className,
            [styles.block]: true,
            [styles.listItem]: component === 'li'
          })}
          {...restProps}
        >
          <span
            className={classnames({
              [styles.block]: true,
              [theme.atoms.color[color]]: color,
              [theme.atoms.fontFamily.body]: true,
              [theme.atoms.fontSize[size]]: size,
              [theme.atoms.fontWeight[weight]]: weight
            })}
            {...(baseline ? {} : { style: { transform: 'none' } })}
          >
            {children}
          </span>
        </Box>
      );
    }
  }
);
