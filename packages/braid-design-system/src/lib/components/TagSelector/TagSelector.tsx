import type React from 'react';
import { useEffect, useState } from 'react';

import * as styles from './TagSelector.css';

interface SelectedTagProps {
  tags: string[];
}

const SelectedTags = ({ tags }: SelectedTagProps) => (
  <div>
    <ul className={styles.SelectedTagsList}>
      {tags.map((tag, index) => (
        <li key={index} className={styles.SelectedTag}>
          <span>{tag}</span>
          {/* Todo - add remove button */}
          {/* <button aria-label={`Remove ${tag}`}>X</button> */}
        </li>
      ))}
    </ul>
  </div>
);

interface TagOptionProps {
  tag: string;
  index: number;
  activeIndex: number;
  onSelect?: (tag: string) => void;
  checked?: boolean;
}

const TagOption = ({
  tag,
  index,
  activeIndex,
  onSelect,
  checked,
}: TagOptionProps) => {
  const checkboxId = `checkbox-${tag}`;

  // Todo - refactor handleClick logic
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
    if (checkbox) {
      if (onSelect) {
        onSelect(tag);
      }
    }
  };

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <li
      key={index}
      role="option"
      id={`item-${tag}`}
      className={
        index === activeIndex ? styles.ActiveTagOption : styles.TagOption
      }
    >
      <label
        htmlFor={checkboxId}
        className={styles.TagOpenLabel}
        onClick={handleClick}
        onMouseDown={(event) => event.preventDefault()}
      >
        <input
          type="checkbox"
          id={checkboxId}
          onClick={handleCheckboxClick}
          className={styles.TagOptionCheckbox}
          checked={checked}
          onChange={onSelect ? () => onSelect(tag) : undefined}
        />
        <span>{tag}</span>
      </label>
    </li>
  );
};
export interface TagSelectorProps {
  options: string[];
  selectedTags?: string[];
  ariaLabel?: string;
  onSelect?: (tag: string) => void;
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

  // Todo - add back use effect
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

      // Todo - refactor this logic
      case 'Enter':
        event.preventDefault();
        const inputElement = document.getElementById(
          'tag-selector',
        ) as HTMLInputElement;
        if (inputElement) {
          const activeDescendantId = inputElement.getAttribute(
            'aria-activedescendant',
          );
          if (activeDescendantId) {
            const activeTag = activeDescendantId.replace('item-', '');
            if (onSelect) {
              onSelect(activeTag);
            }
          }
        }
        break;
      default:
        break;
    }
  };

  const dropdownOptions = [
    ...(selectedTags || []).filter((tag) => !options.includes(tag)),
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
              // Todo - add filter
              // .filter((tag) => tag.toLowerCase().includes(input.toLowerCase()))
              <TagOption
                tag={tag}
                index={index}
                activeIndex={activeIndex}
                key={tag}
                onSelect={onSelect}
                checked={selectedTags?.includes(tag) || false}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
