import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Button, Text } from '..';
import { useToast } from './ToastContext';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const description = <Text>Toasts require a little setup to work</Text>;

const docs: ComponentDocs = {
  description,
  screenshotWidths: [],
  category: 'Content',
  examples: [
    {
      label: 'Nuetral Toast',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({
                message: 'Honey or Vegemite?',
                tone: 'neutral',
                actions: [
                  { label: 'Undo', onClick: () => {} },
                  { label: 'Goto Profile', onClick: () => {} },
                ],
              })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({ message: 'Honey or Vegemite?', tone: 'neutral' });
      `,
    },
    {
      label: 'Nuetral Toast with description',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({
                message: 'Honey or Vegemite',
                tone: 'neutral',
                description: 'Sweet or salty, the choice is all yours?',
                actions: [
                  { label: 'Undo', onClick: () => {} },
                  { label: 'Goto Profile', onClick: () => {} },
                ],
              })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({
          message: 'Honey or Vegemite',
          tone: 'neutral',
          description: 'Sweet or salty, the choice is all yours?',
        });
      `,
    },
    {
      label: 'Critical Toast',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({ message: 'Toast is burnt', tone: 'critical' })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({ message: 'Toast is burnt', tone: 'critical' });
      `,
    },
    {
      label: 'Critical Toast with description',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({
                message: 'Toast is burnt',
                tone: 'critical',
                actions: [
                  { label: 'Undo', onClick: () => {} },
                  { label: 'Goto Profile', onClick: () => {} },
                ],
                description:
                  '3 is too high for fruit toast. Try setting 2 for ideal crispness.',
              })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({
          message: 'Toast is burnt',
          tone: 'critical',
          description:
            '3 is too high for fruit toast. Try setting 2 for ideal crispness.',
        })
      `,
    },
  ],
};

export default docs;
