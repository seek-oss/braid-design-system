import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { Inline, Stack } from '../..';
import { Placeholder } from '../../../playroom/components';
import { ModalContent } from './ModalContent';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320, 768, 1200],
  examples: [
    {
      label: 'Test: Heading level 2 with description',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          width="small"
          title="Description test"
          position="center"
          headingLevel="2"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Heading level 3 with description',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          width="small"
          title="Description test"
          position="center"
          headingLevel="3"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: With illustration/logo',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          width="small"
          title="Illustration test"
          position="center"
          headingLevel="3"
          illustration={
            <Placeholder
              height={150}
              width={150}
              shape="round"
              label="Illustration"
            />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Stack space="xlarge" align="center">
            <Placeholder width="100%" height={100} />
            <Inline space="small">
              <Placeholder height={44} width={80} label="OK" />
              <Placeholder height={44} width={80} label="Cancel" />
            </Inline>
          </Stack>
        </ModalContent>
      ),
    },
    {
      label: 'Test: Content width',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Content-sized"
          position="center"
          headingLevel="3"
          width="content"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width={200} label="200px wide" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Content width, right aligned',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Content-sized"
          position="right"
          headingLevel="3"
          width="content"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width={200} label="200px wide" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Xsmall width',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Xsmall"
          position="center"
          headingLevel="3"
          width="xsmall"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Xsmall Drawer" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Xsmall width, right aligned',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Xsmall"
          position="right"
          headingLevel="3"
          width="xsmall"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Xsmall Drawer" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Small width',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Small"
          position="center"
          headingLevel="3"
          width="small"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Small Drawer" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Medium width',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Medium"
          position="center"
          headingLevel="3"
          width="medium"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Medium Drawer" />
        </ModalContent>
      ),
    },
    {
      label: 'Test: Large width',
      docsSite: false,
      Example: ({ id }) => (
        <ModalContent
          id={id}
          title="Large"
          position="center"
          headingLevel="3"
          width="large"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Large Drawer" />
        </ModalContent>
      ),
    },
  ],
};

export default docs;
