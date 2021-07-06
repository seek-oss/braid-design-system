import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Drawer, Button, Inline, Text, TextLink, Box, Strong } from '../';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id, getState, toggleState }) =>
    source(
      <>
        <Box padding="medium">
          <Inline space="small" align={{ mobile: 'center', tablet: 'left' }}>
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
        <Text>
          Drawers should only be used as a last resort when other in-flow
          alternatives are not suitable.
        </Text>
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
    {
      label: 'Nested drawers',
      description: (
        <Text>
          Although supported, in order to keep experiences simple nesting
          Drawers is not encouraged.
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Box padding="medium">
              <Inline
                space="small"
                align={{ mobile: 'center', tablet: 'left' }}
              >
                <Button onClick={() => toggleState('firstDrawer')}>
                  Open nested drawer
                </Button>
              </Inline>
            </Box>
            <Drawer
              id={`${id}_3`}
              title="Third Drawer"
              width="small"
              open={getState('thirdDrawer')}
              onClose={() => toggleState('thirdDrawer')}
            >
              <Placeholder height={100} label="Drawer Content" />
            </Drawer>
            <Drawer
              id={`${id}_1`}
              title="First Drawer"
              width="large"
              open={getState('firstDrawer')}
              onClose={() => toggleState('firstDrawer')}
            >
              <Placeholder height={600} label="Drawer Content" />
              <Button onClick={() => toggleState('secondDrawer')}>
                Open second drawer
              </Button>
            </Drawer>
            <Drawer
              id={`${id}_2`}
              title="Second Drawer"
              width="medium"
              open={getState('secondDrawer')}
              onClose={() => toggleState('secondDrawer')}
            >
              <Placeholder height={400} label="Drawer Content" />
              <Button onClick={() => toggleState('thirdDrawer')}>
                Open third drawer
              </Button>
            </Drawer>
          </>,
        ),
    },
  ],
};

export default docs;
