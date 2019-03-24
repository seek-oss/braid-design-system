import React, { ReactNode } from 'react';
import { FieldTone, Color } from '../../../themes/theme';
import classnames from 'classnames';
import { useTheme } from '../ThemeContext';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import { FieldMessage } from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import styles from './Field.css.js';

export interface FieldProps {
  id: NonNullable<HTMLFormElement['id']>;
  value: NonNullable<HTMLFormElement['value']>;
  onChange: NonNullable<HTMLFormElement['onChange']>;
  onBlur?: HTMLFormElement['onBlur'];
  onFocus?: HTMLFormElement['onFocus'];
  name?: HTMLFormElement['name'];
  placeholder?: HTMLFormElement['placeholder'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: string;
  message?: ReactNode | false;
  secondaryMessage?: ReactNode;
  tone?: FieldTone;
}

type PassthroughProps =
  | 'id'
  | 'name'
  | 'value'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'placeholder';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  backgroundColor: BoxProps['backgroundColor'];
  'aria-describedby': string;
  className: string;
}

interface InternalFieldProps extends FieldProps {
  children(props: FieldRenderProps): ReactNode;
}

const getColor = (
  placeholder: FieldProps['placeholder'],
  value: FieldProps['value'],
): Color => {
  if (!value && placeholder) {
    return 'secondary';
  }

  return 'neutral';
};

export const Field = ({
  id,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  children,
  message,
  secondaryMessage,
  tone = 'neutral',
}: InternalFieldProps) => {
  const { atoms } = useTheme();
  const messageId = `${id}-message`;

  return (
    <Box>
      <FieldLabel
        id={id}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
        description={description}
      />
      <Box className={styles.fieldContainer}>
        {children({
          id,
          name,
          value,
          onChange,
          onFocus,
          onBlur,
          placeholder,
          backgroundColor: 'input',
          'aria-describedby': messageId,
          className: classnames(
            styles.field,
            atoms.fontFamily.text,
            atoms.fontSize.standard,
            atoms.color[getColor(placeholder, value)],
          ),
        })}
        <FieldOverlay variant="focus" className={styles.focusOverlay} />
        <FieldOverlay variant="hover" className={styles.hoverOverlay} />
      </Box>
      <FieldMessage
        id={messageId}
        tone={tone}
        message={message}
        secondaryMessage={secondaryMessage}
      />
    </Box>
  );
};
