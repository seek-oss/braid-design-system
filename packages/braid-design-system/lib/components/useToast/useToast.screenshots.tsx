import React from 'react';
import { useTheme } from 'sku/react-treat';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { ComponentScreenshot } from '../../../../../site/src/types';
import Toast from './Toast';
import { IconBookmark } from '..';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Critical toast',
      Example: () => {
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="critical"
            message="Critical toast"
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="critical"
            message="Critical toast w/action"
            action={{
              label: 'Do the action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
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
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="positive"
            message="Positive toast"
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="positive"
            message="Positive toast w/actions"
            action={{
              label: 'Do the action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
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
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="neutral"
            message="Neutral toast"
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="neutral"
            message="Neutral toast w/actions"
            action={{
              label: 'Do the action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
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
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
        const { vanillaTheme } = useBraidTheme();

        return (
          <Toast
            tone="neutral"
            icon={<IconBookmark />}
            message="Neutral toast with icon"
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
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
            treatTheme={treatTheme}
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
        const treatTheme = useTheme();
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
            treatTheme={treatTheme}
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
