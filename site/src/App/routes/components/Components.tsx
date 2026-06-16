import { Box, Link, Stack, Text, Tiles, Heading } from 'braid-design-system';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

import { documentedComponents } from '../../navigationHelpers';
import { ScaledPreview } from '../templates';

import * as styles from '../templates/templateGroupPage.css';

const ComponentTile = ({
  name,
  Example,
}: (typeof documentedComponents)[number]) => (
  <PlayroomStateProvider>
    <Box position="relative">
      <Link href={`/components/${name}`} className={styles.tileLinkOverlay} />
      <Stack space="small">
        <Text weight="strong">{name}</Text>
        <ScaledPreview Example={Example} aspectRatio=" 2 / 1 " />
      </Stack>
    </Box>
  </PlayroomStateProvider>
);

export const Components = () => (
  <Stack space="xxlarge">
    <Stack space="medium">
      <Heading component="h1" level="2">
        Components
      </Heading>
      <Text>lorem</Text>
    </Stack>
    <Tiles space="xlarge" columns={[1, 2, 3]}>
      {documentedComponents
        .filter((component) => component.category !== 'Logic')
        .map((component) => (
          <ComponentTile key={component.name} {...component} />
        ))}
    </Tiles>
  </Stack>
);
