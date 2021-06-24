import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';

let _Stack, _Box;

import React from 'react';
import {
  Box,
  Text,
  TextLink,
  Stack,
  Inline,
  Tiles,
  Columns,
  Column,
  Strong,
  Alert,
} from '../';
import source from '../../utils/source.macro';
import Code from '../../../site/src/App/Code/Code';
import {
  responsiveProperties,
  unresponsiveProperties,
  pseudoProperties,
} from '../../atoms/atomicProperties';

const validateBackgrounds = function validateBackgrounds(backgrounds) {
  return backgrounds;
};

const validateBoxShadows = function validateBoxShadows(boxShadows) {
  return boxShadows;
};

function AtomicProperty(_ref) {
  const name = _ref.name,
    modifier = _ref.modifier,
    values = _ref.values;
  return /* #__PURE__*/ _jsx(
    Stack,
    {
      space: 'medium',
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Text,
      {
        weight: 'strong',
      },
      void 0,
      name,
      modifier ? ' ('.concat(modifier, ')') : '',
    ),
    /* #__PURE__*/ _jsx(
      Text,
      {
        tone: 'secondary',
      },
      void 0,
      values
        .sort()
        .map(function (key) {
          return !/[0-9]/.test(key) ? '"'.concat(key, '"') : key;
        })
        .join(', '),
    ),
  );
}

