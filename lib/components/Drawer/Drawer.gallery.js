import _jsx from '@babel/runtime/helpers/jsx';

let _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _TextLink,
  _Placeholder4,
  _Placeholder5,
  _Placeholder6,
  _Placeholder7,
  _Placeholder8,
  _Placeholder9,
  _Placeholder10,
  _Placeholder11,
  _Placeholder12,
  _Placeholder13,
  _Placeholder14,
  _Placeholder15,
  _Placeholder16,
  _Placeholder17,
  _Placeholder18;

import React from 'react';
import source from '../../utils/source.macro';
import { Drawer, Button, Inline, Text, TextLink } from '..';
import { Placeholder } from '../../playroom/components';
import { DrawerContent } from './Drawer';
export var galleryItems = [
  {
    label: 'Default layout',
    Example: function Example(_ref) {
      const id = _ref.id;
      return source(
        /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Default test',
            onClose: function onClose() {},
            width: 'medium',
            scrollLock: false,
          },
          void 0,
          _Placeholder ||
            (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
            })),
        ),
      );
    },
  },
  {
    label: 'Layout with a description',
    Example: function Example(_ref2) {
      const id = _ref2.id;
      return source(
        /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Description test',
            description:
              _Placeholder2 ||
              (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 'auto',
                width: '100%',
                label: 'Description',
              })),
            onClose: function onClose() {},
            scrollLock: false,
          },
          void 0,
          _Placeholder3 ||
            (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
            })),
        ),
      );
    },
  },
  {
    label: 'Preview animation',
    Example: function Example(_ref3) {
      const getState = _ref3.getState,
        setState = _ref3.setState,
        resetState = _ref3.resetState;
      return source(
        /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
              align: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Button,
              {
                onClick: function onClick() {
                  return setState('width', 'small');
                },
              },
              void 0,
              'Open small',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                onClick: function onClick() {
                  return setState('width', 'medium');
                },
              },
              void 0,
              'Open medium',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                onClick: function onClick() {
                  return setState('width', 'large');
                },
              },
              void 0,
              'Open large',
            ),
          ),
          /* #__PURE__*/ _jsx(
            Drawer,
            {
              id: 'drawer-animation-example',
              title: 'A "'.concat(getState('width'), '" drawer'),
              description: /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'secondary',
                },
                void 0,
                'Uses a ',
                getState('width'),
                ' ',
                _TextLink ||
                  (_TextLink = /* #__PURE__*/ _jsx(
                    TextLink,
                    {
                      href: '/components/ContentBlock',
                    },
                    void 0,
                    'ContentBlock',
                  )),
              ),
              width: getState('width'),
              open: getState('width'),
              onClose: function onClose() {
                return resetState('width');
              },
            },
            void 0,
            _Placeholder4 ||
              (_Placeholder4 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder5 ||
              (_Placeholder5 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder6 ||
              (_Placeholder6 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder7 ||
              (_Placeholder7 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder8 ||
              (_Placeholder8 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder9 ||
              (_Placeholder9 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder10 ||
              (_Placeholder10 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder11 ||
              (_Placeholder11 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder12 ||
              (_Placeholder12 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder13 ||
              (_Placeholder13 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder14 ||
              (_Placeholder14 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder15 ||
              (_Placeholder15 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder16 ||
              (_Placeholder16 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder17 ||
              (_Placeholder17 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
            _Placeholder18 ||
              (_Placeholder18 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
                width: '100%',
              })),
          ),
        ),
      );
    },
  },
];
