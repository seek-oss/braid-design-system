import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useArgs } from 'storybook/preview-api';

import { Autosuggest, filterSuggestions, IconSearch, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

interface AutosuggestValue<Value = any> {
  text: string;
  description?: string;
  value?: Value;
}

interface SuggestionItem {
  text: string;
  description?: string;
  onClear?: (value: AutosuggestValue) => void;
  clearLabel?: string;
}

const makeSuggestions = (items: string[]): SuggestionItem[] =>
  items.map((text) => ({ text }));

const defaultFruits = ['Apples', 'Bananas', 'Broccoli', 'Carrots'];

const WithAutosuggestState = (storyFn: any) => {
  const [args, updateArgs] = useArgs();

  const handleChange = (newValue: AutosuggestValue) => {
    updateArgs({ value: newValue });
  };

  const handleClear = () => {
    updateArgs({ value: { text: '' } });
  };

  return storyFn({
    args: {
      ...args,
      onChange: handleChange,
      onClear: handleClear,
    },
  });
};

const meta = {
  title: 'Components/Autosuggest',
  component: Autosuggest,
  parameters: {
    screenshotOnlyInWireframe: false,
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    value: { text: '' },
    label: 'I like to eat',
    id: 'autosuggest_id',
    suggestions: filterSuggestions(makeSuggestions(defaultFruits)),
  },
  decorators: [
    WithAutosuggestState,
    (Story) => (
      <div style={{ padding: '1rem', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Autosuggest>;

export default meta;

type Story = StoryObj<typeof Autosuggest>;

export const StandardSuggestions: Story = {
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const StandardSuggestionsWithAutomaticSelection: Story = {
  args: {
    automaticSelection: true,
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const GroupedSuggestions: Story = {
  args: {
    id: 'autosuggest-grouped',
    suggestions: filterSuggestions([
      {
        label: 'Fruit',
        suggestions: makeSuggestions(['Apples', 'Bananas']),
      },
      {
        label: 'Vegetables',
        suggestions: makeSuggestions(['Broccoli', 'Carrots']),
      },
    ]),
  },
};

export const StandardSuggestionsWithAnIcon: Story = {
  args: {
    label: 'I like to eat',
    icon: <IconSearch />,
  },
};

export const CriticalTone: Story = {
  args: {
    tone: 'critical',
    message: 'You must make a selection',
  },
};

export const CautionTone: Story = {
  args: {
    tone: 'caution',
    message: 'Please make a selection',
  },
};

export const AutosuggestWhenDisabled: Story = {
  render: ({ id, onChange: handler }) => (
    <Stack space="gutter">
      <Autosuggest
        label="With no value or placeholder"
        id={`${id}_1`}
        value={{
          text: '',
        }}
        disabled={true}
        onChange={handler}
        suggestions={[]}
      />
      <Autosuggest
        label="With value and no placeholder"
        id={`${id}_2`}
        value={{
          text: 'Text value',
        }}
        disabled={true}
        onChange={handler}
        suggestions={[]}
      />
      <Autosuggest
        label="With no value and a placeholder"
        id={`${id}_3`}
        value={{
          text: '',
        }}
        disabled={true}
        placeholder="Placeholder text"
        onChange={handler}
        suggestions={[]}
      />
      <Autosuggest
        label="With value and a placeholder"
        id={`${id}_4`}
        value={{
          text: 'Text value',
        }}
        disabled={true}
        placeholder="Placeholder text"
        onChange={handler}
        suggestions={[]}
      />
      <Autosuggest
        label="With critical tone"
        id={`${id}_5`}
        value={{
          text: '',
        }}
        disabled={true}
        tone="critical"
        onChange={handler}
        suggestions={[]}
      />
      <Autosuggest
        label="With critical tone and message"
        id={`${id}_6`}
        value={{
          text: '',
        }}
        disabled={true}
        tone="critical"
        message="Message"
        onChange={handler}
        suggestions={[]}
      />
    </Stack>
  ),
};

export const AutosuggestWithNoVisualLabel: Story = {
  args: {
    label: undefined,
    'aria-label': 'I like to eat',
  },
};

export const Contrast: Story = {
  args: {
    label: 'I like to eat',
    id: 'autosuggest-contrast',
    suggestions: filterSuggestions(
      makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
    ),
  },

  decorators: [
    (Story) => (
      <BackgroundContrastTest>
        <Story />
      </BackgroundContrastTest>
    ),
  ],
};
