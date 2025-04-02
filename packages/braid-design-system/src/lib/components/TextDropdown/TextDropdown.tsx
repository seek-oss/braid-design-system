import assert from 'assert';

import { type FormEvent, useContext, useId } from 'react';

import { Box } from '../Box/Box';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
import { IconChevron } from '../icons';
import { Overlay } from '../private/Overlay/Overlay';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { validateTabIndex } from '../private/validateTabIndex';

import * as styles from './TextDropdown.css';

interface TextDropdownOption<Value> {
  text: string;
  value: Value;
}
type TextDropdownValue<Value> = Value | TextDropdownOption<Value>;

export interface TextDropdownProps<Value> {
  id?: string;
  value: Value;
  onChange: (value: Value) => void;
  onBlur?: () => void;
  options: Array<TextDropdownValue<Value>>;
  label: string;
  data?: DataAttributeMap;
  tabIndex?: 0 | -1;
}

export function parseSimpleToComplexOption<Value>(
  option: TextDropdownProps<Value>['options'][number],
) {
  return typeof option === 'object' &&
    option !== null &&
    'text' in option &&
    'value' in option
    ? option
    : { value: option, text: String(option) };
}

export function TextDropdown<Value>({
  id,
  value,
  onChange,
  onBlur,
  options,
  label,
  data,
  tabIndex,
  ...restProps
}: TextDropdownProps<Value>) {
  assert(
    (() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inText = useContext(TextContext);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inHeading = useContext(HeadingContext);

      return inText || inHeading;
    })(),
    'TextDropdown components must be rendered within a Text or Heading component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TextDropdown',
  );

  if (process.env.NODE_ENV !== 'production') {
    validateTabIndex(tabIndex);
  }

  const parsedOptions = options.map(parseSimpleToComplexOption);
  const [currentText] = parsedOptions.filter((o) => value === o.value);

  if (!currentText || !currentText.text) {
    throw new Error(
      `The provided value of "${value}" does not exist in the provided \`options\` list.`,
    );
  }

  const fallbackId = useId();
  const resolvedId = id || fallbackId;

  return (
    <Box
      display="inlineBlock"
      position="relative"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box pointerEvents="none" userSelect="none">
        {currentText.text} <IconChevron alignY="lowercase" />
      </Box>

      <Box
        component="select"
        position="absolute"
        inset={0}
        width="full"
        opacity={0}
        className={styles.select}
        aria-label={label}
        title={label}
        id={resolvedId}
        tabIndex={tabIndex}
        value={String(value)}
        onChange={(ev: FormEvent<HTMLSelectElement>) => {
          if (typeof onChange === 'function') {
            const newValue =
              parsedOptions[ev.currentTarget.selectedIndex].value;
            onChange(newValue as Value);
          }
        }}
        onBlur={onBlur}
      >
        <optgroup label={label}>
          {parsedOptions.map((option) => (
            <option value={String(option.value)} key={String(option.value)}>
              {option.text}
            </option>
          ))}
        </optgroup>
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
}
