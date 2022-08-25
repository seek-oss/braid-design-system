import React from 'react';
import { useTheme } from 'sku/react-treat';
import { ComponentExample } from '../../../../../site/src/types';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { Button, IconBookmark, IconPromote, Inline } from '..';
import Toast from './Toast';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'With a positive message',
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              vanillaTheme={vanillaTheme}
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
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              vanillaTheme={vanillaTheme}
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
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              vanillaTheme={vanillaTheme}
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
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              vanillaTheme={vanillaTheme}
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
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            vanillaTheme={vanillaTheme}
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
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            vanillaTheme={vanillaTheme}
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
    Example: ({ id, handler, showToast }) => {
      const theme = useTheme();
      const { vanillaTheme } = useBraidTheme();

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
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            vanillaTheme={vanillaTheme}
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
            icon={<IconPromote />}
          >
            Show animation
          </Button>
        </Inline>,
      ),
  },
];
