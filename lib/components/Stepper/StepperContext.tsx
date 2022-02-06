import React, {
  createContext,
  KeyboardEvent,
  ReactNode,
  useReducer,
} from 'react';
import { normalizeKey } from '../private/normalizeKey';
import * as styles from './Stepper.css';

export type StepperMode = 'linear' | 'non-linear';
export type StepperTone = Exclude<keyof typeof styles.tone, 'formAccent'>;

interface StepContextValues {
  stepNumber: number;
  isLast: boolean;
}

export const StepContext = createContext<StepContextValues>({
  stepNumber: 0,
  isLast: false,
});

// Action type IDs (allows action type names to be minified)
export const NAV_RIGHT = 0;
export const NAV_DOWN = 1;
export const NAV_LEFT = 2;
export const NAV_UP = 3;
export const NAV_HOME = 4;
export const NAV_END = 5;
export const NAV_TAB = 6;
export const NAV_CLICKED = 7;
export const NAV_FOCUSED = 8;
export const NAV_BLURRED = 9;

export type Action =
  | { type: typeof NAV_RIGHT }
  | { type: typeof NAV_UP }
  | { type: typeof NAV_LEFT }
  | { type: typeof NAV_DOWN }
  | { type: typeof NAV_HOME }
  | { type: typeof NAV_END }
  | { type: typeof NAV_TAB }
  | { type: typeof NAV_FOCUSED }
  | { type: typeof NAV_BLURRED }
  | { type: typeof NAV_CLICKED; value: number };

interface State {
  focusedStep: number | null;
  activeStep: number;
  progress: number;
  isLinear: boolean;
  tone: keyof typeof styles.tone;
  onStepClick?: (step: { id?: string | number; stepNumber: number }) => void;
}

interface StepperContextValues extends State {
  onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onClick?: (index: number) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const StepperContext = createContext<StepperContextValues | null>(null);

export type StepperProviderProps = {
  children: ReactNode;
  activeStep: number;
  stepCount: number;
  progress: number;
  isLinear: boolean;
  tone?: keyof typeof styles.tone;
  onStepClick?: (step: { id?: string | number; stepNumber: number }) => void;
};

const getNextStep = (
  moveAmount: 1 | -1,
  current: number | null,
  maxStep: number,
) => {
  if (current === null) {
    return moveAmount > 0 ? 1 : maxStep;
  }

  const nextStep = moveAmount + current;

  if (nextStep > maxStep) {
    return 1;
  }

  if (nextStep < 1) {
    return maxStep;
  }

  return nextStep;
};

export const StepperContextProvider = ({
  children,
  activeStep,
  stepCount: stepCountProp,
  progress,
  isLinear,
  tone = 'formAccent',
  onStepClick,
}: StepperProviderProps) => {
  const stepCount = isLinear ? progress : stepCountProp;
  const [stepperState, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case NAV_UP:
        case NAV_LEFT: {
          return {
            ...state,
            focusedStep: getNextStep(-1, state.focusedStep, stepCount),
          };
        }
        case NAV_DOWN:
        case NAV_RIGHT: {
          return {
            ...state,
            focusedStep: getNextStep(1, state.focusedStep, stepCount),
          };
        }
        case NAV_HOME: {
          return {
            ...state,
            focusedStep: 1,
          };
        }
        case NAV_END: {
          return {
            ...state,
            focusedStep: stepCount,
          };
        }
        case NAV_BLURRED:
        case NAV_TAB: {
          return {
            ...state,
            focusedStep: null,
          };
        }
        case NAV_CLICKED: {
          return {
            ...state,
            focusedStep: action.value,
          };
        }
        case NAV_FOCUSED: {
          return {
            ...state,
            focusedStep:
              state.focusedStep === null ? activeStep : state.focusedStep,
          };
        }

        default:
          return state;
      }
    },
    {
      focusedStep: null,
      activeStep,
      isLinear,
      tone,
      progress,
      onStepClick,
    },
  );

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      return;
    }

    const action: Record<string, Action> = {
      ArrowRight: { type: NAV_RIGHT },
      ArrowLeft: { type: NAV_LEFT },
      ArrowUp: { type: NAV_UP },
      ArrowDown: { type: NAV_DOWN },
      Home: { type: NAV_HOME },
      End: { type: NAV_END },
    };

    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const targetKey = normalizeKey(event);

    if (targetKey === 'Tab') {
      dispatch({ type: NAV_TAB });
      return;
    }

    // Prevent arrow keys, or home/end scrolling the document while navigating
    const isNavigationKeyPress =
      targetKey.indexOf('Arrow') === 0 || ['Home', 'End'].includes(targetKey);

    if (isNavigationKeyPress) {
      event.preventDefault();
    }
  };

  const onFocus = () =>
    dispatch({
      type: NAV_FOCUSED,
    });

  const onBlur = () =>
    dispatch({
      type: NAV_BLURRED,
    });

  const onClick = (index: number) =>
    dispatch({
      type: NAV_CLICKED,
      value: index,
    });

  return (
    <StepperContext.Provider
      value={{
        ...stepperState,
        activeStep,
        isLinear,
        tone,
        progress,
        onStepClick,
        ...(typeof onStepClick === 'function'
          ? {
              onKeyUp,
              onKeyDown,
              onClick,
              onFocus,
              onBlur,
            }
          : {}),
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
