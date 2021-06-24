import _jsx from '@babel/runtime/helpers/jsx';

let _Tiles,
  _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _Placeholder4,
  _Placeholder5,
  _Placeholder6,
  _Placeholder7,
  _Placeholder8,
  _Placeholder9,
  _Placeholder10,
  _Tiles2,
  _Tiles3;

import React from 'react';
import { Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: '3 columns',
    Example: function Example() {
      return source(
        _Tiles ||
          (_Tiles = /* #__PURE__*/ _jsx(
            Tiles,
            {
              columns: 3,
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
          )),
      );
    },
  },
  {
    label: 'Responsive columns (e.g. 2 on mobile, 4 from tablet upwards)',
    Example: function Example() {
      return source(
        /* #__PURE__*/ _jsx(
          Tiles,
          {
            space: 'small',
            columns: {
              mobile: 2,
              tablet: 4,
            },
          },
          void 0,
          _Placeholder ||
            (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder2 ||
            (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder3 ||
            (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder4 ||
            (_Placeholder4 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder5 ||
            (_Placeholder5 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder6 ||
            (_Placeholder6 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder7 ||
            (_Placeholder7 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder8 ||
            (_Placeholder8 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder9 ||
            (_Placeholder9 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
          _Placeholder10 ||
            (_Placeholder10 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            })),
        ),
      );
    },
  },
  {
    label: 'Space between tiles',
    Example: function Example() {
      return source(
        _Tiles2 ||
          (_Tiles2 = /* #__PURE__*/ _jsx(
            Tiles,
            {
              space: 'large',
              columns: 3,
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 40,
            }),
          )),
      );
    },
  },
  {
    label: 'Dividers (when in single column)',
    Example: function Example() {
      return source(
        _Tiles3 ||
          (_Tiles3 = /* #__PURE__*/ _jsx(
            Tiles,
            {
              space: 'medium',
              columns: 1,
              dividers: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 80,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 80,
            }),
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 80,
            }),
          )),
      );
    },
  },
];
