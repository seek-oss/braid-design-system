import React from 'react';
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

const FieldMessage = ({ theme, tone, message, ...props }) =>
  message === false ? null : (
    <Text paddingBottom="small" color={tone} tabIndex="-1" {...props}>
      <div className={styles.content}>
        {renderIcon(theme, tone)}
        <div
          style={{
            minHeight: `${theme.tokens.type.standard.rows *
              theme.tokens.rowHeight}px`
          }}
        >
          {message}
        </div>
      </div>
    </Text>
  );

FieldMessage.displayName = 'FieldMessage';

export default withTheme(FieldMessage);
