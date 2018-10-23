import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../../Box/Box';
import withTheme from '../../private/withTheme';
import styles from './Icon.css.js';

export default withTheme(
  class Icon extends React.Component {
    static displayName = 'Icon';

    static propTypes = {
      className: PropTypes.string,
      theme: PropTypes.object.isRequired,
      svgComponent: PropTypes.func.isRequired,
      size: PropTypes.string.isRequired,
      inline: PropTypes.bool.isRequired,
      fill: PropTypes.string
    };

    static defaultProps = {
      size: 'standard',
      inline: false
    };

    render() {
      const {
        className,
        theme,
        svgComponent,
        size,
        inline,
        fill,
        ...restProps
      } = this.props;

      const sizeAtom = `${size}Text${inline ? 'Inline' : ''}`;

      return (
        <Box
          component={svgComponent}
          className={classnames({
            [className]: className,
            [styles.fillSize]: size === 'fill',
            [styles.inline]: inline,
            [theme.atoms.width[sizeAtom]]: [theme.atoms.width[sizeAtom]],
            [theme.atoms.height[sizeAtom]]: [theme.atoms.height[sizeAtom]],
            [theme.atoms.fill[fill]]: theme.atoms.fill[fill]
          })}
          {...restProps}
        />
      );
    }
  }
);
