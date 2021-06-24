import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Pagination, Card } from '../';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { TextLink } from '../TextLink/TextLink';
import { maxPages } from './paginate';
const docs = {
  category: 'Content',
  Example: function Example(_ref) {
    const setDefaultState = _ref.setDefaultState,
      getState = _ref.getState,
      setState = _ref.setState;
    return source(
      /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        setDefaultState('page', 1),
        /* #__PURE__*/ _jsx(Pagination, {
          page: getState('page'),
          total: 10,
          linkProps: function linkProps(_ref2) {
            const page = _ref2.page;
            return {
              href: '#',
              onClick: function onClick(e) {
                e.preventDefault();
                setState('page', page);
              },
            };
          },
          label: 'Pagination Example',
        }),
      ),
    );
  },
  accessibility: /* #__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'Renders a semantic ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'nav'),
      ' element to encapsulate the pagination links. Given this is a',
      ' ',
      /* #__PURE__*/ _jsx(
        TextLink,
        {
          href: 'https://www.w3.org/TR/wai-aria-practices-1.2/#aria_landmark',
        },
        void 0,
        'Landmark Region',
      ),
      ', in order to comply with the',
      ' ',
      /* #__PURE__*/ _jsx(
        TextLink,
        {
          href:
            'https://www.w3.org/TR/wai-aria-practices-1.2/#general-principles-of-landmark-design',
        },
        void 0,
        'General Principles of Landmark Design',
      ),
      ' ',
      'it is neccessary to provide a ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'label'),
      '.',
    ),
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'Given ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Pagination'),
      ' is presented semantically as a list of links, the ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Next'),
      ' and ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'Previous'),
      ' links have defined their relationship to the current page by providing the',
      ' ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'rel'),
      ' attribute with their respective values.',
    ),
  ),
  alternatives: [],
  additional: [
    {
      label: 'Design considerations',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'To keep the design simple, a maximum of ',
        maxPages,
        ' pages are displayed above ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tablet'),
        ' screen sizes. On ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'mobile'),
        ' ',
        'only the current page along with the next and previous links are displayed.',
      ),
    },
    {
      label: 'Development considerations',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'It is a requirement that you have set up',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'linkComponent'),
          ' on your',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href:
                '/components/BraidProvider/#providing-a-custom-link-component',
            },
            void 0,
            'BraidProvider',
          ),
          '.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'You must also provide a ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'linkProps'),
          ' function to transform the page number into',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Link',
            },
            void 0,
            'Link',
          ),
          ' props.',
        ),
      ),
      Example: function Example(_ref3) {
        const setDefaultState = _ref3.setDefaultState,
          getState = _ref3.getState,
          setState = _ref3.setState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('page', 5),
            /* #__PURE__*/ _jsx(Pagination, {
              page: getState('page'),
              total: 10,
              label: 'Pagination of results',
              linkProps: function linkProps(_ref4) {
                const page = _ref4.page;
                return {
                  href: '#'.concat(page),
                  onClick: function onClick(e) {
                    e.preventDefault();
                    setState('page', page);
                  },
                };
              },
            }),
          ),
        );
      },
      showCodeByDefault: true,
    },
    {
      label: 'Contextual design',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'When inside a ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Card',
          },
          void 0,
          'Card',
        ),
        ', the outline of the Pagination\u2019s active page is omitted since the background has sufficient contrast without it.',
      ),
      Example: function Example(_ref5) {
        const setDefaultState = _ref5.setDefaultState,
          getState = _ref5.getState,
          setState = _ref5.setState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('page', 1),
            /* #__PURE__*/ _jsx(
              Card,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Pagination, {
                page: getState('page'),
                total: 10,
                linkProps: function linkProps(_ref6) {
                  const page = _ref6.page;
                  return {
                    href: '#',
                    onClick: function onClick(e) {
                      e.preventDefault();
                      setState('page', page);
                    },
                  };
                },
                label: 'Pagination Example',
              }),
            ),
          ),
        );
      },
    },
  ],
};
export default docs;
