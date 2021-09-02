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
        background="selection"
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
        background={current ? 'formAccent' : 'selection'}
        transition={current ? undefined : 'fast'}
        borderRadius={borderRadius}
        className={[styles.background, current ? styles.current : undefined]}
      />
      <Overlay
        component="span"
        borderRadius={borderRadius}
        boxShadow="borderFormAccent"
        className={
          parentBackground !== 'card' && current
            ? styles.currentKeyline
            : undefined
        }
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

export const Pagination = ({
  page,
  total,
  linkProps,
  label,
  pageLabel = (p: number) => `Go to page ${p}`,
  nextLabel = 'Next',
  previousLabel = 'Previous',
  data,
}: PaginationProps) => {
  assert(total >= 1, `\`total\` must be at least 1`);
  assert(page >= 1 && page <= total, `\`page\` must be between 1 and ${total}`);

  const pages = paginate({ page, total });
  const showPrevious = page > 1;
  const showNext = page < total;

  return (
    <Box
      component="nav"
      aria-label={label}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box component="ul" display="flex" justifyContent="center">
        {showPrevious ? (
          <Box component="li" paddingRight={['medium', tabletButtonSpacing]}>
            <Link
              {...linkProps({ page: page - 1, type: 'previous' })}
              rel="prev"
              aria-label={previousLabel}
              title={previousLabel}
            >
              <PageNav label={previousLabel} direction="prev" />
            </Link>
          </Box>
        ) : null}

        {pages.map((pageNumber, index) => {
          const current = page === pageNumber;

          return (
            <Box
              component="li"
              display={!current ? ['none', 'block'] : undefined}
              paddingRight={[
                'none',
                pages.length - 1 === index ? 'none' : tabletButtonSpacing,
              ]}
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

        {showNext ? (
          <Box component="li" paddingLeft={['medium', tabletButtonSpacing]}>
            <Link
              {...linkProps({ page: page + 1, type: 'next' })}
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
