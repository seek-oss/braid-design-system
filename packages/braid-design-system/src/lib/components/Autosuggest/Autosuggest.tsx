import React, {
  type ChangeEvent,
  type MouseEvent,
  type KeyboardEvent,
  type Ref,
  type ReactElement,
  type RefAttributes,
  Fragment,
  useRef,
  useReducer,
  useCallback,
  useEffect,
  forwardRef,
} from 'react';
import dedent from 'dedent';
import parseHighlights from 'autosuggest-highlight/parse';
import matchHighlights from 'autosuggest-highlight/match';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Announcement } from '../private/Announcement/Announcement';
import {
  type FieldBaseProps,
  type FieldLabelVariant,
  Field,
} from '../private/Field/Field';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconClear } from '../icons';
import { textStyles } from '../../css/typography';
import { touchableText } from '../../css/typography.css';
import { getNextIndex } from '../private/getNextIndex';
import { normalizeKey } from '../private/normalizeKey';
import { ClearField } from '../private/Field/ClearField';
import { smoothScroll } from '../private/smoothScroll';
import { useResponsiveValue } from '../useResponsiveValue/useResponsiveValue';
import { RemoveScroll } from 'react-remove-scroll';
import {
  createAccessibilityProps,
  getItemId,
} from './createAccessibilityProps';
import {
  type AutosuggestTranslations,
  autosuggest,
} from '../../translations/en';
import { reverseMatches } from './reverseMatches';

import * as styles from './Autosuggest.css';

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
  showSuggestionsIfAvailable: boolean;
  inputChangedSinceFocus: boolean;
  previewValue: AutosuggestValue<Value> | null;
  isFocused: boolean;
}

type AutoSuggestItemProps = ReturnType<
  ReturnType<typeof createAccessibilityProps>['getItemProps']
>;
interface SuggestionItemProps extends AutoSuggestItemProps {
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
  id,
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
      id={id}
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
        background={highlighted ? 'formAccentSoft' : undefined}
        paddingX="small"
        paddingRight={onClear ? 'none' : undefined}
      >
        <Box className={touchableText.standard}>
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
            <ButtonIcon
              id={`${id}-clear`}
              icon={<IconClear tone="secondary" />}
              tabIndex={-1}
              size="small"
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
  return (
    <Box
      paddingX="small"
      className={[
        touchableText.xsmall,
        textStyles({
          size: 'small',
          baseline: true,
          weight: 'strong',
          tone: 'secondary',
        }),
      ]}
      data-testid={
        process.env.NODE_ENV !== 'production'
          ? `group-heading-${children}`
          : undefined
      }
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
      index = normalisedSuggestions.push(...item.suggestions);
    } else {
      index = normalisedSuggestions.push(item);
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

/** @deprecated Use `noSuggestionsMessage` prop instead */
interface LegacyMessageSuggestion {
  /** @deprecated Use `noSuggestionsMessage` prop instead */
  message: string;
}

type HighlightOptions = 'matching' | 'remaining';

export type AutosuggestBaseProps<Value> = Omit<
  FieldBaseProps,
  'value' | 'autoComplete' | 'prefix'
> & {
  value: AutosuggestValue<Value>;
  suggestions:
    | Suggestions<Value>
    | LegacyMessageSuggestion
    | ((
        value: AutosuggestValue<Value>,
      ) => Suggestions<Value> | LegacyMessageSuggestion);
  noSuggestionsMessage?: string | { title: string; description: string };
  onChange: (value: AutosuggestValue<Value>) => void;
  clearLabel?: string;
  automaticSelection?: boolean;
  suggestionHighlight?: HighlightOptions;
  hideSuggestionsOnSelection?: boolean;
  showMobileBackdrop?: boolean;
  scrollToTopOnMobile?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onClear?: () => void;
  placeholder?: string;
  type?: 'text' | 'search';
  translations?: AutosuggestTranslations;
};
export type AutosuggestLabelProps = FieldLabelVariant;
export type AutosuggestProps<Value> = AutosuggestBaseProps<Value> &
  AutosuggestLabelProps;

function normaliseNoSuggestionMessage<Value>(
  noSuggestionsMessage: AutosuggestBaseProps<Value>['noSuggestionsMessage'],
  suggestionProp: AutosuggestBaseProps<Value>['suggestions'],
): { title?: string; description: string } | undefined {
  if (noSuggestionsMessage) {
    return typeof noSuggestionsMessage === 'string'
      ? { description: noSuggestionsMessage }
      : noSuggestionsMessage;
  }

  if ('message' in suggestionProp) {
    const message = suggestionProp.message;
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          Passing \`message\` to \`suggestions\` is deprecated and will be removed in a future version. Use "noSuggestionsMessage" instead. See the documentation for usage: https://seek-oss.github.io/braid-design-system/components/Autosuggest#messaging-when-no-suggestions-are-available
             <Autosuggest
            %c-   suggestions={{ message: '${message}' }}
            %c+   noSuggestionsMessage="${message}"
             %c/>
        `,
        'color: red',
        'color: green',
        'color: inherit',
      );
    }
    return { description: message };
  }
}

