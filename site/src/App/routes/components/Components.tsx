import { Box, Link, Stack, Text, Tiles } from 'braid-design-system';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

import { SectionLanding } from '../../SectionLanding/SectionLanding';
import { documentedComponents } from '../../navigationHelpers';
import { ScaledPreview } from '../templates';

import { componentPreviews } from './componentPreviews';

import * as styles from '../templates/templateGroupPage.css';

const ComponentTile = ({
  name,
  Example: docsExample,
}: (typeof documentedComponents)[number]) => {
  const preview = componentPreviews[name];
  const Example = preview?.Example ?? docsExample;

  return (
    <PlayroomStateProvider>
      <Box position="relative">
        <Link href={`/components/${name}`} className={styles.tileLinkOverlay} />
        <Stack space="small">
          <Text weight="strong">{name}</Text>
          <ScaledPreview
            Example={Example}
            aspectRatio=" 2 / 1 "
            stageWidth={preview?.stageWidth}
          />
        </Stack>
      </Box>
    </PlayroomStateProvider>
  );
};

export const Components = () => (
  <SectionLanding title="Components" intro="lorem">
    <Tiles space="large" columns={[1, 2, 3]}>
      {documentedComponents
        .filter((component) => component.category !== 'Logic')
        .map((component) => (
          <ComponentTile key={component.name} {...component} />
        ))}
    </Tiles>
  </SectionLanding>
);
