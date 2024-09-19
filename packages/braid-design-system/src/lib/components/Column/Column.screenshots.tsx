import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Columns, Column, Box, Stack } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { width as columnWidths } from './Column.css';

const widths = [
  'content',
  ...(Object.keys(columnWidths) as Array<keyof typeof columnWidths>),
] as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768, 1200],
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
        <Stack space="medium">
          <Columns space="small">
            <Column>
              <Placeholder height={60} label="Fluid" />
            </Column>
            <Column>
              <Placeholder height={60} label="Fluid" />
            </Column>
          </Columns>

          <Columns space="small">
            <Column width="1/2">
              <Placeholder height={60} label="&#189;" />
            </Column>
            <Column>
              <Placeholder height={60} label="Fluid" />
            </Column>
          </Columns>

          <Columns space="small">
            <Column width="1/2">
              <Placeholder height={60} label="&#189;" />
            </Column>
            <Column width="1/2">
              <Placeholder height={60} label="&#189;" />
            </Column>
          </Columns>

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
        </Stack>
      ),
    },
    {
      label:
        'Full height column, where column with shorter content has specified width',
      Example: () => (
        <Stack space="medium">
          {widths.map((width) => (
            <Columns space="small" key={width}>
              <Column width={width}>
                <Box height="full" background="brandAccent">
                  <Placeholder height={40} label={width} />
                </Box>
              </Column>
              <Column>
                <Box height="full">
                  <Placeholder height={100} label="Fluid" />
                </Box>
              </Column>
            </Columns>
          ))}
        </Stack>
      ),
    },
    {
      label:
        'Full height column, where column with taller content has specified width',
      Example: () => (
        <Stack space="medium">
          {widths.map((width) => (
            <Columns space="small" key={width}>
              <Column width={width}>
                <Box height="full">
                  <Placeholder height={100} label={width} />
                </Box>
              </Column>
              <Column>
                <Box height="full" background="brandAccent">
                  <Placeholder height={40} label="Fluid" />
                </Box>
              </Column>
            </Columns>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Hide second column below desktop',
      Example: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} label="Visible 1" />
          </Column>
          <Column hideBelow="desktop">
            <Placeholder height={60} label="Visible Desktop & above" />
          </Column>
          <Column>
            <Placeholder height={60} label="Visible 3" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Hide second column above tablet',
      Example: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} label="Visible 1" />
          </Column>
          <Column hideAbove="tablet">
            <Placeholder height={60} label="Visible Mobile & Tablet" />
          </Column>
          <Column>
            <Placeholder height={60} label="Visible 3" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Hide second column below tablet when collapsed',
      Example: () => (
        <Columns space="small" collapseBelow="tablet">
          <Column>
            <Placeholder height={60} label="Visible 1" />
          </Column>
          <Column hideBelow="tablet">
            <Placeholder
              height={60}
              label="Visible Tablet & above (collapsed below tablet)"
            />
          </Column>
          <Column>
            <Placeholder height={60} label="Visible 3" />
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Hide second column below desktop and above mobile',
      Example: () => (
        <Columns space="small">
          <Column>
            <Placeholder height={60} label="Visible 1" />
          </Column>
          <Column hideBelow="desktop" hideAbove="mobile">
            <Placeholder height={60} label="Hidden Tablet Only" />
          </Column>
          <Column>
            <Placeholder height={60} label="Visible 3" />
          </Column>
        </Columns>
      ),
    },
  ],
};