AtomicProperty.displayName = 'AtomicProperty';
const docs = {
  category: 'Layout',
  description: /* #__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'Box is the lowest-level component for binding theme-based styles to an individual element on the screen. Internally, all Braid components are made up of Boxes.',
    ),
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'All elements rendered via Box are provided with a CSS reset to ensure that elements only have styling rules that have been explicitly specified.',
    ),
  ),
  alternatives: [],
  additional: [
    {
      label: 'Semantic elements',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'By default, Box renders a ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'div'),
          ' element. You can customise this via the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'component'),
          ' prop. Non-Braid props will also be forwarded to the underlying element.',
        ),
        /* #__PURE__*/ _jsx(
          Code,
          {
            playroom: false,
          },
          void 0,
          source(
            /* #__PURE__*/ _jsx(
              Box,
              {
                component: 'span',
                'aria-hidden': true,
              },
              void 0,
              '...',
            ),
          ).code,
        ),
      ),
    },
    {
      label: 'Dynamic CSS classes',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'className'),
          ' prop supports the full',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: 'https://github.com/lukeed/clsx',
            },
            void 0,
            'clsx API.',
          ),
        ),
        /* #__PURE__*/ _jsx(
          Code,
          {
            playroom: false,
          },
          void 0,
          (function () {
            const styles = {
              firstClass: null,
              secondClass: null,
              thirdClass: null,
            };
            return source(
              /* #__PURE__*/ _jsx(
                Box,
                {
                  className: [
                    styles.firstClass,
                    styles.secondClass,
                    styles.thirdClass,
                  ],
                },
                void 0,
                '...',
              ),
            ).code;
          })(),
        ),
      ),
    },
    {
      label: 'CSS utilities',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Box provides a suite of common CSS utility props. Styles that regularly differ across screen sizes can also be expressed as responsive props, e.g.',
          ' ',
          /* #__PURE__*/ _jsx(
            Strong,
            {},
            void 0,
            "justifyContent={{ mobile: 'center', tablet: 'flexStart' }}",
          ),
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'These utilities are recommended where possible to reduce the amount of custom CSS in your application.',
        ),
        /* #__PURE__*/ _jsx(
          Code,
          {
            playroom: false,
          },
          void 0,
          source(
            /* #__PURE__*/ _jsx(
              Box,
              {
                display: 'flex',
                justifyContent: {
                  mobile: 'center',
                  tablet: 'flexStart',
                },
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'full',
                height: 'full',
              },
              void 0,
              '...',
            ),
          ).code,
        ),
        /* #__PURE__*/ _jsx(
          Box,
          {
            paddingBottom: 'large',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Tiles,
            {
              space: 'xlarge',
              columns: {
                mobile: 1,
                tablet: 2,
              },
            },
            void 0,
            Object.keys(responsiveProperties).map(function (prop) {
              return /* #__PURE__*/ _jsx(
                AtomicProperty,
                {
                  modifier: 'Responsive',
                  name: prop,
                  values: Object.keys(responsiveProperties[prop]),
                },
                prop,
              );
            }),
            Object.keys(pseudoProperties).map(function (prop) {
              return /* #__PURE__*/ _jsx(
                AtomicProperty,
                {
                  modifier: 'Pseudo',
                  name: prop,
                  values: Object.keys(pseudoProperties[prop]),
                },
                prop,
              );
            }),
            Object.keys(unresponsiveProperties).map(function (prop) {
              return /* #__PURE__*/ _jsx(
                AtomicProperty,
                {
                  name: prop,
                  values: Object.keys(unresponsiveProperties[prop]),
                },
                prop,
              );
            }),
          ),
        ),
      ),
    },
    {
      label: 'Padding and margins',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Padding can be applied in all directions using our',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/foundations/layout#spacing',
            },
            void 0,
            'space scale.',
          ),
          ' ',
          'Margin is also supported with the same syntax, but padding is recommended over margin in most cases to avoid issues with',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href:
                'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing',
            },
            void 0,
            'collapsing margins.',
          ),
        ),
        /* #__PURE__*/ _jsx(
          Code,
          {
            playroom: false,
          },
          void 0,
          source(
            /* #__PURE__*/ _jsx(
              Box,
              {
                paddingX: 'gutter',
                paddingY: 'large',
              },
              void 0,
              '...',
            ),
          ).code,
        ),
      ),
      Example: function Example() {
        return source(
          _Stack ||
            (_Stack = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
                align: 'center',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'gutter',
                  align: 'center',
                  alignY: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Box,
                  {
                    background: 'formAccentHover',
                    borderRadius: 'standard',
                    padding: 'medium',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccent',
                      borderRadius: 'standard',
                      padding: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(Text, {}, void 0, 'padding'),
                  ),
                ),
                /* #__PURE__*/ _jsx(
                  Inline,
                  {
                    space: 'gutter',
                    align: 'center',
                    alignY: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccentHover',
                      borderRadius: 'standard',
                      paddingX: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'formAccent',
                        borderRadius: 'standard',
                        padding: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Text, {}, void 0, 'paddingX'),
                    ),
                  ),
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccentHover',
                      borderRadius: 'standard',
                      paddingY: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'formAccent',
                        borderRadius: 'standard',
                        padding: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Text, {}, void 0, 'paddingY'),
                    ),
                  ),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'gutter',
                  collapseBelow: 'desktop',
                  align: 'center',
                  alignY: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Inline,
                  {
                    space: 'gutter',
                    align: 'center',
                    alignY: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccentHover',
                      borderRadius: 'standard',
                      paddingTop: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'formAccent',
                        borderRadius: 'standard',
                        padding: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Text, {}, void 0, 'paddingTop'),
                    ),
                  ),
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccentHover',
                      borderRadius: 'standard',
                      paddingRight: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'formAccent',
                        borderRadius: 'standard',
                        padding: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Text, {}, void 0, 'paddingRight'),
                    ),
                  ),
                ),
                /* #__PURE__*/ _jsx(
                  Inline,
                  {
                    space: 'gutter',
                    align: 'center',
                    alignY: 'center',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccentHover',
                      borderRadius: 'standard',
                      paddingBottom: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'formAccent',
                        borderRadius: 'standard',
                        padding: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Text, {}, void 0, 'paddingBottom'),
                    ),
                  ),
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'formAccentHover',
                      borderRadius: 'standard',
                      paddingLeft: 'medium',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'formAccent',
                        borderRadius: 'standard',
                        padding: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Text, {}, void 0, 'paddingLeft'),
                    ),
                  ),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Responsive padding and margins',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Padding and margins can also differ across screen sizes by providing responsive values, e.g.',
        ' ',
        /* #__PURE__*/ _jsx(
          Strong,
          {},
          void 0,
          "padding={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}",
        ),
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'medium',
              align: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Box,
              {
                background: 'formAccentHover',
                borderRadius: 'standard',
                padding: {
                  mobile: 'small',
                  tablet: 'medium',
                  desktop: 'large',
                },
              },
              void 0,
              _Box ||
                (_Box = /* #__PURE__*/ _jsx(
                  Box,
                  {
                    background: 'formAccent',
                    borderRadius: 'standard',
                    padding: 'medium',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Responsive padding'),
                )),
            ),
          ),
        );
      },
    },
    {
      label: 'Backgrounds',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Box provides a series of ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'semantic'),
          ' backgrounds, meaning that they are named based on their desired usage rather than what they happen to look like. This is what allows us to change colours in radically different ways across our suite of themes.',
        ),
        /* #__PURE__*/ _jsx(
          Code,
          {
            playroom: false,
          },
          void 0,
          source(
            /* #__PURE__*/ _jsx(
              Box,
              {
                background: 'brand',
              },
              void 0,
              '...',
            ),
          ).code,
        ),
        /* #__PURE__*/ _jsx(
          Alert,
          {
            tone: 'caution',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'These background colours are likely to change over time, so it\u2019s important that you only use them within the semantic context they were designed for, e.g. only using the \u201Cselection\u201D colour for actual user selections. If you choose colours based solely on their appearance, your application\u2019s colours may change in unexpected ways when upgrading Braid.',
          ),
        ),
      ),
      Example: function Example() {
        const _source = source(
            /* #__PURE__*/ _jsx(
              Tiles,
              {
                space: 'large',
                columns: {
                  mobile: 1,
                  desktop: 2,
                },
              },
              void 0,
              Object.entries(
                validateBackgrounds({
                  body:
                    'Used for elements that need to match the body background.',
                  brand: 'Used for branding larger areas of the screen.',
                  brandAccent: 'Used for hero elements on the screen.',
                  brandAccentHover: 'Hover colour for “brandAccent” elements.',
                  brandAccentActive: 'Hover colour for “brandAccent” elements.',
                  formAccent:
                    'Used for prominent interactive elements, typically within a form.',
                  formAccentHover: 'Hover colour for “formAccent” elements.',
                  formAccentActive: 'Active colour for “formAccent” elements.',
                  formAccentDisabled:
                    'Disabled colour for “formAccent” elements.',
                  input: 'Used for input fields.',
                  inputDisabled: 'Used for input fields when disabled.',
                  card: 'Used for card surfaces.',
                  selection:
                    'Used for user selections, e.g. selected item in an Autosuggest.',
                  positive: 'Used for heavier “positive” elements.',
                  positiveLight: 'Used for lighter “positive” elements.',
                  critical: 'Used for heavier “critical” elements.',
                  criticalLight: 'Used for lighter “critical” elements.',
                  criticalHover: 'Hover colour for “critical” elements.',
                  criticalActive: 'Active colour for “critical” elements.',
                  caution: 'Used for heavier “caution” elements.',
                  cautionLight: 'Used for lighter “caution” elements.',
                  info: 'Used for heavier “info” elements.',
                  infoLight: 'Used for lighter “info” elements.',
                  promote: 'Used for heavier “promote” elements.',
                  promoteLight: 'Used for lighter “promote” elements.',
                  neutral: 'Used for heavier “neutral” elements.',
                  neutralLight: 'Used for lighter “neutral” elements.',
                }),
              ).map(function (_ref2) {
                const _ref3 = _slicedToArray(_ref2, 2),
                  background = _ref3[0],
                  description = _ref3[1];

                return /* #__PURE__*/ _jsx(
                  Columns,
                  {
                    space: 'medium',
                    alignY: 'center',
                  },
                  background,
                  /* #__PURE__*/ _jsx(
                    Column,
                    {
                      width: 'content',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: 'card',
                        borderRadius: 'standard',
                        padding: 'gutter',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Box, {
                        background,
                        boxShadow: ['card', 'input'].includes(background)
                          ? 'borderStandard'
                          : undefined,
                        borderRadius: 'standard',
                        padding: 'gutter',
                      }),
                    ),
                  ),
                  /* #__PURE__*/ _jsx(
                    Column,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        paddingRight: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(
                        Stack,
                        {
                          space: 'small',
                        },
                        void 0,
                        /* #__PURE__*/ _jsx(
                          Text,
                          {
                            weight: 'medium',
                          },
                          void 0,
                          /* #__PURE__*/ _jsx(
                            Box,
                            {
                              style: {
                                wordBreak: 'break-all',
                              },
                            },
                            void 0,
                            background,
                          ),
                        ),
                        /* #__PURE__*/ _jsx(
                          Text,
                          {
                            tone: 'secondary',
                          },
                          void 0,
                          description,
                        ),
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),
          code = _source.code,
          value = _source.value;

        return {
          code: code
            .replace('validateBackgrounds', '')
            .replace(' as keyof BackgroundDocs', ''),
          value,
        };
      },
    },
    {
      label: 'Shadows, borders and outlines',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Box provides a series of ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'boxShadow'),
          ' values that handle a wide variety of use cases. Note that box shadows are also used for outlines and borders so that their presence doesn\u2019t alter the dimensions of the element.',
        ),
        /* #__PURE__*/ _jsx(
          Code,
          {
            playroom: false,
          },
          void 0,
          source(
            /* #__PURE__*/ _jsx(
              Box,
              {
                boxShadow: 'large',
              },
              void 0,
              '...',
            ),
          ).code,
        ),
        /* #__PURE__*/ _jsx(
          Alert,
          {
            tone: 'caution',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'These box shadows are likely to change over time, so it\u2019s important that you only use them within the semantic context they were designed for, e.g. only using \u201CborderField\u201D for actual field borders. If you choose semantic box shadows based solely on their appearance, your application\u2019s colours may change in unexpected ways when upgrading Braid.',
          ),
        ),
      ),
      Example: function Example() {
        const _source2 = source(
            /* #__PURE__*/ _jsx(
              Tiles,
              {
                space: 'large',
                columns: {
                  mobile: 1,
                  desktop: 2,
                },
              },
              void 0,
              Object.entries(
                validateBoxShadows({
                  small: 'Used for small shadows.',
                  medium: 'Used for medium shadows.',
                  large: 'Used for large shadows.',
                  borderStandard: 'Used for neutral element borders.',
                  borderStandardInverted:
                    'Used for standard borders on dark backgrounds.',
                  borderStandardInvertedLarge:
                    'Used for large standard borders on dark backgrounds.',
                  borderField: 'Used for borders around form fields.',
                  borderFormHover:
                    'Used for borders around form fields on hover.',
                  outlineFocus:
                    'Used for focus states of interactive elements.',
                  borderFormAccent:
                    'Used for borders around prominent interactive elements.',
                  borderFormAccentLarge:
                    'Used for large borders around prominent interactive elements.',
                  borderBrandAccentLarge:
                    'Used for large borders around branded elements.',
                  borderPositive:
                    'Used for borders around “positive” elements.',
                  borderCritical:
                    'Used for borders around “critical” elements.',
                  borderCriticalLarge:
                    'Used for large borders around “critical” elements.',
                  borderCaution: 'Used for borders around “caution” elements.',
                  borderInfo: 'Used for borders around “info” elements.',
                  borderPromote: 'Used for borders around “promote” elements.',
                }),
              ).map(function (_ref4) {
                const _ref5 = _slicedToArray(_ref4, 2),
                  boxShadow = _ref5[0],
                  description = _ref5[1];

                return /* #__PURE__*/ _jsx(
                  Columns,
                  {
                    space: 'medium',
                    alignY: 'center',
                  },
                  boxShadow,
                  /* #__PURE__*/ _jsx(
                    Column,
                    {
                      width: 'content',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        background: boxShadow.includes('Inverted')
                          ? 'brand'
                          : 'card',
                        borderRadius: 'standard',
                        padding: 'gutter',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(Box, {
                        boxShadow,
                        borderRadius: 'standard',
                        padding: 'gutter',
                      }),
                    ),
                  ),
                  /* #__PURE__*/ _jsx(
                    Column,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Box,
                      {
                        paddingRight: 'medium',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(
                        Stack,
                        {
                          space: 'small',
                        },
                        void 0,
                        /* #__PURE__*/ _jsx(
                          Text,
                          {
                            weight: 'medium',
                          },
                          void 0,
                          /* #__PURE__*/ _jsx(
                            Box,
                            {
                              style: {
                                wordBreak: 'break-all',
                              },
                            },
                            void 0,
                            boxShadow,
                          ),
                        ),
                        /* #__PURE__*/ _jsx(
                          Text,
                          {
                            tone: 'secondary',
                          },
                          void 0,
                          description,
                        ),
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),
          code = _source2.code,
          value = _source2.value;

        return {
          code: code
            .replace('validateBoxShadows', '')
            .replace(' as keyof BoxShadowDocs', ''),
          value,
        };
      },
    },
  ],
};
export default docs;
