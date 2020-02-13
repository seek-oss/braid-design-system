import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useStyles } from 'sku/react-treat';
import didYouMean, { ReturnTypeEnums } from 'didyoumean2';
import { useBoxStyles } from '../../../../../lib/components/Box/useBoxStyles';
import {
  Inline,
  Box,
  Text,
  Stack,
  Heading,
  TextField,
  IconSearch,
  Strong,
} from '../../../../../lib/components';
import { Overlay } from '../../../../../lib/components/private/Overlay/Overlay';
import { Page } from '../../../types';
import * as icons from '../../../../../lib/components/icons';
import * as styleRefs from './iconography.treat';

type IconName = keyof typeof icons;

const iconNames = Object.keys(icons).map(icon => ({
  name: icon as IconName,
  displayName: icon.replace(/^Icon/, ''),
}));

const IconTile = ({
  icon,
  suggestion = false,
}: {
  icon: typeof iconNames[number];
  suggestion?: boolean;
}) => {
  const styles = useStyles(styleRefs);
  const IconComponent = icons[icon.name];

  return (
    <ReactRouterLink
      to={`/components/${icon.name}`}
      className={useBoxStyles({ component: 'a' })}
    >
      <Box
        position="relative"
        display={'flex'}
        flexDirection="column"
        alignItems="center"
        paddingX="xxsmall"
        paddingY="medium"
        cursor="pointer"
        className={styles.iconContainer}
      >
        <Box height="touchable" className={styles.icon}>
          <IconComponent
            size="fill"
            tone={suggestion ? 'secondary' : undefined}
          />
        </Box>
        <Box paddingTop="medium">
          <Text tone="secondary" size="xsmall">
            {icon.displayName}
          </Text>
        </Box>
        <Overlay
          boxShadow="borderStandard"
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
    </ReactRouterLink>
  );
};

const page: Page = {
  title: 'Iconography',
  Component: () => {
    const [iconList, setIconList] = useState(iconNames);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDisambiguated, setDisambiguated] = useState(false);

    return (
      <Stack space="large">
        <Heading level="2">Iconography</Heading>

        <Stack space="small">
          <Stack space="large">
            <TextField
              id="iconSearch"
              icon={<IconSearch />}
              placeholder="Search"
              autoComplete="off"
              autoFocus={true}
              value={searchTerm}
              onChange={({ currentTarget }) => {
                const searchText = currentTarget.value;

                setSearchTerm(searchText);
                const filteredList = iconNames.filter(
                  ({ name }) =>
                    searchText.length === 0 ||
                    name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
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

                  setDisambiguated(suggestionList && suggestionList.length > 0);
                  setIconList(suggestionList);
                } else {
                  setDisambiguated(false);
                  setIconList(filteredList);
                }
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

          <Inline space={['none', 'medium']}>
            {iconList.map(icon => (
              <IconTile
                key={icon.name}
                icon={icon}
                suggestion={isDisambiguated}
              />
            ))}
          </Inline>
        </Stack>
      </Stack>
    );
  },
};

export default page;
