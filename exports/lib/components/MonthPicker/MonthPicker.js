import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _jsx from '@babel/runtime/helpers/jsx';
const _excluded = [
    'id',
    'value',
    'label',
    'onChange',
    'onBlur',
    'onFocus',
    'tone',
    'disabled',
    'minYear',
    'maxYear',
    'ascendingYears',
    'monthLabel',
    'yearLabel',
    'monthNames',
  ],
  _excluded2 = ['className'];
import React, { createRef, Fragment } from 'react';
import { isMobile } from 'is-mobile';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Dropdown } from '../Dropdown/Dropdown';
import { Field } from '../private/Field/Field';
import { FieldGroup } from '../private/FieldGroup/FieldGroup';
import * as styles from './MonthPicker.css';
const defaultMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getMonths = function getMonths(monthNames) {
  return monthNames.map(function (monthName, i) {
    return /* #__PURE__*/ _jsx(
      'option',
      {
        value: i + 1,
      },
      i,
      monthName,
    );
  });
};

const getYears = function getYears(min, max, ascending) {
  return _toConsumableArray(new Array(max - min + 1)).map(function (_v, i) {
    const yearStr = String(ascending ? i + min : max - i);
    return /* #__PURE__*/ _jsx(
      'option',
      {
        value: yearStr,
      },
      yearStr,
      yearStr,
    );
  });
};

const currYear = new Date().getFullYear();
const renderNativeInput = isMobile({
  tablet: true,
});

const customValueToString = function customValueToString(_ref) {
  const month = _ref.month,
    year = _ref.year;
  return month && year
    ? ''
        .concat(year, '-')
        .concat(month < 10 ? '0' : '')
        .concat(month)
    : undefined;
};

const stringToCustomValue = function stringToCustomValue(value) {
  const _value$split = value.split('-'),
    _value$split2 = _slicedToArray(_value$split, 2),
    year = _value$split2[0],
    month = _value$split2[1];

  return {
    month: parseInt(month, 10),
    year: parseInt(year, 10),
  };
};

const makeChangeHandler = function makeChangeHandler(
  onChange,
  value,
  fieldType,
) {
  return function (event) {
    if (typeof onChange === 'function') {
      onChange(
        {
          month: {
            year: value && value.year ? value.year : undefined,
            month: parseInt(event.target.value, 10) || undefined,
          },
          year: {
            month: value && value.month ? value.month : undefined,
            year: parseInt(event.target.value, 10) || undefined,
          },
          native: stringToCustomValue(event.target.value),
        }[fieldType],
      );
    }
  };
};

