import _jsx from '@babel/runtime/helpers/jsx';

let _ContentBlock, _ContentBlock2;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
const docs = {
  category: 'Layout',
  migrationGuide: true,
  Example: function Example() {
    return source(
      _ContentBlock ||
        (_ContentBlock = /* #__PURE__*/ _jsx(
          ContentBlock,
          {
            width: 'small',
          },
          void 0,
          /* #__PURE__*/ _jsx(Placeholder, {
            height: 100,
          }),
        )),
    );
  },
  description: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Provides a container that both centers and constrains the maximum width of the content it wraps.',
  ),
  alternatives: [],
  additional: [
    {
      label: 'Maximum width',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Use the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'width'),
        ' prop to adjust the maximum width of the container.',
      ),
      Example: function Example() {
        return source(
          _ContentBlock2 ||
            (_ContentBlock2 = /* #__PURE__*/ _jsx(
              ContentBlock,
              {
                width: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
              }),
            )),
        );
      },
    },
  ],
};
export default docs;
