import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Inline } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Spacing',
    Example: () =>
      source(
        <Inline space="large">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>,
      ),
  },
  {
    label: 'Vertical align top',
    Example: () =>
      source(
        <Inline space="small" alignY="top">
          <Placeholder width={60} height={20} />
          <Placeholder width={80} height={60} label="top" />
          <Placeholder width={60} height={20} />
        </Inline>,
      ),
  },
  {
    label: 'Vertical align center',
    Example: () =>
      source(
        <Inline space="small" alignY="center">
          <Placeholder width={60} height={20} />
          <Placeholder width={80} height={60} label="center" />
          <Placeholder width={60} height={20} />
        </Inline>,
      ),
  },
  {
    label: 'Vertical align bottom',
    Example: () =>
      source(
        <Inline space="small" alignY="bottom">
          <Placeholder width={60} height={20} />
          <Placeholder width={80} height={60} label="bottom" />
          <Placeholder width={60} height={20} />
        </Inline>,
      ),
  },
  {
    label: 'Horizontal align left',
    Example: () =>
      source(
        <Inline space="small" align="left">
          <Placeholder width={80} height={60} label="left" />
          <Placeholder width={80} height={60} />
          <Placeholder width={80} height={60} />
        </Inline>,
      ),
  },
  {
    label: 'Horizontal align center',
    Example: () =>
      source(
        <Inline space="small" align="center">
          <Placeholder width={80} height={60} />
          <Placeholder width={80} height={60} label="center" />
          <Placeholder width={80} height={60} />
        </Inline>,
      ),
  },
  {
    label: 'Horizontal align right',
    Example: () =>
      source(
        <Inline space="small" align="right">
          <Placeholder width={80} height={60} />
          <Placeholder width={80} height={60} />
          <Placeholder width={80} height={60} label="right" />
        </Inline>,
      ),
  },
];
