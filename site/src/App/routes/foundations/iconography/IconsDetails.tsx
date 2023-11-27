import React from 'react';
import {
  Inline,
  Box,
  Text,
  Stack,
  Heading,
  Strong,
  TextLink,
  Notice,
  IconTag,
  Tiles,
  IconImage,
  IconCaution,
  IconFilter,
  IconDate,
  IconDelete,
  IconArrow,
  IconSettings,
  IconPeople,
  IconMinus,
  List,
  IconRenderer,
} from 'braid-src/lib/components';
import { LinkableHeading } from '@braid-design-system/docs-ui';
import { DocExample } from '../../../DocNavigation/DocExample';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { iconScaleIncrease } from 'braid-src/lib/hooks/useIcon/icon.css';
import source from '@braid-design-system/source.macro';

export const IconsDetails = () => (
  <Stack space="xxlarge">
    <PlayroomStateProvider>
      <DocExample
        id="demo"
        Example={() =>
          source(
            <Heading level="2">
              <Inline space="medium" align="center">
                <IconImage />
                <IconCaution />
                <IconFilter />
                <IconDate />
                <IconDelete />
                <IconArrow />
                <IconSettings />
                <IconPeople />
              </Inline>
            </Heading>,
          )
        }
      />
    </PlayroomStateProvider>

    <Stack space="large">
      <LinkableHeading level="3">Accessibility</LinkableHeading>
      <Stack space="medium">
        <Text>
          Follows the{' '}
          <TextLink href="https://www.w3.org/TR/wai-aria-1.2/#img">
            img
          </TextLink>{' '}
          role when a <Strong>title</Strong> is provided. As a result this
          applies the following:
        </Text>
        <List>
          <Text>
            Applies the <Strong>img</Strong> role to the svg element,
          </Text>
          <Text>
            Adds the provided title to a <Strong>title</Strong> element inside
            the svg element,
          </Text>
          <Text>
            Associates the title element with the svg via <Strong>id</Strong>{' '}
            using <Strong>aria-labelledby</Strong>.
          </Text>
        </List>
      </Stack>
      <Text>
        If not being used as an image, the icon will be deemed as{' '}
        <Strong>decorative</Strong> and hidden from assistive technologies by
        applying the <Strong>aria-hidden</Strong> attribute.
      </Text>
      <PlayroomStateProvider>
        <DocExample
          id="accessibility"
          Example={() =>
            source(
              <Tiles space="large" columns={2}>
                <Stack space="medium">
                  <Text size="xsmall" tone="secondary">
                    DECORATIVE (i.e. hidden, will not be read)
                  </Text>
                  <Text size="large">
                    <IconTag />
                  </Text>
                </Stack>
                <Stack space="medium">
                  <Text size="xsmall" tone="secondary">
                    IMAGE (i.e. Read as “Classification”)
                  </Text>
                  <Text size="large">
                    <IconTag title="Classification" titleId="iconId" />
                  </Text>
                </Stack>
              </Tiles>,
            )
          }
        />
      </PlayroomStateProvider>
    </Stack>

    <Stack space="large">
      <LinkableHeading level="3">Sizes</LinkableHeading>
      <Stack space="medium">
        <LinkableHeading level="4" label="size-inline">
          Inline
        </LinkableHeading>
        <Stack space="large">
          <Text>
            For sizing relative to accompanying text. When using an icon within
            a <TextLink href="/components/Text">Text</TextLink> or{' '}
            <TextLink href="/components/Heading">Heading</TextLink> component,
            it will scale in size accordingly.
          </Text>
          <Text>
            In this form, icons are scaled to {(iconScaleIncrease + 1) * 100}%
            of the text size and are bled into the surrounding layout — not
            introducing any additional whitespace.
          </Text>
          <Notice>
            <Text>
              The <Strong>size</Strong> prop cannot be used, as the size is
              determined by the parent typography component.
            </Text>
          </Notice>
          <PlayroomStateProvider>
            <DocExample
              id="sizeInline"
              Example={() =>
                source(
                  <Stack space="large">
                    <Text size="xsmall" icon={<IconTag />}>
                      Text size xsmall with an icon
                    </Text>
                    <Text size="small" icon={<IconTag />}>
                      Text size small with an icon
                    </Text>
                    <Text size="standard" icon={<IconTag />}>
                      Text size standard with an icon
                    </Text>
                    <Text size="large" icon={<IconTag />}>
                      Text size large with an icon
                    </Text>
                    <Heading level="4" icon={<IconTag />}>
                      Heading level 4 with an icon
                    </Heading>
                    <Heading level="3" icon={<IconTag />}>
                      Heading level 3 with an icon
                    </Heading>
                    <Heading level="2" icon={<IconTag />}>
                      Heading level 2 with an icon
                    </Heading>
                    <Heading level="1" icon={<IconTag />}>
                      Heading level 1 with an icon
                    </Heading>
                  </Stack>,
                )
              }
            />
          </PlayroomStateProvider>
        </Stack>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4" label="size-block">
          Block
        </LinkableHeading>
        <Stack space="large">
          <Text>
            For sizing relative to text line heights. The <Strong>size</Strong>{' '}
            prop can be used to choose from line heights as per the{' '}
            <TextLink href="/components/Text">text size scale</TextLink>.
          </Text>
          <Notice>
            <Text>
              As this scale is only for use outside of typographic components,
              its utility is limited.
            </Text>
          </Notice>
          <PlayroomStateProvider>
            <DocExample
              id="sizeBlock"
              Example={() =>
                source(
                  <Tiles space="large" columns={4}>
                    <Stack space="small">
                      <Text size="xsmall" tone="secondary">
                        XSMALL
                      </Text>
                      <IconTag size="xsmall" />
                    </Stack>
                    <Stack space="small">
                      <Text size="xsmall" tone="secondary">
                        SMALL
                      </Text>
                      <IconTag size="small" />
                    </Stack>
                    <Stack space="small">
                      <Text size="xsmall" tone="secondary">
                        STANDARD
                      </Text>
                      <IconTag size="standard" />
                    </Stack>
                    <Stack space="small">
                      <Text size="xsmall" tone="secondary">
                        LARGE
                      </Text>
                      <IconTag size="large" />
                    </Stack>
                  </Tiles>,
                )
              }
            />
          </PlayroomStateProvider>
        </Stack>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4" label="size-fill">
          Fill
        </LinkableHeading>
        <Stack space="large">
          <Text>
            For bespoke sizing, the <Strong>size</Strong> prop can be set to{' '}
            <Strong>fill</Strong>, allowing the icon to grow to size of its
            container.
          </Text>
          <PlayroomStateProvider>
            <DocExample
              id="sizeFill"
              Example={() =>
                source(
                  <Stack space="small">
                    <Text size="xsmall" tone="secondary">
                      INSIDE A 100x100 CONTAINER
                    </Text>
                    <Box style={{ height: 100, width: 100 }}>
                      <IconTag size="fill" />
                    </Box>
                  </Stack>,
                )
              }
            />
          </PlayroomStateProvider>
        </Stack>
      </Stack>

      <LinkableHeading level="3">Tones</LinkableHeading>
      <Text>
        The foreground colour of icons can be set by applying the correct{' '}
        <Strong>tone</Strong>. When placed inside of a{' '}
        <TextLink href="/components/Text#tones">Text</TextLink> component, icons
        will inherit its tone.
      </Text>
      <Text>
        Additionally, an icon can have an explicit <Strong>tone</Strong>{' '}
        specified to override the inherited colour.
      </Text>
      <PlayroomStateProvider>
        <DocExample
          id="tones"
          Example={() =>
            source(
              <Tiles space="small" columns={2}>
                <Stack space="medium">
                  <Text size="xsmall" tone="secondary">
                    INHERITED TONES
                  </Text>

                  <Text icon={<IconTag />}>Neutral</Text>
                  <Text tone="secondary" icon={<IconTag />}>
                    Secondary
                  </Text>
                  <Text tone="critical" icon={<IconTag />}>
                    Critical
                  </Text>
                  <Text tone="caution" icon={<IconTag />}>
                    Caution
                  </Text>
                  <Text tone="positive" icon={<IconTag />}>
                    Positive
                  </Text>
                  <Text tone="info" icon={<IconTag />}>
                    Info
                  </Text>
                  <Text tone="promote" icon={<IconTag />}>
                    Promote
                  </Text>
                  <Text tone="formAccent" icon={<IconTag />}>
                    FormAccent
                  </Text>
                  <Text tone="brandAccent" icon={<IconTag />}>
                    BrandAccent
                  </Text>
                </Stack>

                <Stack space="medium">
                  <Text size="xsmall" tone="secondary">
                    EXPLICIT TONE
                  </Text>

                  <Text icon={<IconTag tone="brandAccent" />}>
                    Neutral with brandAccent icon
                  </Text>
                </Stack>
              </Tiles>,
            )
          }
        />
      </PlayroomStateProvider>

      <LinkableHeading level="3">Vertical Alignment</LinkableHeading>
      <Text>
        The position of an icon may require adjustment based on the characters
        it neighbours. By default, icons are optimized to sit alongside capital
        letters. If required, the <Strong>alignY</Strong> prop can set to{' '}
        <Strong>lowercase</Strong> — typically for use in the middle or at the
        end of a sentence.
      </Text>
      <PlayroomStateProvider>
        <DocExample
          id="alignY"
          Example={() =>
            source(
              <Stack space="large">
                <Text size="xsmall" tone="secondary">
                  ALIGNMENT OF THE MINUS ICON
                </Text>
                <Stack space="medium">
                  <Text>
                    <IconMinus alignY="uppercase" /> Uppercase alignment
                  </Text>
                  <Text>
                    Lowercase alignment <IconMinus alignY="lowercase" />
                  </Text>
                </Stack>
              </Stack>,
            )
          }
        />
      </PlayroomStateProvider>

      <LinkableHeading level="3">Using custom icons</LinkableHeading>
      <Text>
        Braid aims to provide an icon set that caters to the majority of use
        cases spanning across many products. However, there may be a need to
        have product-specific icons outside of the library. For this use case
        consumers can use the <Strong>IconRenderer</Strong> component.
      </Text>
      <Text>
        Uses the render prop pattern to provide the required classes to style
        and align a custom icon.
      </Text>

      <Stack space="medium">
        <LinkableHeading level="4" label="custom-icons-size">
          Sizing and alignment
        </LinkableHeading>
        <Stack space="large">
          <Text>
            To make the alignment of icons and typography as seemless as
            possible, IconRenderer supports{' '}
            <TextLink href="#size-inline">inline sizing</TextLink>. As a result,
            it must be used inside either a{' '}
            <TextLink href="/components/Text">Text</TextLink> or{' '}
            <TextLink href="/components/Heading">Heading</TextLink> component.
          </Text>
          <Text>For example, here is a custom circle alongside a Heading:</Text>
          <PlayroomStateProvider>
            <DocExample
              id="iconRenderer-size"
              Example={() =>
                source(
                  <Heading level="1">
                    <IconRenderer>
                      {({ className }) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className={className}
                        >
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      )}
                    </IconRenderer>{' '}
                    Heading
                  </Heading>,
                )
              }
            />
          </PlayroomStateProvider>
        </Stack>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4" label="custom-icons-colour">
          Colour
        </LinkableHeading>
        <Stack space="large">
          <Text>
            The Braid icon set is designed using only a single colour (black),
            and then configured to adopt the colour of either their parent
            component or the specified <TextLink href="#tones">tone</TextLink>{' '}
            prop.
          </Text>
          <Text>
            If the custom icon should inherit its colour, this can be done using
            the{' '}
            <TextLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword">
              currentColor
            </TextLink>{' '}
            value.
          </Text>
          <PlayroomStateProvider>
            <DocExample
              id="iconRenderer-colour"
              Example={() =>
                source(
                  <Stack space="medium">
                    <Text size="xsmall" tone="secondary">
                      EXAMPLE: Setting “fill=currentColor” on custom icon inside
                      “brandAccent” Text
                    </Text>
                    <Text size="large" tone="brandAccent">
                      <IconRenderer>
                        {({ className }) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={className}
                            fill="currentColor"
                          >
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        )}
                      </IconRenderer>
                    </Text>
                  </Stack>,
                )
              }
            />
          </PlayroomStateProvider>
        </Stack>
      </Stack>

      <Stack space="medium">
        <LinkableHeading level="4" label="custom-icons-accessibility">
          Accessibility
        </LinkableHeading>
        <Stack space="large">
          <Text>
            When using custom icons, it is important to consider their purpose
            to the end user. Are they being used as an image? Or are they purely
            decorative?
          </Text>
          <Text>
            If they are decorative only, then it is recommended they be hidden
            from screen readers by applying the <Strong>aria-hidden</Strong>{' '}
            attribute as in the following example:
          </Text>
          <PlayroomStateProvider>
            <DocExample
              id="iconRenderer-a11y"
              Example={() =>
                source(
                  <Text size="large">
                    <IconRenderer>
                      {({ className }) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className={className}
                          aria-hidden
                        >
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      )}
                    </IconRenderer>
                  </Text>,
                )
              }
            />
          </PlayroomStateProvider>
          <Text>
            However, if they provide value or context, then they should be
            titled correctly as though they were an image. Below is an example
            of how to correctly title an icon as an image:
          </Text>
          <PlayroomStateProvider>
            <DocExample
              id="iconRenderer"
              Example={() =>
                source(
                  <Text size="large">
                    <IconRenderer>
                      {({ className }) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className={className}
                          aria-labelledby="titleId"
                          role="img"
                        >
                          <title id="titleId">My Custom Icon</title>
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      )}
                    </IconRenderer>
                  </Text>,
                )
              }
            />
          </PlayroomStateProvider>
          <Text>
            For more information read the{' '}
            <TextLink href="#accessibility">Accessibility</TextLink> section
            above.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);
