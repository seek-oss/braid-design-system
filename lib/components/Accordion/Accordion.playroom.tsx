import React from 'react';
import { wireframe } from '../../themes';
import { normaliseResponsiveProp } from '../../utils/responsiveProp';
import {
  Accordion as BraidAccordion,
  AccordionProps,
  validSpaceValues,
} from './Accordion';

type ValidSpaceValue = typeof validSpaceValues[number];

const spaceScale = ['none', ...Object.keys(wireframe.space.space)] as Array<
  keyof typeof wireframe.space.space | 'none'
>;

const filterSpace = (space: NonNullable<AccordionProps['space']>) => {
  const filteredSpace = normaliseResponsiveProp(space).map((value) => {
    if (spaceScale.includes(value) && !validSpaceValues.includes(value)) {
      throw new Error(
        `To ensure adequate space for touch targets, 'space' prop values must be one of the following: ${validSpaceValues
          .map((x) => `"${x}"`)
          .join(', ')}`,
      );
    }

    return validSpaceValues.includes(value) ? value : 'medium';
  }) as [ValidSpaceValue, ValidSpaceValue, ValidSpaceValue];

  return filteredSpace as Readonly<typeof filteredSpace>;
};

export const Accordion = ({ space, ...restProps }: AccordionProps) => (
  <BraidAccordion
    space={
      typeof space === 'string' || Array.isArray(space)
        ? filterSpace(space)
        : undefined
    }
    {...restProps}
  />
);
