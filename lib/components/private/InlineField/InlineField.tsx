import React, { ReactNode, AllHTMLAttributes, forwardRef } from 'react';
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
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import * as styleRefs from './InlineField.treat';
import { BackgroundProvider } from 'lib/components/Box/BackgroundContext';

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
  data?: DataAttributeMap;
}

interface InternalInlineFieldProps extends InlineFieldProps {
  type: 'checkbox' | 'radio';
}

export const InlineField = forwardRef<HTMLElement, InternalInlineFieldProps>(
  (
    {
      id,
      name,
      value,
      checked,
      data,
      onChange,
      label,
      type,
      children,
      message,
      reserveMessageSpace = false,
      tone = 'neutral',
      disabled = false,
    },
    ref,
  ) => {
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

    const accentBackground = disabled ? 'formAccentDisabled' : 'formAccent';

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
          ref={ref}
          {...buildDataAttributes(data)}
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
              backgroundColor={accentBackground}
              borderRadius={fieldBorderRadius}
              className={classnames(styles.selected, radioStyles)}
            />
            {isCheckbox ? (
              <Box transition="fast" width="full" className={styles.icon}>
                <BackgroundProvider value={accentBackground}>
                  <TickIcon
                    size="fill"
                    tone={disabled ? 'secondary' : undefined}
                  />
                </BackgroundProvider>
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
              baseline={false}
              weight={checked ? 'strong' : undefined}
              tone={disabled ? 'secondary' : undefined}
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
  },
);
