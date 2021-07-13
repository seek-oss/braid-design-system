import { Properties } from 'csstype';
import { Breakpoint } from '../css/breakpoints';
import { responsiveStyle } from '../css/responsiveStyle';

export const mapToProperty =
  <Property extends keyof Properties<string | number>>(
    property: Property,
    breakpoint?: Breakpoint,
  ) =>
  (value: string | number) => {
    const styleRule = { [property]: value };

    return breakpoint
      ? responsiveStyle({ [breakpoint]: styleRule })
      : styleRule;
  };
