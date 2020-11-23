import React, {
  Fragment,
  useRef,
  useReducer,
  useCallback,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  forwardRef,
  Ref,
  ReactElement,
  RefAttributes,
} from 'react';
import { useStyles } from 'sku/react-treat';
import parseHighlights from 'autosuggest-highlight/parse';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Announcement } from '../private/Announcement/Announcement';
import { Field, FieldProps } from '../private/Field/Field';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { useTouchableSpace, useText } from '../../hooks/typography';
import { getNextIndex } from '../private/getNextIndex';
import { normalizeKey } from '../private/normalizeKey';
import { ClearField } from '../private/Field/ClearField';
import { smoothScroll } from '../private/smoothScroll';
import { useScrollIntoView } from './useScrollIntoView';
import { useBreakpoint } from '../useBreakpoint/useBreakpoint';
import { RemoveScroll } from 'react-remove-scroll';
import { createAccessbilityProps, getItemId } from './createAccessbilityProps';
import { autosuggest, AutosuggestTranslations } from '../../translations/en';

import * as styleRefs from './Autosuggest.treat';

type SuggestionMatch = Array<{ start: number; end: number }>;

export interface AutosuggestValue<Value = any> {
  text: string;
  description?: string;
  value?: Value;
}

export interface Suggestion<Value = any> extends AutosuggestValue<Value> {
  label?: string;
  highlights?: SuggestionMatch;
  onClear?: (value: AutosuggestValue<Value>) => void;
  clearLabel?: string;
}

export interface GroupedSuggestions<Value> {
  label: string;
  suggestions: Array<Suggestion<Value>>;
}

export type Suggestions<Value> = Array<
  Suggestion<Value> | GroupedSuggestions<Value>
>;

// Action type IDs (allows action type names to be minified)
const INPUT_FOCUS = 0;
const INPUT_BLUR = 1;
const INPUT_CHANGE = 2;
const INPUT_ARROW_UP = 3;
const INPUT_ARROW_DOWN = 4;
const INPUT_ESCAPE = 5;
const INPUT_ENTER = 6;
const SUGGESTION_MOUSE_CLICK = 7;
const SUGGESTION_MOUSE_ENTER = 8;
const HAS_SUGGESTIONS_CHANGED = 9;

type Action =
  | { type: typeof INPUT_FOCUS }
  | { type: typeof INPUT_BLUR }
  | { type: typeof INPUT_CHANGE }
  | { type: typeof INPUT_ARROW_UP }
  | { type: typeof INPUT_ARROW_DOWN }
  | { type: typeof INPUT_ESCAPE }
  | { type: typeof INPUT_ENTER }
  | { type: typeof SUGGESTION_MOUSE_CLICK }
  | { type: typeof SUGGESTION_MOUSE_ENTER; value: number }
  | { type: typeof HAS_SUGGESTIONS_CHANGED };

interface AutosuggestState<Value> {
  highlightedIndex: number | null;
  isOpen: boolean;
  inputChangedSinceFocus: boolean;
  previewValue: AutosuggestValue<Value> | null;
  isFocused: boolean;
}

