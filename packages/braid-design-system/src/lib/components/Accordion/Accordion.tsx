import assert from 'assert';

import {
  Children,
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

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
  /**
   * When true, opening an item closes any other open item.
   * Starts with all items collapsed. Item-level `expanded` cannot be set.
   * `onToggle` fires on the item that was clicked, and with `false` on the
   * item that was closed as a result.
   */
  exclusive?: boolean;
  /** @deprecated The spacing is now derived from the `size` prop and will be removed in a future release. */
  space?: RequiredResponsiveValue<(typeof validSpaceValues)[number]>;
  data?: DataAttributeMap;
}

export const defaultSize = 'large';

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

export const Accordion: FC<AccordionProps> = ({
  children,
  size = defaultSize,
  tone,
  weight,
  exclusive = false,
  space: spaceProp,
  dividers = true,
  data,
  ...restProps
}) => {
  assert(
    spaceProp === undefined ||
      Object.values(normalizeResponsiveValue(spaceProp)).every(
        (value) => value === undefined || validSpaceValues.includes(value),
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

  if (process.env.NODE_ENV !== 'production') {
    /**
     * Validate that consumers are not passing `data-*`props,
     * which will not work and are not validated by TypeScript.
     */
    buildDataAttributes({ data, validateRestProps: restProps });
  }

  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const openItemIdRef = useRef<string | null>(null);
  const itemTogglesRef = useRef(new Map<string, (expanded: boolean) => void>());

  openItemIdRef.current = openItemId;

  const registerItemToggle = useCallback(
    (itemId: string, onToggle?: (expanded: boolean) => void) => {
      if (onToggle) {
        itemTogglesRef.current.set(itemId, onToggle);
      } else {
        itemTogglesRef.current.delete(itemId);
      }

      return () => {
        itemTogglesRef.current.delete(itemId);
      };
    },
    [],
  );

  const onItemToggle = useCallback((itemId: string, expanded: boolean) => {
    const current = openItemIdRef.current;

    if (expanded) {
      if (current && current !== itemId) {
        itemTogglesRef.current.get(current)?.(false);
      }

      setOpenItemId(itemId);
      return;
    }

    if (current === itemId) {
      setOpenItemId(null);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      size,
      tone,
      weight,
      exclusive,
      openItemId,
      onItemToggle,
      registerItemToggle,
    }),
    [
      size,
      tone,
      weight,
      exclusive,
      openItemId,
      onItemToggle,
      registerItemToggle,
    ],
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
