import React, {
  AllHTMLAttributes,
  useState,
  FormEvent,
  useEffect,
  useRef,
  forwardRef,
  ComponentProps,
} from 'react';
import { Box } from '../Box/Box';
import { IconChevron } from '../icons';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import * as styleRefs from './Combobox.treat';
import { useStyles } from 'sku/react-treat';
import { focusPaddingSize } from './comboboxShared';
import { Overlay } from '../private/Overlay/Overlay';

// type ValidSelectChildren = AllHTMLAttributes<
//   HTMLOptionElement | HTMLOptGroupElement
// >;
type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
interface ComboboxOption {
  text: string;
  value: string | number;
}
type ComboboxValue = string | ComboboxOption;

export interface ComboboxProps {
  id: string;
  value: string | number;
  onChange: (value: string | number) => void;
  options: ComboboxValue[];
  'aria-label': NonNullable<SelectProps['aria-label']>;
}

const resolveOption = (option: ComboboxProps['options'][number]) =>
  typeof option === 'string' || typeof option === 'number'
    ? { value: option, text: option }
    : option;

export const Combobox = forwardRef<HTMLSelectElement, ComboboxProps>(
  ({ id, value, onChange, options, 'aria-label': ariaLabel }, ref) => {
    const styles = useStyles(styleRefs);

    const parsedOptions = options.map((o) =>
      typeof o === 'string' || typeof o === 'number'
        ? { value: o, text: o }
        : o,
    );

    const [currentText] = parsedOptions.filter((o) => value === o.value);

    if (!currentText || !currentText.text) {
      throw new Error(
        `The provided value of "${value}" does not exist in the available options.`,
      );
    }

    return (
      <Box
        position="relative"
        padding={focusPaddingSize}
        className={styles.root}
      >
        <Box pointerEvents="none">
          <Text>
            {currentText.text} <IconChevron />
          </Text>
        </Box>

        <Box
          component="select"
          ref={ref}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="full"
          className={styles.select}
          aria-label={ariaLabel}
          id={id}
          value={value}
          onChange={(ev: FormEvent<HTMLSelectElement>) => {
            if (typeof onChange === 'function') {
              onChange(ev.currentTarget.value);
            }
          }}
        >
          {parsedOptions.map((option) => {
            const resolvedOption = resolveOption(option);
            return (
              <option value={resolvedOption.value} key={resolvedOption.value}>
                {resolvedOption.text}
              </option>
            );
          })}
        </Box>

        <Overlay
          boxShadow="outlineFocus"
          borderRadius="standard"
          transition="fast"
          onlyVisibleForKeyboardNavigation
          className={styles.focusOverlay}
        />
      </Box>
    );
  },
);
