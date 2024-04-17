import type React from 'react';
import { useId, useState } from 'react';

import * as styles from './TagSelector.css';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconClear } from '../icons';
import { Inline } from '../Inline/Inline';
import type { Tag } from '../Tag/Tag';

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
    if (onSelect) {
      handleOnSelect(clickedTag, value, onSelect);
      // onSelect(clickedTag);
    }
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

export interface Tag {
  description: string;
  id: string;
}

export interface TagSelectorProps {
  options: Tag[];
  selectedTags?: Tag[];
  ariaLabel?: string;
  onSelect: (tag: Tag) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customTags?: boolean;
}

export const TagSelector = ({
  options,
  selectedTags,
  ariaLabel,
  onSelect,
  value,
  onChange,
  customTags = false,
}: TagSelectorProps) => {
  const id = useId();

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

  const dropdownOptions = [
    ...(customTags && value
      ? // Add zero-width space to ensure the tag is not an exact match
        [{ description: `Add "​${value}"`, id: `${id}-add-${value}` }]
      : []),
    ...unFilteredDropdownOptionsWithoutCustomTag.filter((tag) =>
      tag.description.toLowerCase().includes(value.toLowerCase()),
    ),
  ];

  const [isFocussed, setIsFocussed] = useState(false);
  const [activeOption, setActiveOption] = useState<string | undefined>(
    undefined,
  );

  function getIndexOfActiveOption() {
    if (!activeOption) return -1;

    if (!dropdownOptions.find((option) => option.id === activeOption)) {
      return -1;
    }

    return dropdownOptions.findIndex((option) => option.id === activeOption);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = getIndexOfActiveOption();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();

        console.log('activeOption', activeOption); // eslint-disable-line no-console

        if (currentIndex + 1 === dropdownOptions.length) {
          setActiveOption(dropdownOptions[0].id);
        } else if (currentIndex === -1) {
          setActiveOption(dropdownOptions[0].id);
        } else {
          setActiveOption(dropdownOptions[currentIndex + 1].id);
        }

        break;
      case 'ArrowUp':
        event.preventDefault();

        if (currentIndex === 0) {
          setActiveOption(dropdownOptions[dropdownOptions.length - 1].id);
        } else if (currentIndex === -1) {
          setActiveOption(dropdownOptions[0].id);
        } else {
          setActiveOption(dropdownOptions[currentIndex - 1].id);
        }

        break;

      case 'Enter':
        event.preventDefault();
        if (currentIndex === -1) return;

        if (onSelect) {
          handleOnSelect(
            dropdownOptions[getIndexOfActiveOption()],
            value,
            onSelect,
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.Wrapper}>
      {(selectedTags || []).length > 0 && (
        <SelectedTags tags={selectedTags || []} onSelect={onSelect} />
      )}
      <label htmlFor="tag-selector">Select tag</label>
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
          aria-activedescendant={`checkbox-${
            dropdownOptions[getIndexOfActiveOption()]?.id
          }`}
          onFocus={() => setIsFocussed(true)}
          onBlur={() => setIsFocussed(false)}
          onKeyDown={handleKeyDown}
        />
        <span aria-hidden="true" data-trigger="multiselect" />
        {isFocussed && (
          <ul
            className={styles.Dropdown}
            id="available-tags"
            role="listbox"
            {...(ariaLabel && { 'aria-label': ariaLabel })}
          >
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
    </div>
  );
};
