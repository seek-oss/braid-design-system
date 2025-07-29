import source from '@braid-design-system/source.macro';

import { Autosuggest, IconLocation } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Autosuggest
        label="Fruit"
        suggestions={[
          { text: 'Apples' },
          { text: 'Bananas' },
          { text: 'Carrots' },
        ]}
      />,
    ),
  },
  {
    name: 'Grouped suggestions',
    code: source(
      <Autosuggest
        label="I like to eat"
        suggestions={[
          {
            label: 'Fruit',
            suggestions: [
              { text: 'Apples' },
              { text: 'Bananas' },
              { text: 'Carrots' },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              { text: 'Broccoli' },
              { text: 'Carrots' },
              { text: 'Carrots' },
            ],
          },
        ]}
      />,
    ),
  },
  {
    name: 'With mobile backdrop',
    code: source(
      <Autosuggest
        showMobileBackdrop
        label="Fruit"
        suggestions={[
          { text: 'Apples' },
          { text: 'Bananas' },
          { text: 'Carrots' },
        ]}
      />,
    ),
  },
  {
    name: 'With error',
    code: source(
      <Autosuggest
        label="I like to eat"
        tone="critical"
        message="You must make a selection"
        suggestions={[
          { text: 'Apples' },
          { text: 'Bananas' },
          { text: 'Carrots' },
        ]}
      />,
    ),
  },
  {
    name: 'With description',
    code: source(
      <Autosuggest
        label="Fruit"
        description="Select your favourite fruit to eat from the available suggestions."
        suggestions={[
          { text: 'Apples' },
          { text: 'Bananas' },
          { text: 'Carrots' },
        ]}
      />,
    ),
  },
  {
    name: 'With icon',
    code: source(
      <Autosuggest
        aria-label="Location"
        icon={<IconLocation />}
        placeholder="Enter a location"
        suggestions={[
          { text: 'Adelaide' },
          { text: 'Brisbane' },
          { text: 'Darwin' },
          { text: 'Hobart' },
          { text: 'Melbourne' },
          { text: 'Perth' },
          { text: 'Sydney' },
        ]}
      />,
    ),
  },
];
