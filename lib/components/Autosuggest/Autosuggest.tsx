import React, {
  Fragment,
  useRef,
  KeyboardEvent,
  useReducer,
  ChangeEvent,
} from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/react-treat';
import parseHighlights from 'autosuggest-highlight/parse';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import { Field, FieldProps } from '../private/Field/Field';
import { useTouchableSpace, useText } from '../../hooks/typography';
import { getNextIndex } from './getNextIndex';
import { normalizeArrowKey } from './normalizeArrowKey';
import { smoothScroll } from './smoothScroll';
import { useScrollIntoView } from './useScrollIntoView';
import { useIsolatedScroll } from './useIsolatedScroll';
import { createAccessbilityProps, getItemId } from './createAccessbilityProps';
import * as styleRefs from './Autosuggest.treat';

type SuggestionMatch = Array<{ start: number; end: number }>;

interface AutosuggestValue<Value = any> {
  text: string;
  highlights?: SuggestionMatch;
  value?: Value;
}

interface GroupedSuggestion<Value> {
  label: string;
  suggestions: Array<AutosuggestValue<Value>>;
}

// Action type IDs (allows action type names to be minified)
const INPUT_FOCUS = 0;
const INPUT_BLUR = 1;
const INPUT_CHANGE = 2;
const INPUT_ARROW_UP = 3;
const INPUT_ARROW_DOWN = 4;
const INPUT_ARROW_LEFT = 5;
const INPUT_ARROW_RIGHT = 6;
const INPUT_ESCAPE = 7;
const INPUT_ENTER = 8;
const SUGGESTION_MOUSE_CLICK = 9;
const SUGGESTION_MOUSE_ENTER = 10;

type Action =
  | { type: typeof INPUT_FOCUS }
  | { type: typeof INPUT_BLUR }
  | { type: typeof INPUT_CHANGE }
  | { type: typeof INPUT_ARROW_UP }
  | { type: typeof INPUT_ARROW_DOWN }
  | { type: typeof INPUT_ARROW_LEFT }
  | { type: typeof INPUT_ARROW_RIGHT }
  | { type: typeof INPUT_ESCAPE }
  | { type: typeof INPUT_ENTER }
  | { type: typeof SUGGESTION_MOUSE_CLICK }
  | { type: typeof SUGGESTION_MOUSE_ENTER; value: number };

interface AutosuggestState<Value> {
  highlightedIndex: number | null;
  isOpen: boolean;
  previewValue: AutosuggestValue<Value> | null;
}

interface SuggestionProps {
  highlighted: boolean;
  selected: boolean;
  value: string;
  matchedSections: SuggestionMatch;
  onClick: () => void;
  onMouseMove: () => void;
}
function Suggestion({
  highlighted,
  selected,
  value,
  matchedSections,
  ...restProps
}: SuggestionProps) {
  const suggestionParts = parseHighlights(
    value,
    matchedSections.map(({ start, end }) => [start, end]),
  );

  return (
    <Box
      component="li"
      style={{ cursor: 'pointer' }}
      onMouseDown={event => {
        // Without this `onClick` will not fire due to the input blur event
        event.preventDefault();
      }}
      {...restProps}
    >
      {/*
          Render styles as a separate element, otherwise VoiceOver can't
          keep up with the updated ARIA attributes. Don't ask me why, but
          it seems that too many changes to the element causes either React
          or the browser or VoiceOver to see the list item as a new element.
      */}
      <Box
        component="span"
        display="block"
        background={highlighted ? 'selection' : undefined}
        paddingLeft="small"
        paddingRight="small"
        className={useTouchableSpace('standard')}
      >
        <Text baseline={false}>
          {suggestionParts.map(({ highlight, text }, index) =>
            selected || highlight ? (
              <Strong key={index}>{text}</Strong>
            ) : (
              <Fragment key={index}>{text}</Fragment>
            ),
          )}
        </Text>
      </Box>
    </Box>
  );
}

interface GroupHeadingProps {
  children: string;
}
function GroupHeading({ children }: GroupHeadingProps) {
  const styles = useStyles(styleRefs);

  return (
    <Box
      paddingLeft="small"
      paddingRight="small"
      borderRadius="standard"
      className={classnames(
        styles.groupHeading,
        useTouchableSpace('xsmall'),
        useText({
          size: 'xsmall',
          baseline: false,
          weight: 'strong',
          tone: 'formAccent',
        }),
      )}
    >
      {children}
    </Box>
  );
}