export function highlightSuggestions(
  suggestion: string,
  value: string,
  variant: HighlightOptions = 'matching',
): SuggestionMatch {
  const matchedHighlights = matchHighlights(suggestion, value);
  const matches =
    variant === 'matching'
      ? matchedHighlights
      : reverseMatches(suggestion, matchedHighlights);

  return matches.map(([start, end]) => ({ start, end }));
}

export const Autosuggest = forwardRef(function <Value>(
  {
    id,
    value = fallbackValue,
    suggestions: suggestionsProp = fallbackSuggestions,
    noSuggestionsMessage: noSuggestionsMessageProp,
    onChange = noop,
    automaticSelection = false,
    suggestionHighlight,
    showMobileBackdrop = false,
    scrollToTopOnMobile = true,
    hideSuggestionsOnSelection = true,
    onFocus = noop,
    onBlur = noop,
    placeholder,
    type = 'text',
    clearLabel,
    onClear,
    translations = autosuggest,
    ...restProps
  }: AutosuggestProps<Value>,
  forwardedRef: Ref<HTMLInputElement>,
) {
  const suggestionsPropValue =
    typeof suggestionsProp === 'function'
      ? suggestionsProp(value)
      : suggestionsProp;

  const suggestions = Array.isArray(suggestionsPropValue)
    ? suggestionsPropValue
    : [];
  const noSuggestionsMessage = normaliseNoSuggestionMessage(
    noSuggestionsMessageProp,
    suggestionsPropValue,
  );
  const hasItems = suggestions.length > 0 || Boolean(noSuggestionsMessage);

  const hasExplicitHighlights = suggestions.some(
    (suggestion) => 'highlights' in suggestion,
  );

  if (process.env.NODE_ENV !== 'production') {
    if (suggestionHighlight && hasExplicitHighlights) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          In Autosuggest, you are using the "suggestionHighlight" prop with suggestions that have individual highlight ranges.
          Your provided highlight ranges will be overridden.
          If you want to use your own highlight ranges, remove the "suggestionHighlight" prop.
          `,
      );
    }
  }

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
            showSuggestionsIfAvailable: true,
            previewValue: normalisedSuggestions[nextIndex],
            highlightedIndex: nextIndex,
          };
        }

        return state;
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
            showSuggestionsIfAvailable: true,
            previewValue: normalisedSuggestions[nextIndex],
            highlightedIndex: nextIndex,
          };
        }

        return state;
      }

      case INPUT_CHANGE: {
        return {
          ...state,
          showSuggestionsIfAvailable: true,
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
          showSuggestionsIfAvailable: true,
          inputChangedSinceFocus: false,
          isFocused: true,
        };
      }

      case INPUT_BLUR: {
        return {
          ...state,
          showSuggestionsIfAvailable: false,
          previewValue: null,
          highlightedIndex: null,
          isFocused: false,
        };
      }

      case INPUT_ESCAPE: {
        if (value.text) {
          return {
            ...state,
            showSuggestionsIfAvailable: false,
            previewValue: null,
            highlightedIndex: null,
          };
        } else if (hasItems) {
          return {
            ...state,
            showSuggestionsIfAvailable: !state.showSuggestionsIfAvailable,
            previewValue: null,
          };
        }

        return state;
      }

      case INPUT_ENTER:
      case SUGGESTION_MOUSE_CLICK: {
        return {
          ...state,
          showSuggestionsIfAvailable: !hideSuggestionsOnSelection,
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
      showSuggestionsIfAvailable,
      inputChangedSinceFocus,
      previewValue,
      highlightedIndex,
      isFocused,
    },
    dispatch,
  ] = useReducer(reducer, {
    showSuggestionsIfAvailable: false,
    inputChangedSinceFocus: false,
    previewValue: null,
    highlightedIndex: null,
    isFocused: false,
  });

  const isOpen = showSuggestionsIfAvailable && hasItems;

  const highlightedItem =
    typeof highlightedIndex === 'number'
      ? document.getElementById(getItemId(id, highlightedIndex))
      : null;

  highlightedItem?.scrollIntoView({ block: 'nearest' });

  useEffect(() => {
    dispatch({
      type: HAS_SUGGESTIONS_CHANGED,
    });
  }, [hasSuggestions]);

  const isMobile = useResponsiveValue()({
    mobile: true,
    tablet: false,
  });

  useEffect(() => {
    if (menuRef.current && isOpen && !isMobile) {
      const { bottom: menuBottom } = menuRef.current.getBoundingClientRect();
      const viewportHeight = document.documentElement.clientHeight;

      if (menuBottom > viewportHeight) {
        menuRef.current.scrollIntoView(false);
      }
    }
    // re-running this effect if the suggestionCount changes
    // to ensure asynchronous updates aren't left out of view.
  }, [isOpen, isMobile, suggestionCount]);

  const inputProps = {
    value: previewValue ? previewValue.text : value.text,
    type: type === 'search' ? type : 'text',
    placeholder: !restProps.disabled ? placeholder : undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      dispatch({ type: INPUT_CHANGE });
      fireChange({ text: inputValue });
    },
    onFocus: () => {
      if (rootRef.current && scrollToTopOnMobile && isMobile) {
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

  const a11y = createAccessibilityProps({
    id,
    isOpen,
    highlightedIndex,
  });

  const clearable = Boolean(
    typeof onClear !== 'undefined' &&
      !restProps.disabled &&
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
    } else if (noSuggestionsMessage) {
      if (noSuggestionsMessage.title) {
        announcements.push(noSuggestionsMessage.title);
      }

      announcements.push(noSuggestionsMessage.description);
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
            value={value.text}
            prefix={undefined}
            secondaryIcon={
              onClear ? (
                <ClearField
                  id={`${id}-clearfield`}
                  hide={!clearable}
                  onClear={onClear}
                  label={clearLabel}
                  inputRef={inputRef}
                />
              ) : null
            }
          >
            {(overlays, fieldProps, icon, secondaryIcon) => (
              <Box width="full">
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
                    display={isOpen ? 'block' : 'none'}
                    position="absolute"
                    zIndex="dropdown"
                    background={
                      !hasSuggestions && noSuggestionsMessage
                        ? { lightMode: 'neutralSoft', darkMode: 'neutral' }
                        : 'surface'
                    }
                    borderRadius="standard"
                    boxShadow="medium"
                    width="full"
                    marginTop="xxsmall"
                    paddingY="xxsmall"
                    className={styles.menu}
                    {...a11y.menuProps}
                  >
                    {isOpen && !hasSuggestions && noSuggestionsMessage ? (
                      <Box
                        component="li"
                        paddingX="small"
                        className={touchableText.standard}
                      >
                        {noSuggestionsMessage.title ? (
                          <Text
                            tone="secondary"
                            weight="medium"
                            baseline={false}
                          >
                            {noSuggestionsMessage.title}
                          </Text>
                        ) : null}
                        <Text tone="secondary" baseline={false}>
                          {noSuggestionsMessage.description}
                        </Text>
                      </Box>
                    ) : null}
                    {isOpen && hasSuggestions
                      ? normalisedSuggestions.map((suggestion, index) => {
                          const { text } = suggestion;
                          const groupHeading = groupHeadingIndexes.get(index);
                          const highlights = suggestionHighlight
                            ? highlightSuggestions(
                                suggestion.text,
                                value.text,
                                suggestionHighlight,
                              )
                            : suggestion.highlights;

                          return (
                            <Fragment key={index + text}>
                              {groupHeading ? (
                                <GroupHeading>{groupHeading}</GroupHeading>
                              ) : null}
                              <SuggestionItem
                                suggestion={{
                                  ...suggestion,
                                  highlights,
                                }}
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
                                  groupHeading:
                                    groupHeadingForSuggestion.get(suggestion),
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
