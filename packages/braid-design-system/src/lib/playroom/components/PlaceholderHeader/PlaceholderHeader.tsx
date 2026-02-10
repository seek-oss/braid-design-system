import type { FC } from 'react';

import {
  Box,
  PageBlock,
  Spread,
  MenuRenderer,
  IconChevron,
  MenuItem,
  IconProfile,
  IconSettings,
  MenuItemDivider,
  Text,
  Button,
} from '../../../components';
import { usePlayroomStore } from '../../playroomState';

import { JobsDbLogo, JobStreetLogo, SeekAnzLogo } from './logos';

import * as styles from './PlaceholderHeader.css';

const logoForBrand = {
  seek: <SeekAnzLogo />,
  jobsdb: <JobsDbLogo />,
  jobstreet: <JobStreetLogo />,
};

interface PlaceholderHeaderProps {
  brand?: keyof typeof logoForBrand;
  authenticated?: boolean;
  divider?: boolean;
  product?: string;
}

export const PlaceholderHeader: FC<PlaceholderHeaderProps> = ({
  brand = 'seek',
  authenticated = true,
  divider = true,
  product,
}) => {
  const { resetState } = usePlayroomStore();

  return (
    <Box
      component="header"
      position="relative"
      background="surface"
      paddingY="small"
    >
      <PageBlock width="large">
        <Spread space="gutter" alignY="center">
          <Box
            cursor="pointer"
            display="flex"
            alignItems="center"
            onClick={() => resetState()}
          >
            {
              logoForBrand[
                Object.keys(logoForBrand).includes(brand) ? brand : 'seek'
              ]
            }
            {product ? <span className={styles.product}>{product}</span> : null}
          </Box>

          {authenticated ? (
            <MenuRenderer
              size="small"
              offsetSpace="xxsmall"
              align="right"
              width="small"
              reserveIconSpace
              trigger={(triggerProps, { open }) => (
                <Box
                  component="button"
                  userSelect="none"
                  display="flex"
                  alignItems="center"
                  gap="xxsmall"
                  cursor="pointer"
                  borderRadius="standard"
                  {...triggerProps}
                >
                  <Box
                    background="neutralLight"
                    borderRadius="standard"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: 32, width: 32 }}
                  >
                    <Text size="small" weight="strong">
                      P
                    </Text>
                  </Box>
                  <Text size="small">
                    <IconChevron direction={open ? 'up' : 'down'} />
                  </Text>
                </Box>
              )}
            >
              <MenuItem icon={<IconProfile />}>Profile</MenuItem>
              <MenuItem icon={<IconSettings />}>Settings</MenuItem>
              <MenuItemDivider />
              <MenuItem tone="critical">Sign out</MenuItem>
            </MenuRenderer>
          ) : (
            <Button size="small">Sign in</Button>
          )}
        </Spread>
      </PageBlock>
      {divider ? (
        <Box
          component="hr"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          className={styles.divider}
        />
      ) : null}
    </Box>
  );
};
