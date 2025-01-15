import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import {
  Box,
  Button,
  IconChevron,
  Inline,
  Popover,
  Text,
  TextField,
} from 'braid-design-system';
import { useRef } from 'react';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id, setDefaultState, setState, getState, toggleState }) => {
    const triggerWrapperRef = useRef<HTMLButtonElement | null>(null);
    const enterRef = useRef<HTMLInputElement | null>(null);
    const exitRef = useRef<HTMLButtonElement | null>(null);

    return source(
      <>
        {setDefaultState('open', false)}
        <Inline space="none">
          <Box ref={triggerWrapperRef}>
            <Button onClick={() => toggleState('open')} ref={exitRef}>
              Popover trigger{' '}
              <IconChevron
                direction={getState('open') ? 'up' : 'down'}
                alignY="lowercase"
              />
            </Button>
          </Box>
        </Inline>
        <Popover
          open={getState('open')}
          onClose={() => setState('open', false)}
          triggerWrapperRef={triggerWrapperRef}
          enterRef={enterRef}
          exitRef={exitRef}
          offsetSpace="xsmall"
        >
          <Box borderRadius="standard" boxShadow="small">
            <Box
              borderRadius="standard"
              boxShadow="borderNeutralLight"
              padding="small"
              background="surface"
            >
              <TextField
                id={id}
                label="Label"
                onChange={setState('textfield')}
                value={getState('textfield')}
                onClear={() => setState('textfield', '')}
                ref={enterRef}
              />
              <Button>Test</Button>
              <Button>Test</Button>
            </Box>
          </Box>
        </Popover>
      </>,
    );
  },
  description: <Text>A popover component.</Text>,
  alternatives: [],
};

export default docs;
