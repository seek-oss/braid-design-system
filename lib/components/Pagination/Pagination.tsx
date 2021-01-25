import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
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
  linkProps: (page: number) => LinkProps;
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
        <Text component="span">
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
          component="span"
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

const shouldHideOnTablet = (number: number, page: number, total: number) => {
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
      <Box component="ul">
        <Columns space={['none', 'xsmall']} align="center">
          <Column>
            <Box
              display="flex"
              justifyContent="flexEnd"
              component="li"
              opacity={showPrevious ? undefined : 0}
              pointerEvents={showPrevious ? undefined : 'none'}
              transition="fast"
            >
              <Link
                {...linkProps(page - 1)}
                rel="prev"
                aria-label={previousLabel}
                aria-hidden={!showPrevious}
                aria-disabled={!showPrevious}
                tabIndex={showPrevious ? undefined : -1}
                title={previousLabel}
              >
                <PageNav label={previousLabel} direction="prev" />
              </Link>
            </Box>
          </Column>

          <Column width="content">
            <Box display="flex">
              {pages.map((pageNumber) => {
                const current = page === pageNumber;

                return (
                  <Hidden
                    below={
                      shouldHideOnTablet(pageNumber, page, total)
                        ? 'tablet'
                        : undefined
                    }
                    key={pageNumber}
                  >
                    <Box component="li">
                      <Link
                        {...linkProps(pageNumber)}
                        aria-label={pageLabel(pageNumber)}
                        aria-current={current ? 'page' : undefined}
                        title={pageLabel(pageNumber)}
                      >
                        <Page number={pageNumber} current={current} />
                      </Link>
                    </Box>
                  </Hidden>
                );
              })}
            </Box>
          </Column>

          <Column>
            <Box
              display="flex"
              component="li"
              opacity={showNext ? undefined : 0}
              pointerEvents={showNext ? undefined : 'none'}
              transition="fast"
            >
              <Link
                {...linkProps(page + 1)}
                rel="next"
                aria-label={nextLabel}
                aria-hidden={!showNext}
                aria-disabled={!showNext}
                tabIndex={showNext ? undefined : -1}
                title={nextLabel}
              >
                <PageNav label={nextLabel} direction="next" />
              </Link>
            </Box>
          </Column>
        </Columns>
      </Box>
    </Box>
  );
};
