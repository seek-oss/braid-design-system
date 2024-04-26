import type { KeyboardEvent } from 'react';
import { useId, useReducer, useRef } from 'react';

import * as styles from '../Autosuggest/Autosuggest.css';
import { Inline } from '../Inline/Inline';
import { Tag } from '../Tag/Tag';
import { Text } from '../Text/Text';
import { normalizeKey } from '../private/normalizeKey';
import { Announcement } from '../private/Announcement/Announcement';
import {
  type TagSelectorTranslations,
  tagSelector,
} from '../../translations/en';
import { createAccessibilityProps } from './createAccessibilityProps';
import { touchableText } from '../../css/typography.css';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Field } from '../private/Field/Field';
import { ClearField } from '../private/Field/ClearField';
import { Strong } from '../Strong/Strong';
import { RemoveScroll } from 'react-remove-scroll';

interface SelectedTagProps {
  tags: Tag[];
  onRemove: (tag: Tag) => void;
}

const SelectedTags = ({ tags, onRemove }: SelectedTagProps) => (
  <Inline space="small" alignY="center">
    {tags.map((tag) => (
      <Tag
        key={`selected-${tag.id}`}
        onClear={() => onRemove(tag)}
        clearLabel={`Clear ${tag.description}`}
      >
        {tag.description}
      </Tag>
    ))}
  </Inline>
);

interface TagOptionProps {
  tag: Tag;
  activeOption: string | undefined;
  onSelect: (tag: Tag) => void;
  value: string;
  onHover: () => void;
}

