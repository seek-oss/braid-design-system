import {
  type ChangeEvent,
  type AllHTMLAttributes,
  useEffect,
  forwardRef,
  useRef,
} from 'react';

import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { type BoxProps, Box } from '../../Box/Box';
import { IconMinus, IconTick } from '../../icons';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { validateTabIndex } from '../validateTabIndex';

import * as styles from './InlineField.css';
import type { Size } from './InlineField.css';

const tones = ['neutral', 'critical'] as const;
export type InlineFieldTone = (typeof tones)[number];

export type CheckboxChecked =
  | NonNullable<InputElementProps['checked']>
  | 'mixed';

type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
export interface StyledInputProps {
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
  tabIndex?: 0 | -1;
}

export type PrivateStyledInputProps = StyledInputProps & {
  type: 'radio' | 'checkbox';
  checked: CheckboxChecked;
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
        inset={0}
        transition="fast"
        opacity={checked !== 'mixed' ? 0 : undefined}
      >
        <IconMinus size="fill" tone={iconTone} />
      </Box>
      <Box
        position="absolute"
        inset={0}
        transition="fast"
        opacity={checked !== true ? 0 : undefined}
      >
        <IconTick size="fill" tone={iconTone} />
      </Box>
    </Box>
  ) : (
    <Box
      background={!disabled ? 'formAccent' : undefined}
      transition="fast"
      width="full"
      height="full"
      borderRadius="full"
      className={[
        styles.radioIndicator,
        disabled ? styles.disabledRadioIndicator : undefined,
      ]}
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
      ...restProps
    },
    forwardedRef,
  ) => {
    const defaultRef = useRef<HTMLInputElement | null>(null);
    const ref = forwardedRef || defaultRef;

    if (tones.indexOf(tone) === -1) {
      throw new Error(`Invalid tone: ${tone}`);
    }

    if (process.env.NODE_ENV !== 'production') {
      validateTabIndex(tabIndex);
    }

    const isCheckbox = type === 'checkbox';
    const fieldBorderRadius = isCheckbox ? 'standard' : 'full';
    const accentBackground: BoxProps['background'] = disabled
      ? 'neutralLight'
      : 'formAccent';
    const isMixed = isCheckbox && checked === 'mixed';
    const fieldBackground: BoxProps['background'] = disabled
      ? { lightMode: 'neutralSoft', darkMode: 'neutral' }
      : { lightMode: 'surface' };
    const defaultBorder = checked ? 'formAccent' : 'default';
    const indeterminateRef = useRef(isMixed);
    const lastChecked = useRef<CheckboxChecked | null>(null);
    indeterminateRef.current = isMixed;

    // If a checkbox updates and its `checked` state has changed,
    // update the indeterminate state of the HTML element
    if (
      isCheckbox &&
      checked !== lastChecked.current &&
      ref &&
      typeof ref === 'object' &&
      ref.current
    ) {
      ref.current.indeterminate = indeterminateRef.current;
    }

    // Update the indeterminate state of the HTML element on mount
    // if it's a checkbox
    useEffect(() => {
      if (isCheckbox && ref && typeof ref === 'object' && ref.current) {
        ref.current.indeterminate = indeterminateRef.current;
      }
    }, [ref, isCheckbox]);

    // Keep a reference to the last checked state to compare
    useEffect(() => {
      if (isCheckbox) {
        lastChecked.current = checked;
      }
    }, [isCheckbox, checked]);

    const { lightMode } = useBackgroundLightness();

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (isMixed) {
              // Browser will automatically toggle `indeterminate`
              // to true. Resetting to the current value, ensuring it
              // will update reactively based on the `checked` prop.
              e.currentTarget.indeterminate = isMixed;
            }

            if (typeof onChange === 'function') {
              onChange(e);
            }
          }}
          checked={checked === 'mixed' ? false : checked}
          position="absolute"
          zIndex={1}
          className={[
            styles.realField,
            styles.sizeVars[size],
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
          {...buildDataAttributes({ data, validateRestProps: restProps })}
        />
        <Box
          flexShrink={0}
          position="relative"
          className={[styles.fakeField, styles.sizeVars[size]]}
          background={fieldBackground}
          borderRadius={fieldBorderRadius}
        >
          <FieldOverlay
            background={isCheckbox ? accentBackground : undefined}
            borderRadius={fieldBorderRadius}
            className={styles.selected}
          >
            <Indicator type={type} disabled={disabled} checked={checked} />
          </FieldOverlay>
          <FieldOverlay
            variant={disabled ? 'disabled' : defaultBorder}
            borderRadius={fieldBorderRadius}
            visible={type === 'radio' || !checked || disabled}
            className={{
              [styles.hideBorderOnDarkBackgroundInLightMode]:
                lightMode === 'dark',
            }}
          />
          <FieldOverlay
            variant="critical"
            borderRadius={fieldBorderRadius}
            visible={tone === 'critical' && !disabled}
          />
          <FieldOverlay
            variant="focus"
            borderRadius={fieldBorderRadius}
            className={styles.focusOverlay}
          />
          <FieldOverlay
            variant="formAccent"
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
