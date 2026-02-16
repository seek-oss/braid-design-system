import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Columns, Column, Stack, Divider } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Spacing',
      Example: () =>
        source(
          <Columns space="large">
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={60} />
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Vertical alignment',
      Example: () =>
        source(
          <Stack space="large">
            <Columns space="small" alignY="top">
              <Column>
                <Placeholder height={20} />
              </Column>
              <Column>
                <Placeholder height={80} label="top" />
              </Column>
              <Column>
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" alignY="center">
              <Column>
                <Placeholder height={20} />
              </Column>
              <Column>
                <Placeholder height={80} label="center" />
              </Column>
              <Column>
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" alignY="bottom">
              <Column>
                <Placeholder height={20} />
              </Column>
              <Column>
                <Placeholder height={80} label="bottom" />
              </Column>
              <Column>
                <Placeholder height={20} />
              </Column>
            </Columns>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      Example: () =>
        source(
          <Stack space="large">
            <Columns space="small" align="left">
              <Column width="1/5">
                <Placeholder height={20} label="left" />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" align="center">
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} label="center" />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" align="right">
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} label="right" />
              </Column>
            </Columns>
          </Stack>,
        ),
    },
    {
      label: 'Reversing the column order',
      Example: () =>
        source(
          <Columns space="small" collapseBelow="tablet" reverse>
            <Column width="1/5">
              <Placeholder height={60} label="First" />
            </Column>
            <Column>
              <Placeholder height={60} label="Second" />
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Column widths',
      Example: () =>
        source(
          <Stack space="medium">
            <Columns space="xsmall">
              <Column width="content">
                <Placeholder height={30} label="content" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/5">
                <Placeholder height={30} label="1/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/4">
                <Placeholder height={30} label="1/4" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/3">
                <Placeholder height={30} label="1/3" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="2/5">
                <Placeholder height={30} label="2/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/2">
                <Placeholder height={30} label="1/2" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="3/5">
                <Placeholder height={30} label="3/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="2/3">
                <Placeholder height={30} label="2/3" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="3/4">
                <Placeholder height={30} label="3/4" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="4/5">
                <Placeholder height={30} label="4/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
          </Stack>,
        ),
    },
  ],
};
