import '../../reset';
import { useToast, useResponsiveValue } from '../components';
import { vars, atoms, breakpoints } from '../../css';
import { usePlayroomStore } from './playroomState';
import { RequiredResponsiveObject } from '../css/atoms/sprinkles.css';

export default function useScope() {
  const responsiveValue = useResponsiveValue();

  function playroomResponsiveValue<Value>(
    value: RequiredResponsiveObject<Value>,
  ): Value {
    Object.values(value).forEach((v) => {
      if (v === null) {
        throw new Error(
          `You cannot use 'null' as a value when using 'responsiveValue'.`,
        );
      }
    });

    const resolvedValue = responsiveValue(value);

    // When prototyping, ensure we always resolve to a value.
    // In Playroom, we delay rendering of the prototype until mount,
    // so the result of this Hook never actually ends up on screen.
    if (resolvedValue === null) {
      return value.mobile;
    }

    return resolvedValue;
  }

  return {
    vars,
    atoms,
    breakpoints,
    showToast: useToast(),
    responsiveValue: playroomResponsiveValue,
    ...usePlayroomStore(),
  };
}
