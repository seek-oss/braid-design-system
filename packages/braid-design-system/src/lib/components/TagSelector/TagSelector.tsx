import type { KeyboardEvent } from 'react';
import { useId, useReducer } from 'react';

import * as styles from './TagSelector.css';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconClear } from '../icons';
import { Inline } from '../Inline/Inline';
import type { Tag } from '../Tag/Tag';
import { normalizeKey } from '../private/normalizeKey';
import { Announcement } from '../private/Announcement/Announcement';
import {
  type TagSelectorTranslations,
  tagSelector,
} from '../../translations/en';
import { createAccessibilityProps } from './createAccessibilityProps';

interface SelectedTagProps {
  tags: Tag[];
  onSelect: (tag: Tag) => void;
}

const SelectedTags = ({ tags, onSelect }: SelectedTagProps) => (
  <div>
    <ul className={styles.SelectedTagsList}>
      {tags.map((tag, index) => (
        <li key={index} className={styles.SelectedTag}>
          <Inline space="xxsmall">
            <span>{tag.description}</span>
            <ButtonIcon
              icon={<IconClear />}
              label={`Remove ${tag.description}`}
              onClick={() => onSelect(tag)}
              id={`remove-${tag.id}`}
              variant="transparent"
              size="standard"
            />
          </Inline>
        </li>
      ))}
    </ul>
  </div>
);

interface TagOptionProps {
  tag: Tag;
  activeOption: string | undefined;
  onSelect: (tag: Tag) => void;
  value: string;
}

const TagOption = ({
  tag,
  activeOption,
  onSelect,
  value,
  ...restProps
}: TagOptionProps) => {
  const handleClick = (event: React.MouseEvent, clickedTag: Tag) => {
    event.preventDefault();
    handleOnSelect(clickedTag, value, onSelect);
  };

  return (
    <li
      key={tag.id}
      role="option"
      id={tag.id}
      className={
        tag.id === activeOption ? styles.ActiveTagOption : styles.TagOption
      }
      onClick={(event) => handleClick(event, tag)}
      onMouseDown={(event) => event.preventDefault()}
      tabIndex={-1}
      {...restProps}
    >
      <span>{tag.description}</span>
    </li>
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
  // Add zero-width space to ensure the tag is not an exact match
  if (tag.description.startsWith('Add "​')) {
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

type Action =
  | { type: typeof INPUT_FOCUS }
  | { type: typeof INPUT_BLUR }
  | { type: typeof INPUT_ARROW_DOWN }
  | { type: typeof INPUT_ARROW_UP }
  | { type: typeof INPUT_ENTER }
  | { type: typeof INPUT_ESCAPE }
  | { type: typeof INPUT_CHANGE };

interface TagSelectorState {
  isFocussed: boolean;
  showOptionsIfAvailable: boolean;
  activeOption: string | undefined;
}

export interface TagSelectorProps {
  id: string;
  options: Tag[];
  selectedTags?: Tag[];
  // remove ariaLabel prop?
  ariaLabel?: string;
  label: string;
  onSelect: (tag: Tag) => void;
  value: string;
  onChange: (value: string) => void;
  customTags?: boolean;
  translations?: TagSelectorTranslations;
}

export const TagSelector = ({
  options,
  selectedTags,
  ariaLabel,
  label,
  onSelect,
  value,
  onChange,
  customTags = false,
  translations = tagSelector,
  ...restProps
}: TagSelectorProps) => {
  if (!customTags && selectedTags) {
    ensureCustomTagsNotUsed(options, selectedTags);
  }

  const id = useId();

  const unSelectedOptions = options.filter(
    (option) => !selectedTags?.some((tag) => tag.id === option.id),
  );

  const dropdownOptions = [
    ...(customTags && value
      ? // Add zero-width space to ensure the tag is not an exact match
        [{ description: `Add "​${value}"`, id: `${id}-add-${value}` }]
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
        return { ...state, isFocussed: false, showOptionsIfAvailable: false };

      case INPUT_ARROW_DOWN:
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
          activeOption: dropdownOptions[currentIndex + 1].id,
        };

      case INPUT_ARROW_UP:
        if (currentIndex === 0 || state.activeOption === undefined) {
          return {
            ...state,
            activeOption: dropdownOptions[dropdownOptions.length - 1].id,
            showOptionsIfAvailable: true,
          };
        }

        return {
          ...state,
          activeOption: dropdownOptions[currentIndex - 1].id,
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
        break;

      case 'Enter':
        event.preventDefault();
        dispatch({ type: INPUT_ENTER });

        if (value !== '' && activeOption === undefined && customTags) {
          handleOnSelect(
            { description: value, id: `${id}-add-${value}` },
            value,
            onSelect,
          );

          break;
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

        break;

      case 'Escape':
        event.preventDefault();
        dispatch({ type: INPUT_ESCAPE });
        onChange('');
        break;

      default:
        break;
    }
  };

  const announcements = [];
  const optionsCount = dropdownOptions.length;
  const hasOptions = optionsCount > 0;

  const a11y = createAccessibilityProps({
    id: 'tag-selector',
    activeOption,
    isFocused: isFocussed,
  });

  const isOpen = showOptionsIfAvailable && hasOptions;

  // Announce when the field is focused and no options have been manually highlighted
  if (isFocussed && activeOption == null) {
    if (isOpen) {
      announcements.push(
        translations.optionsAvailableAnnouncement(optionsCount),
      );

      announcements.push(translations.optionInstructions);
    } else if (!isOpen && !hasOptions) {
      announcements.push(translations.noOptionsAvailableAnnouncement);
    }
  }

  return (
    <div
      className={styles.Wrapper}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
    >
      {(selectedTags || []).length > 0 && (
        <SelectedTags tags={selectedTags || []} onSelect={onSelect} />
      )}
      <label htmlFor="tag-selector">{label}</label>
      <div className="combo-wrap">
        <input
          {...restProps}
          type="text"
          value={value}
          onChange={(event) => {
            dispatch({ type: INPUT_CHANGE });
            onChange(event.target.value);
          }}
          onFocus={() => dispatch({ type: INPUT_FOCUS })}
          onBlur={() => dispatch({ type: INPUT_BLUR })}
          onKeyDown={onKeyDown}
          {...a11y.inputProps}
        />
        <span aria-hidden="true" data-trigger="multiselect" />
        {isOpen && (
          <ul className={styles.Dropdown} id={`${id}-menu`} role="listbox">
            {dropdownOptions.map((tag) => (
              <TagOption
                tag={tag}
                activeOption={activeOption}
                key={tag.id}
                onSelect={onSelect}
                value={value}
                {...a11y.getDropdownOptionProps({
                  optionId: tag.id,
                  description: tag.description,
                })}
              />
            ))}
          </ul>
        )}
      </div>
      <Announcement>{announcements.join('. ')}</Announcement>
    </div>
  );
};
