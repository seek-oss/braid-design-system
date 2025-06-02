import { IconBookmark } from '../';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import Toast from './Toast';
import { Meta } from '@storybook/react';
import React from 'react';

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
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="critical"
        message="Critical toast"
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Criticaltoastwactions = {
  name: 'Critical toast w/actions',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="critical"
        message="Critical toast w/action"
        action={{
          label: 'Do the action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Criticaltoastwdescriptions = {
  name: 'Critical toast w/descriptions',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="critical"
        message="Critical toast"
        description="A really long description about toast stuff that is quite long and stuff"
        action={{
          label: 'Action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Positivetoast = {
  name: 'Positive toast',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="positive"
        message="Positive toast"
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Positivetoastwactions = {
  name: 'Positive toast w/actions',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="positive"
        message="Positive toast w/actions"
        action={{
          label: 'Do the action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Positivetoastwdescriptions = {
  name: 'Positive toast w/descriptions',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="positive"
        message="Positive toast"
        description="A really long description about toast stuff that is quite long and stuff"
        action={{
          label: 'Action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Neutraltoast = {
  name: 'Neutral toast',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="neutral"
        message="Neutral toast"
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Neutraltoastwactions = {
  name: 'Neutral toast w/actions',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="neutral"
        message="Neutral toast w/actions"
        action={{
          label: 'Do the action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Neutraltoastwdescriptions = {
  name: 'Neutral toast w/descriptions',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="neutral"
        message="Neutral toast"
        description="A really long description about toast stuff that is quite long and stuff"
        action={{
          label: 'Action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Neutraltoastwithicon = {
  name: 'Neutral toast with icon',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="neutral"
        icon={<IconBookmark />}
        message="Neutral toast with icon"
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Neutraltoastwactionsandicon = {
  name: 'Neutral toast w/actions and icon',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="neutral"
        icon={<IconBookmark />}
        message="Neutral toast w/actions and icon"
        action={{
          label: 'Do the action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Neutraltoastwdescriptionsandicon = {
  name: 'Neutral toast w/descriptions and icon',
  render: () => {
    const { vanillaTheme } = useBraidTheme();
    return (
      <Toast
        tone="neutral"
        icon={<IconBookmark />}
        message="Neutral toast with icon"
        description="A really long description about toast stuff that is quite long and stuff"
        action={{
          label: 'Action',
          onClick: () => {},
        }}
        vanillaTheme={vanillaTheme}
        onClose={() => {}}
        toastKey="n/a"
        dedupeKey="n/a"
        shouldRemove={false}
      />
    );
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};
