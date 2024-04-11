import type React from 'react';
import { useEffect, useState } from 'react';

import * as styles from './TagSelector.css';
import { set } from 'lodash';

export interface TagSelectorProps {
  tags: string[];
  ariaLabel?: string;
}

export const TagSelector = ({ tags, ariaLabel }: TagSelectorProps) => {
  const [input, setInput] = useState('');
  const [isFocussed, setIsFocussed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredTags, setFilteredTags] = useState(tags);

  useEffect(() => {
    setFilteredTags(
      tags.filter((tag) => tag.toLowerCase().includes(input.toLowerCase())),
    );
    setActiveIndex(-1);
  }, [input, tags]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredTags.length - 1),
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
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
          value={input}
          onChange={(event) => setInput(event.target.value)}
          id="tag-selector"
          role="combobox"
          aria-controls="available-tags"
          aria-autocomplete="list"
          aria-expanded="false"
          data-active-option={`item-${filteredTags[activeIndex]}`}
          aria-activedescendant={`item-${filteredTags[activeIndex]}`}
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
            {filteredTags.map((tag, index) => (
              <li
                key={index}
                role="option"
                // Todo - create better unique id
                id={`item-${tag}`}
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
