import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Drawer, Button, Inline, Text, TextLink } from '..';
import { Placeholder } from '../../playroom/components';
import { DrawerContent } from './Drawer';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default layout',
    Example: ({ id }) =>
      source(
        <DrawerContent
          id={id}
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
    Example: ({ id }) =>
      source(
        <DrawerContent
          id={id}
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
    Example: ({ getState, setState, resetState }) =>
      source(
        <>
          <Inline space="small" align="center">
            <Button onClick={() => setState('width', 'small')}>
              Open small
            </Button>
            <Button onClick={() => setState('width', 'medium')}>
              Open medium
            </Button>
            <Button onClick={() => setState('width', 'large')}>
              Open large
            </Button>
          </Inline>

          <Drawer
            id="drawer-animation-example"
            title={`A \"${getState('width')}\" drawer`}
            description={
              <Text tone="secondary">
                Uses a {getState('width')}{' '}
                <TextLink href="/components/ContentBlock">
                  ContentBlock
                </TextLink>
              </Text>
            }
            width={getState('width')}
            open={getState('width')}
            onClose={() => resetState('width')}
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
];
