import _jsx from '@babel/runtime/helpers/jsx';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['percent'],
  _excluded2 = ['className'];
import React from 'react';
import assert from 'assert';
import { useBackground } from '../Box/BackgroundContext';
import useIcon from '../../hooks/useIcon';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconStarSvg as IconStarEmptySvg } from '../icons/IconStar/IconStarSvg';
import { IconStarHalfSvg } from '../icons/IconStar/IconStarHalfSvg';
import { IconStarActiveSvg as IconStarFullSvg } from '../icons/IconStar/IconStarActiveSvg';
import * as styles from './Rating.css';

const getPercent = function getPercent(rating, position) {
  return Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);
};

const RatingStar = function RatingStar(_ref) {
  const percent = _ref.percent,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const currentBg = useBackground();

  const _useIcon = useIcon(restProps),
    className = _useIcon.className,
    iconProps = _objectWithoutProperties(_useIcon, _excluded2);

  let component = IconStarEmptySvg;

  if (percent >= 25 && percent < 75) {
    component = IconStarHalfSvg;
  }

  if (percent > 50) {
    component = IconStarFullSvg;
  }

  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component,
      },
      iconProps,
      {
        className: [
          className,
          _defineProperty(
            {},
            styles.starColor,
            currentBg === 'body' || currentBg === 'card',
          ),
        ],
      },
    ),
  );
};

RatingStar.displayName = 'RatingStar';

const ratingArr = _toConsumableArray(Array(5));

export var Rating = function Rating(_ref3) {
  const rating = _ref3.rating,
    _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 'standard' : _ref3$size,
    _ref3$showTextRating = _ref3.showTextRating,
    showTextRating =
      _ref3$showTextRating === void 0 ? true : _ref3$showTextRating,
    ariaLabel = _ref3['aria-label'],
    data = _ref3.data;
  assert(
    !rating || (rating >= 0 && rating <= 5),
    'Rating must be between 0 and 5',
  );
  return /* #__PURE__*/ _jsx(
    Text,
    {
      size,
      data,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Box,
      {
        display: 'inlineBlock',
        'aria-label':
          ariaLabel ||
          ''.concat(rating.toFixed(1), ' out of ').concat(ratingArr.length),
      },
      void 0,
      ratingArr.map(function (_, position) {
        return /* #__PURE__*/ _jsx(
          Box,
          {
            display: 'inlineBlock',
            'aria-hidden': true,
            className: _defineProperty(
              {},
              styles.starSpacing,
              position !== ratingArr.length - 1,
            ),
          },
          position,
          /* #__PURE__*/ _jsx(RatingStar, {
            percent: getPercent(rating, position),
          }),
        );
      }),
    ),
    showTextRating &&
      /* #__PURE__*/ _jsx(
        Box,
        {
          component: 'span',
          className: styles.textSpacing,
          'aria-hidden': true,
        },
        void 0,
        rating.toFixed(1),
      ),
  );
};
Rating.displayName = 'Rating';
