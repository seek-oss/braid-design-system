import source from '@braid-design-system/source.macro';
import {
  Box,
  Button,
  ButtonIcon,
  Column,
  Columns,
  Heading,
  IconClear,
  Inline,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
  TextLinkButton,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Displays a prominent, actionable message that drives users toward a
      specific behaviour relevant to their current context.
    </Text>
  ),
  alternatives: [
    {
      name: 'Alert',
      description:
        'For strong in-flow messages that sit at page or section level.',
    },
    {
      name: 'Notice',
      description:
        'For light in-flow messages that sit within a section, card, or widget.',
    },
    {
      name: 'error-state',
      section: 'patterns',
      description:
        'For communicating a failed action and guiding users toward a resolution.',
    },
    {
      name: 'messages-to-users',
      section: 'patterns',
      description:
        'For finding the right messaging component or pattern based on context and urgency.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Anatomy',
        Example: ({ responsiveValue }) =>
          source(
            <Box
              background="formAccentSoft"
              padding="gutter"
              borderRadius="large"
            >
              <Columns reverse space="gutter" collapseBelow="tablet">
                <Column width="content">
                  <Columns space="xsmall">
                    <Column>
                      <Box
                        background="surface"
                        borderRadius="full"
                        padding={{ mobile: 'small', tablet: 'medium' }}
                        display="inlineBlock"
                      >
                        <Placeholder
                          shape="round"
                          label="illo"
                          width={responsiveValue({
                            mobile: '80px',
                            tablet: '96px',
                          })}
                          height={responsiveValue({
                            mobile: '80px',
                            tablet: '96px',
                          })}
                        />
                      </Box>
                    </Column>
                    <Column width="content">
                      <ButtonIcon
                        variant="transparent"
                        icon={<IconClear />}
                        label="Close"
                        bleed
                      />
                    </Column>
                  </Columns>
                </Column>
                <Column>
                  <Stack space="medium">
                    <Heading level="4">Create a nudge today</Heading>
                    <Text>
                      Use a nudge to drive specific behaviour that leads to
                      better outcomes for customers or SEEK.
                    </Text>
                    <Inline space="none">
                      <Button>Create nudge</Button>
                    </Inline>
                  </Stack>
                </Column>
              </Columns>
            </Box>,
          ),
      },
      {
        description: (
          <List space="large">
            <Text>
              Heading (optional): A short description of the action the user
              might like to take.
            </Text>
            <Text>Text: A concise explanation of the benefit to the user.</Text>
            <Text>Button or TextLink: A clear action for what to do next.</Text>
            <Text>
              Illustration (optional): A static image that relates to the
              user&rsquo;s situation, sitting on a circle with background colour{' '}
              <Strong>surface</Strong>.
            </Text>
            <Text>
              Dismiss button (optional): When appropriate, give the user the
              option to dismiss the nudge.
            </Text>
            <Text>
              Bounding box: Display the message in a Box with a{' '}
              <Strong>formAccentSoft</Strong> background.
            </Text>
          </List>
        ),
      },
      {
        label: 'Size',
        description: (
          <Text>
            Nudges can be sized up and down to fit in the context of your
            product. Below are 3 sizing options: standard, small and xsmall.
            Sizing is applied holistically — with heading, text, CTA and
            illustration sizing up and down together. Choose sizing that fits
            well in the context of the nudge placement, and align with adjacent
            text sizing where possible.
          </Text>
        ),
        Example: ({ responsiveValue }) =>
          source(
            <Stack space="small">
              <Box
                background="formAccentSoft"
                padding="gutter"
                borderRadius="large"
              >
                <Columns reverse space="gutter" collapseBelow="tablet">
                  <Column width="content">
                    <Columns space="xsmall">
                      <Column>
                        <Box
                          background="surface"
                          borderRadius="full"
                          padding={{ mobile: 'small', tablet: 'medium' }}
                          display="inlineBlock"
                        >
                          <Placeholder
                            shape="round"
                            label="illo"
                            width={responsiveValue({
                              mobile: '80px',
                              tablet: '96px',
                            })}
                            height={responsiveValue({
                              mobile: '80px',
                              tablet: '96px',
                            })}
                          />
                        </Box>
                      </Column>
                      <Column width="content">
                        <ButtonIcon
                          variant="transparent"
                          icon={<IconClear />}
                          label="Close"
                          bleed
                        />
                      </Column>
                    </Columns>
                  </Column>
                  <Column>
                    <Stack space="medium">
                      <Heading level="4">Create a standard nudge</Heading>
                      <Text>
                        Use a nudge to drive specific behaviour that leads to
                        better outcomes for customers or SEEK.
                      </Text>
                      <Inline space="none">
                        <Button>Create nudge</Button>
                      </Inline>
                    </Stack>
                  </Column>
                </Columns>
              </Box>

              <Box
                background="formAccentSoft"
                padding="gutter"
                borderRadius="large"
              >
                <Columns reverse space="gutter" collapseBelow="tablet">
                  <Column width="content">
                    <Columns space="xsmall">
                      <Column>
                        <Box
                          background="surface"
                          borderRadius="full"
                          padding={{ mobile: 'xsmall', tablet: 'small' }}
                          display="inlineBlock"
                        >
                          <Placeholder
                            shape="round"
                            label="illo"
                            width={responsiveValue({
                              mobile: '72px',
                              tablet: '80px',
                            })}
                            height={responsiveValue({
                              mobile: '72px',
                              tablet: '80px',
                            })}
                          />
                        </Box>
                      </Column>
                      <Column width="content">
                        <ButtonIcon
                          variant="transparent"
                          icon={<IconClear />}
                          label="Close"
                          bleed
                        />
                      </Column>
                    </Columns>
                  </Column>
                  <Column>
                    <Stack space="small">
                      <Text size="large" weight="strong">
                        Create a small nudge
                      </Text>
                      <Text size="small">
                        Use a nudge to drive specific behaviour that leads to
                        better outcomes for customers or SEEK.
                      </Text>
                      <Inline space="none">
                        <Button size="small">Create nudge</Button>
                      </Inline>
                    </Stack>
                  </Column>
                </Columns>
              </Box>

              <Box
                background="formAccentSoft"
                padding="gutter"
                borderRadius="large"
              >
                <Columns reverse space="medium" collapseBelow="tablet">
                  <Column width="content">
                    <Columns space="xsmall">
                      <Column>
                        <Box
                          background="surface"
                          borderRadius="full"
                          padding={{ mobile: 'xxsmall', tablet: 'xsmall' }}
                          display="inlineBlock"
                        >
                          <Placeholder
                            shape="round"
                            label="illo"
                            width={responsiveValue({
                              mobile: '72px',
                              tablet: '72px',
                            })}
                            height={responsiveValue({
                              mobile: '72px',
                              tablet: '72px',
                            })}
                          />
                        </Box>
                      </Column>
                      <Column width="content">
                        <ButtonIcon
                          variant="transparent"
                          icon={<IconClear />}
                          label="Close"
                          bleed
                        />
                      </Column>
                    </Columns>
                  </Column>
                  <Column>
                    <Stack space="small">
                      <Text weight="strong">Create an xsmall nudge</Text>
                      <Text size="small">
                        Use a nudge to drive specific behaviour that leads to
                        better outcomes for customers or SEEK.
                      </Text>
                      <Text size="small">
                        <TextLinkButton>Create nudge</TextLinkButton>
                      </Text>
                    </Stack>
                  </Column>
                </Columns>
              </Box>
            </Stack>,
          ),
      },
      {
        label: 'Illustrations',
        description: (
          <List space="large">
            <Text>
              Choose an illustration that&rsquo;s relevant to the user&rsquo;s
              situation from the NVL illustration library.
            </Text>
            <Text>
              Set the illustration on a circle with background colour set to{' '}
              <Strong>surface</Strong>.
            </Text>
            <Text>
              Display your illustration responsively. As a guide: standard
              nudges use a medium illustration on desktop and small on mobile;
              small nudges use small on desktop and xsmall on mobile; xsmall
              nudges use xsmall on all viewports.
            </Text>
            <Text>
              Give your illustration space to breathe by applying responsive
              padding — roughly xsmall, small or medium depending on the nudge
              size.
            </Text>
            <Text>
              As a general rule of thumb, your illustration (including the white
              circle) should be roughly equal in height to your content on the
              left for visual balance.
            </Text>
          </List>
        ),
      },
    ],
    layout: [
      {
        label: 'Layout',
        description: (
          <>
            <Text>
              As a default, a nudge will display horizontally using columns so
              that heading, text and CTAs align on the left, and the
              illustration and dismiss button display on the right. These
              columns collapse and stack on mobile so that the illustration and
              dismiss button sit above the heading, text and CTA.
            </Text>
            <Text>
              If you&rsquo;re placing your nudge in a narrow space, such as a
              sidebar, you can choose to adopt the stacked layout on desktop
              and/or tablet (
              <TextLink
                target="_blank"
                href="https://seek-oss.github.io/braid-design-system/playroom/preview/#?code=N4Igxg9gJgpiBcIA8BhCAbArgWwHYGcACAJxgDcZj8ZD8AHAQzBgF4AdEfbB9dDwyLwZ1qAIRjoIAd3YgALgwBG6GHI4A+NrkKFUGHNqkBLKHIAWsgMwB6AKwatOnUgAK6JjDMZYxQmZhGAOZmcizAABwATLYAvoTuihKyALIMRtqQuHIwWfzWmtq61mhYeAXOJQblTkgAygpgANa0jMyyXDx8INVOum4eXug+fgHBocDRAAxxCUkctSYwigy+mdm5IIT5jr26ohAAHoTLTYHEEJi4ULIAZhDE2ACCYMxZtRA3apuMUFDpgbJApg5NliPxFPcfAAlBh-TD4WTuYiBGAOQq7XT1JjNegedrcXhojG9PSlAg9YkVfRlHaUkn7A60um9E6NM4XK7tTDEG4eDhM5k6CHEaGwozw26YQkgAWCn5-XAA4DAQjYCCKIwqeCEDgHA4daUAGkICmUqm1uoNXUIMRisuZf3o7gAnrJ0uh0jBRJImvz0YKKYK+u5mIMfPbBfgzMJWBxzpcoH6gxjZug3bwIEnk71jKYLMBSPQIAQjBQAGo8TAwAAUwAjQbVGq1OpAAHZInRGSBDfXBaaVHILW2O12e-7szEAJR28fJ-xBEJhQt0Yv4UswCtYGt12fZxuamBD9udjhj7MY-vmlvH0e9ylTmfnraBulIawMl8Yt+VGm73akgxCFzcxZDWHIvk-YkkFEYE5GLABJTI712MgViMBgslkORiAw3FSA2ZDeiMTIwiQRDixQFQVmfR9z1TWRKIgags2zM0YETP8MW2TiamKalcEg5w+LJfBBN0H8CBIchKGoFo8Q4bB2PFbB+EEdwRC9CRpCwpQByJQUAN-bM6gaHFWljTgCS6MSvwAFRgA45CA0ZFw4fBsOLQINBQUgGGyQgMMIfUrMIXBMCgFE33sxybP-aKnLXAAvCyrX0p8AFVZIYULwpRE0IEIKBiHXFoYDAIwbmI45PAYMgjAuXxzD8+IYFhIg4OqkFKEI3YLjkSBFKIO5VnhODFKoQh7kIWoAFEZoAaQAOh6oT4tikl4toIxkvxTo0vPJB4oAGXSRoYJBYt1B81r-LCiKYCihy5BO3Aztgy6VqKNaerfLEmli79+LEwGRMg37TJfN8Py0WVXBDTxvEoEYF3GKYZiUOYQAWWBllWYt1i+Z8mXB7FqhBqotHJvBRK0bt5H8RSEE4GAYEaAApdV8BAGIgA"
              >
                example
              </TextLink>
              ).
            </Text>
            <Text>
              Or if you prefer a more compact display, columns can be maintained
              in narrow spaces (
              <TextLink
                target="_blank"
                href="https://seek-oss.github.io/braid-design-system/playroom/preview/#?code=N4Igxg9gJgpiBcIA8BhCAbArgWwHYGcACAJxgDcZj8ZD8AHAQzBgF4AdEfbB9dDwyLwZ1qAIRjoIAd3YgALgwBG6GHI4A+NrkKFUGHNqkBLKHIAWsgMwB6AKwatOnUgAK6JjDMZYxQmZhGAOZmcizAABwATLYAvoTuihKyALIMRtqQuHIwWfzWmtq61mhYeAXOJQblTkgAygpgANa0jMyyXDx8INVOum4eXug+fgHBocDRAAxxCUkctSYwigy+mdm5IIT5Wo69uqIQAB6Ey02BxBCYuFCyAGYQxNgAgmDMWbUQt2qbjFBQ6YFZIFMHJssR+IoHj4AEoMf6YfCydzEQIwByFPa6Sp4IikChUGj0Dztbi8fiCdwiGDiSQyDgKZSqdGY3p6UqGEzmWRrHLfHosir6HEtYkcQ4dMndXYC1nY3D8mU1A6HaWKvanRrnS7XdqYYi3DwcVVqpyQ4gwuFGBF3TCS40mwi-f64QFi8Wkrr2k3-ejuACesnS6HS1MkTSNGIdCodrnczEGPi9DvwZmErA4FyuUAjDpZs3Qgd4EBzub2xlMFmApHoEAIRgoADUeJgYAAKYBJ3PYCCKIwqeCEDgAdkidBVIAANJ2HQyVHIB8PR+Op5HS4QYgBKGLTxX+IIhMLVui1-D1mBNrBtjurteEbu9-uDkAjsccFe3vaz1QL59Lt87mVN23G8TW2ECZSQaxlWjAVILlGCWTZAxCHLLkOB5DYENg0QQTkWsAElMgAzEyBWIwGCyWQ5GICiiVIDZiL2IxMjCJBCNrFAVBWLZ1GAj981kTiIGoEs10ZGBs3AgUwNzOChXlAC5PZfAsKKeDpyQspFPqJhmiJNoOAlLpVNZAAVGBDjkFDRgPQzqNrQINBQUgGGyQgKMId1OkIXBMCgVFIPMyyTJqIKrNPAAvdNOA9ZlSwAVWodyfL81FCDwwgoGIM93LAOQjBPdLUysrioHSiATlUMFCEuORIGwGB8AAOkYwKLLkELnDC2gjCiklOji2SwoAGXSRocNBWt1GcmBXJoBgUv8mA2ss0bcHG3Cpta6wwpCyCdKaVSlKqJNjpxaNIOgnYb1jAZvEoEZ93GKYZiUOYQAWWBllWWt1m+HjVX2hpGmqM6FNwMGVK0Sd5H8BqEE4GAYEaAApHt8BAGIgA"
              >
                example
              </TextLink>
              ).
            </Text>
          </>
        ),
      },
    ],
    interaction: [
      {
        label: 'Calls-to-action',
        description: (
          <List space="large">
            <Text>A nudge should include a primary CTA.</Text>
            <Text>
              For standard and small nudges, a{' '}
              <TextLink href="/components/Button">Button</TextLink> may work
              best. Button styles should align with the default display of the
              relevant theme — for seekJobs this will be a ghost button, and for
              APAC this will be a formAccent solid button.
            </Text>
            <Text>
              If providing a secondary CTA, create hierarchy by pairing the
              primary button with a transparent button.
            </Text>
            <Text>
              For xsmall nudges, a{' '}
              <TextLink href="/components/TextLink">TextLink</TextLink> or{' '}
              <TextLink href="/components/TextLinkButton">
                TextLinkButton
              </TextLink>{' '}
              may work best.
            </Text>
          </List>
        ),
        Example: ({ responsiveValue }) =>
          source(
            <Box
              background="formAccentSoft"
              padding="gutter"
              borderRadius="large"
            >
              <Columns reverse space="gutter" collapseBelow="tablet">
                <Column width="content">
                  <Columns space="xsmall">
                    <Column>
                      <Box
                        background="surface"
                        borderRadius="full"
                        padding={{ mobile: 'small', tablet: 'medium' }}
                        display="inlineBlock"
                      >
                        <Placeholder
                          shape="round"
                          label="illo"
                          width={responsiveValue({
                            mobile: '80px',
                            tablet: '96px',
                          })}
                          height={responsiveValue({
                            mobile: '80px',
                            tablet: '96px',
                          })}
                        />
                      </Box>
                    </Column>
                    <Column width="content">
                      <ButtonIcon
                        variant="transparent"
                        icon={<IconClear />}
                        label="Close"
                        bleed
                      />
                    </Column>
                  </Columns>
                </Column>
                <Column>
                  <Stack space="medium">
                    <Heading level="4">Create a standard nudge</Heading>
                    <Text>
                      Use a nudge to drive specific behaviour that leads to
                      better outcomes for customers or SEEK.
                    </Text>
                    <Inline space="xsmall">
                      <Button>Create nudge</Button>
                      <Button variant="transparent">Learn more</Button>
                    </Inline>
                  </Stack>
                </Column>
              </Columns>
            </Box>,
          ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>
              A nudge should always be actionable and drive desired behaviour.
            </Text>
            <Text>
              A nudge should generally sit within a task, and be relevant to
              what the user is currently doing.
            </Text>
            <Text>
              Nudges are visually prominent so as to intentionally grab the
              user&rsquo;s attention. As such, they should be used with care.
              Avoid too many nudges on the same screen, as they can be
              disruptive to the user&rsquo;s task.
            </Text>
            <Text>
              As a general rule of thumb, aim to limit usage to 1 nudge per
              screen.
            </Text>
          </List>
        ),
      },
      {
        label: 'When to use',
        description: (
          <>
            <Text>Use a nudge to:</Text>
            <List space="large">
              <Text>suggest a product or feature to users</Text>
              <Text>drive specific behaviour within a product or feature</Text>
              <Text>lead to better outcomes for the user or business.</Text>
            </List>
            <Text>Don&rsquo;t use a nudge if:</Text>
            <List space="large">
              <Text>
                there&rsquo;s no action or behaviour associated with the message
                (use plain <TextLink href="/components/Text">Text</TextLink>{' '}
                instead)
              </Text>
              <Text>
                you&rsquo;re providing the user with a warning or error message
                (use an <TextLink href="/components/Alert">Alert</TextLink>,{' '}
                <TextLink href="/components/Notice">Notice</TextLink>, or{' '}
                <TextLink href="/patterns/error-state">Error state</TextLink>{' '}
                instead)
              </Text>
              <Text>
                you&rsquo;re providing the user with general help information
                (use plain <TextLink href="/components/Text">Text</TextLink>, a{' '}
                <TextLink href="/components/TooltipRenderer">Tooltip</TextLink>,{' '}
                <TextLink href="/components/Disclosure">Disclosure</TextLink> or{' '}
                <TextLink href="/components/Notice">Notice</TextLink> instead).
              </Text>
            </List>
          </>
        ),
      },
    ],
  },
};

export default docs;
