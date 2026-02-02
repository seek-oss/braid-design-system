import { useState, type FC } from 'react';

import {
  Box,
  PageBlock,
  Columns,
  Column,
  MenuRenderer,
  IconLocation,
  IconChevron,
  MenuItem,
  IconTick,
  Inline,
  TextLink,
  Text,
  Stack,
  ContentBlock,
} from '../../../components';

import * as styles from './PlaceholderFooter.css';

interface FooterProps {
  divider?: boolean;
}

const countries = [
  'Australia',
  'Hong Kong',
  'Indonesia',
  'Malaysia',
  'New Zealand',
  'Philippines',
  'Singapore',
  'Thailand',
];
export const PlaceholderFooter: FC<FooterProps> = ({ divider = true }) => {
  const [footerCountry, setFooterCountry] = useState('Australia');

  return (
    <Box
      component="footer"
      background="surface"
      position="relative"
      paddingY="gutter"
    >
      {divider ? (
        <Box
          component="hr"
          position="absolute"
          top={0}
          left={0}
          right={0}
          className={styles.divider}
        />
      ) : null}
      <PageBlock width="large">
        <Stack space="large">
          <Columns
            space={{ mobile: 'medium', tablet: 'small' }}
            collapseBelow="tablet"
          >
            <Column width="content">
              <MenuRenderer
                offsetSpace="xxsmall"
                size="small"
                placement="top"
                reserveIconSpace
                trigger={(triggerProps, { open }) => (
                  <Box
                    component="button"
                    userSelect="none"
                    cursor="pointer"
                    borderRadius="small"
                    display="block"
                    style={{ outlineOffset: '.2em' }}
                    {...triggerProps}
                  >
                    <Text size="small" icon={<IconLocation />}>
                      {footerCountry}{' '}
                      <IconChevron
                        direction={open ? 'up' : 'down'}
                        alignY="lowercase"
                      />
                    </Text>
                  </Box>
                )}
              >
                {countries.map((c) => (
                  <MenuItem
                    icon={footerCountry === c ? <IconTick /> : null}
                    onClick={() => setFooterCountry(c)}
                    key={c}
                  >
                    {c}
                  </MenuItem>
                ))}
              </MenuRenderer>
            </Column>
            <Column>
              <Inline
                align={{ mobile: 'left', tablet: 'right' }}
                space="small"
                collapseBelow="tablet"
              >
                <Text size="small" tone="secondary">
                  <TextLink href="#" weight="weak">
                    Terms & conditions
                  </TextLink>
                </Text>
                <Text size="small" tone="secondary">
                  <TextLink href="#" weight="weak">
                    Security
                  </TextLink>
                </Text>
                <Text size="small" tone="secondary">
                  <TextLink href="#" weight="weak">
                    Privacy
                  </TextLink>
                </Text>
                <Text size="small" tone="secondary">
                  <TextLink href="#" weight="weak">
                    Contact Us
                  </TextLink>
                </Text>
              </Inline>
            </Column>
          </Columns>
          <ContentBlock width="small" align="left">
            <Text size="small" tone="secondary">
              This is a placeholder footer for Playroom. Products should adopt
              the correct Candidate or Hirer specific version relevant to their
              experience.
            </Text>
          </ContentBlock>
        </Stack>
      </PageBlock>
    </Box>
  );
};
