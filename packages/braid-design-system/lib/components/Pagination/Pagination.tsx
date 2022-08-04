import React from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { useBackground } from '../Box/BackgroundContext';
import { IconChevron } from '../icons';
import { Link, LinkProps } from '../Link/Link';
import { Overlay } from '../private/Overlay/Overlay';
import { Text } from '../Text/Text';
import { paginate } from './paginate';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Pagination.css';

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
  pageLimit?: number;
  data?: DataAttributeMap;
}

const borderRadius = 'large';

const PageNav = ({
  label,
  direction,
}: {
  label: string;
  direction: 'next' | 'prev';
}) => {
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
        background="formAccentSoft"
        borderRadius={borderRadius}
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

const tabletButtonSpacing = 'xxsmall';

const Page = ({ number, current }: { number: number; current: boolean }) => {
  const parentBackground = useBackground();

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
            parentBackground.lightMode !== 'surface' && current,
          [styles.darkModeCurrentKeyline]:
            parentBackground.darkMode !== 'surface' && current,
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

export const Pagination = ({
  page,
  total,
  linkProps,
  label,
  pageLabel = (p: number) => `Go to page ${p}`,
  nextLabel = 'Next',
  previousLabel = 'Previous',
  pageLimit = defaultPageLimit,
  data,
}: PaginationProps) => {
  assert(total >= 1, `\`total\` must be at least 1`);
  assert(page >= 1 && page <= total, `\`page\` must be between 1 and ${total}`);
  assert(
    pageLimit >= 1 && pageLimit <= defaultPageLimit,
    `\`pageLimit\` must be between 1 and ${defaultPageLimit}`,
  );

  const pages = paginate({ page, total, maxPages: pageLimit });
  const showPrevious = page > 1;
  const showNext = page < total;

  return (
    <Box
      component="nav"
      aria-label={label}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box component="ul" display="flex" justifyContent="center">
        <Box
          component="li"
          paddingRight={{
            mobile: 'medium',
            tablet: pageLimit > 2 ? tabletButtonSpacing : undefined,
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
              display={
                !current ? { mobile: 'none', tablet: 'block' } : undefined
              }
              paddingRight={
                pageLimit > 2 && isNotLast
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
            tablet: pageLimit > 2 ? tabletButtonSpacing : undefined,
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
