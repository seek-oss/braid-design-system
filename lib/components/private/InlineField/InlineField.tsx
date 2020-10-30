import React, {
  ReactNode,
  AllHTMLAttributes,
  forwardRef,
  ReactElement,
} from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../Box/Box';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Text } from '../../Text/Text';
import { IconTick } from '../../icons';
import { useVirtualTouchable } from '../touchable/useVirtualTouchable';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { mergeIds } from '../mergeIds';
import { BadgeProps } from '../../Badge/Badge';
import { Inline } from '../../Inline/Inline';
import * as styleRefs from './InlineField.treat';

const tones = ['neutral', 'critical'] as const;
type InlineFieldTone = typeof tones[number];

type FormElementProps = AllHTMLAttributes<HTMLInputElement>;
export interface InlineFieldProps {
  id: NonNullable<FormElementProps['id']>;
  label: NonNullable<FieldLabelProps['label']>;
  onChange: NonNullable<FormElementProps['onChange']>;
  checked: NonNullable<FormElementProps['checked']>;
  value?: FormElementProps['value'];
  name?: FormElementProps['name'];
  'aria-describedby'?: FormElementProps['aria-describedby'];
  disabled?: FormElementProps['disabled'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: InlineFieldTone;
  children?: ReactNode;
  description?: ReactNode;
  badge?: ReactElement<BadgeProps>;
  data?: DataAttributeMap;
  required?: boolean;
}

type FieldType = 'checkbox' | 'radio';
interface InternalInlineFieldProps extends InlineFieldProps {
  inList?: boolean;
  tabIndex?: number;
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

  const iconTone = (() => {
    if (disabled) {
      return 'secondary';
    }

    if (hover) {
      return 'formAccent';
    }
  })();

  return isCheckbox ? (
    <Box
      height="full" // Needed for IE11
      transition="fast"
      className={styles.checkboxIndicator}
    >
      <IconTick size="fill" tone={iconTone} />
    </Box>
  ) : (
    <Box
      background={disabled ? 'formAccentDisabled' : 'formAccent'}
      transition="fast"
      width="full"
      height="full"
      borderRadius="full"
      className={styles.radioIndicator}
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
      description,
      badge,
      message,
      reserveMessageSpace = false,
      tone = 'neutral',
      disabled = false,
      required,
      inList = false,
      tabIndex,
      'aria-describedby': ariaDescribedBy,
    },
    ref,
  ) => {
    const styles = useStyles(styleRefs);

    if (tones.indexOf(tone) === -1) {
      throw new Error(`Invalid tone: ${tone}`);
    }

    const messageId = `${id}-message`;
    const descriptionId = `${id}-description`;
    const isCheckbox = type === 'checkbox';
    const fieldBorderRadius = isCheckbox ? 'standard' : 'full';
    const accentBackground = disabled ? 'formAccentDisabled' : 'formAccent';
    const hasMessage = message || reserveMessageSpace;
    const showFieldBorder =
      useBackgroundLightness() === 'light' && (tone !== 'critical' || disabled);

    return (
      <Box position="relative" zIndex={0} className={styles.root}>
        <Box display="flex">
          <Box
            component="input"
            type={type}
            id={id}
            name={name}
            onChange={onChange}
            value={value}
            checked={checked}
            position="absolute"
            zIndex={1}
            className={styles.realField}
            cursor={!disabled ? 'pointer' : undefined}
            opacity={0}
            aria-describedby={mergeIds(
              ariaDescribedBy,
              message ? messageId : undefined,
              description ? descriptionId : undefined,
            )}
            aria-required={required}
            disabled={disabled}
            ref={ref}
            tabIndex={tabIndex}
            {...buildDataAttributes(data)}
          />
          <Box
            flexShrink={0}
            position="relative"
            className={styles.fakeField}
            background={disabled ? 'inputDisabled' : 'input'}
            borderRadius={fieldBorderRadius}
          >
            <FieldOverlay
              variant={disabled ? 'disabled' : 'default'}
              borderRadius={fieldBorderRadius}
              visible={showFieldBorder}
            />
            <FieldOverlay
              variant="critical"
              borderRadius={fieldBorderRadius}
              visible={tone === 'critical' && !disabled}
            />
            <FieldOverlay
              variant={tone === 'critical' && isCheckbox ? tone : undefined}
              background={isCheckbox ? accentBackground : undefined}
              borderRadius={fieldBorderRadius}
              className={styles.selected}
            >
              <Indicator type={type} disabled={disabled} />
            </FieldOverlay>

            <FieldOverlay
              variant="focus"
              borderRadius={fieldBorderRadius}
              className={styles.focusOverlay}
            />
            <FieldOverlay
              variant="hover"
              borderRadius={fieldBorderRadius}
              className={styles.hoverOverlay}
            >
              <Indicator type={type} hover={true} />
            </FieldOverlay>
          </Box>
          <Box paddingLeft="small" flexGrow={1}>
            <Inline space="small">
              <Box
                component="label"
                htmlFor={id}
                userSelect="none"
                display="block"
                className={[styles.label, useVirtualTouchable()]}
              >
                <Text
                  weight={checked && !inList ? 'strong' : undefined}
                  tone={disabled ? 'secondary' : undefined}
                >
                  {label}
                </Text>
              </Box>
              {badge ? <Box className={styles.badgeOffset}>{badge}</Box> : null}
            </Inline>

            {description ? (
              <Box paddingTop="small">
                <Text tone="secondary" id={descriptionId}>
                  {description}
                </Text>
              </Box>
            ) : null}

            {children ? (
              <Box
                display="none"
                paddingTop="small"
                className={styles.children}
              >
                {children}
              </Box>
            ) : null}
          </Box>
        </Box>
        {hasMessage ? (
          <Box paddingTop={description ? 'small' : 'xsmall'}>
            <FieldMessage
              id={messageId}
              tone={tone}
              disabled={disabled}
              message={message}
              reserveMessageSpace={reserveMessageSpace}
            />
          </Box>
        ) : null}
      </Box>
    );
  },
);
