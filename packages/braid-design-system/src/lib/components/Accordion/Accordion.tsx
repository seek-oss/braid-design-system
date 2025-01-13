import assert from 'assert';
import React, { Children, useMemo } from 'react';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type RequiredResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import {
  type AccordionContextValue,
  AccordionContext,
  validTones,
} from './AccordionContext';
import flattenChildren from '../../utils/flattenChildren';
import type { TextProps } from '../Text/Text';

export const validSpaceValues = ['medium', 'large', 'xlarge'] as const;

export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  weight?: AccordionContextValue['weight'];
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
    standard: 'large',
    large: 'large',
  },
} satisfies Record<
  'divided' | 'undivided',
  Record<NonNullable<TextProps['size']>, (typeof validSpaceValues)[number]>
>;

export const Accordion = ({
  children,
  size = defaultSize,
  tone,
  weight,
  space: spaceProp,
  dividers = true,
  data,
  ...restProps
}: AccordionProps) => {
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

  const contextValue = useMemo(
    () => ({ size, tone, weight }),
    [size, tone, weight],
  );

  const space =
    spaceProp ?? defaultSpaceForSize[dividers ? 'divided' : 'undivided'][size];

  return (
    <AccordionContext.Provider value={contextValue}>
      <Stack
        space={space}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
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
