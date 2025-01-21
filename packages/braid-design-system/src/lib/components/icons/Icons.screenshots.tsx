import type { ComponentScreenshot } from 'site/types';

import {
  Text,
  Heading,
  Inline,
  Button,
  Stack,
  Spread,
  Box,
  IconAI,
  IconAdd,
  IconArrow,
  IconBookmark,
} from '../';
import type { UseIconProps } from '../../hooks/useIcon';

import * as icons from './index';

import {
  heading as headingSizes,
  textSizeUntrimmed as textSizes,
  tone as tones,
} from '../../css/typography.css';
import { vars } from '../../themes/vars.css';

type IconName = keyof typeof icons;
const iconNames = Object.keys(icons).map((icon) => icon as IconName);

const Icons = ({ tone }: { tone?: UseIconProps['tone'] }) => (
  <Inline space="small">
    {iconNames.map((icon) => {
      const IconComponent = icons[icon];
      return <IconComponent key={icon} tone={tone} />;
    })}
  </Inline>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => <Icons />,
    },
    {
      label: 'Auto size (via TextContext)',
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="large">
            {sizes.map((size) => (
              <Stack key={size} space="medium">
                <Text size={size}>{size}</Text>
                <Text size={size}>
                  <Icons />
                </Text>
              </Stack>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto Size (via HeadingContext)',
      Example: () => {
        const headings = Object.keys(headingSizes) as Array<
          keyof typeof headingSizes
        >;

        return (
          <Stack space="large">
            {headings
              .sort()
              .reverse()
              .map((heading) => (
                <Stack key={heading} space="medium">
                  <Heading level={heading}>Level {heading}</Heading>
                  <Heading level={heading}>
                    <Icons />
                  </Heading>
                </Stack>
              ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto Tone (via TextContext)',
      Example: () => {
        const iconTones = Object.keys(tones).sort() as Array<
          keyof typeof tones
        >;

        return (
          <Stack space="large">
            {iconTones.map((tone) => (
              <Stack key={tone} space="medium">
                <Text tone={tone}>{tone}</Text>
                <Text tone={tone}>
                  <Icons />
                </Text>
              </Stack>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Override auto tone explicitly',
      Example: () => (
        <Text tone="critical">
          Critical text overridden to positive icons:
          <Icons tone="positive" />
        </Text>
      ),
    },
    {
      label: 'Auto Tone with Background Contrast (via TextContext)',
      background: 'brand',
      Example: () => (
        <Stack space="medium">
          <Text>Default:</Text>
          <Text>
            <Icons />
          </Text>
          <Text>Explicitly positive:</Text>
          <Text>
            <Icons tone="positive" />
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Alignment to text',
      Example: () => (
        <Stack space="small">
          {iconNames.map((icon) => {
            const IconComponent = icons[icon];
            return (
              <Inline key={icon} space="medium">
                <Text>
                  <IconComponent /> Uppercase
                </Text>
                <Text>
                  Lowercase <IconComponent alignY="lowercase" />
                </Text>
              </Inline>
            );
          })}
        </Stack>
      ),
    },
    {
      label: 'Alignment to buttons',
      Example: () => (
        <Stack space="small">
          {iconNames.map((icon) => {
            const IconComponent = icons[icon];
            return (
              <Inline key={icon} space="small">
                <Button variant="solid">
                  <IconComponent /> Upper
                </Button>
                <Button variant="solid">
                  Lower <IconComponent alignY="lowercase" />
                </Button>
              </Inline>
            );
          })}
        </Stack>
      ),
    },
    {
      label:
        'Test: inline sizing comparing `Inline` (left) to custom flex container (right)',
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="large">
            {sizes.map((size) => (
              <Text size={size} key={size}>
                <Box
                  maxWidth="xsmall"
                  style={{
                    borderTop: '2px solid red',
                    borderBottom: '2px solid red',
                  }}
                >
                  <Spread space="small">
                    <Inline space="small">
                      <IconAI />
                      <IconAdd />
                      <IconArrow />
                      <IconBookmark />
                    </Inline>
                    <Box
                      display="flex"
                      flexWrap="wrap"
                      style={{ gap: vars.space.small }}
                    >
                      <IconAI />
                      <IconAdd />
                      <IconArrow />
                      <IconBookmark />
                    </Box>
                  </Spread>
                </Box>
              </Text>
            ))}
          </Stack>
        );
      },
    },
  ],
};
