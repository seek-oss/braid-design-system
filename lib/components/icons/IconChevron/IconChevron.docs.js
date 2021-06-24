import _jsx from '@babel/runtime/helpers/jsx';

let _Stack, _Stack2, _Stack3, _Stack4;

import React from 'react';
import source from '../../../utils/source.macro';
import {
  IconChevron,
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
              /* #__PURE__*/ _jsx(IconChevron, {}),
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                tone: 'secondary',
                size: 'small',
                align: 'center',
              },
              void 0,
              'DOWN',
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
              /* #__PURE__*/ _jsx(IconChevron, {
                direction: 'up',
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
              'UP',
            ),
          )),
        _Stack3 ||
          (_Stack3 = /* #__PURE__*/ _jsx(
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
              /* #__PURE__*/ _jsx(IconChevron, {
                direction: 'left',
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
              'LEFT',
            ),
          )),
        _Stack4 ||
          (_Stack4 = /* #__PURE__*/ _jsx(
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
              /* #__PURE__*/ _jsx(IconChevron, {
                direction: 'right',
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
              'RIGHT',
            ),
          )),
      ),
    );
  },
  alternatives: [],
  additional: [
    {
      label: 'Changing the direction',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The chevron can be rotated using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'direction'),
        ' prop.',
      ),
      Example: function Example(_ref) {
        const getState = _ref.getState,
          setState = _ref.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
              dividers: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(IconChevron, {
              direction: getState('direction'),
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
                    return setState('direction', 'up');
                  },
                },
                void 0,
                'up',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  onClick: function onClick() {
                    return setState('direction', 'down');
                  },
                },
                void 0,
                'down',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  onClick: function onClick() {
                    return setState('direction', 'left');
                  },
                },
                void 0,
                'left',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  onClick: function onClick() {
                    return setState('direction', 'right');
                  },
                },
                void 0,
                'right',
              ),
            ),
          ),
        );
      },
    },
  ],
};
export default docs;
