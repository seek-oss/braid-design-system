import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _MenuItemLink, _MenuItemLink2, _MenuItemLink3, _Text, _IconDelete;

import React from 'react';
import source from '../../utils/source.macro';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  Stack,
  IconChevron,
  TextLink,
  Strong,
  Actions,
  Button,
  Dialog,
  IconDelete,
} from '..';
const docs = {
  category: 'Content',
  Example: function Example() {
    return source(
      /* #__PURE__*/ _jsx(
        MenuRenderer,
        {
          offsetSpace: 'small',
          trigger: function trigger(triggerProps, _ref) {
            const open = _ref.open;
            return /* #__PURE__*/ React.createElement(
              Box,
              _extends(
                {
                  userSelect: 'none',
                  cursor: 'pointer',
                },
                triggerProps,
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'Menu',
                ' ',
                /* #__PURE__*/ _jsx(IconChevron, {
                  direction: open ? 'up' : 'down',
                  alignY: 'lowercase',
                }),
              ),
            );
          },
        },
        void 0,
        /* #__PURE__*/ _jsx(
          MenuItem,
          {
            onClick: function onClick() {},
          },
          void 0,
          'Button',
        ),
        _MenuItemLink ||
          (_MenuItemLink = /* #__PURE__*/ _jsx(
            MenuItemLink,
            {
              href: '#',
            },
            void 0,
            'Link',
          )),
      ),
    );
  },
  description: /* #__PURE__*/ _jsx(
    Stack,
    {
      space: 'large',
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'This component allows you to attach standard menu interactions to a custom trigger element, e.g.',
      ' ',
      /* #__PURE__*/ _jsx(
        TextLink,
        {
          href: '/components/OverflowMenu',
        },
        void 0,
        'OverflowMenu',
      ),
      ' uses this internally. This should only be used if standard alternatives aren\u2019t suitable.',
    ),
  ),
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Follows the',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: 'https://www.w3.org/TR/wai-aria-practices-1.1/#menu',
      },
      void 0,
      'WAI-ARIA Menu Pattern.',
    ),
  ),
  alternatives: [
    {
      name: 'OverflowMenu',
      description: 'For displaying a list of secondary actions.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The menu is left-aligned by default, but this can be customised via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'align'),
        ' prop.',
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            Box,
            {
              style: {
                paddingLeft: '40px',
                maxWidth: '220px',
              },
            },
            void 0,
            /* #__PURE__*/ _jsx(
              MenuRenderer,
              {
                align: 'right',
                offsetSpace: 'small',
                trigger: function trigger(triggerProps, _ref2) {
                  const open = _ref2.open;
                  return /* #__PURE__*/ React.createElement(
                    Box,
                    _extends(
                      {
                        userSelect: 'none',
                        cursor: 'pointer',
                      },
                      triggerProps,
                    ),
                    /* #__PURE__*/ _jsx(
                      Text,
                      {},
                      void 0,
                      'Right aligned',
                      ' ',
                      /* #__PURE__*/ _jsx(IconChevron, {
                        direction: open ? 'up' : 'down',
                        alignY: 'lowercase',
                      }),
                    ),
                  );
                },
              },
              void 0,
              /* #__PURE__*/ _jsx(
                MenuItem,
                {
                  onClick: function onClick() {},
                },
                void 0,
                'Button',
              ),
              _MenuItemLink2 ||
                (_MenuItemLink2 = /* #__PURE__*/ _jsx(
                  MenuItemLink,
                  {
                    href: '#',
                  },
                  void 0,
                  'Link',
                )),
            ),
          ),
        );
      },
    },
    {
      label: 'Spacing',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The space between the menu and the trigger element can be customised via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'offsetSpace'),
        ' prop, which also accepts responsive values, e.g.',
        ' ',
        /* #__PURE__*/ _jsx(
          Strong,
          {},
          void 0,
          "offsetSpace={{ mobile: 'xsmall', tablet: 'small' }}",
        ),
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            MenuRenderer,
            {
              offsetSpace: {
                mobile: 'xsmall',
                tablet: 'small',
              },
              trigger: function trigger(triggerProps, _ref3) {
                const open = _ref3.open;
                return /* #__PURE__*/ React.createElement(
                  Box,
                  _extends(
                    {
                      userSelect: 'none',
                      cursor: 'pointer',
                    },
                    triggerProps,
                  ),
                  /* #__PURE__*/ _jsx(
                    Text,
                    {},
                    void 0,
                    'Custom space',
                    ' ',
                    /* #__PURE__*/ _jsx(IconChevron, {
                      direction: open ? 'up' : 'down',
                      alignY: 'lowercase',
                    }),
                  ),
                );
              },
            },
            void 0,
            /* #__PURE__*/ _jsx(
              MenuItem,
              {
                onClick: function onClick() {},
              },
              void 0,
              'Button',
            ),
            _MenuItemLink3 ||
              (_MenuItemLink3 = /* #__PURE__*/ _jsx(
                MenuItemLink,
                {
                  href: '#',
                },
                void 0,
                'Link',
              )),
          ),
        );
      },
    },
    {
      label: 'Destructive actions',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'For destructive actions like \u201CDelete\u201D you can set the menu item\u2019s',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tone'),
        ' to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'critical.'),
        ' When using this feature, you may want to consider providing a confirmation via a',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Dialog',
          },
          void 0,
          'Dialog.',
        ),
      ),
      Example: function Example(_ref4) {
        const id = _ref4.id,
          getState = _ref4.getState,
          toggleState = _ref4.toggleState,
          showToast = _ref4.showToast;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /* #__PURE__*/ _jsx(
              MenuRenderer,
              {
                offsetSpace: 'small',
                trigger: function trigger(triggerProps, _ref5) {
                  const open = _ref5.open;
                  return /* #__PURE__*/ React.createElement(
                    Box,
                    _extends(
                      {
                        userSelect: 'none',
                        cursor: 'pointer',
                      },
                      triggerProps,
                    ),
                    /* #__PURE__*/ _jsx(
                      Text,
                      {},
                      void 0,
                      'Menu',
                      ' ',
                      /* #__PURE__*/ _jsx(IconChevron, {
                        direction: open ? 'up' : 'down',
                        alignY: 'lowercase',
                      }),
                    ),
                  );
                },
              },
              void 0,
              /* #__PURE__*/ _jsx(
                MenuItem,
                {
                  onClick: function onClick() {
                    return toggleState('confirm');
                  },
                  tone: 'critical',
                },
                void 0,
                'Delete',
              ),
            ),
            /* #__PURE__*/ _jsx(
              Dialog,
              {
                id,
                width: 'content',
                title: 'Delete item?',
                open: getState('confirm'),
                onClose: function onClose() {
                  return toggleState('confirm');
                },
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'large',
                },
                void 0,
                _Text ||
                  (_Text = /* #__PURE__*/ _jsx(
                    Text,
                    {
                      tone: 'secondary',
                    },
                    void 0,
                    'Are you sure you want to delete this item?',
                  )),
                /* #__PURE__*/ _jsx(
                  Actions,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'critical',
                      onClick: function onClick() {
                        toggleState('confirm');
                        showToast({
                          tone: 'positive',
                          message: 'Item successfully deleted',
                          key: 'itemDeleted',
                        });
                      },
                    },
                    void 0,
                    _IconDelete ||
                      (_IconDelete = /* #__PURE__*/ _jsx(IconDelete, {})),
                    ' Delete',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                      onClick: function onClick() {
                        return toggleState('confirm');
                      },
                    },
                    void 0,
                    'Cancel',
                  ),
                ),
              ),
            ),
          ),
        );
      },
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
          'The ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'trigger'),
          ' element must accept generic DOM properties including event handlers and aria properties.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Child nodes must be',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/MenuItem',
            },
            void 0,
            'MenuItem',
          ),
          ',',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/MenuItemCheckbox',
            },
            void 0,
            'MenuItemCheckbox',
          ),
          ' ',
          'or',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/MenuItemDivider',
            },
            void 0,
            'MenuItemDivider',
          ),
          ' ',
          'elements.',
        ),
      ),
    },
  ],
};
export default docs;
