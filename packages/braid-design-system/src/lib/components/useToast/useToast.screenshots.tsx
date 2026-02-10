import type { Meta } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { IconBookmark } from '../';

import Toast from './Toast';
import { StaticToaster } from './Toaster';

const meta = {
  title: 'Components/useToast',
  component: Toast,
  decorators: [
    (Story) => (
      <StaticToaster>
        <Story />
      </StaticToaster>
    ),
  ],
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
  args: {
    tone: 'neutral',
    message: 'This is a toast message',
    onClose: () => {},
    toastKey: 'n/a',
    dedupeKey: 'n/a',
    shouldRemove: false,
  },
} satisfies Meta<typeof Toast>;
export default meta;

export const CriticalToast = {
  name: 'Critical toast',
  args: {
    tone: 'critical',
    message: 'Critical toast',
  },
};

export const CriticalToastWithActions = {
  name: 'Critical toast w/actions',
  args: {
    tone: 'critical',
    message: 'Critical toast w/action',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const CriticalToastWithDescriptions = {
  name: 'Critical toast w/descriptions',
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

export const PositiveToast = {
  name: 'Positive toast',
  args: {
    tone: 'positive',
    message: 'Positive toast',
  },
};

export const PositiveToastWithActions = {
  name: 'Positive toast w/actions',
  args: {
    tone: 'positive',
    message: 'Positive toast w/actions',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const PositiveToastWithDescriptions = {
  name: 'Positive toast w/descriptions',
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

export const NeutralToast = {
  name: 'Neutral toast',
  args: {
    tone: 'neutral',
    message: 'Neutral toast',
  },
};

export const NeutralToastWithActions = {
  name: 'Neutral toast w/actions',
  args: {
    tone: 'neutral',
    message: 'Neutral toast w/actions',
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const NeutralToastWithDescriptions = {
  name: 'Neutral toast w/descriptions',
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

export const NeutralToastWithIcon = {
  name: 'Neutral toast with icon',
  args: {
    tone: 'neutral',
    message: 'Neutral toast with icon',
    icon: <IconBookmark />,
  },
};

export const NeutralToastWithActionsAndIcon = {
  name: 'Neutral toast w/actions and icon',
  args: {
    tone: 'neutral',
    message: 'Neutral toast w/actions and icon',
    icon: <IconBookmark />,
    action: {
      label: 'Do the action',
      onClick: () => {},
    },
  },
};

export const NeutralToastWithDescriptionsAndIcon = {
  name: 'Neutral toast w/descriptions and icon',
  args: {
    tone: 'neutral',
    message: 'Neutral toast w/descriptions and icon',
    icon: <IconBookmark />,
    description:
      'A really long description about toast stuff that is quite long and stuff',
    action: {
      label: 'Action',
      onClick: () => {},
    },
  },
};
