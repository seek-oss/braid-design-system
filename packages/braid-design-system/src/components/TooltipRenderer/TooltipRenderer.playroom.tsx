import React from 'react';
import type { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import type { TooltipRendererProps } from './TooltipRenderer';
import { TooltipRenderer as BraidTooltipRenderer } from './TooltipRenderer';

type PlayroomTooltipRendererProps = Optional<TooltipRendererProps, 'id'>;

export const TooltipRenderer = ({
  id,
  ...restProps
}: PlayroomTooltipRendererProps) => {
  const fallbackId = useFallbackId();

  return <BraidTooltipRenderer id={id ?? fallbackId} {...restProps} />;
};
