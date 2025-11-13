import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Box, Bleed, Stack, Text, Strong, TextLink, Tiles, Toggle } from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { vars } from '../../themes/vars.css';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Box marginX="large" boxShadow="borderNeutral">
        <Stack space="medium">
          <Placeholder height={40} />
          <Bleed horizontal="large">
            <Box boxShadow="borderPromoteLight" background="promoteLight">
              <Placeholder height={40} />
            </Box>
          </Bleed>
          <Placeholder height={40} />
        </Stack>
      </Box>,
    ),
  description: (
    <Text>
      The <Strong>Bleed</Strong> component allows its content to extend out into
      the surrounding layout. As such, it is important to ensure that size and
      direction of the bleed is accommodated by the parent layout.
    </Text>
  ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <>
          <Text>
            Applies a negative margin to allow the content to bleed out into the
            surrounding layout.
          </Text>
          <Text>
            All bleed directions accept values from the{' '}
            <TextLink href="/foundations/layout#spacing">space scale</TextLink>,
            including support for responsive values, e.g.{' '}
            <Strong>{`vertical={{ mobile: 'small', tablet: 'medium', desktop: 'large', wide: 'xlarge' }}`}</Strong>
          </Text>
          <Text>
            Multiple bleed values can be applied to achieve the desired result,
            much like{' '}
            <TextLink href="/components/Box#padding-and-margins">
              paddings and margins
            </TextLink>
            , with the{' '}
            <TextLink href="#specific-direction">specific direction</TextLink>{' '}
            overriding the individual axis, which overrides the{' '}
            <Strong>space</Strong> prop.
          </Text>
        </>
      ),
    },
    {
      label: 'Vertical',
      description: (
        <Text>
          Contents will bleed into the surrounding layout vertically using the{' '}
          <Strong>vertical</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box marginY="large" boxShadow="borderNeutral">
            <Tiles space="medium" columns={3}>
              <Placeholder height={100} />
              <Bleed vertical="large">
                <Box
                  boxShadow="borderPromoteLight"
                  background="promoteLight"
                  height="full"
                >
                  <Placeholder
                    height={`calc(100px + (${vars.space.large} * 2))`}
                    label="vertical"
                  />
                </Box>
              </Bleed>
              <Placeholder height={100} />
            </Tiles>
          </Box>,
        ),
    },
    {
      label: 'Horizontal',
      description: (
        <Text>
          Contents will bleed into the surrounding layout horizontally using the{' '}
          <Strong>horizontal</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box marginX="large" boxShadow="borderNeutral">
            <Stack space="medium">
              <Placeholder height={40} />
              <Bleed horizontal="large">
                <Box boxShadow="borderPromoteLight" background="promoteLight">
                  <Placeholder height={40} label="horizontal" />
                </Box>
              </Bleed>
              <Placeholder height={40} />
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Specific direction',
      description: (
        <Text>
          Contents will bleed into the surrounding layout in a specified
          direction using the <Strong>top</Strong>, <Strong>bottom</Strong>,{' '}
          <Strong>left</Strong>, or <Strong>right</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles columns={2} space="gutter">
            <Box marginTop="large" boxShadow="borderNeutral">
              <Tiles space="medium" columns={3}>
                <Placeholder height={100} />
                <Bleed top="large">
                  <Box
                    boxShadow="borderPromoteLight"
                    background="promoteLight"
                    height="full"
                  >
                    <Placeholder
                      height={`calc(100px + ${vars.space.large})`}
                      label="top"
                    />
                  </Box>
                </Bleed>
                <Placeholder height={100} />
              </Tiles>
            </Box>
            <Box marginBottom="large" boxShadow="borderNeutral">
              <Tiles space="medium" columns={3}>
                <Placeholder height={100} />
                <Bleed bottom="large">
                  <Box
                    boxShadow="borderPromoteLight"
                    background="promoteLight"
                    height="full"
                  >
                    <Placeholder
                      height={`calc(100px + ${vars.space.large})`}
                      label="bottom"
                    />
                  </Box>
                </Bleed>
                <Placeholder height={100} />
              </Tiles>
            </Box>
            <Box marginLeft="large" boxShadow="borderNeutral">
              <Stack space="small">
                <Placeholder height={30} />
                <Bleed left="large">
                  <Box
                    boxShadow="borderPromoteLight"
                    background="promoteLight"
                    height="full"
                  >
                    <Placeholder height={40} label="left" />
                  </Box>
                </Bleed>
                <Placeholder height={30} />
              </Stack>
            </Box>
            <Box marginRight="large" boxShadow="borderNeutral">
              <Stack space="small">
                <Placeholder height={30} />
                <Bleed right="large">
                  <Box
                    boxShadow="borderPromoteLight"
                    background="promoteLight"
                    height="full"
                  >
                    <Placeholder height={40} label="right" />
                  </Box>
                </Bleed>
                <Placeholder height={30} />
              </Stack>
            </Box>
          </Tiles>,
        ),
    },
    {
      label: 'All directions',
      description: (
        <Text>
          Contents will bleed into the surrounding layout in all directions
          using the <Strong>space</Strong> prop.
        </Text>
      ),
      Example: ({ setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('bleed', true)}
            <Stack space="large">
              <Toggle
                align="right"
                label="Toggle bleed"
                on={getState('bleed')}
                onChange={() => toggleState('bleed')}
              />

              <Box position="relative" marginX="large">
                <Stack space="large">
                  <Placeholder height={40} />
                  <Box position="relative">
                    <Bleed space={getState('bleed') ? 'large' : 'none'}>
                      <Box
                        boxShadow="borderPromoteLight"
                        background="promoteLight"
                      >
                        <Placeholder
                          height={
                            getState('bleed')
                              ? `calc(40px + (${vars.space.large} * 2))`
                              : 40
                          }
                          label="all directions"
                        />
                      </Box>
                    </Bleed>
                    <Box position="absolute" inset={0}>
                      <Placeholder height={40} label=" " />
                    </Box>
                  </Box>
                  <Placeholder height={40} />
                </Stack>
                <Box position="absolute" inset={0} boxShadow="borderNeutral" />
              </Box>
            </Stack>
          </>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Bleed
          data={{ testid: 'bleed-1' }}
          // => data-testid="bleed-1"
        >
          ...
        </Bleed>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
