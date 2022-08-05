import React from 'react';
import { useTheme } from 'sku/react-treat';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { ComponentScreenshot } from '../../../../../site/src/types';
import Toast from './Toast';

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
  ],
};
