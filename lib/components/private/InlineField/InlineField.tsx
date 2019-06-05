import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box } from '../../Box/Box';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Text } from '../../Text/Text';
import { TickIcon } from '../../icons/TickIcon/TickIcon';
import { useTouchableSpace } from '../../../hooks/typography';
import * as styleRefs from './InlineField.treat';

const tones = ['neutral', 'critical'] as const;
type InlineFieldTone = typeof tones[number];

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface InlineFieldProps {
  id: NonNullable<FormElementProps['id']>;
  label: NonNullable<FieldLabelProps['label']>;
  onChange: NonNullable<FormElementProps['onChange']>;
  checked: NonNullable<FormElementProps['checked']>;
  value?: FormElementProps['value'];
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: InlineFieldTone;
  children?: ReactNode;
}

interface InternalInlineFieldProps extends InlineFieldProps {
  type: 'checkbox' | 'radio';
}

export const InlineField = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  type,
  children,
  message,
  reserveMessageSpace = false,
  tone = 'neutral',
  disabled = false,
}: InternalInlineFieldProps) => {
  const styles = useStyles(styleRefs);
  const messageId = `${id}-message`;
  const isCheckbox = type === 'checkbox';
  const radioStyles = {
    [styles.circle]: type === 'radio',
  };
  const fieldBorderRadius = isCheckbox ? 'standard' : undefined;

  if (tones.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }

  return (
    <Box>
      <Box
        component="input"
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        className={classnames(styles.realField, styles.fieldSize)}
        aria-describedby={messageId}
        disabled={disabled}
      />
      <Box display="flex">
        <Box
          className={classnames(
            styles.fakeField,
            styles.fieldSize,
            radioStyles,
          )}
          marginRight="small"
          backgroundColor={disabled ? 'inputDisabled' : 'input'}
          borderRadius={fieldBorderRadius}
          boxShadow={
            tone === 'critical' && !disabled
              ? 'borderCritical'
              : 'borderStandard'
          }
        >
          <FieldOverlay
            variant={tone === 'critical' && isCheckbox ? tone : undefined}
            backgroundColor={disabled ? 'formAccentDisabled' : 'formAccent'}
            borderRadius={fieldBorderRadius}
            className={classnames(styles.selected, radioStyles)}
          />
          {isCheckbox ? (
            <Box transition="fast" width="full" className={styles.icon}>
              <TickIcon size="fill" fill="white" />
            </Box>
          ) : null}
          <FieldOverlay
            variant="focus"
            borderRadius={fieldBorderRadius}
            className={classnames(styles.focusOverlay, radioStyles)}
          />
          <FieldOverlay
            variant="hover"
            borderRadius={fieldBorderRadius}
            className={classnames(styles.hoverOverlay, radioStyles)}
          />
        </Box>
        <Box
          component="label"
          htmlFor={id}
          className={classnames(styles.label, useTouchableSpace('standard'))}
        >
          <Text
            component="span"
            baseline={false}
            weight={checked ? 'strong' : undefined}
            color={disabled ? 'secondary' : undefined}
          >
            {label}
          </Text>
        </Box>
      </Box>
      {children ? (
        <Box
          display="none"
          paddingLeft="small"
          paddingBottom="small"
          className={styles.children}
        >
          {children}
        </Box>
      ) : null}
      <FieldMessage
        id={messageId}
        tone={tone}
        disabled={disabled}
        message={message}
        reserveMessageSpace={reserveMessageSpace}
      />
    </Box>
  );
};