interface SuggestionItemProps {
  suggestion: Suggestion;
  highlighted: boolean;
  selected: boolean;
  onClick: () => void;
  onHover: () => void;
}
function SuggestionItem({
  suggestion,
  highlighted,
  selected,
  onHover,
  ...restProps
}: SuggestionItemProps) {
  const { highlights = [], onClear, clearLabel } = suggestion;
  const label = suggestion.label ?? suggestion.text;

  const suggestionParts = parseHighlights(
    label,
    highlights.map(({ start, end }) => [start, end]),
  );

  return (
    <Box
      component="li"
      cursor="pointer"
      onMouseDown={(event) => {
        // Without this `onClick` will not fire due to the input blur event
        event.preventDefault();
      }}
      onMouseMove={onHover}
      onTouchStart={onHover}
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
        display="flex"
        justifyContent="spaceBetween"
        background={highlighted ? 'selection' : undefined}
        paddingX="small"
        paddingRight={onClear ? 'none' : undefined}
      >
        <Box className={useTouchableSpace('standard')}>
          <Text baseline={false}>
            {suggestionParts.map(({ highlight, text }, index) =>
              selected || highlight ? (
                <Strong key={index}>{text}</Strong>
              ) : (
                <Fragment key={index}>{text}</Fragment>
              ),
            )}
          </Text>
          {suggestion.description ? (
            <Text size="small" tone="secondary" baseline={false}>
              {suggestion.description}
            </Text>
          ) : null}
        </Box>
        {typeof onClear === 'function' ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="touchable"
            height="touchable"
          >
            <ClearButton
              label={clearLabel || 'Clear suggestion'}
              onClick={(event: MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                onClear(valueFromSuggestion(suggestion));
              }}
            />
          </Box>
        ) : null}
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
      paddingX="small"
      borderRadius="standard"
      className={[
        styles.groupHeading,
        useTouchableSpace('xsmall'),
        useText({
          size: 'xsmall',
          baseline: false,
          weight: 'strong',
          tone: 'formAccent',
        }),
      ]}
    >
      {children}
    </Box>
  );
}

