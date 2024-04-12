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
}

// Todo - rename
const TagOption = ({ tag, index, activeIndex }: TagOptionProps) => (
  <li
    key={index}
    // Todo - create better unique id
    role="option"
    id={`item-${tag}`}
    className={
      index === activeIndex ? styles.ActiveTagOption : styles.InactiveTagOption
    }
  >
    <label htmlFor={`checkbox-${tag}`}>
      <input type="checkbox" id={`checkbox-${tag}`} />
      <span>{tag}</span>
    </label>
  </li>
);

export interface TagSelectorProps {
  options: string[];
  selectedTags?: string[];
  ariaLabel?: string;
}
// todo - add onSelect
export const TagSelector = ({
  options,
  selectedTags,
  ariaLabel,
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
      default:
        break;
    }
  };

  return (
    <div className={styles.Wrapper}>
      <SelectedTags tags={selectedTags || []} />
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
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