function normaliseSuggestions<Value>(
  suggestions: Array<GroupedSuggestion<Value> | AutosuggestValue<Value>>,
) {
  let index = 0;
  const normalisedSuggestions: Array<AutosuggestValue<Value>> = [];
  const groupHeadingIndexes = new Map<number, string>();
  const groupHeadingForSuggestion = new Map<AutosuggestValue<Value>, string>();

  for (const item of suggestions) {
    if ('suggestions' in item) {
      groupHeadingIndexes.set(index, item.label);
      item.suggestions.forEach(suggestion => {
        groupHeadingForSuggestion.set(suggestion, item.label);
      });
      index += normalisedSuggestions.push(...item.suggestions);
    } else {
      index += normalisedSuggestions.push(item);
    }
  }

  return {
    normalisedSuggestions,
    groupHeadingIndexes,
    groupHeadingForSuggestion,
  };
}

const noop = () => {
  /**/
};

export interface AutosuggestProps<Value>
  extends Omit<FieldProps, 'autoComplete' | 'labelId'> {
  value: AutosuggestValue<Value>;
  suggestions: Array<AutosuggestValue<Value> | GroupedSuggestion<Value>>;
  onChange: (value: AutosuggestValue<Value>) => void;
  automaticSelection?: boolean;
  showMobileBackdrop?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
}
export function Autosuggest<Value>({
  id,
  value,
  suggestions,
  onChange = noop,
  automaticSelection = false,
  showMobileBackdrop = false,
  onFocus = noop,
  onBlur = noop,
  placeholder,
  ...restProps
}: AutosuggestProps<Value>) {
  const styles = useStyles(styleRefs);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const justPressedArrowRef = useRef(false);
  const mobileDetectionRef = useRef<HTMLDivElement>(null);
  const {
    normalisedSuggestions,
    groupHeadingIndexes,
    groupHeadingForSuggestion,
  } = normaliseSuggestions(suggestions);
  const hasSuggestions = normalisedSuggestions.length > 0;

  const reducer = (state: AutosuggestState<Value>, action: Action) => {
    switch (action.type) {
      case INPUT_ARROW_DOWN: {
        if (hasSuggestions) {
          const nextIndex = getNextIndex(
            1,
            state.highlightedIndex,
            normalisedSuggestions.length,
          );

          return {
            ...state,
            isOpen: true,
            previewValue: normalisedSuggestions[nextIndex],
            highlightedIndex: nextIndex,
          };
        }
      }

      case INPUT_ARROW_UP: {
        if (hasSuggestions) {
          const nextIndex = getNextIndex(
            -1,
            state.highlightedIndex,
            normalisedSuggestions.length,
          );

          return {
            ...state,
            isOpen: true,
            previewValue: normalisedSuggestions[nextIndex],
            highlightedIndex: nextIndex,
          };
        }
      }

      case INPUT_CHANGE: {
        return {
          ...state,
          isOpen: true,
          previewValue: null,
          highlightedIndex: hasSuggestions && automaticSelection ? 0 : null,
        };
      }

      case INPUT_FOCUS: {
        return {
          ...state,
          isOpen: hasSuggestions,
        };
      }

      case INPUT_BLUR: {
        return {
          ...state,
          isOpen: false,
          previewValue: null,
          highlightedIndex: null,
        };
      }

      case INPUT_ESCAPE: {
        if (value.text) {
          return {
            ...state,
            isOpen: false,
            previewValue: null,
            highlightedIndex: null,
          };
        } else if (hasSuggestions) {
          return {
            ...state,
            isOpen: !state.isOpen,
            previewValue: null,
          };
        }

        return state;
      }

      case INPUT_ENTER: {
        if (typeof state.highlightedIndex === 'number') {
          return {
            ...state,
            isOpen: false,
            previewValue: null,
          };
        }

        return state;
      }

      case SUGGESTION_MOUSE_ENTER: {
        return {
          ...state,
          highlightedIndex: action.value,
        };
      }

      case SUGGESTION_MOUSE_CLICK: {
        return {
          ...state,
          isOpen: false,
          previewValue: null,
          highlightedIndex: null,
        };
      }
    }

    return state;
  };

  const [{ isOpen, previewValue, highlightedIndex }, dispatch] = useReducer(
    reducer,
    {
      isOpen: false,
      previewValue: null,
      highlightedIndex: null,
    },
  );

  const highlightedItem =
    typeof highlightedIndex === 'number'
      ? document.getElementById(getItemId(id, highlightedIndex))
      : null;

  useScrollIntoView(highlightedItem, menuRef.current);
  useIsolatedScroll(menuRef.current);

  const inputProps = {
    value: previewValue ? previewValue.text : value.text,
    placeholder,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      dispatch({ type: INPUT_CHANGE });
      onChange({ text: inputValue });
    },
    onFocus: () => {
      // Only scroll the autosuggest to the top of the viewport
      // if we're on mobile. This is a bit of a hack because we
      // don't currently have runtime access to the theme's
      // responsive breakpoint.
      const isMobile =
        mobileDetectionRef.current &&
        getComputedStyle(mobileDetectionRef.current).display === 'block';

      if (rootRef.current && isMobile) {
        smoothScroll(rootRef.current); // tslint:disable-line no-floating-promises
      }

      dispatch({ type: INPUT_FOCUS });
      onFocus();
    },
    onBlur: () => {
      if (justPressedArrowRef.current === true) {
        return;
      }

      if (previewValue) {
        onChange(previewValue);
      } else if (
        automaticSelection &&
        value.text.length > 0 &&
        normalisedSuggestions.length > 0
      ) {
        onChange(normalisedSuggestions[0]);
      }

      dispatch({ type: INPUT_BLUR });
      onBlur();
    },
    onKeyDown: (event: KeyboardEvent) => {
      const targetKey = normalizeArrowKey(event);

      // Fix bug in Chrome + VoiceOver where the
      // input is blurred when pressing arrow up/down
      if (/^Arrow(Up|Down$)/.test(targetKey)) {
        justPressedArrowRef.current = true;
        setTimeout(() => {
          justPressedArrowRef.current = false;
        }, 150);
      }

      switch (targetKey) {
        case 'ArrowDown': {
          event.preventDefault();
          dispatch({ type: INPUT_ARROW_DOWN });
          return;
        }
        case 'ArrowUp': {
          event.preventDefault();
          dispatch({ type: INPUT_ARROW_UP });
          return;
        }
        case 'ArrowLeft': {
          dispatch({ type: INPUT_ARROW_LEFT });
          return;
        }
        case 'ArrowRight': {
          dispatch({ type: INPUT_ARROW_RIGHT });
          return;
        }
        case 'Escape': {
          event.preventDefault();
          if (previewValue === null && value.text) {
            onChange({ text: '' });
          }

          dispatch({ type: INPUT_ESCAPE });
          return;
        }
        case 'Enter': {
          if (typeof highlightedIndex === 'number') {
            event.preventDefault();
            onChange(normalisedSuggestions[highlightedIndex]);
          }

          dispatch({ type: INPUT_ENTER });
          return;
        }
      }
    },
  };

  const a11y = createAccessbilityProps({
    id,
    isOpen,
    highlightedIndex,
  });

  return (
    <Fragment>
      <Box ref={mobileDetectionRef} display={['block', 'none']} />
      {showMobileBackdrop ? (
        <Box
          position="fixed"
          transition="fast"
          display={['block', 'none']}
          className={classnames(
            styles.backdrop,
            styles.backdropVisibility[isOpen ? 'visible' : 'hidden'],
          )}
        />
      ) : null}
      <Box
        {...(showMobileBackdrop && isOpen
          ? {
              position: 'relative',
              className: styles.containerOpen,
            }
          : null)}
      >
        <Box position="relative" ref={rootRef}>
          <Field {...restProps} id={id} labelId={a11y.labelProps.id}>
            {(
              overlays,
              {
                background,
                boxShadow,
                borderRadius,
                paddingX,
                className,
                ...restFieldProps
              },
            ) => (
              <Box {...a11y.rootProps}>
                <Box
                  component="input"
                  boxShadow={boxShadow}
                  borderRadius={borderRadius}
                  paddingX={paddingX}
                  {...restFieldProps}
                  {...a11y.inputProps}
                  {...inputProps}
                  type="text"
                  position="relative"
                  className={classnames(
                    className,
                    isOpen ? styles.inputOpen : null,
                  )}
                  ref={inputRef}
                />
                <Box
                  component="ul"
                  display={isOpen && hasSuggestions ? 'block' : 'none'}
                  position="absolute"
                  background="card"
                  borderRadius="standard"
                  boxShadow="standard"
                  width="full"
                  marginTop="xxsmall"
                  paddingTop="xxsmall"
                  paddingBottom="xxsmall"
                  className={classnames(styles.menu)}
                  ref={menuRef}
                  {...a11y.menuProps}
                >
                  {isOpen
                    ? normalisedSuggestions.map((suggestion, index) => {
                        const { text } = suggestion;
                        const groupHeading = groupHeadingIndexes.get(index);

                        return (
                          <Fragment key={index + text}>
                            {groupHeading ? (
                              <GroupHeading>{groupHeading}</GroupHeading>
                            ) : null}
                            <Suggestion
                              value={text}
                              highlighted={highlightedIndex === index}
                              matchedSections={suggestion.highlights || []}
                              selected={value === suggestion}
                              onClick={() => {
                                onChange(suggestion);

                                dispatch({ type: SUGGESTION_MOUSE_CLICK });
                              }}
                              onMouseMove={() => {
                                dispatch({
                                  type: SUGGESTION_MOUSE_ENTER,
                                  value: index,
                                });
                              }}
                              {...a11y.getItemProps({
                                index,
                                label: suggestion.text,
                                groupHeading: groupHeadingForSuggestion.get(
                                  suggestion,
                                ),
                              })}
                            />
                          </Fragment>
                        );
                      })
                    : null}
                </Box>
                {overlays}
              </Box>
            )}
          </Field>
        </Box>
      </Box>
    </Fragment>
  );
}
