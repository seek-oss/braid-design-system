import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Stack, Textarea, TextLink } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: 'textarea-story',
    value: 'Text value',
    onChange: () => {},
    label: 'Label',
  },
};

export const TextareaWithNeutralMessage: Story = {
  args: {
    id: 'textarea-neutral-message',
    value: '',
    onChange: () => {},
    label: 'Label',
    message: 'Neutral message',
  },
};

export const TextareaWithSecondaryLabel: Story = {
  args: {
    id: 'textarea-secondary-label',
    value: '',
    onChange: () => {},
    label: 'Label',
    secondaryLabel: 'Secondary',
  },
};

export const TextareaWithTertiaryLabel: Story = {
  args: {
    id: 'textarea-tertiary-label',
    value: '',
    onChange: () => {},
    label: 'Label',
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Help?</TextLink>,
  },
};

export const TextareaWithNoVisualLabel: Story = {
  args: {
    id: 'textarea-no-visual-label',
    value: '',
    onChange: () => {},
    'aria-label': 'Label',
  },
};

export const TextareaWithADescriptionAndNoVisualLabel: Story = {
  args: {
    id: 'textarea-description-no-visual-label',
    'aria-label': 'Label',
    description: 'Longer description of this field',
    value: '',
    onChange: () => {},
  },
};

export const TextareaWithError: Story = {
  args: {
    id: 'textarea-error',
    value: '',
    onChange: () => {},
    label: 'Label',
    message: 'Critical message',
    tone: 'critical',
  },
};

export const TextareaWithPositiveMessage: Story = {
  args: {
    id: 'textarea-positive-message',
    value: '',
    onChange: () => {},
    label: 'Label',
    message: 'Positive message',
    tone: 'positive',
  },
};

export const TextareaWithCautionMessage: Story = {
  args: {
    id: 'textarea-caution-message',
    value: '',
    onChange: () => {},
    label: 'Label',
    message: 'Caution message',
    tone: 'caution',
  },
};

export const TextareaDisabled: Story = {
  render: () => (
    <Stack space="gutter">
      <Textarea
        id="textarea-disabled-1"
        label="With no value or placeholder"
        value=""
        disabled={true}
        onChange={() => {}}
      />
      <Textarea
        id="textarea-disabled-2"
        label="With value and no placeholder"
        value="Text value"
        disabled={true}
        onChange={() => {}}
      />
      <Textarea
        id="textarea-disabled-3"
        label="With no value and a placeholder"
        value=""
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <Textarea
        id="textarea-disabled-4"
        label="With value and a placeholder"
        value="Text value"
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <Textarea
        id="textarea-disabled-5"
        label="With critical tone"
        value=""
        disabled={true}
        tone="critical"
        onChange={() => {}}
      />
      <Textarea
        id="textarea-disabled-6"
        label="With critical tone and message"
        value=""
        disabled={true}
        tone="critical"
        message="Message"
        onChange={() => {}}
      />
    </Stack>
  ),
};

const GrowFieldComponent = () => {
  const [value, setValue] = useState('');
  return (
    <Textarea
      id="textarea-grow-field"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      lineLimit={6}
    />
  );
};

export const TextareaGrowFieldWithTypingLimitedTo6Lines: Story = {
  render: () => <GrowFieldComponent />,
};

const CharacterLimitNoValueComponent = () => {
  const [value, setValue] = useState('');
  return (
    <Textarea
      id="textarea-character-limit-no-value"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      characterLimit={50}
    />
  );
};

export const TextareaWithCharacterLimitAndNoValue: Story = {
  render: () => <CharacterLimitNoValueComponent />,
};

const NearingLimitComponent = () => {
  const [value, setValue] = useState(
    'The text is nearing the 50 character limit',
  );
  return (
    <Textarea
      id="textarea-nearing-limit"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      characterLimit={50}
    />
  );
};

export const TextareaNearingCharacterLimit: Story = {
  render: () => <NearingLimitComponent />,
};

const ExceedingLimitComponent = () => {
  const [value, setValue] = useState(
    '12345678910 The character limit is 9 so the highlighting should start from "10"',
  );
  return (
    <Textarea
      id="textarea-exceeding-limit"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      characterLimit={9}
    />
  );
};

