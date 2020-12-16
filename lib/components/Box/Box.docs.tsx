import React, { Fragment } from 'react';
import { ComponentDocs, ComponentExample } from '../../../site/src/types';
import { Box } from './Box';
import { Placeholder } from '../private/Placeholder/Placeholder';
import tokens from '../../themes/wireframe/tokens';
import source from '../../utils/source.macro';

type Space = keyof typeof tokens.space;
const spaceScale = Object.keys(tokens.space) as Space[];

const docs: ComponentDocs = {
  category: 'Layout',
  alternatives: [],
  additional: spaceScale.map(
    (space): ComponentExample => ({
      label: `"${space}" space`,
      Container: ({ children }) => (
        <Box style={{ overflow: 'auto', maxWidth: '300px' }}>{children}</Box>
      ),
      Example: () =>
        source(
          <Fragment>
            <Box paddingBottom={space}>
              <Placeholder height={40} />
            </Box>
            <Placeholder height={40} />
          </Fragment>,
        ),
    }),
  ),
};

export default docs;
