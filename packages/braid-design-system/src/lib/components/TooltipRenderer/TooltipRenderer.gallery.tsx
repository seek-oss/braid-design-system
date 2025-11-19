import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { TooltipRenderer, Inline, Stack, Text, IconHelp, Box } from '../';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

import { type TooltipRendererProps, TooltipContent } from './TooltipRenderer';

const MockTooltipContent = ({
  placement,
  children,
}: {
  placement: TooltipRendererProps['placement'];
  children: ReactNodeNoStrings;
}) => (
  <Box style={{ width: 'fit-content' }}>
    <TooltipContent placement={placement}>{children}</TooltipContent>
  </Box>
);

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Single line of text',
      Example: () =>
        source(
          <MockTooltipContent placement="top">
            <Text>Tooltip</Text>
          </MockTooltipContent>,
        ),
    },
    {
      label: 'Multiple lines of text',
      Example: () =>
        source(
          <MockTooltipContent placement="top">
            <Text>
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </Text>
          </MockTooltipContent>,
        ),
    },
    {
      label: 'Custom formatting',
      Example: () =>
        source(
          <MockTooltipContent placement="top">
            <Stack space="medium">
              <Text weight="strong">Strong text</Text>
              <Text>
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog.
              </Text>
            </Stack>
          </MockTooltipContent>,
        ),
    },
    {
      label: 'Preview animation',
      Example: () =>
        source(
          <Inline space="small">
            <TooltipRenderer
              tooltip={
                <Text>
                  This is a tooltip! If you provide enough content, the text
                  will wrap onto multiple lines.
                </Text>
              }
            >
              {({ triggerProps }) => (
                <Box aria-label="Help" {...triggerProps}>
                  <IconHelp />
                </Box>
              )}
            </TooltipRenderer>
          </Inline>,
        ),
    },
  ],
};
