import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';
import _typeof from '@babel/runtime/helpers/typeof';
import React, {
  Children,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import assert from 'assert';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { TAB_LIST_UPDATED } from './Tabs.actions';
import buildDataAttributes from '../private/buildDataAttributes';
import { TabsContext } from './TabsProvider';
import { Tab } from './Tab';
import { negativeMarginTop } from '../../atoms/negativeMargin/negativeMargin';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { TabListContext } from './TabListContext';
import * as styles from './Tabs.css';
export var Tabs = function Tabs(props) {
  const tabsContext = useContext(TabsContext);
  const tabsRef = useRef(null);
  const children = props.children,
    label = props.label,
    data = props.data,
    _props$align = props.align,
    align = _props$align === void 0 ? 'left' : _props$align,
    gutter = props.gutter,
    _props$reserveHitArea = props.reserveHitArea,
    reserveHitArea =
      _props$reserveHitArea === void 0 ? false : _props$reserveHitArea,
    _props$divider = props.divider,
    divider = _props$divider === void 0 ? 'minimal' : _props$divider;
  assert(
    tabsContext !== null,
    'Tabs must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs',
  );

  if (!tabsContext) {
    throw new Error('Tabs rendered outside TabsProvider');
  }

  const dispatch = tabsContext.dispatch,
    a11y = tabsContext.a11y;
  const tabItems = [];
  const tabs = Children.map(flattenChildren(children), function (tab, index) {
    let _tab$props$item;

    assert(
      _typeof(tab) === 'object' && tab.type === Tab,
      'Only Tab elements can be direct children of a Tabs',
    );
    tabItems.push(
      (_tab$props$item = tab.props.item) !== null && _tab$props$item !== void 0
        ? _tab$props$item
        : index,
    );
    return /* #__PURE__*/ _jsx(
      TabListContext.Provider,
      {
        value: {
          tabListItemIndex: index,
          scrollContainer: tabsRef.current,
          divider,
        },
      },
      index,
      tab,
    );
  });
  useEffect(
    function () {
      dispatch({
        type: TAB_LIST_UPDATED,
        tabItems,
      }); // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [tabItems.join(), dispatch],
  );

  const _useBraidTheme = useBraidTheme(),
    _useBraidTheme$space = _useBraidTheme.space,
    grid = _useBraidTheme$space.grid,
    space = _useBraidTheme$space.space;

  const _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    showMask = _useState2[0],
    setShowMask = _useState2[1];

  const updateMask = useCallback(
    function () {
      if (!tabsRef.current) {
        return;
      }

      setShowMask(
        tabsRef.current.scrollWidth -
          tabsRef.current.offsetWidth -
          tabsRef.current.scrollLeft >
          grid * space.small,
      );
    },
    [tabsRef, setShowMask, grid, space],
  );
  useEffect(
    function () {
      updateMask();
      window.addEventListener('resize', updateMask);
      return function () {
        return window.removeEventListener('resize', updateMask);
      };
    },
    [updateMask],
  );
  return /* #__PURE__*/ _jsx(
    Box,
    {},
    void 0,
    /* #__PURE__*/ _jsx(
      Box,
      {
        className: reserveHitArea ? undefined : negativeMarginTop('medium'),
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Box,
        {
          position: 'relative',
        },
        void 0,
        /* #__PURE__*/ React.createElement(
          Box,
          {
            ref: tabsRef,
            className: [
              styles.scroll,
              styles.nowrap,
              showMask ? styles.mask : null,
            ],
            display: 'flex',
            onScroll: updateMask,
            flexWrap: 'nowrap',
          },
          /* #__PURE__*/ _jsx(
            Box,
            {
              display: 'flex',
              className: align === 'center' ? styles.marginAuto : undefined,
              paddingX: gutter,
              flexWrap: 'nowrap',
            },
            void 0,
            /* #__PURE__*/ React.createElement(
              Box,
              _extends(
                {},
                a11y.tabListProps({
                  label,
                }),
                {
                  display: 'flex',
                },
                data ? buildDataAttributes(data) : undefined,
                {
                  flexWrap: 'nowrap',
                },
              ),
              tabs,
            ),
          ),
          divider === 'full'
            ? /* #__PURE__*/ _jsx(Box, {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                className: styles.divider,
              })
            : null,
        ),
      ),
    ),
  );
};
Tabs.displayName = 'Tabs';
