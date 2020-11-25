import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Drawer, Button, Inline, Text, TextLink, Box, Strong } from '../';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDetail = {
  category: 'Content',
  Example: ({ id, getState, toggleState }) =>
    source(
      <>
        <Box padding="medium">
          <Inline space="small" align={['center', 'left']}>
            <Button onClick={() => toggleState('drawer')}>Open drawer</Button>
          </Inline>
        </Box>

        <Drawer
          id={id}
          title="Drawer Title"
          description={<Text tone="secondary">Optional description</Text>}
          open={getState('drawer')}
          onClose={() => toggleState('drawer')}
        >
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
          <Placeholder height={100} width="100%" />
        </Drawer>
      </>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal">
        WAI-ARIA Dialog (Modal) Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    { name: 'Dialog', description: 'For a smaller amount of content.' },
    {
      name: 'Accordion',
      description:
        'For revealing content inline with a strong visual treatment.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing content inline with a light visual treatment.',
    },
  ],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <>
          <Text>
            Drawers should only be used as a last resort when other in-flow
            alternatives are not suitable.
          </Text>
          <Text>
            In order to keep experiences simple, Drawers and{' '}
            <TextLink href="/components/Dialog">Dialogs</TextLink>{' '}
            <Strong>cannot be nested</Strong> inside one another.
          </Text>
        </>
      ),
    },
    {
      label: 'Development considerations',
      description: (
        <Text>
          It’s recommended that you connect the Drawer’s <Strong>open</Strong>{' '}
          state to your router so that it can be closed via the browser’s back
          button.
        </Text>
      ),
    },
    {
      label: 'Widths',
      description: (
        <Text>There are a variety of standard widths to choose from.</Text>
      ),
      Example: ({ id, setState, getState, resetState }) =>
        source(
          <>
            <Box padding="medium">
              <Inline space="small" align="center">
                <Button onClick={() => setState('width', 'small')}>
                  Small width
                </Button>
                <Button onClick={() => setState('width', 'medium')}>
                  Medium width
                </Button>
                <Button onClick={() => setState('width', 'large')}>
                  Large width
                </Button>
              </Inline>
            </Box>

            <Drawer
              id={id}
              title={`Width: ${getState('width')}`}
              open={getState('width') !== undefined}
              width={getState('width')}
              onClose={() => resetState('width')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
  ],
};

export default docs;
