import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { TooltipRenderer, Inline, Stack, Text, IconHelp, Box } from '../';
import { TooltipContent, TooltipRendererProps } from './TooltipRenderer';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { constants } from './TooltipRenderer.css';
import { calc } from '@vanilla-extract/css-utils';

const MockTooltipContent = ({
  placement,
  children,
}: {
  placement: TooltipRendererProps['placement'];
  children: ReactNodeNoStrings;
}) => (
  <Box data-popper-placement={placement}>
    <TooltipContent
      opacity={100}
      arrowProps={{
        'data-popper-arrow': true,
        style: {
          position: 'absolute',
          left: '50%',
          transform: `translateX(${calc(constants.arrowSize)
            .negate()
            .divide(2)})`,
        },
      }}
    >
      {children}
    </TooltipContent>
  </Box>
);

export const galleryItems: ComponentExample[] = [
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
    Example: ({ id }) =>
      source(
        <Inline space="small">
          <TooltipRenderer
            id={id}
            tooltip={
              <Text>
                This is a tooltip! If you provide enough content, the text will
                wrap onto multiple lines.
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
];