const TagOption = ({
  tag,
  activeOption,
  onSelect,
  value,
  onHover,
  ...restProps
}: TagOptionProps) => {
  const handleClick = (event: React.MouseEvent, clickedTag: Tag) => {
    event.preventDefault();
    handleOnSelect(clickedTag, value, onSelect);
  };

  const suggestionParts = tag.description
    .split(new RegExp(`(${value})`, 'gi'))
    .map((text) => ({
      highlight: text.toLowerCase() === value.toLowerCase(),
      text,
    }));

  return (
    <Box
      component="li"
      cursor="pointer"
      onMouseDown={(event) => event.preventDefault()}
      onMouseMove={onHover}
      onTouchStart={onHover}
      role="option"
      id={tag.id}
      onClick={(event) => handleClick(event, tag)}
      tabIndex={-1}
      {...restProps}
    >
      <Box
        component="span"
        display="flex"
        justifyContent="spaceBetween"
        background={tag.id === activeOption ? 'formAccentSoft' : undefined}
        paddingX="small"
      >
        <Box className={touchableText.standard}>
          <Text baseline={false}>
            {tag.description.startsWith('Add "')
              ? tag.description
              : suggestionParts.map(({ highlight, text }, index) =>
                  highlight ? <Strong key={index}>{text}</Strong> : text,
                )}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

function ensureCustomTagsNotUsed(options: Tag[], selectedTags: Tag[]) {
  for (const tag of selectedTags) {
    if (!options.find((option) => option.id === tag.id)) {
      throw new Error(
        `Invalid prop: selectedTags contains a tag not present in options: ${tag.id}`,
      );
    }
  }
}

function handleOnSelect(tag: Tag, value: string, onSelect: (tag: Tag) => void) {
  if (tag.description.startsWith('Add "')) {
    onSelect({
      description: value,
      id: `${tag.id}-${value}`,
    });
  } else {
    onSelect(tag);
  }
}

function getIndexOfActiveOption({
  dropdownOptions,
  activeOption,
}: {
  dropdownOptions: Tag[];
  activeOption: string | undefined;
}) {
  if (!activeOption) return -1;

  if (!dropdownOptions.find((option) => option.id === activeOption)) {
    return -1;
  }

  return dropdownOptions.findIndex((option) => option.id === activeOption);
}

export interface Tag {
  description: string;
  id: string;
}

// Action type IDs (allows action type names to be minified)
const INPUT_FOCUS = 0;
const INPUT_BLUR = 1;
const INPUT_ARROW_DOWN = 2;
const INPUT_ARROW_UP = 3;
const INPUT_ENTER = 4;
const INPUT_ESCAPE = 5;
const INPUT_CHANGE = 6;
const SUGGESTION_MOUSE_ENTER = 7;

type Action =
  | { type: typeof INPUT_FOCUS }
  | { type: typeof INPUT_BLUR }
  | { type: typeof INPUT_ARROW_DOWN }
  | { type: typeof INPUT_ARROW_UP }
  | { type: typeof INPUT_ENTER }
  | { type: typeof INPUT_ESCAPE }
  | { type: typeof INPUT_CHANGE }
  | { type: typeof SUGGESTION_MOUSE_ENTER; id: string };

interface TagSelectorState {
  isFocussed: boolean;
  showOptionsIfAvailable: boolean;
  activeOption: string | undefined;
}

const fallbackTagOptions: Tag[] = [];
const fallbackSelectedTags: Tag[] = [];

export interface TagSelectorProps {
  id: string;
  tagOptions: Tag[] | ((value: string) => Tag[]);
  selectedTags: Tag[] | ((value: string) => Tag[]);
  label?: string;
  value: string;
  onSelect: (tag: Tag) => void;
  onRemove: (tag: Tag) => void;
  onChange: (value: string) => void;
  onClear?: () => void;
  customTags?: boolean;
  translations?: TagSelectorTranslations;
  noOptionsMessage?: string;
}

export const TagSelector = ({
  id,
  tagOptions: tagOptionsProp = fallbackTagOptions,
  selectedTags: selectedTagsProp = fallbackSelectedTags,
  label,
  value,
  onSelect,
  onRemove,
  onChange,
  onClear,
  customTags = false,
  translations = tagSelector,
  noOptionsMessage,
  ...restProps
}: TagSelectorProps) => {
  const tagOptionsPropValue =
    typeof tagOptionsProp === 'function'
      ? tagOptionsProp(value)
      : tagOptionsProp;
  const tagOptions = Array.isArray(tagOptionsPropValue)
    ? tagOptionsPropValue
    : [];

  const selectedTagsPropValue =
    typeof selectedTagsProp === 'function'
      ? selectedTagsProp(value)
      : selectedTagsProp;
  const selectedTags = Array.isArray(selectedTagsPropValue)
    ? selectedTagsPropValue
    : [];

  if (!customTags && selectedTags) {
    ensureCustomTagsNotUsed(tagOptions, selectedTags);
  }

  const customTagId = useId();

  const unSelectedOptions = tagOptions.filter(
    (option) => !selectedTags?.some((tag) => tag.id === option.id),
  );

  const dropdownOptions = [
    ...(customTags && value
      ? [{ description: `Add "${value}"`, id: `${customTagId}-add-${value}` }]
      : []),
    ...unSelectedOptions.filter((tag) =>
      tag.description.toLowerCase().includes(value.toLowerCase()),
    ),
  ];

  function reducer(state: TagSelectorState, action: Action) {
    const currentIndex = getIndexOfActiveOption({
      dropdownOptions,
      activeOption: state.activeOption,
    });

    switch (action.type) {
      case INPUT_FOCUS:
        return { ...state, isFocussed: true, showOptionsIfAvailable: true };

      case INPUT_BLUR:
        return {
          ...state,
          isFocussed: false,
          showOptionsIfAvailable: false,
          activeOption: undefined,
        };

      case INPUT_ARROW_DOWN:
        if (dropdownOptions.length === 0) {
          return state;
        }

        if (
          currentIndex + 1 === dropdownOptions.length ||
          state.activeOption === undefined
        ) {
          return {
            ...state,
            activeOption: dropdownOptions[0].id,
            showOptionsIfAvailable: true,
          };
        }

        return {
          ...state,
          activeOption: dropdownOptions
            ? dropdownOptions[currentIndex + 1]?.id ?? dropdownOptions[0]?.id
            : undefined,
        };

      case INPUT_ARROW_UP:
        if (dropdownOptions.length === 0) {
          return state;
        }

        if (currentIndex === 0 || state.activeOption === undefined) {
          return {
            ...state,
            activeOption: dropdownOptions[dropdownOptions.length - 1].id,
            showOptionsIfAvailable: true,
          };
        }

        return {
          ...state,
          activeOption:
            dropdownOptions[currentIndex - 1]?.id ??
            dropdownOptions[dropdownOptions.length - 1]?.id ??
            undefined,
        };

      case INPUT_ENTER:
        if (
          (value === '' || customTags === false) &&
          state.activeOption === undefined
        ) {
          return {
            ...state,
            showOptionsIfAvailable: false,
          };
        }

        return {
          ...state,
          activeOption: undefined,
        };

      case INPUT_ESCAPE:
        return {
          ...state,
          showOptionsIfAvailable: false,
          activeOption: undefined,
        };

      case INPUT_CHANGE:
        return {
          ...state,
          showOptionsIfAvailable: true,
        };

      case SUGGESTION_MOUSE_ENTER:
        return {
          ...state,
          activeOption: action.id,
        };

      default:
        return state;
    }
  }

  const [{ isFocussed, showOptionsIfAvailable, activeOption }, dispatch] =
    useReducer(reducer, {
      isFocussed: false,
      showOptionsIfAvailable: false,
      activeOption: undefined,
    });

  const onKeyDown = (event: KeyboardEvent) => {
    const targetKey = normalizeKey(event);

    switch (targetKey) {
      case 'ArrowDown':
        event.preventDefault();
        dispatch({ type: INPUT_ARROW_DOWN });
        return;

      case 'ArrowUp':
        event.preventDefault();
        dispatch({ type: INPUT_ARROW_UP });
        return;

      case 'Enter':
        event.preventDefault();
        dispatch({ type: INPUT_ENTER });

        if (value !== '' && activeOption === undefined && customTags) {
          handleOnSelect(
            { description: value, id: `${customTagId}-add-${value}` },
            value,
            onSelect,
          );

          return;
        }

        if (activeOption) {
          handleOnSelect(
            dropdownOptions[
              getIndexOfActiveOption({ dropdownOptions, activeOption })
            ],
            value,
            onSelect,
          );
        }

        return;

      case 'Escape':
        event.preventDefault();
        dispatch({ type: INPUT_ESCAPE });
        onChange('');
        return;

      default:
        return;
    }
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const clearable = Boolean(
    typeof onClear !== 'undefined' &&
      typeof value !== 'undefined' &&
      value.length > 0,
  );

  const announcements = [];
  const optionsCount = dropdownOptions.length;
  const hasOptions = optionsCount > 0;

  const a11y = createAccessibilityProps({
    id,
    activeOption,
    isFocused: isFocussed,
  });

  const isOpen = showOptionsIfAvailable && (hasOptions || noOptionsMessage);

  // Announce when the field is focused and no options have been manually highlighted
  if (isFocussed && !activeOption) {
    if (isOpen && hasOptions) {
      announcements.push(
        translations.optionsAvailableAnnouncement(optionsCount),
      );
      announcements.push(translations.optionInstructions);
    } else if (!hasOptions) {
      if (noOptionsMessage) {
        announcements.push(noOptionsMessage);
      } else {
        announcements.push(translations.noOptionsAvailableAnnouncement);
      }
    }
  }

  return (
    <Box position="relative">
      <Stack space="large">
        {(selectedTags || []).length > 0 && (
          <SelectedTags tags={selectedTags || []} onRemove={onRemove} />
        )}
        <Box className="combo-wrap">
          <Field
            {...restProps}
            value={value}
            label={label || undefined}
            id={id}
            secondaryIcon={
              onClear ? (
                <ClearField
                  id={`${id}-clearfield`}
                  hide={!clearable}
                  onClear={onClear}
                  label="Clear"
                  inputRef={inputRef}
                />
              ) : null
            }
          >
            {(overlays, fieldProps, icon, secondaryIcon) => (
              <Box width="full">
                <Box
                  {...fieldProps}
                  component="input"
                  value={value}
                  onChange={(event) => {
                    dispatch({ type: INPUT_CHANGE });
                    onChange((event.target as HTMLInputElement).value);
                  }}
                  onFocus={() => dispatch({ type: INPUT_FOCUS })}
                  onBlur={() => dispatch({ type: INPUT_BLUR })}
                  onKeyDown={onKeyDown}
                  {...a11y.inputProps}
                />
                {icon}
                {overlays}
                {secondaryIcon}
              </Box>
            )}
          </Field>
          {isOpen ? (
            <RemoveScroll>
              <Box
                component="ul"
                position="absolute"
                zIndex="dropdown"
                background={
                  !hasOptions && noOptionsMessage
                    ? { lightMode: 'neutralSoft', darkMode: 'neutral' }
                    : 'surface'
                }
                borderRadius="standard"
                boxShadow="medium"
                width="full"
                marginTop="xxsmall"
                paddingY="xxsmall"
                className={styles.menu}
                id={`${customTagId}-menu`}
                role="listbox"
              >
                {!hasOptions && noOptionsMessage ? (
                  <Box
                    component="li"
                    paddingX="small"
                    className={touchableText.standard}
                    cursor="default"
                  >
                    <Text tone="secondary" weight="medium" baseline={false}>
                      {noOptionsMessage}
                    </Text>
                  </Box>
                ) : null}
                {hasOptions
                  ? dropdownOptions.map((tag) => (
                      <TagOption
                        tag={tag}
                        activeOption={activeOption}
                        key={tag.id}
                        onSelect={onSelect}
                        value={value}
                        onHover={() => {
                          dispatch({
                            type: SUGGESTION_MOUSE_ENTER,
                            id: tag.id,
                          });
                        }}
                        {...a11y.getDropdownOptionProps({
                          optionId: tag.id,
                          description: tag.description,
                        })}
                      />
                    ))
                  : null}
              </Box>
            </RemoveScroll>
          ) : null}
        </Box>
        <Announcement>{announcements.join('. ')}</Announcement>
      </Stack>
    </Box>
  );
};
