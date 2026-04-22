import {
  Box,
  IconLink,
  IconTick,
  Link,
  TooltipRenderer,
  Text,
} from 'braid-design-system';
import { type MouseEventHandler, type ReactNode, useState } from 'react';

import * as styles from './TitleLink.css';

const slugify = (string: string) =>
  string
    .replace(/[\s?]/g, '-')
    .replace('--', '-')
    .replace(/-$/, '')
    .toLowerCase();

type TitleLink = { onClick?: MouseEventHandler<HTMLAnchorElement> } & (
  | { children: string }
  | { children: ReactNode; label: string }
) & {
    copyable?: boolean;
  };

export const TitleLink = ({
  onClick,
  copyable = false,
  ...restProps
}: TitleLink) => {
  const label = 'label' in restProps ? restProps.label : restProps.children;
  const slug = slugify(label);
  const [copied, setCopied] = useState(false);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (event.metaKey) {
      return;
    }
    event.preventDefault();
    const anchor = event.currentTarget as HTMLAnchorElement;
    const url = `${window.location.origin}${window.location.pathname}${anchor.hash}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Don't love this - but might not need it
  // if we remove the copyable prop

  if (!copyable) {
    return (
      <Link
        id={slug}
        href={`#${slug}`}
        className={styles.titleLink}
        onClick={onClick}
      >
        {restProps.children}
        <Box
          component="span"
          transition="fast"
          opacity={0}
          className={styles.hashLink}
        >
          <IconLink />
        </Box>
      </Link>
    );
  }

  return (
    <TooltipRenderer
      placement="right"
      tooltip={
        copied ? (
          <Box display="flex" alignItems="center" gap="xsmall">
            <Text>Copied to clipboard</Text>
            <IconTick size="small" />
          </Box>
        ) : (
          <Text>Copy to clipboard</Text>
        )
      }
    >
      {({ triggerProps }) => (
        <Link
          id={slug}
          href={`#${slug}`}
          className={styles.titleLink}
          onClick={handleClick}
          aria-label="Copy this link to clipboard"
          {...triggerProps}
        >
          {restProps.children}
          <Box
            component="span"
            transition="fast"
            opacity={0}
            className={styles.hashLink}
          >
            <IconLink />
          </Box>
        </Link>
      )}
    </TooltipRenderer>
  );
};
