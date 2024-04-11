import React from 'react';

import * as styles from './TagSelector.css';

export interface TagSelectorProps {
  tags: string[];
  ariaLabel?: string;
}

export const TagSelector = ({ tags, ariaLabel }: TagSelectorProps) => {
  const [isFocussed, setIsFocussed] = React.useState(false);

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
          data-active-option="item1"
          aria-activedescendant=""
          onFocus={() => setIsFocussed(true)}
          onBlur={() => setIsFocussed(false)}
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
              <li key={index} role="option" id={`item${index}`}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
