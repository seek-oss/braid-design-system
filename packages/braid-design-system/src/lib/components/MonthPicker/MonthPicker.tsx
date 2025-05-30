import assert from 'assert';

import { isMobile } from 'is-mobile';
import { type ChangeEvent, type FocusEvent, createRef, Fragment } from 'react';

import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Dropdown } from '../Dropdown/Dropdown';
import { Field } from '../private/Field/Field';
import {
  type FieldLabelVariant,
  type FieldGroupBaseProps,
  FieldGroup,
} from '../private/FieldGroup/FieldGroup';

import * as styles from './MonthPicker.css';

interface MonthPickerValue {
  month?: number;
  year?: number;
}

type MonthNames = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
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
] as MonthNames;

type FocusHandler = () => void;
type ChangeHandler = (value: MonthPickerValue) => void;
export type MonthPickerBaseProps = Omit<
  FieldGroupBaseProps,
  | 'value'
  | 'aria-describedby'
  | 'name'
  | 'autoComplete'
  | 'secondaryMessage'
  | 'autoFocus'
  | 'icon'
  | 'prefix'
> & {
  value: MonthPickerValue;
  onChange: ChangeHandler;
  onBlur?: FocusHandler;
  onFocus?: FocusHandler;
  minYear?: number;
  maxYear?: number;
  ascendingYears?: boolean;
  monthLabel?: string;
  yearLabel?: string;
  monthNames?: MonthNames;
};
export type MonthPickerLabelProps = FieldLabelVariant;
export type MonthPickerProps = MonthPickerBaseProps & MonthPickerLabelProps;

const getMonths = (monthNames: MonthNames) =>
  monthNames.map((monthName, i) => (
    <option value={i + 1} key={i}>
      {monthName}
    </option>
  ));

const getYears = (min: number, max: number, ascending: boolean) =>
  [...new Array(max - min + 1)].map((_v, i) => {
    const yearStr = String(ascending ? i + min : max - i);

    return (
      <option value={yearStr} key={yearStr}>
        {yearStr}
      </option>
    );
  });

const currYear = new Date().getFullYear();
const renderNativeInput = isMobile({ tablet: true });

const customValueToString = ({ month, year }: MonthPickerValue) =>
  month && year ? `${year}-${month < 10 ? '0' : ''}${month}` : undefined;

const stringToCustomValue = (value: string) => {
  const [year, month] = value.split('-');

  return {
    month: parseInt(month, 10),
    year: parseInt(year, 10),
  };
};

const makeChangeHandler =
  <Element extends HTMLSelectElement | HTMLInputElement>(
    onChange: ChangeHandler,
    value: MonthPickerValue,
    fieldType: keyof MonthPickerValue | 'native',
  ) =>
  (event: ChangeEvent<Element>) => {
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

const MonthPicker = ({
  value,
  onChange,
  onBlur,
  onFocus,
  tone,
  disabled,
  minYear = currYear - 100,
  maxYear = currYear,
  ascendingYears = false,
  monthLabel = 'Month',
  yearLabel = 'Year',
  tabIndex,
  monthNames = defaultMonthNames,
  ...restProps
}: MonthPickerProps) => {
  assert(monthNames.length === 12, 'monthNames array must contain 12 items');

  const currentValue = {
    month: value && value.month ? value.month : undefined,
    year: value && value.year ? value.year : undefined,
  };

  const monthRef = createRef<HTMLSelectElement>();
  const yearRef = createRef<HTMLSelectElement>();

  const blurHandler = onBlur
    ? (event: FocusEvent<HTMLSelectElement>) => {
        const fireIfExternal = (element: any) => {
          if (element !== monthRef.current && element !== yearRef.current) {
            onBlur();
          }
        };

        if (event.relatedTarget !== null) {
          fireIfExternal(event.relatedTarget);
        } else {
          // IE 9 - 11 Hack -- relatedTarget is null in blur event
          setTimeout(() => {
            fireIfExternal(document.activeElement);
          });
        }
      }
    : undefined;

  const focusHandler = onFocus
    ? (event: FocusEvent<HTMLSelectElement>) => {
        if (
          event.relatedTarget !== monthRef.current &&
          event.relatedTarget !== yearRef.current
        ) {
          onFocus();
        }
      }
    : undefined;

  const nativeField = (
    <Field
      tone={tone}
      disabled={disabled}
      value={customValueToString(currentValue)}
      {...restProps}
      componentName="MonthPicker"
      tabIndex={tabIndex}
      icon={undefined}
      prefix={undefined}
      name={undefined}
      autoComplete={undefined}
      secondaryMessage={null}
    >
      {(overlays, { className, ...fieldProps }) => (
        <Fragment>
          <Box
            component="input"
            type="month"
            value={customValueToString(currentValue)}
            onChange={onChange && makeChangeHandler(onChange, value, 'native')}
            onBlur={onBlur}
            onFocus={onFocus}
            {...fieldProps}
            height="touchable"
            className={[className, styles.nativeInput]}
          />
          {overlays}
        </Fragment>
      )}
    </Field>
  );

  const customFieldGroup = (
    <FieldGroup
      tone={tone}
      disabled={disabled}
      tabIndex={tabIndex}
      componentName="MonthPicker"
      {...restProps}
    >
      {(fieldGroupProps) => (
        <Columns space="xsmall">
          <Column>
            <Dropdown
              value={currentValue.month || ''}
              onChange={makeChangeHandler(onChange, value, 'month')}
              onBlur={blurHandler}
              onFocus={focusHandler}
              tone={tone}
              placeholder={monthLabel}
              aria-label={monthLabel}
              {...fieldGroupProps}
              ref={monthRef}
            >
              {getMonths(monthNames)}
            </Dropdown>
          </Column>
          <Column>
            <Dropdown
              value={currentValue.year || ''}
              onChange={makeChangeHandler(onChange, value, 'year')}
              onBlur={blurHandler}
              onFocus={focusHandler}
              tone={tone}
              placeholder={yearLabel}
              aria-label={yearLabel}
              {...fieldGroupProps}
              ref={yearRef}
            >
              {getYears(minYear, maxYear, ascendingYears)}
            </Dropdown>
          </Column>
        </Columns>
      )}
    </FieldGroup>
  );

  return renderNativeInput ? nativeField : customFieldGroup;
};

MonthPicker.displayName = 'MonthPicker';

export { MonthPicker };
