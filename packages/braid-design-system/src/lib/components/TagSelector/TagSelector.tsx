import type React from 'react';
import { useState } from 'react';

import * as styles from './TagSelector.css';

export interface TagSelectorProps {
  tags: string[];
  ariaLabel?: string;
}

export const TagSelector = ({ tags, ariaLabel }: TagSelectorProps) => {
  const [isFocussed, setIsFocussed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, tags.length - 1));
        break;
      case 'ArrowUp':
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.Wrapper}>
      <label htmlFor="tag-selector">Select tag</label>
      <div className="combo-wrap">
        <input
          type="text"
          id="tag-selector"
          role="combobox"
          aria-controls="available-tags"
          aria-autocomplete="list"
          aria-expanded="false"
          data-active-option={`item${activeIndex}`}
          aria-activedescendant={`item${activeIndex}`}
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
            {tags.map((tag, index) => (
              <li
                key={index}
                role="option"
                id={`item${index}`}
                className={index === activeIndex ? styles.ActiveTagOption : ''}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
