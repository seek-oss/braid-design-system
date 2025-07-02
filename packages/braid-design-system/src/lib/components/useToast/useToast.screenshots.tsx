import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { IconBookmark } from '../';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

import Toast from './Toast';

const ToastDecorator = (Story: any, context: any) => {
  const { vanillaTheme } = useBraidTheme();

  return (
    <Story
      {...context}
      args={{
        ...context.args,
        vanillaTheme,
        onClose: () => {},
        toastKey: 'n/a',
        dedupeKey: 'n/a',
        shouldRemove: false,
      }}
    />
  );
};

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    chromatic: {
      viewports: [320, 768],
    },
  },
  decorators: [ToastDecorator],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const CriticalToast: Story = {
  args: {
    tone: 'critical',
    message: 'Critical toast',
  },
};

export const CriticalToastWActions: Story = {
  args: {
    tone: 'critical',
    message: 'Critical toast w/action',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const CriticalToastWDescriptions: Story = {
  args: {
    tone: 'critical',
    message: 'Critical toast',
    description:
      'A really long description about toast stuff that is quite long and stuff',
    action: {
      label: 'Action',
      onClick: () => {},
    },
  },
};

export const PositiveToast: Story = {
  args: {
    tone: 'positive',
    message: 'Positive toast',
  },
};

export const PositiveToastWActions: Story = {
  args: {
    tone: 'positive',
    message: 'Positive toast w/actions',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const PositiveToastWDescriptions: Story = {
  args: {
    tone: 'positive',
    message: 'Positive toast',
    description:
      'A really long description about toast stuff that is quite long and stuff',
    action: {
      label: 'Action',
      onClick: () => {},
    },
  },
};

export const NeutralToast: Story = {
  args: {
    tone: 'neutral',
    message: 'Neutral toast',
  },
};

export const NeutralToastWActions: Story = {
  args: {
    tone: 'neutral',
    message: 'Neutral toast w/actions',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const NeutralToastWDescriptions: Story = {
  args: {
    tone: 'neutral',
    message: 'Neutral toast',
    description:
      'A really long description about toast stuff that is quite long and stuff',
    action: {
      label: 'Action',
      onClick: () => {},
    },
  },
};

export const NeutralToastWithIcon: Story = {
  args: {
    tone: 'neutral',
    icon: <IconBookmark />,
    message: 'Neutral toast with icon',
  },
};

export const NeutralToastWActionsAndIcon: Story = {
  args: {
    tone: 'neutral',
    icon: <IconBookmark />,
    message: 'Neutral toast w/actions and icon',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const NeutralToastWDescriptionsAndIcon: Story = {
  args: {
    tone: 'neutral',
    icon: <IconBookmark />,
    message: 'Neutral toast with icon',
    description:
      'A really long description about toast stuff that is quite long and stuff',
    action: {
      label: 'Action',
      onClick: () => {},
    },
  },
};
