import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import styles from './ChevronIcon.css.js';

const ChevronSvg = props => (
  <svg width="16" height="16" viewBox="0 0 1024 1024" {...props}>
    <path d="M945 305l78 67-510 524-510-524 75-69 435 451 432-449z" />
  </svg>
);

ChevronSvg.displayName = 'ChevronSvg';

const ChevronIcon = props => {
  const combinedProps = {
    ...props,
    className: classnames({
      [styles.root]: true,
      [styles[props.direction]]: styles[props.direction],
      [props.className]: true
    })
  };
  return <Icon svgComponent={ChevronSvg} {...combinedProps} />;
};

ChevronIcon.displayName = 'ChevronIcon';

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'right', 'left']).isRequired
};

ChevronIcon.defaultProps = {
  direction: 'down'
};

export default ChevronIcon;
