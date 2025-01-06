import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { useBackground } from '../Box/BackgroundContext';
import { IconChevron } from '../icons';
import { type LinkProps, Link } from '../Link/Link';
import { Overlay } from '../private/Overlay/Overlay';
import { Text } from '../Text/Text';
import { paginate } from './paginate';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import * as styles from './Pagination.css';
import { useResponsiveValue } from '../useResponsiveValue/useResponsiveValue';
import {
  normalizeResponsiveValue,
  type RequiredResponsiveValue,
} from '../../css/atoms/sprinkles.css';

export interface PaginationProps {
  page: number;
  total: number;
  linkProps: ({
    page,
    type,
  }: {
    page: number;
    type: 'next' | 'previous' | 'pageNumber';
  }) => LinkProps;
  label: string;
  pageLabel?: (page: number) => string;
  nextLabel?: string;
  previousLabel?: string;
  pageLimit?: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7>;
  data?: DataAttributeMap;
}

const borderRadius = 'standard';

const PageNav = ({
  label,
  direction,
}: {
  label: string;
  direction: 'next' | 'prev';
}) => {
  const isPrevious = direction === 'prev';
  const isNext = direction === 'next';

  return (
    <Box
      component="span"
      className={styles.hover}
      position="relative"
      display="flex"
      alignItems="center"
      height="touchable"
      paddingLeft={isNext ? 'small' : 'xsmall'}
      paddingRight={isPrevious ? 'small' : 'xsmall'}
    >
      <Overlay
        component="span"
        background="formAccentSoft"
        borderRadius={borderRadius}
        transition="fast"
        className={styles.background}
      />
      <Box component="span" zIndex={1} userSelect="none">
        <Text maxLines={1}>
          {isPrevious ? <IconChevron direction="left" /> : null}
          <Box
            display={['none', 'inline']}
            component="span"
            marginLeft={isPrevious ? 'xsmall' : undefined}
            marginRight={isNext ? 'xsmall' : undefined}
          >
            {label}
          </Box>
          {isNext ? <IconChevron direction="right" /> : null}
        </Text>
      </Box>
    </Box>
  );
};

const tabletButtonSpacing = 'xxsmall';

const Page = ({ number, current }: { number: number; current: boolean }) => {
  const parentBackground = useBackground();
  const isLegacyTheme = useBraidTheme().legacy;

  return (
    <Box
      component="span"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="touchable"
      width="touchable"
      position="relative"
      className={styles.hover}
    >
      <Overlay
        component="span"
        background={current ? 'formAccent' : 'formAccentSoft'}
        transition={current ? undefined : 'fast'}
        borderRadius={borderRadius}
        className={[styles.background, current ? styles.current : undefined]}
      />
      <Overlay
        component="span"
        borderRadius={borderRadius}
        boxShadow="borderFormAccent"
        className={{
          [styles.lightModeCurrentKeyline]:
            isLegacyTheme &&
            parentBackground.lightMode !== 'surface' &&
            current,
          [styles.darkModeCurrentKeyline]: current,
        }}
      />
      <Box component="span" zIndex={1} userSelect="none">
        <Text
          baseline={false}
          align="center"
          weight={current ? 'medium' : undefined}
          tone={current ? 'formAccent' : undefined}
        >
          {number}
        </Text>
      </Box>
    </Box>
  );
};

export const defaultPageLimit = 7;
const defaultMobilePageLimit = 3;
const defaultResponsivePageLimit = {
  mobile: defaultMobilePageLimit,
  tablet: defaultPageLimit,
} as const;

export const Pagination = ({
  page,
  total,
  linkProps,
  label,
  pageLabel = (p: number) => `Go to page ${p}`,
  nextLabel = 'Next',
  previousLabel = 'Previous',
  pageLimit = defaultResponsivePageLimit,
  data,
  ...restProps
}: PaginationProps) => {
  assert(total >= 1, `\`total\` must be at least 1`);
  assert(page >= 1 && page <= total, `\`page\` must be between 1 and ${total}`);

  const normalizedResponsiveLimits = normalizeResponsiveValue(pageLimit);
  const {
    mobile: mobilePageLimit = defaultMobilePageLimit,
    tablet: tabletPageLimit = mobilePageLimit,
    desktop: desktopPageLimit = tabletPageLimit,
    wide: widePageLimit = desktopPageLimit,
  } = normalizedResponsiveLimits;

  const responsivePageLimit = useResponsiveValue()({
    mobile: Math.min(mobilePageLimit, defaultMobilePageLimit),
    tablet: tabletPageLimit,
    desktop: desktopPageLimit,
    wide: widePageLimit,
  });

  const pageLimitValue = responsivePageLimit || defaultPageLimit;

  const pages = paginate({ page, total, maxPages: pageLimitValue });
  const showPrevious = page > 1;
  const showNext = page < total;

  return (
    <Box
      component="nav"
      aria-label={label}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box component="ul" display="flex" justifyContent="center">
        <Box
          component="li"
          paddingRight={{
            mobile: 'medium',
            tablet: pageLimitValue > 2 ? tabletButtonSpacing : undefined,
          }}
          transition="fast"
          opacity={!showPrevious ? 0 : undefined}
          pointerEvents={!showPrevious ? 'none' : undefined}
        >
          <Link
            {...linkProps({ page: page - 1, type: 'previous' })}
            rel="prev"
            aria-label={previousLabel}
            title={previousLabel}
            aria-hidden={!showPrevious}
            tabIndex={!showPrevious ? -1 : undefined}
          >
            <PageNav label={previousLabel} direction="prev" />
          </Link>
        </Box>

        {pages.map((pageNumber, index) => {
          const current = page === pageNumber;
          const isNotLast = pages.length - 1 !== index;

          return (
            <Box
              component="li"
              paddingRight={
                pageLimitValue > 2 && isNotLast
                  ? {
                      tablet: tabletButtonSpacing,
                    }
                  : undefined
              }
              key={pageNumber}
            >
              <Link
                {...linkProps({ page: pageNumber, type: 'pageNumber' })}
                aria-label={pageLabel(pageNumber)}
                aria-current={current ? 'page' : undefined}
                title={pageLabel(pageNumber)}
              >
                <Page number={pageNumber} current={current} />
              </Link>
            </Box>
          );
        })}

        <Box
          component="li"
          paddingLeft={{
            mobile: 'medium',
            tablet: pageLimitValue > 2 ? tabletButtonSpacing : undefined,
          }}
          transition="fast"
          opacity={!showNext ? 0 : undefined}
          pointerEvents={!showNext ? 'none' : undefined}
        >
          <Link
            {...linkProps({ page: page + 1, type: 'next' })}
            rel="next"
            aria-label={nextLabel}
            title={nextLabel}
            aria-hidden={!showNext}
            tabIndex={!showNext ? -1 : undefined}
          >
            <PageNav label={nextLabel} direction="next" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
