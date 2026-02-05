import { Text, Box } from 'braid-src/lib/components';

export type TocItem = {
  readonly id: string;
  readonly label: string;
  readonly isChild?: boolean;
};

const tocItemTextSize = 'xsmall';

export const TocItemLink = ({
  href,
  label,
  active,
  isChild,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  isChild?: boolean;
  onClick: (e: React.MouseEvent) => void;
}) => (
  <Box
    component="a"
    href={href}
    onClick={onClick}
    style={{
      textDecoration: 'none',
    }}
    paddingLeft={isChild ? 'small' : undefined}
    display="block"
  >
    <Text size={tocItemTextSize} weight={active ? 'strong' : 'regular'}>
      {label}
    </Text>
  </Box>
);
