import { Box, HiddenVisually, Stack } from 'braid-design-system';

import { CategoryHeading } from '../CategoryHeading/CategoryHeading';

import { SideNavigationItem } from './SideNavigationItem';

import * as styles from './SideNavigation.css';

interface SideNavigationSection {
  title: string;
  hideTitle?: boolean;
  items: SideNavigationItem[];
}

const Title = ({ children }: { children: string }) => (
  <CategoryHeading component="h2">{children}</CategoryHeading>
);

const ItemList = ({ items }: { items: SideNavigationItem[] }) => (
  <Stack component="ul" space="none">
    {items.map(({ name, badge, path, active, onClick }: SideNavigationItem) => (
      <SideNavigationItem
        name={name}
        badge={badge}
        path={path}
        active={active}
        onClick={onClick}
        key={name}
      />
    ))}
  </Stack>
);

export const SideNavigationSection = ({
  title,
  hideTitle,
  items,
}: SideNavigationSection) => (
  <Box component="nav">
    {hideTitle ? (
      <>
        <HiddenVisually>
          <Title>{title}</Title>
        </HiddenVisually>
        <ItemList items={items} />
      </>
    ) : (
      <Stack space="small">
        <Box className={styles.uppercase}>
          <Title>{title}</Title>
        </Box>
        <ItemList items={items} />
      </Stack>
    )}
  </Box>
);
