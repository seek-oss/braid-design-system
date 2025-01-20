import React from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box, Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const exampleRows = 3;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  screenshotOnlyInWireframe: true,
  examples: [
    ...([1, 2, 3, 4, 5, 6] as const).map((columns) => ({
      label: `${columns} column${columns === 1 ? '' : 's'}`,
      Example: () => (
        <Tiles space="small" columns={columns}>
          {[...new Array(columns * exampleRows)].map((_, i) => (
            <Placeholder key={i} height={40} />
          ))}
        </Tiles>
      ),
    })),
    {
      label: 'Responsive columns (e.g. 1 on mobile, 4 from tablet upwards',
      Example: () => (
        <Tiles space="xsmall" columns={[1, 4]}>
          {[...new Array(4 * exampleRows)].map((_, i) => (
            <Placeholder key={i} height={40} />
          ))}
        </Tiles>
      ),
    },
    {
      label:
        'Test - truncation should be visible on both tiles below, as well as both tiles being equally sized',
      Example: () => (
        <Tiles space="small" columns={2}>
          <Box
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Consequat quis anim anim officia voluptate. Ex in ut ipsum tempor
            occaecat enim laboris ex incididunt sunt non est reprehenderit. Id
            proident deserunt excepteur esse mollit aliquip. Aute ut tempor ex
            officia quis magna occaecat nostrud.
          </Box>
          <Box>
            <Box
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Consequat quis anim anim officia voluptate. Ex in ut ipsum tempor
              occaecat enim laboris ex incididunt sunt non est reprehenderit. Id
              proident deserunt excepteur esse mollit aliquip. Aute ut tempor ex
              officia quis magna occaecat nostrud.
            </Box>
          </Box>
        </Tiles>
      ),
    },
  ],
};
