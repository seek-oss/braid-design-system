import React, { ChangeEvent, FocusEvent, createRef } from 'react';
import classnames from 'classnames';
import range from 'lodash/range';
import { isMobile } from 'is-mobile';
import { Omit } from 'utility-types';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { Hidden } from '../Hidden/Hidden';
import { Dropdown } from '../Dropdown/Dropdown';
import { FieldProps, Field } from '../private/Field/Field';
import * as styleRefs from './MonthPicker.treat';

interface MonthPickerValue {
  month: number | undefined;
  year: number | undefined;
}

interface MonthPickerProps
  extends Omit<FieldProps, 'autoComplete' | 'secondaryMessage'> {
  value: MonthPickerValue;
  onChange: (value: MonthPickerValue, event: ChangeEvent) => void;
  onBlur?: (value: MonthPickerValue, event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  minYear?: number;
  maxYear?: number;
  ascendingYears?: boolean;
}

const months = [
  { value: '1', label: 'Jan' },
  { value: '2', label: 'Feb' },
  { value: '3', label: 'Mar' },
  { value: '4', label: 'Apr' },
  { value: '5', label: 'May' },
  { value: '6', label: 'Jun' },
  { value: '7', label: 'Jul' },
  { value: '8', label: 'Aug' },
  { value: '9', label: 'Sep' },
  { value: '10', label: 'Oct' },
  { value: '11', label: 'Nov' },
  { value: '12', label: 'Dec' },
];
const getMonths = () =>
  months.map(month => (
    <option value={month.value} key={month.value}>
      {month.label}
    </option>
  ));

const getYears = (min: number, max: number, ascending: boolean) => {
  const start = ascending ? min : max;
  const end = ascending ? max + 1 : min - 1;

  return range(start, end).map(year => {
    const yearStr = String(year);

    return (
      <option value={yearStr} key={yearStr}>
        {yearStr}
      </option>
    );
  });
};

const currYear = new Date().getFullYear();
const renderNativeInput = isMobile({ tablet: true });
const monthRef = createRef<HTMLSelectElement>();
const yearRef = createRef<HTMLSelectElement>();

const customValueToString = ({ month, year }: MonthPickerValue) =>
  month && year ? `${year}-${month < 10 ? '0' : ''}${month}` : undefined;

const stringToCustomValue = (value: string) => {
  const [year, month] = value.split('-');

  return {
    month: parseInt(month, 10),
    year: parseInt(year, 10),
  };
};

type FieldType = keyof MonthPickerValue | 'native';
const nativeToCustomValue = (
  nativeValue: string,
  value: MonthPickerValue,
  fieldType: FieldType,
) =>
  ({
    month: {
      year: value && value.year ? value.year : undefined,
      month: parseInt(nativeValue, 10) || undefined,
    },
    year: {
      month: value && value.month ? value.month : undefined,
      year: parseInt(nativeValue, 10) || undefined,
    },
    native: stringToCustomValue(nativeValue),
  }[fieldType]);

const handleChange = <Element extends HTMLSelectElement | HTMLInputElement>(
  { onChange, value }: Pick<MonthPickerProps, 'onChange' | 'value'>,
  fieldType: FieldType,
) => (event: ChangeEvent<Element>) => {
  if (typeof onChange === 'function') {
    onChange(nativeToCustomValue(event.target.value, value, fieldType), event);
  }
};

const handleBlur = <Element extends HTMLSelectElement | HTMLInputElement>(
  { onBlur, value }: Pick<MonthPickerProps, 'onBlur' | 'value'>,
  fieldType: FieldType,
) => (event: FocusEvent<Element>) => {
  if (typeof onBlur === 'function') {
    const isRelatedTargetExternal =
      event.relatedTarget !== monthRef.current &&
      event.relatedTarget !== yearRef.current;

    if (event.relatedTarget === null || isRelatedTargetExternal) {
      onBlur(nativeToCustomValue(event.target.value, value, fieldType), event);
    }
  }
};

const handleFocus = <Element extends HTMLSelectElement | HTMLInputElement>({
  onFocus,
}: Pick<MonthPickerProps, 'onFocus'>) => (event: FocusEvent<Element>) => {
  if (typeof onFocus === 'function') {
    const isRelatedTargetExternal =
      event.relatedTarget !== monthRef.current &&
      event.relatedTarget !== yearRef.current;

    if (event.relatedTarget === null || isRelatedTargetExternal) {
      onFocus(event);
    }
  }
};

export const MonthPicker = ({
  id,
  name,
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
  ...restProps
}: MonthPickerProps) => {
  const styles = useStyles(styleRefs);
  const currentValue = {
    month: value && value.month ? value.month : undefined,
    year: value && value.year ? value.year : undefined,
  };

  const field = (
    <Field
      id={`${id}-month`}
      name={`${name}-month`}
      tone={tone}
      disabled={disabled}
      label={
        <Box component={renderNativeInput ? 'span' : 'legend'}>
          {label}
          <Box component="span" display="none">
            Month
          </Box>
        </Box>
      }
      {...restProps}
      autoComplete={undefined}
      secondaryMessage={null}
    >
      {({
        backgroundColor,
        boxShadow,
        width,
        paddingLeft,
        paddingRight,
        borderRadius,
        className,
        ...nonVisualFieldProps
      }) =>
        renderNativeInput ? (
          <Box
            component="input"
            type="month"
            value={customValueToString(currentValue)}
            onChange={onChange && handleChange({ onChange, value }, 'native')}
            onBlur={onBlur && handleBlur({ onBlur, value }, 'native')}
            onFocus={onFocus && handleFocus({ onFocus })}
            {...nonVisualFieldProps}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}
            width={width}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            borderRadius={borderRadius}
            className={classnames(className, styles.nativeInput)}
          />
        ) : (
          <Box display="flex" className={styles.alignBottom}>
            <Hidden screen={true} print={true}>
              <label htmlFor={`${id}-year`}>{`${label} Year`}</label>
            </Hidden>

            <Box className={styles.grow}>
              <Dropdown
                {...nonVisualFieldProps}
                value={currentValue.month || ''}
                onChange={handleChange({ onChange, value }, 'month')}
                onBlur={onBlur && handleBlur({ onBlur, value }, 'month')}
                onFocus={onFocus && handleFocus({ onFocus })}
                reserveMessageSpace={false}
                tone={tone}
                placeholder="Month"
                ref={monthRef}
              >
                {getMonths()}
              </Dropdown>
            </Box>

            <Box paddingRight="gutter" />

            <Box className={styles.grow}>
              <Dropdown
                {...nonVisualFieldProps}
                id={`${id}-year`}
                name={`${name}-year`}
                value={currentValue.year || ''}
                onChange={handleChange({ onChange, value }, 'year')}
                onBlur={onBlur && handleBlur({ onBlur, value }, 'year')}
                onFocus={onFocus && handleFocus({ onFocus })}
                reserveMessageSpace={false}
                tone={tone}
                placeholder="Year"
                ref={yearRef}
              >
                {getYears(minYear, maxYear, ascendingYears)}
              </Dropdown>
            </Box>
          </Box>
        )
      }
    </Field>
  );

  return renderNativeInput ? field : <Box component="fieldset">{field}</Box>;
};
