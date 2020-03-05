import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Menu, MenuItem, Text, IconChevron } from '..';

const docs: ComponentDocs = {
  category: 'Logic', // new name???
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: ({ handler }) => (
        <Menu
          trigger={(triggerProps, { open }) => (
            <Box component="button" cursor="pointer" {...triggerProps}>
              <Text>
                Menu{' '}
                <IconChevron
                  direction={open ? 'up' : 'down'}
                  alignY="lowercase"
                />
              </Text>
            </Box>
          )}
        >
          <MenuItem onClick={handler}>First</MenuItem>
          <MenuItem onClick={handler}>Second</MenuItem>
        </Menu>
      ),
    },
    {
      label: 'Right aligned menu',
      Container: ({ children }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          {children}
        </Box>
      ),
      Example: ({ handler }) => (
        <Menu
          align="right"
          trigger={(triggerProps, { open }) => (
            <Box component="button" cursor="pointer" {...triggerProps}>
              <Text>
                Menu{' '}
                <IconChevron
                  direction={open ? 'up' : 'down'}
                  alignY="lowercase"
                />
              </Text>
            </Box>
          )}
        >
          <MenuItem onClick={handler}>First</MenuItem>
          <MenuItem onClick={handler}>Second</MenuItem>
        </Menu>
      ),
    },
  ],
};

export default docs;
