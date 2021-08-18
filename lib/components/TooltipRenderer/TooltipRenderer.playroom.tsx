import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  TooltipRenderer as BraidTooltipRenderer,
  TooltipRendererProps,
} from './TooltipRenderer';

type PlayroomTooltipRendererProps = Optional<TooltipRendererProps, 'id'>;

export const TooltipRenderer = ({
  id,
  ...restProps
}: PlayroomTooltipRendererProps) => {
  const fallbackId = useFallbackId();

  return <BraidTooltipRenderer id={id ?? fallbackId} {...restProps} />;
};
