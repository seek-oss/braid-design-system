import { globalStyle, style } from '@vanilla-extract/css';
import {
  fixedColumn,
  contentColumn,
  fluidColumnStyleRules,
} from '../Column/Column.css';

export const columns = style({});

globalStyle(
  `${columns} > :not(${fixedColumn}):not(${contentColumn})`,
  fluidColumnStyleRules,
);
