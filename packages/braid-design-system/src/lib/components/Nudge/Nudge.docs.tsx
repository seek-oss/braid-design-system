import React from 'react';
import type { ComponentDocs } from 'site/types';
import { IconLanguage, Notice, Nudge, Stack, Strong, Text } from '../';
import source from '@braid-design-system/source.macro';
import { Placeholder } from '../private/Placeholder/Placeholder';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Nudge
        title="Title"
        actionLabel="Action"
        onActionClick={() => {}}
        size="standard"
        illustration={
          <Placeholder shape="round" label="illo" width="100%" height="100%" />
        }
      >
        <Text>
          Dolor veniam incididunt mollit exercitation fugiat sint exercitation
          duis eiusmod duis. Velit deserunt ullamco aliqua nostrud.
        </Text>
      </Nudge>,
    ),
  description: (
    <Text>
      A Nudge is a prominent message, encouraging users to take a specific
      action. For this reason a nudge is always actionable to drive a desired
      behaviour.
    </Text>
  ),
  alternatives: [
    {
      name: 'Alert',
      description: 'For a strong page-level messaging.',
    },
    {
      name: 'Notice',
      description: 'For a lighter section-level messaging.',
    },
    {
      name: 'useToast',
      description: 'For asynchronous messages that float above the page.',
    },
  ],
  additional: [
    {
      label: 'Content guidelines',
      description: (
        <>
          <Text>
            The content of a Nudge should be a concise explanation of the
            benefit to the user. An optional <Strong>title</Strong> prop may be
            provided as a short description to set the context.
          </Text>
          <Text>
            Given a Nudge is always actionable it requires an{' '}
            <Strong>actionLabel</Strong> and <Strong>onActionClick</Strong>{' '}
            handler.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Nudge title="Title" actionLabel="Action" onActionClick={() => {}}>
            <Text>
              Dolor veniam incididunt mollit exercitation fugiat sint
              exercitation duis eiusmod duis. Velit deserunt ullamco aliqua
              nostrud.
            </Text>
          </Nudge>,
        ),
    },
    {
      label: 'Illustrations',
      description: (
        <>
          <Text>
            An optional <Strong>illustration</Strong> prop can be provided to
            draw attention to the Nudge. The provided illustration should be
            relevant to the Nudge content.
          </Text>
          <Notice>
            <Text>
              The provided illustration is recommended to use a{' '}
              <Strong>width</Strong> and <Strong>height</Strong> of{' '}
              <Strong>100%</Strong> to ensure it fills the slot correctly.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Nudge
            illustration={
              <Placeholder
                shape="round"
                label="illo"
                width="100%"
                height="100%"
              />
            }
            title="Title"
            actionLabel="Action"
            onActionClick={() => {}}
          >
            <Text>
              Dolor veniam incididunt mollit exercitation fugiat sint
              exercitation duis eiusmod duis. Velit deserunt ullamco aliqua
              nostrud.
            </Text>
          </Nudge>,
        ),
    },
    {
      label: 'Size',
      description: (
        <>
          <Text>
            Nudges can be sized up and down to fix in the context of your
            product. The <Strong>size</Strong> prop can be set to{' '}
            <Strong>standard</Strong>,<Strong>small</Strong> or{' '}
            <Strong>xsmall</Strong>.
          </Text>
          <Text>
            The size will scale the title, content, action and illustration
            accordingly.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Nudge
              size="standard"
              title="Title"
              actionLabel="Action"
              onActionClick={() => {}}
              illustration={
                <Placeholder
                  shape="round"
                  label="illo"
                  width="100%"
                  height="100%"
                />
              }
            >
              <Text>
                Dolor veniam incididunt mollit exercitation fugiat sint
                exercitation duis eiusmod duis. Velit deserunt ullamco aliqua
                nostrud.
              </Text>
            </Nudge>
            <Nudge
              size="small"
              title="Title"
              actionLabel="Action"
              onActionClick={() => {}}
              illustration={
                <Placeholder
                  shape="round"
                  label="illo"
                  width="100%"
                  height="100%"
                />
              }
            >
              <Text>
                Dolor veniam incididunt mollit exercitation fugiat sint
                exercitation duis eiusmod duis. Velit deserunt ullamco aliqua
                nostrud.
              </Text>
            </Nudge>
            <Nudge
              size="xsmall"
              title="Title"
              actionLabel="Action"
              onActionClick={() => {}}
              illustration={
                <Placeholder
                  shape="round"
                  label="illo"
                  width="100%"
                  height="100%"
                />
              }
            >
              <Text>
                Dolor veniam incididunt mollit exercitation fugiat sint
                exercitation duis eiusmod duis. Velit deserunt ullamco aliqua
                nostrud.
              </Text>
            </Nudge>
          </Stack>,
        ),
    },
    {
      label: 'Dismissable nudge',
      description: (
        <>
          <Text>
            A Nudge can be made dismissable by providing an{' '}
            <Strong>onClose</Strong> handler.
          </Text>

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the close button can be customised
            via the <Strong>closeLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Nudge
            onClose={() => {}}
            closeLabel="Close"
            title="Title"
            actionLabel="Action"
            onActionClick={() => {}}
            illustration={
              <Placeholder
                shape="round"
                label="illo"
                width="100%"
                height="100%"
              />
            }
          >
            <Text>
              Dolor veniam incididunt mollit exercitation fugiat sint
              exercitation duis eiusmod duis. Velit deserunt ullamco aliqua
              nostrud.
            </Text>
          </Nudge>,
        ),
    },
  ],
};

export default docs;
