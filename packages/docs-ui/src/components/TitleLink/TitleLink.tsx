import {
  Box,
  IconLink,
  IconTick,
  Link,
  TooltipRenderer,
  Text,
} from 'braid-design-system';
import {
  type MouseEventHandler,
  type ReactNode,
  type RefCallback,
  useState,
} from 'react';

import * as styles from './TitleLink.css';

const slugify = (string: string) =>
  string
    .replace(/[\s?]/g, '-')
    .replace('--', '-')
    .replace(/-$/, '')
    .toLowerCase();

type TriggerProps = {
  ref: RefCallback<HTMLElement>;
  tabIndex: 0;
  'aria-describedby': string;
};

const TitleLinkAnchor = ({
  slug,
  onClick,
  children,
  triggerProps,
}: {
  slug: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
  triggerProps?: TriggerProps;
}) => (
  <Box component="span" id={slug} tabIndex={-1}>
    <Link
      href={`#${slug}`}
      className={styles.titleLink}
      onClick={onClick}
      aria-label={triggerProps ? 'Copy link to clipboard' : undefined}
      {...triggerProps}
    >
      {children}
      <Box
        component="span"
        transition="fast"
        opacity={0}
        className={styles.hashLink}
      >
        <IconLink />
      </Box>
    </Link>
  </Box>
);

type TitleLink = { copyable?: boolean } & (
  | { children: string }
  | { children: ReactNode; label: string }
);

export const TitleLink = ({ copyable = false, ...restProps }: TitleLink) => {
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

  return (
    <TooltipRenderer
      placement="right"
      tooltip={
        copied ? (
          <Box display="flex" alignItems="center" gap="xsmall">
            <Text>
              Copied to clipboard <IconTick />
            </Text>
          </Box>
        ) : (
          <Text>Copy to clipboard</Text>
        )
      }
    >
      {({ triggerProps }) => (
        <TitleLinkAnchor
          slug={slug}
          onClick={copyable ? handleClick : undefined}
          triggerProps={copyable ? triggerProps : undefined}
        >
          {restProps.children}
        </TitleLinkAnchor>
      )}
    </TooltipRenderer>
  );
};
