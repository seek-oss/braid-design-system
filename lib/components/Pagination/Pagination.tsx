import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { IconChevron } from '../icons';
import { Link, LinkProps } from '../Link/Link';
import { Overlay } from '../private/Overlay/Overlay';
import { Text } from '../Text/Text';
import { Hidden } from '../Hidden/Hidden';
import { paginate } from './paginate';

import * as styleRefs from './Pagination.treat';

export interface PaginationProps {
  page: number;
  total: number;
  linkProps: ({ page }: { page: number }) => LinkProps;
  label: string;
  pageLabel?: (page: number) => string;
  nextLabel?: string;
  previousLabel?: string;
}

const PageNav = ({
  label,
  direction,
}: {
  label: string;
  direction: 'next' | 'prev';
}) => {
  const styles = useStyles(styleRefs);
  const isPrevious = direction === 'prev';

  return (
    <Box
      component="span"
      className={styles.hover}
      position="relative"
      display="flex"
      alignItems="center"
      height="touchable"
      paddingX="xsmall"
    >
      <Overlay
        component="span"
        background={'selection'}
        borderRadius="standard"
        transition="fast"
        className={styles.background}
      />
      <Box component="span" zIndex={1} userSelect="none">
        <Text>
          {isPrevious ? <IconChevron direction="left" /> : null}
          <Box
            display={isPrevious ? ['none', 'inline'] : undefined}
            component="span"
            marginLeft={isPrevious ? 'xxsmall' : undefined}
            marginRight={direction === 'next' ? 'xxsmall' : undefined}
          >
            {label}
          </Box>
          {direction === 'next' ? <IconChevron direction="right" /> : null}
        </Text>
      </Box>
    </Box>
  );
};

const Page = ({ number, current }: { number: number; current: boolean }) => {
  const styles = useStyles(styleRefs);

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
        background={current ? 'formAccent' : 'selection'}
        transition={current ? undefined : 'fast'}
        borderRadius="standard"
        className={[styles.background, current ? styles.current : undefined]}
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

const shouldHideBelowTablet = (number: number, page: number, total: number) => {
  if (page === 1) {
    return number > page + 2;
  }

  if (page === total) {
    return number < page - 2;
  }

  return page < number - 1 || page > number + 1;
};

export const Pagination = ({
  page,
  total,
  linkProps,
  label,
  pageLabel = (p: number) => `Go to page ${p}`,
  nextLabel = 'Next',
  previousLabel = 'Previous',
}: PaginationProps) => {
  const pages = paginate({ page, total });
  const showPrevious = total > pages.length && page > 1;
  const showNext = total > pages.length && page < total;

  return (
    <Box component="nav" aria-label={label}>
      <Box component="ul" display="flex" justifyContent="center">
        {showPrevious ? (
          <Box component="li">
            <Link
              {...linkProps({ page: page - 1 })}
              rel="prev"
              aria-label={previousLabel}
              title={previousLabel}
            >
              <PageNav label={previousLabel} direction="prev" />
            </Link>
          </Box>
        ) : null}

        {pages.map((pageNumber) => {
          const current = page === pageNumber;

          return (
            <Hidden
              component="li"
              below={
                shouldHideBelowTablet(pageNumber, page, total)
                  ? 'tablet'
                  : undefined
              }
              key={pageNumber}
            >
              <Link
                {...linkProps({ page: pageNumber })}
                aria-label={pageLabel(pageNumber)}
                aria-current={current ? 'page' : undefined}
                title={pageLabel(pageNumber)}
              >
                <Page number={pageNumber} current={current} />
              </Link>
            </Hidden>
          );
        })}

        {showNext ? (
          <Box component="li">
            <Link
              {...linkProps({ page: page + 1 })}
              rel="next"
              aria-label={nextLabel}
              title={nextLabel}
            >
              <PageNav label={nextLabel} direction="next" />
            </Link>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
