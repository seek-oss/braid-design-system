import _jsx from '@babel/runtime/helpers/jsx';

let _Stack, _Stack2;

import React from 'react';
import source from '../../../utils/source.macro';
import {
  IconBookmark,
  Button,
  Heading,
  Inline,
  Stack,
  Strong,
  Text,
} from '../../';
const docs = {
  category: 'Icon',
  migrationGuide: true,
  Example: function Example() {
    return source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: {
            mobile: 'large',
            tablet: 'xlarge',
          },
          align: 'center',
        },
        void 0,
        _Stack ||
          (_Stack = /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'medium',
              align: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Heading,
              {
                component: 'div',
                level: '1',
              },
              void 0,
              /* #__PURE__*/ _jsx(IconBookmark, {}),
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                tone: 'secondary',
                size: 'small',
                align: 'center',
              },
              void 0,
              'INACTIVE',
            ),
          )),
        _Stack2 ||
          (_Stack2 = /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'medium',
              align: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Heading,
              {
                component: 'div',
                level: '1',
              },
              void 0,
              /* #__PURE__*/ _jsx(IconBookmark, {
                active: true,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                tone: 'secondary',
                size: 'small',
                align: 'center',
              },
              void 0,
              'ACTIVE',
            ),
          )),
      ),
    );
  },
  alternatives: [],
  additional: [
    {
      label: 'Toggling active state',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The bookmark can be marked as active using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'active'),
        ' ',
        'prop.',
      ),
      Example: function Example(_ref) {
        const getState = _ref.getState,
          toggleState = _ref.toggleState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
              dividers: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(IconBookmark, {
              active: getState('active'),
            }),
            /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Button,
                {
                  onClick: function onClick() {
                    return toggleState('active');
                  },
                },
                void 0,
                getState('active') ? 'inactive' : 'active',
              ),
            ),
          ),
        );
      },
    },
  ],
};
export default docs;
