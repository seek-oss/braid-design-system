import React from 'react';
import { useTheme } from 'sku/react-treat';
import { ComponentExample } from '../../../site/src/types';
import { Box, Button, Stack, useToast, IconPromote } from '..';
import Toast from './Toast';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Positive Toast',
    playroom: false,
    Example: ({ id, handler }) => {
      const showToast = useToast();
      const theme = useTheme();

      const toastProps = {
        message: 'Positive toast',
        tone: 'positive',
        action: { label: 'View', onClick: () => {} },
      } as const;

      return (
        <Stack space="large" align="center">
          <Toast
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            onClear={handler}
            {...toastProps}
          />
          <Box display="flex">
            <Button onClick={() => showToast(toastProps)}>
              Show animation <IconPromote alignY="lowercase" />
            </Button>
          </Box>
        </Stack>
      );
    },
    code: `
        const showToast = useToast();

        showToast({
          message: 'Positive toast',
          tone: 'positive',
          action: { label: 'View', onClick: () => {} },
        })
      `,
  },
  {
    label: 'Positive Toast with description',
    playroom: false,
    Example: ({ id, handler }) => {
      const showToast = useToast();
      const theme = useTheme();

      const toastProps = {
        message: 'Positive toast',
        tone: 'positive',
        description: 'With a longer piece of text describing what has occured.',
        action: { label: 'View', onClick: () => {} },
      } as const;

      return (
        <Stack space="large" align="center">
          <Toast
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            onClear={handler}
            {...toastProps}
          />
          <Box display="flex">
            <Button onClick={() => showToast(toastProps)}>
              Show animation <IconPromote alignY="lowercase" />
            </Button>
          </Box>
        </Stack>
      );
    },
    code: `
        const showToast = useToast();

        showToast({
          message: 'Positive toast',
          tone: 'positive',
          description: 'With a longer piece of text describing what has occured.',
          action: { label: 'View', onClick: () => {} },
        })
      `,
  },
  {
    label: 'Critical Toast',
    playroom: false,
    Example: ({ id, handler }) => {
      const showToast = useToast();
      const theme = useTheme();

      const toastProps = {
        message: 'Critical toast',
        tone: 'critical',
      } as const;

      return (
        <Stack space="large" align="center">
          <Toast
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            onClear={handler}
            {...toastProps}
          />
          <Box display="flex">
            <Button onClick={() => showToast(toastProps)}>
              Show animation <IconPromote alignY="lowercase" />
            </Button>
          </Box>
        </Stack>
      );
    },
    code: `
        const showToast = useToast();

        showToast({ message: 'Critical toast', tone: 'critical' })
        `,
  },
  {
    label: 'Critical Toast with description',
    playroom: false,
    Example: ({ id, handler }) => {
      const showToast = useToast();
      const theme = useTheme();

      const toastProps = {
        message: 'Critical toast',
        tone: 'critical',
        description: 'With a longer piece of text describing what went wrong.',
        action: { label: 'Goto error', onClick: () => {} },
      } as const;

      return (
        <Stack space="large" align="center">
          <Toast
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme}
            onClear={handler}
            {...toastProps}
          />
          <Box display="flex">
            <Button onClick={() => showToast(toastProps)}>
              Show animation <IconPromote alignY="lowercase" />
            </Button>
          </Box>
        </Stack>
      );
    },
    code: `
        const showToast = useToast();

        showToast({
          message: 'Critical toast',
          tone: 'critical',
          description: 'With a longer piece of text describing what went wrong.',
          action: { label: 'Goto error', onClick: () => {} },
        })
      `,
  },
];
