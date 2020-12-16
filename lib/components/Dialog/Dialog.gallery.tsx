import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Dialog, Button, Inline, Stack } from '../';
import { Placeholder } from '../../playroom/components';
import { DialogContent } from './Dialog';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default layout',
    Example: ({ id }) =>
      source(
        <DialogContent
          id={id}
          title="Default test"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogContent>,
      ),
  },
  {
    label: 'Illustration layout',
    Example: ({ id }) =>
      source(
        <DialogContent
          id={id}
          title="Illustration test"
          illustration={
            <Placeholder
              height={150}
              width={150}
              shape="round"
              label="Illustration"
            />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Stack space="xlarge" align="center">
            <Placeholder width="100%" height={100} />
            <Inline space="small">
              <Placeholder height={44} width={80} label="OK" />
              <Placeholder height={44} width={80} label="Cancel" />
            </Inline>
          </Stack>
        </DialogContent>,
      ),
  },
  {
    label: 'Layout with a description',
    Example: ({ id }) =>
      source(
        <DialogContent
          id={id}
          title="Description test"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogContent>,
      ),
  },
  {
    label: 'Preview animation',
    Example: ({ getState, setState, resetState }) =>
      source(
        <>
          <Inline space="small" align="center">
            <Button onClick={() => setState('width', 'xsmall')}>
              Open xsmall
            </Button>
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

          <Dialog
            id="dialog-animation-example"
            title={`A \"${getState('width')}\" dialog`}
            width={getState('width')}
            open={getState('width')}
            onClose={() => resetState('width')}
          >
            <Placeholder height={200} width="100%" />
          </Dialog>
        </>,
      ),
  },
];
