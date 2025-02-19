import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Button, Heading, Inline, IconSend } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Critical',
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="critical" variant="solid">
              Solid
            </Button>
            <Button tone="critical" variant="ghost">
              Ghost
            </Button>
            <Button tone="critical" variant="soft">
              Soft
            </Button>
            <Button tone="critical" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'BrandAccent',
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="brandAccent" variant="solid">
              Solid
            </Button>
            <Button tone="brandAccent" variant="ghost">
              Ghost
            </Button>
            <Button tone="brandAccent" variant="soft">
              Soft
            </Button>
            <Button tone="brandAccent" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'FormAccent',
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="formAccent" variant="solid">
              Solid
            </Button>
            <Button tone="formAccent" variant="ghost">
              Ghost
            </Button>
            <Button tone="formAccent" variant="soft">
              Soft
            </Button>
            <Button tone="formAccent" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Neutral',
      Example: () =>
        source(
          <Inline space="small">
            <Button tone="neutral" variant="solid">
              Solid
            </Button>
            <Button tone="neutral" variant="ghost">
              Ghost
            </Button>
            <Button tone="neutral" variant="soft">
              Soft
            </Button>
            <Button tone="neutral" variant="transparent">
              Transparent
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'With icon',
      Example: () =>
        source(
          <Inline space="small">
            <Button icon={<IconSend />}>Send</Button>
          </Inline>,
        ),
    },
    {
      label: 'Loading state',
      Example: () =>
        source(
          <Inline space="small">
            <Button loading>Loading</Button>
          </Inline>,
        ),
    },
    {
      label: 'Small size',
      Example: () =>
        source(
          <Inline space="small">
            <Button size="small">Submit</Button>
          </Inline>,
        ),
    },
    {
      label: 'With bleed',
      Example: () =>
        source(
          <Inline space="small" alignY="center">
            <Heading level="4">Heading</Heading>
            <Button bleed>Button</Button>
            <Button bleed size="small">
              Button
            </Button>
          </Inline>,
        ),
    },
  ],
};
