import source from '@braid-design-system/source.macro';
import { useRef } from 'react';
import type { ComponentDocs } from 'site/types';

import { Box, Button, Inline, Popover, Text, TextField } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ setDefaultState, setState, getState, toggleState }) => {
    const triggerWrapperRef = useRef<HTMLButtonElement | null>(null);
    const returnFocusRef = useRef<HTMLButtonElement | null>(null);

    return source(
      <>
        {setDefaultState('open', false)}
        <Inline space="none">
          <Box ref={triggerWrapperRef}>
            <Button onClick={() => toggleState('open')} ref={returnFocusRef}>
              Edit Text
            </Button>
          </Box>
        </Inline>
        <Popover
          open={getState('open')}
          onClose={() => setState('open', false)}
          triggerWrapperRef={triggerWrapperRef}
          returnFocusRef={returnFocusRef}
          offsetSpace="xsmall"
        >
          <Box borderRadius="standard" boxShadow="small">
            <Box
              borderRadius="standard"
              boxShadow="borderNeutralLight"
              padding="medium"
              background="surface"
            >
              <Text>This is some text</Text>
            </Box>
          </Box>
        </Popover>
      </>,
    );
  },
  description: (
    <Text>
      This component allows you to attach an overlay element positioned relative
      to a trigger element. This should only be used if standard alternatives
      aren’t suitable.
    </Text>
  ),
  alternatives: [
    {
      name: 'MenuRenderer',
      description: 'For a menu displaying a list of actions.',
    },
    {
      name: 'TooltipRenderer',
      description: 'For a popup displaying short content.',
    },
    {
      name: 'Dialog',
      description: 'For exposing a smaller amount of content in a modal.',
    },
    {
      name: 'Drawer',
      description: 'For exposing a larger amount of content in a modal.',
    },
  ],
  additional: [
    {
      label: 'Auto focus element when opening',
      // Todo - fix later
      description: <Text>Edit later</Text>,
      Example: ({ id, setDefaultState, setState, getState, toggleState }) => {
        const triggerWrapperRef = useRef<HTMLButtonElement | null>(null);
        const initialFocusRef = useRef<HTMLInputElement | null>(null);
        const returnFocusRef = useRef<HTMLButtonElement | null>(null);

        // Todo - handle popover resizing on text input

        return source(
          <>
            {setDefaultState('open', false)}
            <Inline space="none">
              <Box ref={triggerWrapperRef}>
                <Button
                  onClick={() => toggleState('open')}
                  ref={returnFocusRef}
                >
                  Edit Text
                </Button>
              </Box>
            </Inline>
            <Popover
              open={getState('open')}
              onClose={() => setState('open', false)}
              triggerWrapperRef={triggerWrapperRef}
              initialFocusRef={initialFocusRef}
              returnFocusRef={returnFocusRef}
              offsetSpace="xsmall"
            >
              <Box borderRadius="standard" boxShadow="small">
                <Box
                  borderRadius="standard"
                  boxShadow="borderNeutralLight"
                  padding="medium"
                  background="surface"
                >
                  <TextField
                    id={id}
                    label="Label"
                    onChange={setState('textfield')}
                    value={getState('textfield')}
                    onClear={() => setState('textfield', '')}
                    ref={initialFocusRef}
                  />
                </Box>
              </Box>
            </Popover>
          </>,
        );
      },
    },
  ],
};

export default docs;
