import React, {
  ReactNode,
  AllHTMLAttributes,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
  ChangeEvent,
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
import { IconMinus, IconTick } from '../../icons';
import { useVirtualTouchable } from '../touchable/useVirtualTouchable';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { mergeIds } from '../mergeIds';
import { BadgeProps } from '../../Badge/Badge';
import { Inline } from '../../Inline/Inline';
import * as styleRefs from './InlineField.treat';

const tones = ['neutral', 'critical'] as const;
type InlineFieldTone = typeof tones[number];
export type CheckboxChecked =
  | NonNullable<InputElementProps['checked']>
  | 'mixed';

type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
export interface InlineFieldProps {
  id: NonNullable<InputElementProps['id']>;
  label: NonNullable<FieldLabelProps['label']>;
  onChange: NonNullable<InputElementProps['onChange']>;
  checked: NonNullable<InputElementProps['checked']>;
  value?: InputElementProps['value'];
  name?: InputElementProps['name'];
  'aria-describedby'?: InputElementProps['aria-describedby'];
  disabled?: InputElementProps['disabled'];
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  tone?: InlineFieldTone;
  children?: ReactNode;
  description?: ReactNode;
  badge?: ReactElement<BadgeProps>;
  data?: DataAttributeMap;
  required?: boolean;
  size?: keyof typeof styleRefs.fakeFieldSize;
}

type FieldType = 'checkbox' | 'radio';
type InternalInlineFieldProps = Omit<InlineFieldProps, 'checked'> & {
  inList?: boolean;
  tabIndex?: number;
} & (
    | { type: 'checkbox'; checked: CheckboxChecked }
    | { type: 'radio'; checked: NonNullable<InputElementProps['checked']> }
  );

const Indicator = ({
  type,
  checked,
  hover = false,
  disabled = false,
}: {
  type: FieldType;
  checked?: CheckboxChecked;
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
      position="relative"
      className={styles.checkboxIndicator}
    >
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        transition="fast"
        opacity={checked !== 'mixed' ? 0 : undefined}
      >
        <IconMinus size="fill" tone={iconTone} />
      </Box>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        transition="fast"
        opacity={checked !== true ? 0 : undefined}
      >
        <IconTick size="fill" tone={iconTone} />
      </Box>
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

export const InlineField = forwardRef<
  HTMLInputElement,
  InternalInlineFieldProps
>(
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
      size = 'standard',
      'aria-describedby': ariaDescribedBy,
    },
    forwardedRef,
  ) => {
    const styles = useStyles(styleRefs);
    // We need a ref regardless so we can imperatively
    // focus the field when clicking the clear button
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const ref = forwardedRef || defaultRef;
    const indeterminateRef = useRef(false);

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

    const isMixed = isCheckbox && checked === 'mixed';

    useEffect(() => {
      if (ref && typeof ref === 'object' && ref.current && isCheckbox) {
        ref.current.indeterminate = isMixed;
        indeterminateRef.current = isMixed;
      }
    }, [ref, isMixed, isCheckbox]);

    return (
      <Box position="relative" zIndex={0} className={styles.root}>
        <Box display="flex">
          <Box
            component="input"
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={
              isMixed
                ? (e: ChangeEvent<HTMLInputElement>) => {
                    if (ref && typeof ref === 'object' && ref.current) {
                      ref.current.indeterminate = indeterminateRef.current;
                    }
                    if (typeof onChange === 'function') {
                      onChange(e);
                    }
                  }
                : onChange
            }
            checked={checked === 'mixed' ? false : checked}
            position="absolute"
            zIndex={1}
            className={[styles.realField, isMixed ? styles.isMixed : undefined]}
            cursor={!disabled ? 'pointer' : undefined}
            opacity={0}
            aria-describedby={mergeIds(
              ariaDescribedBy,
              message ? messageId : undefined,
              description ? descriptionId : undefined,
            )}
            aria-checked={isMixed ? 'mixed' : checked}
            aria-required={required}
            disabled={disabled}
            ref={ref}
            tabIndex={tabIndex}
            {...buildDataAttributes(data)}
          />
          <Box
            flexShrink={0}
            position="relative"
            className={[styles.fakeFieldBase, styles.fakeFieldSize[size!]]}
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
              <Indicator type={type} disabled={disabled} checked={checked} />
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
              <Indicator type={type} hover={true} checked={true} />
            </FieldOverlay>
          </Box>
          <Box paddingLeft="small" flexGrow={1}>
            <Inline space="small">
              <Box
                component="label"
                htmlFor={id}
                userSelect="none"
                display="block"
                className={[styles.label[size], useVirtualTouchable()]}
              >
                <Text
                  weight={checked && !inList ? 'strong' : undefined}
                  tone={disabled ? 'secondary' : undefined}
                  size={size}
                >
                  {label}
                </Text>
              </Box>
              {badge ? (
                <Box className={styles.badgeOffset[size]}>{badge}</Box>
              ) : null}
            </Inline>

            {description ? (
              <Box paddingTop="small">
                <Text tone="secondary" size={size} id={descriptionId}>
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
