import source from '@braid-design-system/source.macro';

import { Drawer, Placeholder, Stack } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Default',
    code: source(
      <Drawer title="Drawer Heading" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>,
    ),
  },
  {
    description: 'Small',
    code: source(
      <Drawer title="Drawer Heading" width="small" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>,
    ),
  },
  {
    description: 'Medium',
    code: source(
      <Drawer title="Drawer Heading" width="medium" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>,
    ),
  },
  {
    description: 'Large',
    code: source(
      <Drawer title="Drawer Heading" width="large" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>,
    ),
  },
  {
    description: 'With sticky header',
    code: source(
      <Drawer title="Drawer Heading" stickyHeader open={true}>
        <Stack space="large">
          <Placeholder width="100%" height={600} />
          <Placeholder width="100%" height={600} />
        </Stack>
      </Drawer>,
    ),
  },
];
