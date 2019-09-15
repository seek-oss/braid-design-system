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
import { IconTick } from '../../icons';
import { useTouchableSpace } from '../../../hooks/typography';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
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
  data?: DataAttributeMap;
}

type FieldType = 'checkbox' | 'radio';
interface InternalInlineFieldProps extends InlineFieldProps {
  type: FieldType;
}

const Indicator = ({
  type,
  hover = false,
  disabled = false,
}: {
  type: FieldType;
  hover?: boolean;
  disabled?: boolean;
}) => {
  const styles = useStyles(styleRefs);
  const isCheckbox = type === 'checkbox';

  return isCheckbox ? (
    <Box transition="fast" className={classnames(styles.checkboxIndicator)}>
      <IconTick
        size="fill"
        tone={disabled ? 'secondary' : hover ? 'formAccent' : undefined}
      />
    </Box>
  ) : (
    <Box
      background={disabled ? 'formAccentDisabled' : 'formAccent'}
      transition="fast"
      width="full"
      height="full"
      borderRadius="full"
      className={classnames(styles.radioIndicator)}
    />
  );
};

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

    if (tones.indexOf(tone) === -1) {
      throw new Error(`Invalid tone: ${tone}`);
    }

    const messageId = `${id}-message`;
    const isCheckbox = type === 'checkbox';
    const fieldBorderRadius = isCheckbox ? 'standard' : 'full';
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
          position="absolute"
          className={classnames(styles.realField)}
          aria-describedby={messageId}
          disabled={disabled}
          ref={ref}
          {...buildDataAttributes(data)}
        />
        <Box display="flex">
          <Box
            position="relative"
            className={classnames(styles.fakeField)}
            background={disabled ? 'inputDisabled' : 'input'}
            borderRadius={fieldBorderRadius}
            boxShadow={
              tone === 'critical' && !disabled
                ? 'borderCritical'
                : 'borderStandard'
            }
          >
            <FieldOverlay
              variant={tone === 'critical' && isCheckbox ? tone : undefined}
              background={isCheckbox ? accentBackground : undefined}
              borderRadius={fieldBorderRadius}
              className={classnames(styles.selected)}
            >
              <Indicator type={type} disabled={disabled} />
            </FieldOverlay>

            <FieldOverlay
              variant="focus"
              borderRadius={fieldBorderRadius}
              className={classnames(styles.focusOverlay)}
            />
            <FieldOverlay
              variant="hover"
              borderRadius={fieldBorderRadius}
              className={classnames(styles.hoverOverlay)}
            >
              <Indicator type={type} hover={true} />
            </FieldOverlay>
          </Box>
          <Box
            component="label"
            paddingLeft="small"
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
