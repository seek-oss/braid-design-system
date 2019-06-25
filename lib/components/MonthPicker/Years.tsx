import React, { Fragment } from 'react';
import range from 'lodash/range';

interface YearsProps {
  min: number;
  max: number;
  ascending: boolean;
}

export const Years = ({ min, max, ascending }: YearsProps) => {
  const start = ascending ? min : max;
  const end = ascending ? max + 1 : min - 1;

  return (
    <Fragment>
      {range(start, end).map(year => {
        const yearStr = String(year);

        return (
          <option value={yearStr} key={yearStr}>
            {yearStr}
          </option>
        );
      })}
    </Fragment>
  );
};
