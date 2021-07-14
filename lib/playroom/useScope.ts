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

    if (resolvedValue === null) {
      throw new Error(
        `The 'responsiveValue' function resolved to 'null', which means was called before initial mount.`,
      );
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