const MonthPicker = function MonthPicker(_ref2) {
  let _HiddenVisually, _HiddenVisually2;

  const id = _ref2.id,
    value = _ref2.value,
    label = _ref2.label,
    onChange = _ref2.onChange,
    onBlur = _ref2.onBlur,
    onFocus = _ref2.onFocus,
    tone = _ref2.tone,
    disabled = _ref2.disabled,
    _ref2$minYear = _ref2.minYear,
    minYear = _ref2$minYear === void 0 ? currYear - 100 : _ref2$minYear,
    _ref2$maxYear = _ref2.maxYear,
    maxYear = _ref2$maxYear === void 0 ? currYear : _ref2$maxYear,
    _ref2$ascendingYears = _ref2.ascendingYears,
    ascendingYears =
      _ref2$ascendingYears === void 0 ? false : _ref2$ascendingYears,
    _ref2$monthLabel = _ref2.monthLabel,
    monthLabel = _ref2$monthLabel === void 0 ? 'Month' : _ref2$monthLabel,
    _ref2$yearLabel = _ref2.yearLabel,
    yearLabel = _ref2$yearLabel === void 0 ? 'Year' : _ref2$yearLabel,
    _ref2$monthNames = _ref2.monthNames,
    monthNames =
      _ref2$monthNames === void 0 ? defaultMonthNames : _ref2$monthNames,
    restProps = _objectWithoutProperties(_ref2, _excluded);

  assert(monthNames.length === 12, 'monthNames array must contain 12 items');
  const currentValue = {
    month: value && value.month ? value.month : undefined,
    year: value && value.year ? value.year : undefined,
  };
  const monthRef = /* #__PURE__*/ createRef();
  const yearRef = /* #__PURE__*/ createRef();
  const monthId = ''.concat(id, '-month');
  const yearId = ''.concat(id, '-year');
  const blurHandler = onBlur
    ? function (event) {
        const fireIfExternal = function fireIfExternal(element) {
          if (element !== monthRef.current && element !== yearRef.current) {
            onBlur();
          }
        };

        if (event.relatedTarget !== null) {
          fireIfExternal(event.relatedTarget);
        } else {
          // IE 9 - 11 Hack -- relatedTarget is null in blur event
          setTimeout(function () {
            fireIfExternal(document.activeElement);
          });
        }
      }
    : undefined;
  const focusHandler = onFocus
    ? function (event) {
        if (
          event.relatedTarget !== monthRef.current &&
          event.relatedTarget !== yearRef.current
        ) {
          onFocus();
        }
      }
    : undefined;
  const nativeField = /* #__PURE__*/ React.createElement(
    Field,
    _extends(
      {
        id,
        tone,
        disabled,
        label,
        value: customValueToString(currentValue),
      },
      restProps,
      {
        icon: undefined,
        prefix: undefined,
        labelId: undefined,
        name: undefined,
        autoComplete: undefined,
        secondaryMessage: null,
      },
    ),
    function (overlays, _ref3) {
      const className = _ref3.className,
        fieldProps = _objectWithoutProperties(_ref3, _excluded2);

      return /* #__PURE__*/ _jsx(
        Fragment,
        {},
        void 0,
        /* #__PURE__*/ React.createElement(
          Box,
          _extends(
            {
              component: 'input',
              type: 'month',
              value: customValueToString(currentValue),
              onChange:
                onChange && makeChangeHandler(onChange, value, 'native'),
              onBlur,
              onFocus,
            },
            fieldProps,
            {
              height: 'touchable',
              className: [className, styles.nativeInput],
            },
          ),
        ),
        overlays,
      );
    },
  );
  const customFieldGroup = /* #__PURE__*/ React.createElement(
    FieldGroup,
    _extends(
      {
        id,
        label,
        tone,
        disabled,
      },
      restProps,
    ),
    function (fieldGroupProps) {
      return /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'medium',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          _HiddenVisually ||
            (_HiddenVisually = /* #__PURE__*/ _jsx(
              HiddenVisually,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                'label',
                {
                  htmlFor: monthId,
                },
                void 0,
                monthLabel,
              ),
            )),
          /* #__PURE__*/ React.createElement(
            Dropdown,
            _extends(
              {
                id: monthId,
                value: currentValue.month || '',
                onChange: makeChangeHandler(onChange, value, 'month'),
                onBlur: blurHandler,
                onFocus: focusHandler,
                tone,
                placeholder: monthLabel,
              },
              fieldGroupProps,
              {
                ref: monthRef,
              },
            ),
            getMonths(monthNames),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          _HiddenVisually2 ||
            (_HiddenVisually2 = /* #__PURE__*/ _jsx(
              HiddenVisually,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                'label',
                {
                  htmlFor: yearId,
                },
                void 0,
                yearLabel,
              ),
            )),
          /* #__PURE__*/ React.createElement(
            Dropdown,
            _extends(
              {
                id: yearId,
                value: currentValue.year || '',
                onChange: makeChangeHandler(onChange, value, 'year'),
                onBlur: blurHandler,
                onFocus: focusHandler,
                tone,
                placeholder: yearLabel,
              },
              fieldGroupProps,
              {
                ref: yearRef,
              },
            ),
            getYears(minYear, maxYear, ascendingYears),
          ),
        ),
      );
    },
  );
  return renderNativeInput ? nativeField : customFieldGroup;
};

MonthPicker.displayName = 'MonthPicker';
export { MonthPicker };
