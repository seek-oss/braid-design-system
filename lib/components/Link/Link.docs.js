import _jsx from '@babel/runtime/helpers/jsx';

let _Link;

import React from 'react';
import { Link, Text, TextLink } from '..';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
const docs = {
  category: 'Logic',
  Example: function Example() {
    return source(
      _Link ||
        (_Link = /* #__PURE__*/ _jsx(
          Link,
          {
            href: '#',
          },
          void 0,
          /* #__PURE__*/ _jsx(Placeholder, {
            label: 'This placeholder is a link',
            width: '300',
            height: '100',
          }),
        )),
    );
  },
  alternatives: [
    {
      name: 'TextLink',
      description: 'For visually styled text links.',
    },
  ],
  additional: [
    {
      label: 'Development considerations',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Renders a plain `a` tag without any visual styling, or the custom `linkComponent` implementation that was provided via',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/BraidProvider',
          },
          void 0,
          'BraidProvider',
        ),
        '.',
      ),
    },
  ],
};
export default docs;
