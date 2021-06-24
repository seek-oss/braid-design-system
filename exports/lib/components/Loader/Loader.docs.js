import _jsx from '@babel/runtime/helpers/jsx';

let _Loader, _Columns;

import React from 'react';
import {
  Loader,
  Columns,
  Column,
  Stack,
  Inline,
  Text,
  TextLink,
  Strong,
  Button,
} from '../';
import source from '../../utils/source.macro';
import { animationDelayValueInMs } from './Loader.css';
const docs = {
  category: 'Content',
  Example: function Example() {
    return source(_Loader || (_Loader = /* #__PURE__*/ _jsx(Loader, {})));
  },
  alternatives: [],
  additional: [
    {
      label: 'Sizes',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Loader sizes are designed to match the cap-height of the corresponding',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/TextLink',
          },
          void 0,
          'Text',
        ),
        ' size. This is particularly useful if you need to show a loading indicator while a piece of text is loading.',
      ),
      Example: function Example() {
        return source(
          _Columns ||
            (_Columns = /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xlarge',
                collapseBelow: 'tablet',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  Stack,
                  {
                    space: 'medium',
                    align: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Text,
                    {
                      size: 'large',
                      weight: 'medium',
                      tone: 'secondary',
                    },
                    void 0,
                    'Large',
                  ),
                  /* #__PURE__*/ _jsx(Loader, {
                    size: 'large',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  Stack,
                  {
                    space: 'medium',
                    align: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Text,
                    {
                      size: 'standard',
                      weight: 'medium',
                      tone: 'secondary',
                    },
                    void 0,
                    'Standard',
                  ),
                  /* #__PURE__*/ _jsx(Loader, {
                    size: 'standard',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  Stack,
                  {
                    space: 'medium',
                    align: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Text,
                    {
                      size: 'small',
                      weight: 'medium',
                      tone: 'secondary',
                    },
                    void 0,
                    'Small',
                  ),
                  /* #__PURE__*/ _jsx(Loader, {
                    size: 'small',
                  }),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  Stack,
                  {
                    space: 'medium',
                    align: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Text,
                    {
                      size: 'xsmall',
                      weight: 'medium',
                      tone: 'secondary',
                    },
                    void 0,
                    'Xsmall',
                  ),
                  /* #__PURE__*/ _jsx(Loader, {
                    size: 'xsmall',
                  }),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Delayed visibility',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'If content loads quickly, users are likely to see a quick flash of the loading indicator. In order to reduce this visual noise, you can opt to delay the visibility of the loader by ',
        animationDelayValueInMs,
        'ms via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'delayVisibility'),
        ' prop.',
      ),
      Example: function Example(_ref) {
        const setDefaultState = _ref.setDefaultState,
          getState = _ref.getState,
          setState = _ref.setState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('counter', 0),
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'large',
                dividers: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Loader,
                {
                  delayVisibility: true,
                },
                getState('counter'),
              ),
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'medium',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Button,
                  {
                    onClick: function onClick() {
                      return setState('counter', getState('counter') + 1);
                    },
                  },
                  void 0,
                  'Replay',
                ),
              ),
            ),
          ),
        );
      },
    },
  ],
};
export default docs;
