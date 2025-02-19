import dedent from 'dedent';

export const validTabIndexes = [0, -1];

export const validateTabIndex = (tabIndex: number | undefined) => {
  if (tabIndex && !validTabIndexes.includes(tabIndex)) {
    throw new Error(dedent`
      Braid only supports “tabIndex” values of 0 and -1.

      Avoid using tabindex values greater than 0 and CSS properties that can change the order
      of focusable HTML elements.

      Read more: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#:~:text=only%20use%200%20and%20%2D1%20as%20tabindex%20values
    `);
  }
};
