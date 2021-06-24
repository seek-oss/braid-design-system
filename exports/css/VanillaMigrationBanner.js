import _jsx from '@babel/runtime/helpers/jsx';

let _Alert;

import React from 'react';
import { Alert, Text, TextLink } from '../lib/components';
export var VanillaMigrationBanner = function VanillaMigrationBanner() {
  return (
    _Alert ||
    (_Alert = /* #__PURE__*/ _jsx(
      Alert,
      {
        tone: 'info',
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Text,
        {
          weight: 'medium',
        },
        void 0,
        'If you\u2019re migrating from',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: 'https://seek-oss.github.io/treat',
          },
          void 0,
          'treat',
        ),
        ', check out our',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href:
              'https://github.com/seek-oss/braid-design-system/blob/master/docs/treat%20to%20vanilla-extract%20migration.md',
          },
          void 0,
          'treat to vanilla-extract migration guide.',
        ),
      ),
    ))
  );
};
VanillaMigrationBanner.displayName = 'VanillaMigrationBanner';
