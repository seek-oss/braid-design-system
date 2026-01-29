import { useEffect, useState } from 'react';

import { vars, atoms, breakpoints } from '../../css';
import { useToast, useResponsiveValue } from '../components';

import { usePlayroomStore } from './playroomState';

import {
  type RequiredResponsiveObject,
  darkMode,
} from '../css/atoms/sprinkles.css';

type PlayroomScope = {
  vars: typeof vars;
  atoms: typeof atoms;
  breakpoints: typeof breakpoints;
  showToast: ReturnType<typeof useToast>;
  responsiveValue: <Value>(value: RequiredResponsiveObject<Value>) => Value;
  colorModeValue: (value: Record<'lightMode' | 'darkMode', any>) => any;
} & ReturnType<typeof usePlayroomStore>;

export default function useScope(): PlayroomScope {
  const responsiveValue = useResponsiveValue();
  const showToast = useToast();
  const playroomState = usePlayroomStore();

  // TODO: COLORMODE RELEASE
  // Revisit when dark mode frames are first class
  const [colorMode, setColorMode] = useState<'lightMode' | 'darkMode'>(
    'lightMode',
  );

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          setColorMode(
            document.documentElement.classList.contains(darkMode)
              ? 'darkMode'
              : 'lightMode',
          );
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [colorMode]);

  function playroomColorModeValue(
    value: Record<'lightMode' | 'darkMode', any>,
  ) {
    if (typeof value !== 'object' || !(value.darkMode || value.lightMode)) {
      return;
    }

    return document.documentElement.classList.contains(darkMode)
      ? value.darkMode
      : value.lightMode;
  }

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
    showToast,
    responsiveValue: playroomResponsiveValue,
    colorModeValue: playroomColorModeValue,
    ...playroomState,
  };
}
