import type { Meta } from '@storybook/react-webpack5';
import React from 'react';

import { IconBookmark } from '../';

import Toast from './Toast';

const meta = {
  title: 'Components/useToast',
  component: Toast,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Toast>;
export default meta;

export const Criticaltoast = {
  name: 'Critical toast',
  render: () => (
    <Toast
      tone="critical"
      message="Critical toast"
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Criticaltoastwactions = {
  name: 'Critical toast w/actions',
  render: () => (
    <Toast
      tone="critical"
      message="Critical toast w/action"
      action={{
        label: 'Do the action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Criticaltoastwdescriptions = {
  name: 'Critical toast w/descriptions',
  render: () => (
    <Toast
      tone="critical"
      message="Critical toast"
      description="A really long description about toast stuff that is quite long and stuff"
      action={{
        label: 'Action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Positivetoast = {
  name: 'Positive toast',
  render: () => (
    <Toast
      tone="positive"
      message="Positive toast"
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Positivetoastwactions = {
  name: 'Positive toast w/actions',
  render: () => (
    <Toast
      tone="positive"
      message="Positive toast w/actions"
      action={{
        label: 'Do the action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Positivetoastwdescriptions = {
  name: 'Positive toast w/descriptions',
  render: () => (
    <Toast
      tone="positive"
      message="Positive toast"
      description="A really long description about toast stuff that is quite long and stuff"
      action={{
        label: 'Action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Neutraltoast = {
  name: 'Neutral toast',
  render: () => (
    <Toast
      tone="neutral"
      message="Neutral toast"
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Neutraltoastwactions = {
  name: 'Neutral toast w/actions',
  render: () => (
    <Toast
      tone="neutral"
      message="Neutral toast w/actions"
      action={{
        label: 'Do the action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Neutraltoastwdescriptions = {
  name: 'Neutral toast w/descriptions',
  render: () => (
    <Toast
      tone="neutral"
      message="Neutral toast"
      description="A really long description about toast stuff that is quite long and stuff"
      action={{
        label: 'Action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Neutraltoastwithicon = {
  name: 'Neutral toast with icon',
  render: () => (
    <Toast
      tone="neutral"
      icon={<IconBookmark />}
      message="Neutral toast with icon"
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Neutraltoastwactionsandicon = {
  name: 'Neutral toast w/actions and icon',
  render: () => (
    <Toast
      tone="neutral"
      icon={<IconBookmark />}
      message="Neutral toast w/actions and icon"
      action={{
        label: 'Do the action',
        onClick: () => {},
      }}
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};

export const Neutraltoastwdescriptionsandicon = {
  name: 'Neutral toast w/descriptions and icon',
  render: () => (
    <Toast
      tone="neutral"
      icon={<IconBookmark />}
      message="Neutral toast with icon"
      description="A really long description about toast stuff that is quite long and stuff"
      action={{
        label: 'Action',
        onClick: () => {},
      }}
      //
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
  },
};
