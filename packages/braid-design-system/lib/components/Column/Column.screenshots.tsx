import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Columns, Column, Box, Stack } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { width as columnWidths } from './Column.css';

const widths = [
  'content',
  ...(Object.keys(columnWidths) as Array<keyof typeof columnWidths>),
] as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Standard Columns',
      Example: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Available widths',
      Example: () => (
        <Stack space="medium">
          {widths.map((width) => (
            <Columns space="small" key={width}>
              <Column width={width}>
                <Placeholder height={60} label={width} />
              </Column>
              <Column>
                <Placeholder height={60} label="Fluid" />
              </Column>
            </Columns>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Gutter align',
      Example: () => (
        <Fragment>
          <Box marginBottom="medium">
            <Columns space="small">
              <Column>
                <Placeholder height={60} label="Fluid" />
              </Column>
              <Column>
                <Placeholder height={60} label="Fluid" />
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns space="small">
              <Column width="1/2">
                <Placeholder height={60} label="&#189;" />
              </Column>
              <Column>
                <Placeholder height={60} label="Fluid" />
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns space="small">
              <Column width="1/2">
                <Placeholder height={60} label="&#189;" />
              </Column>
              <Column width="1/2">
                <Placeholder height={60} label="&#189;" />
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns space="small">
              <Column width="1/4">
                <Placeholder height={60} label="&#188;" />
              </Column>
              <Column width="1/4">
                <Placeholder height={60} label="&#188;" />
              </Column>
              <Column>
                <Placeholder height={60} label="Fluid" />
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns space="small">
              <Column width="1/3">
                <Placeholder height={60} label="&#8531;" />
              </Column>
              <Column width="1/4">
                <Placeholder height={60} label="&#188;" />
              </Column>
              <Column width="content">
                <Placeholder height={60} label="Content" />
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns space="small" reverse>
              <Column width="1/3">
                <Placeholder height={60} label="&#8531;" />
              </Column>
              <Column width="1/4">
                <Placeholder height={60} label="&#188;" />
              </Column>
              <Column width="content">
                <Placeholder height={60} label="Content" />
              </Column>
            </Columns>
          </Box>
        </Fragment>
      ),
    },
  ],
};
