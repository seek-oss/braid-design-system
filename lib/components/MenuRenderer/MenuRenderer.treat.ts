import { style } from 'sku/treat';

export const root = style({
  padding: '0.05px',
  lineHeight: 0,
});

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const menuIsClosed = style((theme) => ({
  transform: `translateY(-${theme.grid * 2}px)`,
  visibility: 'hidden',
}));

export const showOverlay = style({ opacity: 1 });
