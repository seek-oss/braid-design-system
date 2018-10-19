import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../../Box/Box';
import withTheme from '../../private/withTheme';

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

      const type = theme.tokens.text[size].desktop;
      const height = inline ? type.size : type.rows * theme.tokens.rowHeight;

      return (
        <Box
          component={svgComponent}
          height={height}
          width={height}
          className={classnames({
            [className]: className,
            [theme.atoms.fill[fill]]: theme.atoms.fill[fill]
          })}
          {...restProps}
        />
      );
    }
  }
);
