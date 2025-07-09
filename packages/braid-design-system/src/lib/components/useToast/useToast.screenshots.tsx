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
} satisfies Meta<typeof Toast>;
export default meta;

export const Criticaltoast = {
  name: 'Critical toast',
  render: () => {
    <Toast
      tone="critical"
      message="Critical toast"
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />;
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
      onClose={() => {}}
      toastKey="n/a"
      dedupeKey="n/a"
      shouldRemove={false}
    />
  ),
};
