import React, { ReactNode, AllHTMLAttributes, Fragment } from 'react';
import classnames from 'classnames';
import { ThemeConsumer } from '../ThemeConsumer/ThemeConsumer';
import { Box } from '../Box/Box';
import { FieldLabel } from '../FieldLabel/FieldLabel';
import { FieldMessage } from '../FieldMessage/FieldMessage';
import { Text } from '../Text/Text';
import styles from './TextArea.css.js';

type NativeTextAreaProps = AllHTMLAttributes<HTMLTextAreaElement>;
interface TextAreaProps {
  id: NonNullable<NativeTextAreaProps['id']>;
  value: string;
  onChange: NonNullable<NativeTextAreaProps['onChange']>;
  onBlur?: NativeTextAreaProps['onBlur'];
  onFocus?: NativeTextAreaProps['onFocus'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  placeholder?: string;
  message?: ReactNode | false;
  tone?: 'neutral' | 'critical' | 'positive';
  description?: 'string';
  limit?: number;
}

const renderCount = ({
  limit,
  value = '',
}: Pick<TextAreaProps, 'limit' | 'value'>): ReactNode => {
  if (typeof limit === 'undefined') {
    return null;
  }

  const diff = limit - value.length;
  const valid = diff >= 0;

  return (
    <Text component="span" color={valid ? 'secondary' : 'critical'}>
      {diff}
    </Text>
  );
};

export const TextArea = ({
  id,
  label,
  secondaryLabel,
  tertiaryLabel,
  placeholder,
  message,
  tone = 'neutral',
  value,
  onChange,
  onBlur,
  onFocus,
  description,
  limit,
}: TextAreaProps) => {
  const messageId = `${id}-message`;

  return (
    <ThemeConsumer>
      {({ atoms, tokens }) => (
        <Fragment>
          <FieldLabel
            id={id}
            label={label}
            secondaryLabel={secondaryLabel}
            tertiaryLabel={tertiaryLabel}
            description={description}
          />
          <Box className={styles.root}>
            <Box
              component="textarea"
              id={id}
              backgroundColor="input"
              boxShadow={
                tone === 'critical' ? 'borderCritical' : 'borderStandard'
              }
              display="block"
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
              rows={3}
              className={classnames(
                styles.textarea,
                atoms.fontFamily.text,
                atoms.fontSize.standard,
                atoms.color.neutral,
              )}
              style={{
                minHeight: tokens.rowHeight * 15,
              }}
            />
            <Box
              className={styles.focusOverlay}
              boxShadow="outlineFocus"
              borderRadius="standard"
              paddingTop="standardTouchableText"
              paddingBottom="standardTouchableText"
            />
          </Box>
          <FieldMessage
            id={messageId}
            tone={tone}
            message={message}
            secondaryMessage={renderCount({
              limit,
              value,
            })}
          />
        </Fragment>
      )}
    </ThemeConsumer>
  );
};
