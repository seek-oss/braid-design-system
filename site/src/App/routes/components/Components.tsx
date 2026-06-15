import { Heading, Stack } from 'braid-design-system';
import { accordionExample } from 'braid-src/lib/components/Accordion/Accordion.docs';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

import { ThemedExample } from 'site/App/ThemeSetting';
import { useSourceFromExample } from 'site/App/useSourceFromExample/useSourceFromExample';

const AccordionPreview = () => {
  const { value } = useSourceFromExample({ Example: accordionExample });
  return value ? <ThemedExample>{value}</ThemedExample> : null;
};

export const Components = () => (
  <Stack space="xlarge">
    <Heading level="1">Components</Heading>
    <Stack space="medium">
      <Heading level="3">Accordion</Heading>
      <PlayroomStateProvider>
        <AccordionPreview />
      </PlayroomStateProvider>
    </Stack>
  </Stack>
);
