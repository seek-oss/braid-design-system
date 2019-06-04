import React, { ReactNode, Fragment } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import * as styles from './FieldMessage.treat';
import { useText } from '../../hooks/typography';

type FieldTone = 'neutral' | 'critical' | 'positive';

export interface FieldMessageProps extends TextProps {
  id: string;
  message: ReactNode | false;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
  disabled?: boolean;
}

const renderIcon = (tone: FieldTone = 'neutral') => {
  if (tone === 'neutral') {
    return null;
  }

  const Icon: Record<FieldTone, ReactNode> = {
    neutral: null,
    critical: <ErrorIcon fill="critical" size="small" inline />,
    positive: <TickCircleIcon fill="positive" size="small" inline />,
  };

  return (
    <Box paddingRight="xxsmall" className={useClassNames(styles.fixedSize)}>
      {Icon[tone]}
    </Box>
  );
};

export const FieldMessage = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
  disabled = false,
}: FieldMessageProps) => {
  if (message === false) {
    return null;
  }

  return (
    <Box
      id={id}
      display="flex"
      className={useClassNames(styles.root, styles.minHeight)}
    >
      <Box
        display="flex"
        className={useClassNames(
          styles.grow,
          useText({ size: 'small', color: tone, baseline: true }),
        )}
      >
        {disabled ? null : (
          <Fragment>
            {renderIcon(tone)}
            {message}
          </Fragment>
        )}
      </Box>
      {secondaryMessage && !disabled ? (
        <Box paddingLeft="xsmall" className={useClassNames(styles.fixedSize)}>
          {secondaryMessage}
        </Box>
      ) : null}
    </Box>
  );
};
