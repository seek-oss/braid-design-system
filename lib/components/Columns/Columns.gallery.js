import _jsx from '@babel/runtime/helpers/jsx';

let _Columns,
  _Columns2,
  _Columns3,
  _Columns4,
  _Columns5,
  _Columns6,
  _Columns7,
  _Columns8,
  _Stack;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Columns, Column, Stack } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Spacing',
    Example: function Example() {
      return source(
        _Columns ||
          (_Columns = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Vertical align top',
    Example: function Example() {
      return source(
        _Columns2 ||
          (_Columns2 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              alignY: 'top',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
                label: 'top',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Vertical align center',
    Example: function Example() {
      return source(
        _Columns3 ||
          (_Columns3 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              alignY: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
                label: 'center',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Vertical align bottom',
    Example: function Example() {
      return source(
        _Columns4 ||
          (_Columns4 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              alignY: 'bottom',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
                label: 'bottom',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Horizontal align left',
    Example: function Example() {
      return source(
        _Columns5 ||
          (_Columns5 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              align: 'left',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
                label: 'left',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Horizontal align center',
    Example: function Example() {
      return source(
        _Columns6 ||
          (_Columns6 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              align: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
                label: 'center',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Horizontal align right',
    Example: function Example() {
      return source(
        _Columns7 ||
          (_Columns7 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              align: 'right',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
                label: 'right',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 20,
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Reversing the column order',
    Example: function Example() {
      return source(
        _Columns8 ||
          (_Columns8 = /* #__PURE__*/ _jsx(
            Columns,
            {
              space: 'small',
              reverse: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: '1/5',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'First',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 60,
                label: 'Second',
              }),
            ),
          )),
      );
    },
  },
  {
    label: 'Column widths',
    Example: function Example() {
      return source(
        _Stack ||
          (_Stack = /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: 'content',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'content',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '1/5',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '1/5',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '1/4',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '1/4',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '1/3',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '1/3',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '2/5',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '2/5',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '1/2',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '1/2',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '3/5',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '3/5',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '2/3',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '2/3',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '3/4',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '3/4',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'xsmall',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {
                  width: '4/5',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: '4/5',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'fluid',
                }),
              ),
            ),
          )),
      );
    },
  },
];
