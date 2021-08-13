import { ComponentDocs } from '../../../../site/src/types';
import source from '../../../utils/source.macro';
import { IconMobile, Heading, Stack } from '../../';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="none" align="center">
        <Heading component="div" level="1">
          <IconMobile />
        </Heading>
      </Stack>,
    ),
  alternatives: [],
};

export default docs;
