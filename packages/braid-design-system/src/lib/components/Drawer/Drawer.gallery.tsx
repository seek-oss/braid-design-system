import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import {
  Drawer,
  Button,
  Inline,
  Text,
  TextLink,
  TextDropdown,
  Strong,
} from '..';
import { Placeholder } from '../../playroom/components';

import { DrawerContent } from './Drawer';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Default layout',
      Example: () =>
        source(
          <DrawerContent
            title="Default test"
            onClose={() => {}}
            width="medium"
            scrollLock={false}
          >
            <Placeholder height={100} width="100%" />
          </DrawerContent>,
        ),
    },
    {
      label: 'Layout with a description',
      Example: () =>
        source(
          <DrawerContent
            title="Description test"
            description={
              <Placeholder height="auto" width="100%" label="Description" />
            }
            onClose={() => {}}
            scrollLock={false}
          >
            <Placeholder height={100} width="100%" />
          </DrawerContent>,
        ),
    },
    {
      label: 'Preview animation',
      Example: ({ setDefaultState, getState, setState, toggleState }) =>
        source(
          <>
            {setDefaultState('width', 'medium')}
            {setDefaultState('position', 'right')}
            <Inline space="gutter" align="center" alignY="center">
              <Text>
                Width:{' '}
                <Strong>
                  <TextDropdown
                    label="Width"
                    options={['small', 'medium', 'large']}
                    value={getState('width')}
                    onChange={setState('width')}
                  />
                </Strong>
              </Text>
              <Text>
                Position:{' '}
                <Strong>
                  <TextDropdown
                    label="Position"
                    options={['left', 'right']}
                    value={getState('position')}
                    onChange={setState('position')}
                  />
                </Strong>
              </Text>
              <Button size="small" onClick={() => toggleState('open')}>
                Open
              </Button>
            </Inline>

            <Drawer
              title={`A \"${getState(
                'width',
              )}\" drawer positioned on the \"${getState('position')}\"`}
              description={
                <Text tone="secondary">
                  Uses a {getState('width')}{' '}
                  <TextLink href="/components/ContentBlock">
                    ContentBlock
                  </TextLink>
                </Text>
              }
              width={getState('width')}
              position={getState('position')}
              open={getState('open')}
              onClose={() => toggleState('open')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
  ],
};
