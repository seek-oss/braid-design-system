import React, { ChangeEvent, FocusEvent, createRef, Fragment } from 'react';
import { isMobile } from 'is-mobile';
import assert from 'assert';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Dropdown } from '../Dropdown/Dropdown';
import { FieldProps, Field } from '../private/Field/Field';
import { FieldGroup } from '../private/FieldGroup/FieldGroup';
import * as styleRefs from './MonthPicker.treat';

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
export interface MonthPickerProps
  extends Omit<
    FieldProps,
    | 'value'
    | 'labelId'
    | 'aria-describedby'
    | 'data'
    | 'name'
    | 'autoComplete'
    | 'secondaryMessage'
    | 'autoFocus'
    | 'icon'
  > {
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
}

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

const makeChangeHandler = <
  Element extends HTMLSelectElement | HTMLInputElement
>(
  onChange: ChangeHandler,
  value: MonthPickerValue,
  fieldType: keyof MonthPickerValue | 'native',
) => (event: ChangeEvent<Element>) => {
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
  id,
  value,
  label,
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
  monthNames = defaultMonthNames,
  ...restProps
}: MonthPickerProps) => {
  assert(monthNames.length === 12, 'monthNames array must contain 12 items');

  const styles = useStyles(styleRefs);
  const currentValue = {
    month: value && value.month ? value.month : undefined,
    year: value && value.year ? value.year : undefined,
  };

  const monthRef = createRef<HTMLSelectElement>();
  const yearRef = createRef<HTMLSelectElement>();
  const monthId = `${id}-month`;
  const yearId = `${id}-year`;

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
      id={id}
      tone={tone}
      disabled={disabled}
      label={label}
      value={customValueToString(currentValue)}
      {...restProps}
      labelId={undefined}
      data={undefined}
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
      id={id}
      label={label}
      tone={tone}
      disabled={disabled}
      {...restProps}
    >
      {(fieldGroupProps) => (
        <Columns space="medium">
          <Column>
            <HiddenVisually>
              <label htmlFor={monthId}>{monthLabel}</label>
            </HiddenVisually>
            <Dropdown
              id={monthId}
              value={currentValue.month || ''}
              onChange={makeChangeHandler(onChange, value, 'month')}
              onBlur={blurHandler}
              onFocus={focusHandler}
              tone={tone}
              placeholder={monthLabel}
              {...fieldGroupProps}
              ref={monthRef}
            >
              {getMonths(monthNames)}
            </Dropdown>
          </Column>
          <Column>
            <HiddenVisually>
              <label htmlFor={yearId}>{yearLabel}</label>
            </HiddenVisually>
            <Dropdown
              id={yearId}
              value={currentValue.year || ''}
              onChange={makeChangeHandler(onChange, value, 'year')}
              onBlur={blurHandler}
              onFocus={focusHandler}
              tone={tone}
              placeholder={yearLabel}
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
