import type React from 'react';
import { useState } from 'react';

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
}

const TagOption = ({ tag, index, activeIndex, onSelect }: TagOptionProps) => {
  const checkboxId = `checkbox-${tag}`;

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
    if (checkbox) {
      // checkbox.checked = !checkbox.checked;
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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((prevIndex) =>
          Math.min(prevIndex + 1, options.length - 1),
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case 'Enter':
        event.preventDefault();
        const activeDescendant = document.getElementById(
          `item-${options[activeIndex]}`,
        );
        if (activeDescendant) {
          const checkbox = activeDescendant.querySelector(
            'input[type="checkbox"]',
          ) as HTMLInputElement;
          if (checkbox) {
            // checkbox.checked = !checkbox.checked;
            if (onSelect) {
              onSelect(options[activeIndex]);
            }
          }
        }

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
            {options.map((option, index) => (
              <TagOption
                tag={option}
                index={index}
                activeIndex={activeIndex}
                key={index}
                onSelect={onSelect}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