function normaliseSuggestions<Value>(
  suggestions: Array<GroupedSuggestions<Value> | Suggestion<Value>>,
) {
  let index = 0;
  const normalisedSuggestions: Array<Suggestion<Value>> = [];
  const groupHeadingIndexes = new Map<number, string>();
  const groupHeadingForSuggestion = new Map<Suggestion<Value>, string>();

  for (const item of suggestions) {
    if ('suggestions' in item) {
      groupHeadingIndexes.set(index, item.label);
      item.suggestions.forEach((suggestion) => {
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

function valueFromSuggestion<Value>(
  suggestion: Suggestion<Value>,
): AutosuggestValue<Value> {
  return 'value' in suggestion
    ? {
        text: suggestion.text,
        value: suggestion.value,
      }
    : { text: suggestion.text };
}

const noop = () => {
  /**/
};

const fallbackValue = { text: '' };
const fallbackSuggestions: Suggestion[] = [];

export interface AutosuggestProps<Value>
  extends Omit<FieldProps, 'value' | 'autoComplete' | 'labelId'> {
  value: AutosuggestValue<Value>;
  suggestions:
    | Suggestions<Value>
    | ((value: AutosuggestValue<Value>) => Suggestions<Value>);
  onChange: (value: AutosuggestValue<Value>) => void;
  automaticSelection?: boolean;
  hideSuggestionsOnSelection?: boolean;
  showMobileBackdrop?: boolean;
  scrollToTopOnMobile?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onClear?: () => void;
  placeholder?: string;
  type?: 'text' | 'search';
  translations?: AutosuggestTranslations;
}
export const Autosuggest = forwardRef(function <Value>(
  {
    id,
    value = fallbackValue,
    suggestions: suggestionsProp = fallbackSuggestions,
    onChange = noop,
    automaticSelection = false,
    showMobileBackdrop = false,
    scrollToTopOnMobile = true,
    hideSuggestionsOnSelection = true,
    onFocus = noop,
    onBlur = noop,
    placeholder,
    type = 'text',
    onClear,
    translations = autosuggest,
    ...restProps
  }: AutosuggestProps<Value>,
  forwardedRef: Ref<HTMLInputElement>,
) {
  const styles = useStyles(styleRefs);

  const suggestions =
    typeof suggestionsProp === 'function'
      ? suggestionsProp(value)
      : suggestionsProp;

  // We need a ref regardless so we can imperatively
  // focus the field when clicking the clear button
  const defaultRef = useRef<HTMLInputElement | null>(null);
  const inputRef = forwardedRef || defaultRef;

  const fireChange = useCallback(
    (suggestion: Suggestion<Value>) =>
      onChange(valueFromSuggestion(suggestion)),
    [onChange],
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const justPressedArrowRef = useRef(false);
  const {
    normalisedSuggestions,
    groupHeadingIndexes,
    groupHeadingForSuggestion,
  } = normaliseSuggestions(suggestions);
  const suggestionCount = normalisedSuggestions.length;
  const hasSuggestions = suggestionCount > 0;

  const reducer = (state: AutosuggestState<Value>, action: Action) => {
    switch (action.type) {
      case INPUT_ARROW_DOWN: {
        if (hasSuggestions) {
          const nextIndex = getNextIndex(
            1,
            state.highlightedIndex,
            suggestionCount,
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
            suggestionCount,
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
          inputChangedSinceFocus: true,
          previewValue: null,
          highlightedIndex:
            hasSuggestions && automaticSelection && value.text.length > 0
              ? 0
              : null,
        };
      }

      case INPUT_FOCUS: {
        return {
          ...state,
          isOpen: hasSuggestions,
          inputChangedSinceFocus: false,
          isFocused: true,
        };
      }

      case INPUT_BLUR: {
        return {
          ...state,
          isOpen: false,
          previewValue: null,
          highlightedIndex: null,
          isFocused: false,
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

      case INPUT_ENTER:
      case SUGGESTION_MOUSE_CLICK: {
        return {
          ...state,
          isOpen: !hideSuggestionsOnSelection,
          previewValue: null,
          highlightedIndex: null,
        };
      }

      case SUGGESTION_MOUSE_ENTER: {
        return {
          ...state,
          highlightedIndex: action.value,
        };
      }

      case HAS_SUGGESTIONS_CHANGED: {
        return automaticSelection
          ? {
              ...state,
              highlightedIndex:
                hasSuggestions && value.text.length > 0 ? 0 : null,
            }
          : state;
      }

      default: {
        // eslint-disable-next-line no-console
        console.error(new Error(`Invalid Autosuggest action: ${action}`));
        return state;
      }
    }
  };

  const [
    {
      isOpen,
      inputChangedSinceFocus,
      previewValue,
      highlightedIndex,
      isFocused,
    },
    dispatch,
  ] = useReducer(reducer, {
    isOpen: false,
    inputChangedSinceFocus: false,
    previewValue: null,
    highlightedIndex: null,
    isFocused: false,
  });

  const highlightedItem =
    typeof highlightedIndex === 'number'
      ? document.getElementById(getItemId(id, highlightedIndex))
      : null;

  useScrollIntoView(highlightedItem, menuRef.current);

  useEffect(() => {
    dispatch({
      type: HAS_SUGGESTIONS_CHANGED,
    });
  }, [hasSuggestions]);

  const breakpoint = useBreakpoint();

  const inputProps = {
    value: previewValue ? previewValue.text : value.text,
    type: type === 'search' ? type : 'text',
    placeholder,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      dispatch({ type: INPUT_CHANGE });
      fireChange({ text: inputValue });
    },
    onFocus: () => {
      if (rootRef.current && scrollToTopOnMobile && breakpoint === 'mobile') {
        smoothScroll(rootRef.current);
      }

      dispatch({ type: INPUT_FOCUS });
      onFocus();
    },
    onBlur: () => {
      if (justPressedArrowRef.current === true) {
        return;
      }

      if (previewValue) {
        fireChange(previewValue);
      } else if (
        isOpen &&
        automaticSelection &&
        inputChangedSinceFocus &&
        value.text.length > 0 &&
        suggestionCount > 0
      ) {
        fireChange(normalisedSuggestions[0]);
      }

      dispatch({ type: INPUT_BLUR });
      onBlur();
    },
    onKeyDown: (event: KeyboardEvent) => {
      const targetKey = normalizeKey(event);

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
        case 'Escape': {
          event.preventDefault();
          if (previewValue === null && value.text) {
            fireChange({ text: '' });
          }

          dispatch({ type: INPUT_ESCAPE });
          return;
        }
        case 'Enter': {
          if (typeof highlightedIndex === 'number') {
            event.preventDefault();
            fireChange(normalisedSuggestions[highlightedIndex]);
          }

          dispatch({ type: INPUT_ENTER });
          return;
        }
        default: {
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

  const clearable = Boolean(
    typeof onClear !== 'undefined' &&
      typeof value !== 'undefined' &&
      value.text.length > 0,
  );

  const announcements = [];
  const hasAutomaticSelection =
    automaticSelection && previewValue === null && highlightedIndex === 0;

  // Announce when the field is focused and no selections have been manually highlighted
  if (
    isFocused &&
    isOpen &&
    (highlightedIndex === null || hasAutomaticSelection)
  ) {
    if (hasSuggestions) {
      announcements.push(
        translations.suggestionsAvailableAnnouncement(suggestionCount),
      );

      if (hasAutomaticSelection) {
        announcements.push(
          translations.suggestionAutoSelectedAnnouncement(
            normalisedSuggestions[0].text,
          ),
        );
      }

      announcements.push(translations.suggestionInstructions);
    } else {
      announcements.push(translations.noSuggestionsAvailableAnnouncement);
    }
  }

  return (
    <Fragment>
      {showMobileBackdrop ? (
        <Box
          position="fixed"
          zIndex="dropdownBackdrop"
          transition="fast"
          display={['block', 'none']}
          pointerEvents={isOpen ? undefined : 'none'}
          top={0}
          left={0}
          opacity={!isOpen ? 0 : undefined}
          className={[
            styles.backdrop,
            isOpen ? styles.backdropVisible : undefined,
          ]}
        />
      ) : null}
      <Box
        {...(showMobileBackdrop && isOpen
          ? {
              position: 'relative',
              zIndex: 'dropdown',
            }
          : null)}
      >
        <Box position="relative" ref={rootRef}>
          <Field
            {...restProps}
            id={id}
            labelId={a11y.labelProps.id}
            value={value.text}
            secondaryIcon={
              onClear ? (
                <ClearField
                  hide={!clearable}
                  onClear={onClear}
                  inputRef={inputRef}
                />
              ) : null
            }
          >
            {(overlays, fieldProps, icon, secondaryIcon) => (
              <Box>
                <Box
                  component="input"
                  {...fieldProps}
                  {...a11y.inputProps}
                  {...inputProps}
                  position="relative"
                  ref={inputRef}
                />
                {icon}
                {/* MenuRef gets forwarded down to UL by RemoveScroll by `forwardProps`. */}
                <RemoveScroll ref={menuRef} enabled={isOpen} forwardProps>
                  <Box
                    component="ul"
                    display={isOpen && hasSuggestions ? 'block' : 'none'}
                    position="absolute"
                    zIndex="dropdown"
                    background="card"
                    borderRadius="standard"
                    boxShadow="medium"
                    width="full"
                    marginTop="xxsmall"
                    paddingY="xxsmall"
                    className={styles.menu}
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
                              <SuggestionItem
                                suggestion={suggestion}
                                highlighted={highlightedIndex === index}
                                selected={value === suggestion}
                                onClick={() => {
                                  fireChange(suggestion);
                                  dispatch({ type: SUGGESTION_MOUSE_CLICK });
                                }}
                                onHover={() => {
                                  dispatch({
                                    type: SUGGESTION_MOUSE_ENTER,
                                    value: index,
                                  });
                                }}
                                {...a11y.getItemProps({
                                  index,
                                  label: suggestion.label ?? suggestion.text,
                                  description: suggestion.description,
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
                </RemoveScroll>
                {overlays}
                {secondaryIcon}
              </Box>
            )}
          </Field>
        </Box>
        <HiddenVisually {...a11y.assistiveDescriptionProps}>
          {translations.assistiveDescription}
        </HiddenVisually>
        <Announcement>{announcements.join('. ')}</Announcement>
      </Box>
    </Fragment>
  );
}) as <Value>(
  props: AutosuggestProps<Value> & RefAttributes<HTMLInputElement>,
) => ReactElement;

// @ts-expect-error
Autosuggest.displayName = 'Autosuggest';
