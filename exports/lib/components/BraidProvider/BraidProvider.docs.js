import _jsx from '@babel/runtime/helpers/jsx';
import React, { Fragment } from 'react';
import { Text, TextLink, Strong } from '../';
const docs = {
  category: 'Logic',
  migrationGuide: true,
  description: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Provides the necessary theming context for all components.',
  ),
  alternatives: [
    {
      name: 'BraidLoadableProvider',
      description: 'For production apps with multiple themes.',
    },
    {
      name: 'BraidTestProvider',
      description: 'For test environments.',
    },
  ],
  additional: [
    {
      label: 'Selecting a theme',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Themes should be imported from the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'themes'),
        ' folder and passed into BraidProvider using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'theme'),
        ' prop.',
      ),
      code:
        "\n        import wireframe from 'braid-design-system/themes/wireframe';\n\n        export const App = () => (\n          <BraidProvider theme={wireframe}>\n            ...\n          </BraidProvider>\n        );\n      ",
    },
    {
      label: 'Providing a custom link component',
      description: /* #__PURE__*/ _jsx(
        Fragment,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'linkComponent'),
          ' prop allows you to customise the rendering of Braid links (e.g.',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Link',
            },
            void 0,
            'Link',
          ),
          ',',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/TextLink',
            },
            void 0,
            'TextLink',
          ),
          ',',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/ButtonLink',
            },
            void 0,
            'ButtonLink',
          ),
          ',',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/MenuItem',
            },
            void 0,
            'MenuItemLink',
          ),
          ') across an entire application. This is useful for conditionally rendering React Router links, handling analytics, etc.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'When defining a custom link component, ensure you\u2019re using the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'makeLinkComponent'),
          ' helper function and forwarding the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'ref'),
          ' argument, otherwise certain link usages will be unable to function correctly.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'If you want to make use of this mechanism within your own components, use ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Link',
            },
            void 0,
            'Link',
          ),
          ' ',
          'which simply forwards your custom link component internally.',
        ),
      ),
      code:
        "\n        import React from 'react';\n        import { Link as ReactRouterLink } from 'react-router-dom';\n        import { BraidProvider, makeLinkComponent } from 'braid-design-system';\n        import wireframe from 'braid-design-system/themes/wireframe';\n\n        // First create the custom link implementation:\n        const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>\n          href[0] === '/' ? (\n            <ReactRouterLink ref={ref} to={href} {...restProps} />\n          ) : (\n            <a ref={ref} href={href} {...restProps} />\n          )\n        );\n\n        // Then pass it to BraidProvider:\n        export const App = () => (\n          <BraidProvider theme={wireframe} linkComponent={CustomLink}>\n            ...\n          </BraidProvider>\n        );\n      ",
    },
  ],
};
export default docs;
