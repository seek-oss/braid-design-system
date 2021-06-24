import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconCreditCardSvg } from './IconCreditCardSvg';
export var IconCreditCard = function IconCreditCard(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconCreditCardSvg,
      },
      iconProps,
    ),
  );
};
IconCreditCard.displayName = 'IconCreditCard';
