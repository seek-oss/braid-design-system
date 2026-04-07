import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const searchButton = style({
    ':hover': {
        background: vars.backgroundColor.neutralSoft,
    },
});
