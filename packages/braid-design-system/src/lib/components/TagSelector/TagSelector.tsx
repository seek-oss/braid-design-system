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
  checked?: boolean;
  value: string;
}

const TagOption = ({
  tag,
  activeOption,
  onSelect,
  checked,
  value,
}: TagOptionProps) => {
  const checkboxId = `checkbox-${tag.id}`;

  const handleClick = (event: React.MouseEvent, clickedTag: Tag) => {
    event.preventDefault();
    handleOnSelect(clickedTag, value, onSelect);
  };

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <li
      key={tag.id}
      role="option"
      id={tag.id}
      className={
        tag.id === activeOption ? styles.ActiveTagOption : styles.TagOption
      }
    >
      <label
        htmlFor={checkboxId}
        className={styles.TagOpenLabel}
        onClick={(event) => handleClick(event, tag)}
        onMouseDown={(event) => event.preventDefault()}
      >
        <input
          type="checkbox"
          id={checkboxId}
          onClick={handleCheckboxClick}
          className={styles.TagOptionCheckbox}
          checked={checked}
          onChange={onSelect ? () => onSelect(tag) : undefined}
          role="presentation"
          tabIndex={-1}
        />
        <span>{tag.description}</span>
      </label>
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

type Action =
  | { type: typeof INPUT_FOCUS }
  | { type: typeof INPUT_BLUR }
  | { type: typeof INPUT_ARROW_DOWN }
  | { type: typeof INPUT_ARROW_UP };

interface TagSelectorState {
  isFocussed: boolean;
  activeOption: string | undefined;
}

export interface TagSelectorProps {
  options: Tag[];
  selectedTags?: Tag[];
  // remove ariaLabel prop?
  ariaLabel?: string;
  label: string;
  onSelect: (tag: Tag) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
}: TagSelectorProps) => {
  if (!customTags && selectedTags) {
    ensureCustomTagsNotUsed(options, selectedTags);
  }

  const customSelectedTags = [
    ...(selectedTags || []).filter(
      (tag) => !options.some((option) => option.id === tag.id),
    ),
  ];

  const unFilteredDropdownOptionsWithoutCustomTag = [
    ...customSelectedTags,
    ...options,
  ];

  const id = useId();

  const dropdownOptions = [
    ...(customTags && value
      ? // Add zero-width space to ensure the tag is not an exact match
        [{ description: `Add "​${value}"`, id: `${id}-add-${value}` }]
      : []),
    ...unFilteredDropdownOptionsWithoutCustomTag.filter((tag) =>
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
        return { ...state, isFocussed: true };

      case INPUT_BLUR:
        return { ...state, isFocussed: false };

      case INPUT_ARROW_DOWN:
        if (
          currentIndex + 1 === dropdownOptions.length ||
          currentIndex === -1
        ) {
          return { ...state, activeOption: dropdownOptions[0].id };
        }

        return {
          ...state,
          activeOption: dropdownOptions[currentIndex + 1].id,
        };

      case INPUT_ARROW_UP:
        if (currentIndex === 0 || currentIndex === -1) {
          return {
            ...state,
            activeOption: dropdownOptions[dropdownOptions.length - 1].id,
          };
        }

        return {
          ...state,
          activeOption: dropdownOptions[currentIndex - 1].id,
        };

      default:
        return state;
    }
  }

  const [{ isFocussed, activeOption }, dispatch] = useReducer(reducer, {
    isFocussed: false,
    activeOption: undefined,
  });

  const onKeyDown = (event: KeyboardEvent) => {
    const targetKey = normalizeKey(event);
    const currentIndex = getIndexOfActiveOption({
      dropdownOptions,
      activeOption,
    });

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
        if (currentIndex === -1) return;

        handleOnSelect(
          dropdownOptions[
            getIndexOfActiveOption({ dropdownOptions, activeOption })
          ],
          value,
          onSelect,
        );
        break;

      default:
        break;
    }
  };

  const announcements = [];
  const optionsCount = dropdownOptions.length;
  const hasOptions = optionsCount > 0;

  // Announce when the field is focused and no options have been manually highlighted
  if (isFocussed && activeOption == null) {
    // Todo - fix this text
    if (hasOptions) {
      announcements.push(
        translations.optionsAvailableAnnouncement(optionsCount),
      );

      announcements.push(translations.optionInstructions);
    } else {
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
          type="text"
          value={value}
          onChange={onChange}
          id="tag-selector"
          role="combobox"
          aria-controls="available-tags"
          aria-autocomplete="list"
          aria-expanded="false"
          // Todo - potentially remove "checkbox-" prefix
          aria-activedescendant={`checkbox-${activeOption}`}
          onFocus={() => dispatch({ type: INPUT_FOCUS })}
          onBlur={() => dispatch({ type: INPUT_BLUR })}
          onKeyDown={onKeyDown}
        />
        <span aria-hidden="true" data-trigger="multiselect" />
        {isFocussed && (
          <ul className={styles.Dropdown} id="available-tags" role="listbox">
            {dropdownOptions.map((tag) => (
              <TagOption
                tag={tag}
                activeOption={activeOption}
                key={tag.id}
                onSelect={onSelect}
                checked={
                  selectedTags?.some(
                    (selectedTag) => selectedTag.id === tag.id,
                  ) || false
                }
                value={value}
              />
            ))}
          </ul>
        )}
      </div>
      <Announcement>{announcements.join('. ')}</Announcement>
    </div>
  );
};