export const TextareaExceedingCharacterLimit: Story = {
  render: () => <ExceedingLimitComponent />,
};

const HighlightRangeComponent = () => {
  const [value, setValue] = useState(
    'The long piece of text highlighting a range',
  );
  return (
    <Textarea
      id="textarea-highlight-range"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      description="Characters 9-22 are invalid"
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const TextareaHighlightingARange: Story = {
  render: () => <HighlightRangeComponent />,
};

const HighlightRangeCautionComponent = () => {
  const [value, setValue] = useState(
    'The long piece of text highlighting a range',
  );
  return (
    <Textarea
      id="textarea-highlight-range-caution"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      tone="caution"
      description="Characters 9-22 are invalid"
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const TextareaHighlightingARangeInCaution: Story = {
  render: () => <HighlightRangeCautionComponent />,
};

const WithinLimitHighlightNoToneComponent = () => {
  const [value, setValue] = useState('The long piece of text within the limit');
  return (
    <Textarea
      id="textarea-within-limit-highlight-no-tone"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      description="Should show highlighted range"
      characterLimit={50}
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const WithinCharacterLimitWithHighlightRangeAndNoTone: Story = {
  render: () => <WithinLimitHighlightNoToneComponent />,
};

const WithinLimitHighlightCriticalComponent = () => {
  const [value, setValue] = useState('The long piece of text within the limit');
  return (
    <Textarea
      id="textarea-within-limit-highlight-critical"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      tone="critical"
      description="Should show highlighted range"
      characterLimit={50}
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const WithinCharacterLimitWithHighlightRangeAndExplicitCriticalTone: Story =
  {
    render: () => <WithinLimitHighlightCriticalComponent />,
  };

const WithinLimitHighlightCautionComponent = () => {
  const [value, setValue] = useState('The long piece of text within the limit');
  return (
    <Textarea
      id="textarea-within-limit-highlight-caution"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      tone="caution"
      description="Should show highlighted range"
      characterLimit={50}
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const WithinCharacterLimitWithHighlightRangeAndCautionTone: Story = {
  render: () => <WithinLimitHighlightCautionComponent />,
};

const ExceedingLimitHighlightNoToneComponent = () => {
  const [value, setValue] = useState(
    'The long piece of text exceeding the specified 50 character limit',
  );
  return (
    <Textarea
      id="textarea-exceeding-limit-highlight-no-tone"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      description="Should only highlight exceeding characters"
      characterLimit={50}
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const ExceedingCharacterLimitWithHighlightRangeAndNoTone: Story = {
  render: () => <ExceedingLimitHighlightNoToneComponent />,
};

const ExceedingLimitHighlightCriticalComponent = () => {
  const [value, setValue] = useState(
    'The long piece of text exceeding the specified 50 character limit',
  );
  return (
    <Textarea
      id="textarea-exceeding-limit-highlight-critical"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      tone="critical"
      description="Should only highlight exceeding characters"
      characterLimit={50}
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const ExceedingCharacterLimitWithHighlightRangeAndExplicitCriticalTone: Story =
  {
    render: () => <ExceedingLimitHighlightCriticalComponent />,
  };

const ExceedingLimitHighlightCautionComponent = () => {
  const [value, setValue] = useState(
    'The long piece of text exceeding the specified 50 character limit',
  );
  return (
    <Textarea
      id="textarea-exceeding-limit-highlight-caution"
      value={value}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
      label="Label"
      tone="caution"
      description="Should only highlight exceeding characters"
      characterLimit={50}
      highlightRanges={[{ start: 9, end: 22 }]}
    />
  );
};

export const ExceedingCharacterLimitWithHighlightRangeAndCautionTone: Story = {
  render: () => <ExceedingLimitHighlightCautionComponent />,
};

export const Contrast: Story = {
  render: () => (
    <BackgroundContrastTest>
      <Textarea
        id="textarea-contrast"
        label="Label"
        onChange={() => {}}
        value="Text value"
      />
    </BackgroundContrastTest>
  ),
  decorators: [],
};
