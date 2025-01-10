import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { Box, IconChevron, Popover, Text } from 'braid-design-system';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ setDefaultState, setState, getState }) =>
    source(
      <>
        {setDefaultState('open', false)}
        <Popover
          open={getState('open')}
          onClose={() => setState('open', false)}
          offsetSpace="xsmall"
          trigger={(triggerProps) => (
            <Box
              userSelect="none"
              cursor="pointer"
              component="button"
              onClick={() => setState('open', true)}
              {...triggerProps}
            >
              <Text>
                Popover trigger{' '}
                <IconChevron
                  direction={getState('open') ? 'up' : 'down'}
                  alignY="lowercase"
                />
              </Text>
            </Box>
          )}
        >
          <Box borderRadius="standard" boxShadow="small">
            <Box
              borderRadius="standard"
              boxShadow="borderNeutralLight"
              padding="small"
              background="surface"
            >
              <Text>Popover content</Text>
            </Box>
          </Box>
        </Popover>
      </>,
    ),
  description: <Text>A popover component.</Text>,
  alternatives: [],
};

export default docs;
