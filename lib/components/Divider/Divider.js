import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Divider.css.js';
import withTheme from '../private/withTheme';
import Box from '../Box/Box';

export default withTheme(
  class Divider extends React.Component {
    static displayName = 'Divider';

    static propTypes = {
      theme: PropTypes.object.isRequired,
      borderColor: PropTypes.string.isRequired,
      borderWidth: PropTypes.string.isRequired,
      className: PropTypes.string
    };

    static defaultProps = {
      borderColor: 'standard',
      borderWidth: 'standard'
    };

    render() {
      const {
        theme,
        borderColor,
        borderWidth,
        className,
        ...restProps
      } = this.props;

      return (
        <Box
          className={classnames({
            [styles.root]: true,
            [className]: className
          })}
          {...restProps}
        >
          <div
            className={classnames(
              styles.divider,
              theme.atoms.borderWidth[borderWidth],
              theme.atoms.borderColor[borderColor]
            )}
          />
        </Box>
      );
    }
  }
);
