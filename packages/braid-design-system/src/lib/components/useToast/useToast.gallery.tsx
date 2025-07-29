import source from '@braid-design-system/source.macro';
import { useId } from 'react';
import type { GalleryComponent } from 'site/types';

import { Button, IconBookmark, Inline } from '..';

import Toast from './Toast';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'With a positive message',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Positive message',
                  tone: 'positive',
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Inline space="gutter" align="center">
              <Toast
                toastKey={id}
                dedupeKey={id}
                shouldRemove={false}
                onClose={handler}
                message="Positive message"
                tone="positive"
              />
            </Inline>
          ),
        };
      },
    },
    {
      label: 'With a critical message',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Critical message',
                  tone: 'critical',
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Inline space="gutter" align="center">
              <Toast
                toastKey={id}
                dedupeKey={id}
                shouldRemove={false}
                onClose={handler}
                message="Critical message"
                tone="critical"
              />
            </Inline>
          ),
        };
      },
    },
    {
      label: 'With a neutral message',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Neutral message',
                  tone: 'neutral',
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Inline space="gutter" align="center">
              <Toast
                toastKey={id}
                dedupeKey={id}
                shouldRemove={false}
                onClose={handler}
                message="Neutral message"
                tone="neutral"
              />
            </Inline>
          ),
        };
      },
    },
    {
      label: 'With a custom icon (neutral tone only)',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Neutral message with icon',
                  tone: 'neutral',
                  icon: <IconBookmark />,
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Inline space="gutter" align="center">
              <Toast
                toastKey={id}
                dedupeKey={id}
                shouldRemove={false}
                onClose={handler}
                message="Neutral message with icon"
                tone="neutral"
                icon={<IconBookmark />}
              />
            </Inline>
          ),
        };
      },
    },
    {
      label: 'With a description',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Toast message',
                  tone: 'positive',
                  description:
                    'With a longer piece of text describing what has occured.',
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Toast
              toastKey={id}
              dedupeKey={id}
              shouldRemove={false}
              onClose={handler}
              message="Toast message"
              tone="positive"
              description="With a longer piece of text describing what has occured."
            />
          ),
        };
      },
    },
    {
      label: 'With an action',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Toast message',
                  tone: 'critical',
                  action: { label: 'Action', onClick: () => {} },
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Toast
              toastKey={id}
              dedupeKey={id}
              shouldRemove={false}
              onClose={handler}
              message="Toast message"
              tone="critical"
              action={{ label: 'Action', onClick: handler }}
            />
          ),
        };
      },
    },
    {
      label: 'With an action and description',
      Example: ({ handler, showToast }) => {
        const id = useId();

        const { code } = source(
          <Inline space="small">
            <Button
              onClick={() =>
                showToast({
                  message: 'Toast message',
                  tone: 'positive',
                  description:
                    'With a longer piece of text describing what has occured.',
                  action: { label: 'Action', onClick: () => {} },
                })
              }
            >
              Show Toast
            </Button>
          </Inline>,
        );

        return {
          code,
          value: (
            <Toast
              toastKey={id}
              dedupeKey={id}
              shouldRemove={false}
              onClose={handler}
              message="Toast message"
              tone="positive"
              description="With a longer piece of text describing what has occured."
              action={{ label: 'Action', onClick: handler }}
            />
          ),
        };
      },
    },
    {
      label: 'Preview animation',
      Example: ({ showToast }) =>
        source(
          <Inline space="small" align="center">
            <Button
              onClick={() =>
                showToast({
                  message: 'Toast message',
                  tone: 'critical',
                  description:
                    'With a longer piece of text describing what has occured.',
                  action: { label: 'Action', onClick: () => {} },
                })
              }
            >
              Show animation
            </Button>
          </Inline>,
        ),
    },
  ],
};
