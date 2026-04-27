import {
  Tiles,
  Box,
  Text,
  Link,
  Stack,
  TextField,
  IconSearch,
  Strong,
} from 'braid-src/lib/components';
import * as icons from 'braid-src/lib/components/icons';
import { Overlay } from 'braid-src/lib/components/private/Overlay/Overlay';
import didYouMean, { ReturnTypeEnums } from 'didyoumean2';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { iconsKeywords } from './iconsKeywords';

import * as styles from './IconsBrowse.css';

export type IconName = keyof typeof icons;

const iconNames = Object.keys(icons).map((icon) => ({
  name: icon as IconName,
  displayName: icon.replace(/^Icon/, ''),
  keywords: iconsKeywords[icon as IconName],
}));

const getFilteredIcons = (searchText: string) => {
  if (!searchText) {
    return { list: iconNames, isDisambiguated: false };
  }

  const filteredList = iconNames.filter(
    ({ name, keywords }) =>
      name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
      keywords.some((keyword) => keyword.startsWith(searchText)),
  );

  if (filteredList.length === 0) {
    const suggestions =
      didYouMean(searchText, iconNames, {
        returnType: ReturnTypeEnums.ALL_CLOSEST_MATCHES,
        matchPath: ['displayName'],
      }) ?? [];
    const suggestionList = Array.isArray(suggestions)
      ? suggestions
      : [suggestions];
    return {
      list: suggestionList,
      isDisambiguated: suggestionList.length > 0,
    };
  }

  return { list: filteredList, isDisambiguated: false };
};

const IconTile = ({
  icon,
  suggestion = false,
  onNavigate,
}: {
  icon: (typeof iconNames)[number];
  suggestion?: boolean;
  onNavigate: (href: string) => void;
}) => {
  const IconComponent = icons[icon.name];
  const href = `/components/${icon.name}`;

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
      }}
    >
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY="medium"
        paddingX="xsmall"
        cursor="pointer"
        className={styles.iconContainer}
      >
        <Box height="touchable" className={styles.icon}>
          <IconComponent
            size="fill"
            tone={suggestion ? 'secondary' : undefined}
          />
        </Box>
        <Box paddingTop="medium" width="full">
          <Text tone="secondary" size="xsmall" maxLines={1} align="center">
            {icon.displayName}
          </Text>
        </Box>
        <Overlay
          boxShadow="borderNeutralLight"
          borderRadius="standard"
          transition="fast"
          className={styles.overlay}
        />
        <Overlay
          boxShadow="medium"
          borderRadius="standard"
          transition="fast"
          className={styles.overlay}
        />
      </Box>
    </Link>
  );
};

export const IconsBrowse = () => {
  const initialSearch: string = useLocation().state?.iconBrowseSearch ?? '';
  const navigate = useNavigate();
  const [{ searchTerm, list: iconList, isDisambiguated }, setSearch] = useState(
    () => ({ searchTerm: initialSearch, ...getFilteredIcons(initialSearch) }),
  );

  useEffect(() => {
    const current = window.history.state ?? {};
    window.history.replaceState(
      { ...current, usr: { iconBrowseSearch: searchTerm } },
      '',
    );
  }, [searchTerm]);

  return (
    <Stack space="medium">
      <Stack space="large">
        <TextField
          aria-label="Search for an icon"
          icon={<IconSearch />}
          placeholder="Search"
          autoComplete="off"
          autoFocus={true}
          value={searchTerm}
          onChange={({ currentTarget }) => {
            const searchText = currentTarget.value;
            setSearch({
              searchTerm: searchText,
              ...getFilteredIcons(searchText),
            });
          }}
        />

        {isDisambiguated || iconList.length === 0 ? (
          <Text tone="secondary">
            No icons matching <Strong>`{searchTerm}`</Strong>
            {isDisambiguated ? (
              <span>
                , did you mean{' '}
                {iconList.length === 1 ? (
                  <Strong>`{iconList[0].displayName}`</Strong>
                ) : (
                  'one of these'
                )}
                :
              </span>
            ) : (
              '.'
            )}
          </Text>
        ) : null}
      </Stack>

      <Tiles
        space="none"
        columns={{ mobile: 3, tablet: 6, desktop: 7, wide: 6 }}
      >
        {iconList.map((icon) => (
          <IconTile
            key={icon.name}
            icon={icon}
            suggestion={isDisambiguated}
            onNavigate={(href) =>
              navigate(href, { state: { iconBrowseSearch: searchTerm } })
            }
          />
        ))}
      </Tiles>
    </Stack>
  );
};
