import React from 'react';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import type { ComponentScreenshot } from 'site/types';
import Toast from './Toast';
import { IconBookmark } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Critical toast',
      Example: () => {
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="critical"
            message="Critical toast"
            vanillaTheme={vanillaTheme}
            onClose={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Critical toast w/actions',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Critical toast w/descriptions',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Positive toast',
      Example: () => {
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="positive"
            message="Positive toast"
            vanillaTheme={vanillaTheme}
            onClose={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Positive toast w/actions',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Positive toast w/descriptions',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Neutral toast',
      Example: () => {
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="neutral"
            message="Neutral toast"
            vanillaTheme={vanillaTheme}
            onClose={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Neutral toast w/actions',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Neutral toast w/descriptions',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Neutral toast with icon',
      Example: () => {
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="neutral"
            icon={<IconBookmark />}
            message="Neutral toast with icon"
            vanillaTheme={vanillaTheme}
            onClose={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Neutral toast w/actions and icon',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Neutral toast w/descriptions and icon',
      Example: () => {
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
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
  ],
};
