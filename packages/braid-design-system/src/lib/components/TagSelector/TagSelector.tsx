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
  index: number;
  activeIndex: number;
  onSelect?: (tag: Tag) => void;
  checked?: boolean;
}

const TagOption = ({
  tag: selectedTag,
  index,
  activeIndex,
  onSelect,
  checked,
}: TagOptionProps) => {
  const checkboxId = `checkbox-${selectedTag.id}`;

  const handleClick = (event: React.MouseEvent, tag: Tag) => {
    event.preventDefault();
    if (onSelect) {
      onSelect(tag);
    }
  };

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <li
      key={index}
      role="option"
      id={selectedTag.id}
      className={
        index === activeIndex ? styles.ActiveTagOption : styles.TagOption
      }
    >
      <label
        htmlFor={checkboxId}
        className={styles.TagOpenLabel}
        onClick={(event) => handleClick(event, selectedTag)}
        onMouseDown={(event) => event.preventDefault()}
      >
        <input
          type="checkbox"
          id={checkboxId}
          onClick={handleCheckboxClick}
          className={styles.TagOptionCheckbox}
          checked={checked}
          onChange={onSelect ? () => onSelect(selectedTag) : undefined}
        />
        <span>{selectedTag.description}</span>
      </label>
    </li>
  );
};

// Todo - rename
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
  const [input, setInput] = useState('');
  const [isFocussed, setIsFocussed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Todo - add back use effect when we have a filter
  // useEffect(() => {
  //   setActiveIndex(0);
  // }, [input]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((prevIndex) =>
          Math.min(prevIndex + 1, dropdownOptions.length - 1),
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;

      case 'Enter':
        event.preventDefault();
        if (onSelect) {
          onSelect(dropdownOptions[activeIndex]);
        }
        break;

      default:
        break;
    }
  };

  const dropdownOptions = [
    ...(selectedTags || []).filter(
      (tag) => !options.some((option) => option.id === tag.id),
    ),
    ...options,
  ];

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
          // Todo - maybe this is controlled by the consumer
          onChange={(event) => setInput(event.target.value)}
          id="tag-selector"
          role="combobox"
          aria-controls="available-tags"
          aria-autocomplete="list"
          aria-expanded="false"
          data-active-option={`item-${options[activeIndex]}`}
          aria-activedescendant={`item-${options[activeIndex]}`}
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
            {dropdownOptions.map((tag, index) => (
              <TagOption
                tag={tag}
                index={index}
                activeIndex={activeIndex}
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
