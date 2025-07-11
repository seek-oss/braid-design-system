import type { Meta } from '@storybook/react-webpack5';
import React from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { IconBookmark } from '../';

import Toast from './Toast';

const meta = {
  title: 'Components/useToast',
  component: Toast,
  parameters: {
    chromatic: {
      modes: makeBraidModes({ viewports: ['mobile', 'tablet'] }),
    },
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

export const Criticaltoast = {
  name: 'Critical toast',
  args: {
    tone: 'critical',
    message: 'Critical toast',
  },
};

export const Criticaltoastwactions = {
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

export const Criticaltoastwdescriptions = {
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

export const Positivetoast = {
  name: 'Positive toast',
  args: {
    tone: 'positive',
    message: 'Positive toast',
  },
};

export const Positivetoastwactions = {
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

export const Positivetoastwdescriptions = {
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

export const Neutraltoast = {
  name: 'Neutral toast',
  args: {
    tone: 'neutral',
    message: 'Neutral toast',
  },
};

export const Neutraltoastwactions = {
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

export const Neutraltoastwdescriptions = {
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

export const Neutraltoastwithicon = {
  name: 'Neutral toast with icon',
  args: {
    tone: 'neutral',
    message: 'Neutral toast with icon',
    icon: <IconBookmark />,
  },
};

export const Neutraltoastwactionsandicon = {
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

export const Neutraltoastwdescriptionsandicon = {
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
