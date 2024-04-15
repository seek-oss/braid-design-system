import type React from 'react';
import { useState } from 'react';

import * as styles from './TagSelector.css';

interface SelectedTagProps {
  tags: Tag[];
}

const SelectedTags = ({ tags }: SelectedTagProps) => (
  <div>
    <ul className={styles.SelectedTagsList}>
      {tags.map((tag, index) => (
        <li key={index} className={styles.SelectedTag}>
          <span>{tag.description}</span>
          {/* Todo - add remove button */}
          {/* <button aria-label={`Remove ${tag}`}>X</button> */}
        </li>
      ))}
    </ul>
  </div>
);

interface TagOptionProps {
  tag: Tag;
  activeOption: string | undefined;
  onSelect?: (tag: Tag) => void;
  checked?: boolean;
}

const TagOption = ({
  tag,
  activeOption,
  onSelect,
  checked,
}: TagOptionProps) => {
  // Todo - change id
  const checkboxId = `checkbox-${tag.id}`;

  const handleClick = (event: React.MouseEvent, clickedTag: Tag) => {
    event.preventDefault();
    if (onSelect) {
      onSelect(clickedTag);
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
          aria-checked={checked}
          onChange={onSelect ? () => onSelect(tag) : undefined}
        />
        <span>{tag.description}</span>
      </label>
    </li>
  );
};

export interface Tag {
  description: string;
  id: string;
}

export interface TagSelectorProps {
  options: Tag[];
  selectedTags?: Tag[];
  ariaLabel?: string;
  onSelect?: (tag: Tag) => void;
}

export const TagSelector = ({
  options,
  selectedTags,
  ariaLabel,
  onSelect,
}: TagSelectorProps) => {
  const uniqueSelectedTags = [
    ...(selectedTags || []).filter(
      (tag) => !options.some((option) => option.id === tag.id),
    ),
  ];
  const dropdownOptions = [...uniqueSelectedTags, ...options];

  const [input, setInput] = useState('');
  const [isFocussed, setIsFocussed] = useState(false);
  const [activeOption, setActiveOption] = useState<string | undefined>(
    dropdownOptions[0].id,
  );

  function getIndexOfActiveOption() {
    return dropdownOptions.findIndex((option) => option.id === activeOption);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const prevIndex = getIndexOfActiveOption();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();

        if (prevIndex + 1 === dropdownOptions.length) {
          setActiveOption(dropdownOptions[0].id);
        } else {
          setActiveOption(dropdownOptions[prevIndex + 1].id);
        }

        break;
      case 'ArrowUp':
        event.preventDefault();

        if (prevIndex === 0) {
          setActiveOption(dropdownOptions[dropdownOptions.length - 1].id);
        } else {
          setActiveOption(dropdownOptions[prevIndex - 1].id);
        }

        break;

      case 'Enter':
        event.preventDefault();
        if (onSelect) {
          onSelect(dropdownOptions[prevIndex]);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.Wrapper}>
      {(selectedTags || []).length > 0 && (
        <SelectedTags tags={selectedTags || []} />
      )}
      <label htmlFor="tag-selector">Select tag</label>
      <div className="combo-wrap">
        <input
          type="text"
          value={input}
          // Todo - make this element controlled by the consumer
          onChange={(event) => setInput(event.target.value)}
          id="tag-selector"
          role="combobox"
          aria-controls="available-tags"
          aria-autocomplete="list"
          aria-expanded="false"
          data-active-option={`checkbox-${
            dropdownOptions[getIndexOfActiveOption()]?.id
          }`}
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
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
