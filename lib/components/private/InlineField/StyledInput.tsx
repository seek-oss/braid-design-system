import React, {
  useEffect,
  ChangeEvent,
  forwardRef,
  useRef,
  AllHTMLAttributes,
} from 'react';

import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { IconMinus, IconTick } from '../../icons';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { Box } from '../../Box/Box';
import * as styles from './InlineField.css';
import type { Size } from './InlineField.css';

const tones = ['neutral', 'critical'] as const;
export type InlineFieldTone = typeof tones[number];

export type CheckboxChecked =
  | NonNullable<InputElementProps['checked']>
  | 'mixed';

type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
export type StyledInputProps = {
  id: NonNullable<InputElementProps['id']>;
  onChange: NonNullable<InputElementProps['onChange']>;
  value?: InputElementProps['value'];
  name?: InputElementProps['name'];
  'aria-describedby'?: InputElementProps['aria-describedby'];
  'aria-labelledby'?: InputElementProps['aria-labelledby'];
  'aria-label'?: InputElementProps['aria-label'];
  disabled?: InputElementProps['disabled'];
  tone?: InlineFieldTone;
  data?: DataAttributeMap;
  required?: boolean;
  size?: Size;
};

export type PrivateStyledInputProps = StyledInputProps & {
  type: 'radio' | 'checkbox';
  checked: CheckboxChecked;
  tabIndex?: number;
};

const Indicator = ({
  type,
  checked,
  hover = false,
  disabled = false,
}: {
  type: PrivateStyledInputProps['type'];
  checked?: PrivateStyledInputProps['checked'];
  hover?: boolean;
  disabled?: boolean;
}) => {
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

export const StyledInput = forwardRef<
  HTMLInputElement,
  PrivateStyledInputProps
>(
  (
    {
      id,
      name,
      value,
      checked,
      data,
      onChange,
      type,
      tone = 'neutral',
      disabled = false,
      required,
      tabIndex,
      size = 'standard',
      'aria-describedby': ariaDescribedBy,
      'aria-labelledby': ariaLabelledBy,
      'aria-label': ariaLabel,
    },
    forwardedRef,
  ) => {
    // We need a ref regardless so we can imperatively
    // focus the field when clicking the clear button
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const ref = forwardedRef || defaultRef;
    const indeterminateRef = useRef(false);

    if (tones.indexOf(tone) === -1) {
      throw new Error(`Invalid tone: ${tone}`);
    }

    const isCheckbox = type === 'checkbox';
    const fieldBorderRadius = isCheckbox ? 'standard' : 'full';
    const accentBackground = disabled ? 'formAccentDisabled' : 'formAccent';
    const showFieldBorder =
      useBackgroundLightness() === 'light' && (tone !== 'critical' || disabled);

    const isMixed = isCheckbox && checked === 'mixed';

    useEffect(() => {
      if (ref && typeof ref === 'object' && ref.current && isCheckbox) {
        ref.current.indeterminate = isMixed;
        indeterminateRef.current = isMixed;
      }
    }, [ref, isMixed, isCheckbox]);

    // Internal consumers of this private component must constrain
    // this in a position relative container. This is left as a
    // fragment to support sibling selectors to the input in
    // InlineField (and other possible future use cases).
    return (
      <>
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
          className={[
            styles.realField,
            styles.realFieldPosition[size],
            isMixed ? styles.isMixed : undefined,
          ]}
          cursor={!disabled ? 'pointer' : undefined}
          opacity={0}
          aria-describedby={ariaDescribedBy}
          aria-labelledby={ariaLabelledBy}
          aria-label={ariaLabel}
          aria-checked={isMixed ? 'mixed' : checked}
          aria-required={required}
          disabled={disabled}
          ref={ref}
          tabIndex={tabIndex}
          {...(data ? buildDataAttributes(data) : undefined)}
        />
        <Box
          flexShrink={0}
          position="relative"
          className={[styles.fakeField, styles.fakeFieldSize[size]]}
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
      </>
    );
  },
);
