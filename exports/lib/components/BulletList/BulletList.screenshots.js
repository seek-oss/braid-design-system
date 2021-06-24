import _jsx from '@babel/runtime/helpers/jsx';

let _BulletList,
  _BulletList2,
  _BulletList3,
  _BulletList4,
  _BulletList5,
  _BulletList6,
  _BulletList7,
  _BulletList8;

import React from 'react';
import { Bullet, BulletList, TextLink } from '..';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Bullets',
      Example: function Example() {
        return (
          _BulletList ||
          (_BulletList = /* #__PURE__*/ _jsx(
            BulletList,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a bullet.'),
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a bullet.'),
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a bullet.'),
          ))
        );
      },
    },
    {
      label: 'Small Bullets',
      Example: function Example() {
        return (
          _BulletList2 ||
          (_BulletList2 = /* #__PURE__*/ _jsx(
            BulletList,
            {
              size: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a small bullet.'),
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a small bullet.'),
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a small bullet.'),
          ))
        );
      },
    },
    {
      label: 'Xsmall Bullets',
      Example: function Example() {
        return (
          _BulletList3 ||
          (_BulletList3 = /* #__PURE__*/ _jsx(
            BulletList,
            {
              size: 'xsmall',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is an xsmall bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is an xsmall bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is an xsmall bullet.',
            ),
          ))
        );
      },
    },
    {
      label: 'Large Bullets',
      Example: function Example() {
        return (
          _BulletList4 ||
          (_BulletList4 = /* #__PURE__*/ _jsx(
            BulletList,
            {
              size: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a large bullet.'),
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a large bullet.'),
            /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a large bullet.'),
          ))
        );
      },
    },
    {
      label: 'Decreased space between Bullets',
      Example: function Example() {
        return (
          _BulletList5 ||
          (_BulletList5 = /* #__PURE__*/ _jsx(
            BulletList,
            {
              space: 'xsmall',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'Decreased space below bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'Decreased space below bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'Decreased space below bullet.',
            ),
          ))
        );
      },
    },
    {
      label: 'Increased space between Bullets',
      Example: function Example() {
        return (
          _BulletList6 ||
          (_BulletList6 = /* #__PURE__*/ _jsx(
            BulletList,
            {
              space: 'xlarge',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'Increased space below bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'Increased space below bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'Increased space below bullet.',
            ),
          ))
        );
      },
    },
    {
      label: 'Secondary Tone',
      Example: function Example() {
        return (
          _BulletList7 ||
          (_BulletList7 = /* #__PURE__*/ _jsx(
            BulletList,
            {
              tone: 'secondary',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is a secondary bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is a secondary bullet.',
            ),
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is a secondary bullet.',
            ),
          ))
        );
      },
    },
    {
      label: 'With TextLink',
      Example: function Example() {
        return (
          _BulletList8 ||
          (_BulletList8 = /* #__PURE__*/ _jsx(
            BulletList,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Bullet,
              {},
              void 0,
              'This is a text ',
              /* #__PURE__*/ _jsx(
                TextLink,
                {
                  href: '#',
                },
                void 0,
                'link',
              ),
              '.',
            ),
          ))
        );
      },
    },
  ],
};
