import assert from 'assert';

import {
  Children,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState,
  type FC,
} from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { Divider } from '../Divider/Divider';
import { Stack } from '../Stack/Stack';
import type { TextProps } from '../Text/Text';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import {
  type AccordionContextValue,
  AccordionContext,
  validTones,
} from './AccordionContext';

import {
  type RequiredResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';

const validSpaceValues = ['medium', 'large', 'xlarge'] as const;

type AccordionValue = string | readonly string[];

/** Open item value, or `""` when none are open. */
type AccordionSingleValue = string | '';

type ControlledStateSingle = {
  /**
   * Allow more than one item to be open. Defaults to true.
   * Note: Will default to false next major release.
   */
  multiple: false;
  /**
   * Value of the open AccordionItem, or `""` when none are open.
   */
  value: AccordionSingleValue;
  onChange: (value: AccordionSingleValue) => void;
  defaultValue?: never;
};
type ControlledStateMultiple = {
  /**
   * Allow more than one item to be open. Defaults to true.
   * Note: Will default to false next major release.
   */
  multiple?: true; // Optional due to current default
  /**
   * Values of the open AccordionItems. Pass an empty array when none are open.
   */
  value: string[];
  onChange: (value: string[]) => void;
  defaultValue?: never;
};
type UncontrolledStateSingle = {
  /**
   * Allow more than one item to be open. Defaults to true.
   * Note: Will default to false next major release.
   */
  multiple: false;
  /**
   * Value of the AccordionItem to expand by default.
   */
  defaultValue?: AccordionSingleValue;
  value?: never;
  onChange?: never;
};
type UncontrolledStateMultiple = {
  /**
   * Allow more than one item to be open. Defaults to true.
   * Note: Will default to false next major release.
   */
  multiple?: true; // Optional due to current default
  /**
   * Values of the AccordionItems to expand by default.
   */
  defaultValue?: string[];
  value?: never;
  onChange?: never;
};

export type AccordionProps = {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
  /** @deprecated The spacing is now derived from the `size` prop and will be removed in a future release. */
  space?: RequiredResponsiveValue<(typeof validSpaceValues)[number]>;
  data?: DataAttributeMap;
} & (
  | ControlledStateSingle
  | ControlledStateMultiple
  | UncontrolledStateSingle
  | UncontrolledStateMultiple
);

export const defaultSize = 'large';

const normalizeAccordionValue = (
  input: AccordionValue | undefined,
  multiple: boolean,
) => {
  if (input == null || input === '') {
    return [];
  }

  const list = typeof input === 'string' ? [input] : [...input];

  assert(
    list.every((item) => typeof item === 'string' && item.length > 0),
    "Accordion 'value' and 'defaultValue' must be a non-empty string or an array of non-empty strings.",
  );

  assert(
    multiple || list.length <= 1,
    "When 'multiple' is false, Accordion 'value' and 'defaultValue' must be a string or a single-item array.",
  );

  return list;
};

const defaultSpaceForSize = {
  divided: {
    xsmall: 'medium',
    small: 'medium',
    standard: 'medium',
    large: 'medium',
  },
  undivided: {
    xsmall: 'medium',
    small: 'medium',
    standard: 'medium',
    large: 'large',
  },
} satisfies Record<
  'divided' | 'undivided',
  Record<NonNullable<TextProps['size']>, (typeof validSpaceValues)[number]>
>;

const assertUniqueItemValues = (children: AccordionProps['children']) => {
  const seen = new Set<string>();

  for (const child of flattenChildren(children)) {
    if (!isValidElement<{ value?: string }>(child)) {
      continue;
    }

    const itemValue = child.props.value;

    if (typeof itemValue !== 'string') {
      continue;
    }

    assert(
      !seen.has(itemValue),
      `AccordionItem value "${itemValue}" is used more than once. Each AccordionItem value must be unique.`,
    );

    seen.add(itemValue);
  }
};

export const Accordion: FC<AccordionProps> = (props) => {
  const {
    children,
    size = defaultSize,
    tone,
    weight,
    multiple = true,
    value,
    defaultValue,
    space: spaceProp,
    dividers = true,
    data,
    ...restProps
  } = props;
  assert(
    spaceProp === undefined ||
      Object.values(normalizeResponsiveValue(spaceProp)).every(
        (spaceValue) =>
          spaceValue === undefined || validSpaceValues.includes(spaceValue),
      ),
    `To ensure adequate space for touch targets, 'space' prop values must be one of the following: ${validSpaceValues
      .map((x) => `"${x}"`)
      .join(', ')}`,
  );
  assert(
    tone === undefined || validTones.includes(tone),
    `The 'tone' prop should be one of the following: ${validTones
      .map((x) => `"${x}"`)
      .join(', ')}`,
  );
  assert(
    value === undefined || defaultValue === undefined,
    "Accordion 'defaultValue' cannot be set when 'value' is set. Use 'value' to control the open items, or 'defaultValue' for the initial state.",
  );
  assert(
    value === undefined || typeof props.onChange === 'function',
    "Accordion 'onChange' must be set when 'value' is set.",
  );

  const managed =
    multiple === false ||
    value !== undefined ||
    defaultValue !== undefined ||
    props.onChange !== undefined;

  if (process.env.NODE_ENV !== 'production') {
    /**
     * Validate that consumers are not passing `data-*`props,
     * which will not work and are not validated by TypeScript.
     */
    buildDataAttributes({ data, validateRestProps: restProps });
    assertUniqueItemValues(children);
  }

  const normalizedValue = useMemo(
    () =>
      value === undefined
        ? undefined
        : normalizeAccordionValue(value, multiple),
    [multiple, value],
  );
  const [uncontrolledValue, setUncontrolledValue] = useState(() =>
    normalizeAccordionValue(defaultValue, multiple),
  );
  const openValues = normalizedValue ?? uncontrolledValue;
  const openValuesRef = useRef(openValues);
  const propsRef = useRef(props);
  openValuesRef.current = openValues;
  propsRef.current = props;

  const toggleValue = useCallback(
    (itemValue: string) => {
      const current = openValuesRef.current;
      const isOpen = current.includes(itemValue);
      let next: string[];

      if (!multiple) {
        next = isOpen ? [] : [itemValue];
      } else if (isOpen) {
        next = current.filter((openValue) => openValue !== itemValue);
      } else {
        next = [...current, itemValue];
      }

      if (normalizedValue === undefined) {
        setUncontrolledValue(next);
      }

      // Narrowing on the un-destructured props so TypeScript
      // can correlate `multiple` with the `onChange` signature.
      const p = propsRef.current;
      if (p.multiple === false) {
        p.onChange?.(next[0] ?? '');
      } else {
        p.onChange?.(next);
      }
    },
    [multiple, normalizedValue],
  );

  const contextValue = useMemo(
    () => ({
      size,
      tone,
      weight,
      managed,
      openValues,
      toggleValue,
    }),
    [size, tone, weight, managed, openValues, toggleValue],
  );

  const space =
    spaceProp ?? defaultSpaceForSize[dividers ? 'divided' : 'undivided'][size];

  return (
    <AccordionContext.Provider value={contextValue}>
      <Stack space={space} data={data}>
        {!dividers ? (
          children
        ) : (
          <>
            <Divider />
            {Children.map(flattenChildren(children), (child, index) => (
              <>
                {index > 0 ? (
                  <Divider
                    weight={typeof dividers === 'string' ? dividers : undefined}
                  />
                ) : null}
                {child}
              </>
            ))}
            <Divider />
          </>
        )}
      </Stack>
    </AccordionContext.Provider>
  );
};
