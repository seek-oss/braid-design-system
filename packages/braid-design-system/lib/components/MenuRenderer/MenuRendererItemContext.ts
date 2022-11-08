import { createContext } from 'react';
import type { Action } from './MenuRenderer.actions';

interface MenuRendererItemContextValues {
  isHighlighted: boolean;
  index: number;
  dispatch: (action: Action) => void;
  focusTrigger: () => void;
}

export const MenuRendererItemContext =
  createContext<MenuRendererItemContextValues | null>(null);
