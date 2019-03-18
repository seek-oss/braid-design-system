import React, { ReactNode, AllHTMLAttributes, Fragment } from 'react';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { FieldLabel } from '../FieldLabel/FieldLabel';
import { FieldMessage } from '../FieldMessage/FieldMessage';
import styles from './TextField.css.js';
import { useTheme } from '../private/ThemeContext';

const validTypes = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  number: 'number',
  tel: 'tel',
  url: 'url',
};

type NativeInputProps = AllHTMLAttributes<HTMLInputElement>;
interface TextFieldProps {
  id: NonNullable<NativeInputProps['id']>;
  value: NonNullable<NativeInputProps['value']>;
  onChange: NonNullable<NativeInputProps['onChange']>;
  onBlur?: NativeInputProps['onBlur'];
  onFocus?: NativeInputProps['onFocus'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  placeholder?: string;
  message?: ReactNode | false;
  tone?: 'neutral' | 'critical' | 'positive';
  type?: keyof typeof validTypes;
}

export const TextField = ({
  id,
  label,
  secondaryLabel,
  tertiaryLabel,
  placeholder,
  message,
  tone = 'neutral',
  value,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
}: TextFieldProps) => {
  const theme = useTheme();
  const messageId = `${id}-message`;

  return (
    <Fragment>
      <FieldLabel
        id={id}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <Box className={styles.root}>
        <Box
          component="input"
          type={validTypes[type]}
          id={id}
          backgroundColor="input"
          boxShadow={tone === 'critical' ? 'borderCritical' : 'borderStandard'}
          width="full"
          paddingLeft="small"
          paddingRight="small"
          paddingTop="standardTouchableText"
          paddingBottom="standardTouchableText"
          borderRadius="standard"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-describedby={messageId}
          className={classnames(
            styles.input,
            theme.atoms.fontFamily.text,
            theme.atoms.fontSize.standard,
            theme.atoms.color.neutral,
          )}
        />
        <Box
          className={styles.focusOverlay}
          boxShadow="outlineFocus"
          borderRadius="standard"
          paddingTop="standardTouchableText"
          paddingBottom="standardTouchableText"
        />
      </Box>
      <FieldMessage id={messageId} tone={tone} message={message} />
    </Fragment>
  );
};
