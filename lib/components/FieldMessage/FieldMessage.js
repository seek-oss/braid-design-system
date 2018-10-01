import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import Text from '../Text/Text';
import ErrorIcon from '../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../icons/TickCircleIcon/TickCircleIcon';
import styles from './FieldMessage.css.js';

const renderIcon = (theme, tone) => {
  if (tone === 'critical') {
    return (
      <ErrorIcon
        fill="critical"
        className={classnames(styles.icon, theme.atoms.marginRight.smaller)}
      />
    );
  }

  if (tone === 'positive') {
    return (
      <TickCircleIcon
        fill="positive"
        className={classnames(styles.icon, theme.atoms.marginRight.smaller)}
      />
    );
  }

  return null;
};

export default withTheme(
  class FieldMessage extends React.Component {
    static displayName = 'FieldMessage';

    static propTypes = {
      theme: PropTypes.object.isRequired,
      tone: PropTypes.oneOf(['critical', 'positive']),
      message: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.node])
    };

    render() {
      const { theme, tone, message, ...restProps } = this.props;
      return message === false ? null : (
        <Text paddingBottom="small" color={tone} tabIndex="-1" {...restProps}>
          <div className={styles.content}>
            {renderIcon(theme, tone)}
            <div
              style={{
                minHeight: `${theme.tokens.type.body.rows *
                  theme.tokens.rowHeight}px`
              }}
            >
              {message}
            </div>
          </div>
        </Text>
      );
    }
  }
);
