import source from '@braid-design-system/source.macro';
import { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';

import { Box, Inline, Notice, ScrollContainer, Stack, Strong, Text } from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { validScrollContainerComponents } from './ScrollContainer';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Box maxWidth="xsmall">
        <ScrollContainer>
          <Inline space="small" noWrap>
            <Placeholder width={120} height={80} label="1" />
            <Placeholder width={120} height={80} label="2" />
            <Placeholder width={120} height={80} label="3" />
            <Placeholder width={120} height={80} label="4" />
            <Placeholder width={120} height={80} label="5" />
            <Placeholder width={120} height={80} label="6" />
          </Inline>
        </ScrollContainer>
      </Box>,
    ),
  description: (
    <Text>
      Provides scroll affordance by fading the edges of the container when
      content overflows the edge.
    </Text>
  ),
  accessibility: (
    <Text>
      The fade is visual only. Content stays available to assistive
      technologies. Keyboard users reach interactive content inside the
      container by tabbing, and the browser scrolls it into view.
    </Text>
  ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom handling of overflow affordance.',
    },
  ],
  additional: [
    {
      label: 'Direction',
      description: (
        <Stack space="large">
          <Text>
            The axis of the affordance can be controlled by the{' '}
            <Strong>direction</Strong> prop. Choose from{' '}
            <Strong>horizontal</Strong> (default), <Strong>vertical</Strong>, or{' '}
            <Strong>all</Strong>.
          </Text>
          <Notice>
            <Text>
              Given <Strong>vertical</Strong> and <Strong>all</Strong> fill
              their parent height, it is necessary that the parent applies a
              height limit.
            </Text>
          </Notice>
        </Stack>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="xsmall">
              <Text size="small" tone="secondary">
                horizontal
              </Text>
              <Box maxWidth="xsmall">
                <ScrollContainer direction="horizontal">
                  <Inline space="small" noWrap>
                    <Placeholder width={120} height={80} label="1" />
                    <Placeholder width={120} height={80} label="2" />
                    <Placeholder width={120} height={80} label="3" />
                    <Placeholder width={120} height={80} label="4" />
                    <Placeholder width={120} height={80} label="5" />
                    <Placeholder width={120} height={80} label="6" />
                  </Inline>
                </ScrollContainer>
              </Box>
            </Stack>
            <Stack space="xsmall">
              <Text size="small" tone="secondary">
                vertical
              </Text>
              <Box style={{ height: 200 }}>
                <ScrollContainer direction="vertical">
                  <Stack space="small">
                    <Placeholder height={48} label="1" />
                    <Placeholder height={48} label="2" />
                    <Placeholder height={48} label="3" />
                    <Placeholder height={48} label="4" />
                    <Placeholder height={48} label="5" />
                    <Placeholder height={48} label="6" />
                  </Stack>
                </ScrollContainer>
              </Box>
            </Stack>
            <Stack space="xsmall">
              <Text size="small" tone="secondary">
                all
              </Text>
              <Box maxWidth="xsmall" style={{ height: 200 }}>
                <ScrollContainer direction="all">
                  <Box style={{ width: 640 }}>
                    <Stack space="small">
                      <Placeholder height={48} label="1" />
                      <Placeholder height={48} label="2" />
                      <Placeholder height={48} label="3" />
                      <Placeholder height={48} label="4" />
                      <Placeholder height={48} label="5" />
                      <Placeholder height={48} label="6" />
                    </Stack>
                  </Box>
                </ScrollContainer>
              </Box>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Fade size',
      description: (
        <Stack space="large">
          <Text>
            Use <Strong>fadeSize</Strong> to choose how far the fade reaches
            into the content. <Strong>medium</Strong> is the default.
          </Text>
          <Text>
            <Strong>small</Strong> is 40px, <Strong>medium</Strong> is 60px, and{' '}
            <Strong>large</Strong> is 80px.
          </Text>
        </Stack>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="xsmall">
              <Text size="small" tone="secondary">
                small
              </Text>
              <Box maxWidth="xsmall">
                <ScrollContainer fadeSize="small">
                  <Inline space="small" noWrap>
                    <Placeholder width={120} height={64} label="1" />
                    <Placeholder width={120} height={64} label="2" />
                    <Placeholder width={120} height={64} label="3" />
                    <Placeholder width={120} height={64} label="4" />
                    <Placeholder width={120} height={64} label="5" />
                  </Inline>
                </ScrollContainer>
              </Box>
            </Stack>
            <Stack space="xsmall">
              <Text size="small" tone="secondary">
                medium
              </Text>
              <Box maxWidth="xsmall">
                <ScrollContainer fadeSize="medium">
                  <Inline space="small" noWrap>
                    <Placeholder width={120} height={64} label="1" />
                    <Placeholder width={120} height={64} label="2" />
                    <Placeholder width={120} height={64} label="3" />
                    <Placeholder width={120} height={64} label="4" />
                    <Placeholder width={120} height={64} label="5" />
                  </Inline>
                </ScrollContainer>
              </Box>
            </Stack>
            <Stack space="xsmall">
              <Text size="small" tone="secondary">
                large
              </Text>
              <Box maxWidth="xsmall">
                <ScrollContainer fadeSize="large">
                  <Inline space="small" noWrap>
                    <Placeholder width={120} height={64} label="1" />
                    <Placeholder width={120} height={64} label="2" />
                    <Placeholder width={120} height={64} label="3" />
                    <Placeholder width={120} height={64} label="4" />
                    <Placeholder width={120} height={64} label="5" />
                  </Inline>
                </ScrollContainer>
              </Box>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Hide the scrollbar',
      description: (
        <Text>
          Set <Strong>hideScrollbar</Strong> to hide the scrollbar. People can
          still scroll with a trackpad, wheel, touch, or keyboard.
        </Text>
      ),
      Example: () =>
        source(
          <Box maxWidth="xsmall">
            <ScrollContainer hideScrollbar>
              <Inline space="small" noWrap>
                <Placeholder width={120} height={80} label="1" />
                <Placeholder width={120} height={80} label="2" />
                <Placeholder width={120} height={80} label="3" />
                <Placeholder width={120} height={80} label="4" />
                <Placeholder width={120} height={80} label="5" />
                <Placeholder width={120} height={80} label="6" />
              </Inline>
            </ScrollContainer>
          </Box>,
        ),
    },
    {
      label: 'Delay the leading fade',
      description: (
        <Text>
          Pass <Strong>startRef</Strong> when something at the start, such as a
          cover, should not sit under a fade. Attach the ref to an element
          inside the container. The leading fade (left or top) stays hidden
          until that element scrolls past the start edge. The trailing fade is
          unchanged.
        </Text>
      ),
      playroom: false,
      code: `
        const startRef = useRef(null);

        return (
          <Box style={{ height: 200 }}>
            <ScrollContainer direction="vertical" startRef={startRef}>
              <Placeholder height={80} label="Cover" />
              <Box ref={startRef} />
              <Stack space="small">
                <Placeholder height={48} label="1" />
                <Placeholder height={48} label="2" />
                <Placeholder height={48} label="3" />
                <Placeholder height={48} label="4" />
              </Stack>
            </ScrollContainer>
          </Box>
        );
      `,
    },
    {
      label: 'Semantic elements',
      description: (
        <Text>
          By default, ScrollContainer renders a <Strong>div</Strong>. Set{' '}
          <Strong>component</Strong> to{' '}
          {validScrollContainerComponents
            .filter((element) => element !== 'div')
            .map((element, index, elements) => {
              let separator = ', ';

              if (index === 0) {
                separator = '';
              } else if (index === elements.length - 1) {
                separator = ' or ';
              }

              return (
                <Fragment key={element}>
                  {separator}
                  <Strong>{element}</Strong>
                </Fragment>
              );
            })}{' '}
          when the page needs that element.
        </Text>
      ),
      code: source(
        <ScrollContainer component="section">
          <Inline space="small" noWrap>
            <Placeholder width={120} height={80} />
            <Placeholder width={120} height={80} />
            <Placeholder width={120} height={80} />
          </Inline>
        </ScrollContainer>,
      ).code,
    },
    dataAttributeDocs({
      code: `
        <ScrollContainer
          data={{ testid: 'scroll-container-1' }}
          // => data-testid="scroll-container-1"
        >
          ...
        </ScrollContainer>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
