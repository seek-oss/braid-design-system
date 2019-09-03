import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Columns } from '../Columns/Columns';
import { Column } from './Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { HideCode } from '../private/HideCode';
import { width as columnWidths } from '../Column/Column.treat';

const widths = Object.keys(columnWidths) as Array<keyof typeof columnWidths>;

const Content = ({ children = 'Column' }) => (
  <Box background="infoLight" marginBottom="medium" padding="small">
    <Text baseline={false}>{children}</Text>
  </Box>
);

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Columns',
      Example: () => (
        <Columns>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
          <Column>
            <HideCode>
              <Content />
            </HideCode>
          </Column>
        </Columns>
      ),
    },
    {
      label: 'Available widths',
      Example: () => (
        <Fragment>
          {widths.map(width => (
            <Columns>
              <Column width={width}>
                <HideCode>
                  <Content>{width}</Content>
                </HideCode>
              </Column>
              <Column>
                <HideCode>
                  <Box style={{ opacity: 0.5 }}>
                    <Content>Fluid</Content>
                  </Box>
                </HideCode>
              </Column>
            </Columns>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Gutter align',
      docsSite: false,
      Example: () => (
        <Fragment>
          <Box marginBottom="medium">
            <Columns>
              <Column>
                <HideCode>
                  <Content>Fluid</Content>
                </HideCode>
              </Column>
              <Column>
                <HideCode>
                  <Content>Fluid</Content>
                </HideCode>
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns>
              <Column width="1/2">
                <HideCode>
                  <Content>&#189;</Content>
                </HideCode>
              </Column>
              <Column>
                <HideCode>
                  <Content>Fluid</Content>
                </HideCode>
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns>
              <Column width="1/2">
                <HideCode>
                  <Content>&#189;</Content>
                </HideCode>
              </Column>
              <Column width="1/2">
                <HideCode>
                  <Content>&#189;</Content>
                </HideCode>
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns>
              <Column width="1/4">
                <HideCode>
                  <Content>&#188;</Content>
                </HideCode>
              </Column>
              <Column width="1/4">
                <HideCode>
                  <Content>&#188;</Content>
                </HideCode>
              </Column>
              <Column>
                <HideCode>
                  <Content>Fluid</Content>
                </HideCode>
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns>
              <Column width="1/3">
                <HideCode>
                  <Content>&#8531;</Content>
                </HideCode>
              </Column>
              <Column width="1/4">
                <HideCode>
                  <Content>&#188;</Content>
                </HideCode>
              </Column>
              <Column width="content">
                <HideCode>
                  <Content>Content</Content>
                </HideCode>
              </Column>
            </Columns>
          </Box>
          <Box marginBottom="medium">
            <Columns reverse>
              <Column width="1/3">
                <HideCode>
                  <Content>&#8531;</Content>
                </HideCode>
              </Column>
              <Column width="1/4">
                <HideCode>
                  <Content>&#188;</Content>
                </HideCode>
              </Column>
              <Column width="content">
                <HideCode>
                  <Content>Content</Content>
                </HideCode>
              </Column>
            </Columns>
          </Box>
        </Fragment>
      ),
    },
  ],
};

export default docs;
