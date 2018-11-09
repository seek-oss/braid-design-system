import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import Reset from '../Reset/Reset';
import styles from './Box.css.js';

export default withTheme(
  class Box extends React.Component {
    static displayName = 'Box';

    static propTypes = {
      theme: PropTypes.object.isRequired,
      component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      paddingTop: PropTypes.string,
      paddingBottom: PropTypes.string,
      paddingLeft: PropTypes.string,
      paddingRight: PropTypes.string,
      marginTop: PropTypes.string,
      marginBottom: PropTypes.string,
      marginLeft: PropTypes.string,
      marginRight: PropTypes.string,
      borderWidth: PropTypes.string,
      borderRadius: PropTypes.string,
      backgroundColor: PropTypes.string,
      borderColor: PropTypes.string,
      className: PropTypes.string
    };

    static defaultProps = {
      borderColor: 'standard'
    };

    render() {
      const {
        theme,
        component,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        borderWidth,
        borderRadius,
        backgroundColor,
        borderColor,
        className,
        ...restProps
      } = this.props;

      return (
        <Reset
          component={component}
          className={classnames({
            [className]: className,
            [styles.root]: true,
            [theme.atoms.backgroundColor[backgroundColor]]:
              backgroundColor && theme.atoms.backgroundColor[backgroundColor],
            [theme.atoms.borderColor[borderColor]]:
              borderColor && theme.atoms.borderColor[borderColor],
            [theme.atoms.borderWidth[borderWidth]]:
              borderWidth && theme.atoms.borderWidth[borderWidth],
            [theme.atoms.borderRadius[borderRadius]]:
              borderRadius && theme.atoms.borderRadius[borderRadius],
            [theme.atoms.marginTop[marginTop]]:
              marginTop && theme.atoms.marginTop[marginTop],
            [theme.atoms.marginRight[marginRight]]:
              marginRight && theme.atoms.marginRight[marginRight],
            [theme.atoms.marginBottom[marginBottom]]:
              marginBottom && theme.atoms.marginBottom[marginBottom],
            [theme.atoms.marginLeft[marginLeft]]:
              marginLeft && theme.atoms.marginLeft[marginLeft],
            [theme.atoms.paddingTop[paddingTop]]:
              paddingTop && theme.atoms.paddingTop[paddingTop],
            [theme.atoms.paddingRight[paddingRight]]:
              paddingRight && theme.atoms.paddingRight[paddingRight],
            [theme.atoms.paddingBottom[paddingBottom]]:
              paddingBottom && theme.atoms.paddingBottom[paddingBottom],
            [theme.atoms.paddingLeft[paddingLeft]]:
              paddingLeft && theme.atoms.paddingLeft[paddingLeft]
          })}
          {...restProps}
        />
      );
    }
  }
);
