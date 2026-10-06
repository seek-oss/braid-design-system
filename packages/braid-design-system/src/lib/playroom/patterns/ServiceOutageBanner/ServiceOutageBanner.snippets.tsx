import source from '@braid-design-system/source.macro';

import type { PatternSnippets } from '../../../components/private/Snippets';
import {
  Alert,
  Box,
  Dialog,
  IconCritical,
  Placeholder,
  Stack,
  Text,
  TextLink,
} from '../../components';

export const snippets: PatternSnippets = [
  {
    group: 'Patterns',
    name: 'Service outage banner (widespread)',
    code: ({ getState, toggleState, setDefaultState }) =>
      source(
        <>
          {setDefaultState('dialog', false)}
          <Box
            background="criticalLight"
            paddingY="gutter"
            paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
          >
            <Stack space="none" align="center">
              <Text icon={<IconCritical />}>
                Critical system outage banner example. Notice how the text wraps
                across different screen sizes. We maximise text width to limit
                the height of the banner.{' '}
                <TextLink href="#" onClick={() => toggleState('dialog')}>
                  Read more
                </TextLink>
              </Text>
            </Stack>
          </Box>
          <Dialog
            title="Critical message"
            description={<Text tone="secondary">Optional description</Text>}
            open={getState('dialog')}
            onClose={() => toggleState('dialog')}
          >
            <Placeholder height={100} width="100%" />
          </Dialog>
        </>,
      ),
  },
  {
    group: 'Patterns',
    name: 'Service outage banner (isolated)',
    code: () =>
      source(
        <Alert tone="caution" onClose={() => {}} closeLabel="Close info alert">
          <Text>
            This is a contextual caution message that can be dismissed.
          </Text>
        </Alert>,
      ),
  },
];
