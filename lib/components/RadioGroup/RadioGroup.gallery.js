import _jsx from '@babel/runtime/helpers/jsx';

let _RadioItem,
  _RadioItem2,
  _RadioItem3,
  _RadioItem4,
  _RadioItem5,
  _RadioItem6,
  _RadioItem7,
  _RadioItem8,
  _RadioItem9,
  _RadioItem10,
  _RadioItem11,
  _RadioItem12,
  _RadioItem13,
  _RadioItem14,
  _RadioItem15,
  _RadioItem16,
  _RadioItem17,
  _RadioItem18,
  _RadioItem19,
  _RadioItem20,
  _RadioItem21;

import React from 'react';
import { RadioGroup, RadioItem, Badge } from '..';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example(_ref) {
      const id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
      return source(
        /* #__PURE__*/ _jsx(
          RadioGroup,
          {
            id,
            value: getState('radio'),
            onChange: function onChange(_ref2) {
              const value = _ref2.currentTarget.value;
              return setState('radio', value);
            },
            label: 'Label',
          },
          void 0,
          _RadioItem ||
            (_RadioItem = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'One',
              value: '1',
            })),
          _RadioItem2 ||
            (_RadioItem2 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Two',
              value: '2',
            })),
          _RadioItem3 ||
            (_RadioItem3 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Three',
              value: '3',
            })),
        ),
      );
    },
  },
  {
    label: 'With a critical message',
    Example: function Example(_ref3) {
      const id = _ref3.id,
        getState = _ref3.getState,
        setState = _ref3.setState;
      return source(
        /* #__PURE__*/ _jsx(
          RadioGroup,
          {
            id,
            value: getState('radio'),
            onChange: function onChange(_ref4) {
              const value = _ref4.currentTarget.value;
              return setState('radio', value);
            },
            label: 'Label',
            message: 'Critical message',
            tone: 'critical',
          },
          void 0,
          _RadioItem4 ||
            (_RadioItem4 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'One',
              value: '1',
            })),
          _RadioItem5 ||
            (_RadioItem5 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Two',
              value: '2',
            })),
          _RadioItem6 ||
            (_RadioItem6 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Three',
              value: '3',
            })),
        ),
      );
    },
  },
  {
    label: 'With a description',
    Example: function Example(_ref5) {
      const id = _ref5.id,
        getState = _ref5.getState,
        setState = _ref5.setState;
      return source(
        /* #__PURE__*/ _jsx(
          RadioGroup,
          {
            id,
            value: getState('radio'),
            onChange: function onChange(_ref6) {
              const value = _ref6.currentTarget.value;
              return setState('radio', value);
            },
            label: 'Label',
            description: 'Extra information about the field',
          },
          void 0,
          _RadioItem7 ||
            (_RadioItem7 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'One',
              value: '1',
            })),
          _RadioItem8 ||
            (_RadioItem8 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Two',
              value: '2',
            })),
          _RadioItem9 ||
            (_RadioItem9 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Three',
              value: '3',
            })),
        ),
      );
    },
  },
  {
    label: 'With item-level descriptions',
    Example: function Example(_ref7) {
      const id = _ref7.id,
        getState = _ref7.getState,
        setState = _ref7.setState;
      return source(
        /* #__PURE__*/ _jsx(
          RadioGroup,
          {
            id,
            value: getState('radio'),
            onChange: function onChange(_ref8) {
              const value = _ref8.currentTarget.value;
              return setState('radio', value);
            },
            label: 'Label',
          },
          void 0,
          _RadioItem10 ||
            (_RadioItem10 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'One',
              value: '1',
              description: 'Description for item 1',
            })),
          _RadioItem11 ||
            (_RadioItem11 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Two',
              value: '2',
              description: 'Description for item 2',
            })),
          _RadioItem12 ||
            (_RadioItem12 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Three',
              value: '3',
              description: 'Description for item 3',
            })),
        ),
      );
    },
  },
  {
    label: 'With a Badge',
    Example: function Example(_ref9) {
      const id = _ref9.id,
        getState = _ref9.getState,
        setState = _ref9.setState;
      return source(
        /* #__PURE__*/ _jsx(
          RadioGroup,
          {
            id,
            value: getState('radio'),
            onChange: function onChange(_ref10) {
              const value = _ref10.currentTarget.value;
              return setState('radio', value);
            },
            label: 'Label',
          },
          void 0,
          _RadioItem13 ||
            (_RadioItem13 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'One',
              value: '1',
            })),
          _RadioItem14 ||
            (_RadioItem14 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Two',
              value: '2',
            })),
          _RadioItem15 ||
            (_RadioItem15 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Three',
              value: '3',
              badge: /* #__PURE__*/ _jsx(
                Badge,
                {
                  tone: 'positive',
                  weight: 'strong',
                },
                void 0,
                'Badge',
              ),
            })),
        ),
      );
    },
  },
  {
    label: 'Small',
    Example: function Example(_ref11) {
      const id = _ref11.id,
        getState = _ref11.getState,
        setState = _ref11.setState;
      return source(
        /* #__PURE__*/ _jsx(
          RadioGroup,
          {
            id,
            value: getState('radio'),
            onChange: function onChange(_ref12) {
              const value = _ref12.currentTarget.value;
              return setState('radio', value);
            },
            label: 'Label',
            size: 'small',
          },
          void 0,
          _RadioItem16 ||
            (_RadioItem16 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'One',
              value: '1',
            })),
          _RadioItem17 ||
            (_RadioItem17 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Two',
              value: '2',
            })),
          _RadioItem18 ||
            (_RadioItem18 = /* #__PURE__*/ _jsx(RadioItem, {
              label: 'Three',
              value: '3',
            })),
        ),
      );
    },
  },
  {
    label: 'Toggling nested content',
    Example: function Example(_ref13) {
      const id = _ref13.id,
        getState = _ref13.getState,
        setState = _ref13.setState,
        setDefaultState = _ref13.setDefaultState;
      return source(
        /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          setDefaultState('radio', '2'),
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id,
              value: getState('radio'),
              onChange: function onChange(_ref14) {
                const value = _ref14.currentTarget.value;
                return setState('radio', value);
              },
              label: 'Label',
            },
            void 0,
            _RadioItem19 ||
              (_RadioItem19 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'One',
                value: '1',
              })),
            _RadioItem20 ||
              (_RadioItem20 = /* #__PURE__*/ _jsx(
                RadioItem,
                {
                  label: 'Two',
                  value: '2',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 100,
                }),
              )),
            _RadioItem21 ||
              (_RadioItem21 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Three',
                value: '3',
              })),
          ),
        ),
      );
    },
  },
];
