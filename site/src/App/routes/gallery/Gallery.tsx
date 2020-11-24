import React, {
  Fragment,
  ReactNode,
  memo,
  useEffect,
  useState,
  useRef,
  ComponentProps,
} from 'react';
import { chunk, memoize } from 'lodash';
import copy from 'copy-to-clipboard';
import { useIntersection } from 'react-use';

import {
  Stack,
  Text,
  Heading,
  Box,
  Badge,
  Inline,
  Link,
  TextLink,
  Columns,
  Column,
  Disclosure,
  Divider,
  Tiles,
} from '../../../../../lib/components';
import { getHistory, isNew } from '../../Updates';
import { CopyIcon } from '../../Code/CopyIcon';
import { CodeButton, formatSnippet } from '../../Code/Code';
import { ComponentExample } from '../../../types';
import { ThemedExample } from '../../ThemeSetting';
import {
  galleryComponents as allGalleryComponents,
  getComponentDocs,
} from '../../navigationHelpers';
import { Overlay } from '../../../../../lib/components/private/Overlay/Overlay';
import { PlayroomStateProvider } from '../../../../../lib/playroom/playroomState';
import { useSourceFromExample } from '../../../../../lib/utils/useSourceFromExample';
import * as icons from '../../../../../lib/components/icons';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const COLUMN_SIZE = 4;

export const galleryComponents = allGalleryComponents.map(
  ({ examples, ...rest }) => ({
    ...rest,
    examples: chunk(examples, COLUMN_SIZE),
  }),
);

export const galleryIcons = Object.keys(icons).map((iconName) => {
  const IconComponent = icons[iconName as keyof typeof icons];

  return {
    name: iconName,
    examples: [
      [
        {
          Container: ({ children }: { children: ReactNode }) => (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              paddingY="medium"
              paddingX="xxlarge"
            >
              <Box flexShrink={0} style={{ height: 60, width: 60 }}>
                {children}
              </Box>
            </Box>
          ),
          Example: () => <IconComponent size="fill" />,
          code: `<${iconName} />`,
        },
      ],
    ],
  };
});

const getRowsFor = memoize((type: 'components' | 'icons') => {
  const items = type === 'components' ? galleryComponents : galleryIcons;

  const ratio = Math.max(
    (window.innerWidth / window.innerHeight) *
      (type === 'components' ? 0.65 : 0.5),
    1,
  );
  const rowLength = Math.floor(Math.sqrt(items.length) * ratio);

  return chunk(items, rowLength);
});

const Mask = ({
  children,
  background,
}: {
  children: ReactNode;
  background: ComponentExample['background'];
}) => {
  const elRef = useRef<HTMLElement | null>(null);
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });
  const intersection = useIntersection(elRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  useEffect(() => {
    if (elRef.current) {
      setDimensions({
        w: elRef.current.offsetWidth,
        h: elRef.current.offsetHeight,
      });
    }
  }, []);

  const masked = Boolean(intersection && intersection.intersectionRatio === 0);

  return (
    <Box
      ref={elRef}
      position="relative"
      style={{
        minHeight: dimensions.h > 0 ? dimensions.h : undefined,
        minWidth: dimensions.w > 0 ? dimensions.w : undefined,
      }}
    >
      <Box width="full" height="full">
        {masked ? null : children}
      </Box>
      <Overlay
        background={background}
        borderRadius="standard"
        transition="fast"
        visible={masked}
      />
    </Box>
  );
};

interface RenderExampleProps {
  id: string;
  example: ComponentExample;
}
const RenderExample = ({ id, example }: RenderExampleProps) => {
  const { label, Container = DefaultContainer, background = 'body' } = example;
  const { code, value } = useSourceFromExample(id, example);

  return (
    <Stack space="small">
      <Columns space="medium" alignY="center">
        <Column>
          <Text tone="secondary">{label}</Text>
        </Column>
        {code ? (
          <Column width="content">
            <CodeButton
              title="Copy code to clipboard"
              onClick={() => copy(formatSnippet(code))}
              successLabel="Copied!"
            >
              <CopyIcon /> Copy code
            </CodeButton>
          </Column>
        ) : null}
      </Columns>
      {value ? (
        <ThemedExample background={background}>
          <Mask background={background}>
            <Container>
              <Box height="full" width="full" style={{ cursor: 'auto' }}>
                {value}
              </Box>
            </Container>
          </Mask>
        </ThemedExample>
      ) : null}
    </Stack>
  );
};

const GalleryItem = ({ item }: { item: typeof galleryComponents[number] }) => {
  const componentDocs = getComponentDocs({
    componentName: item.name,
    isIcon: /^icon/i.test(item.name),
  });
  const relevantNames = componentDocs.subComponents
    ? [item.name, ...componentDocs.subComponents]
    : [item.name];

  const history = getHistory(...relevantNames);
  const markAsNew = isNew(item.name);
  const actualUpdateCount = history.filter(
    (historyItem) => historyItem.isRecent,
  ).length;
  const updateCount = markAsNew ? actualUpdateCount - 1 : actualUpdateCount;

  const isAnIcon = componentDocs.category === 'Icon';

  return (
    <Box
      background="card"
      borderRadius="standard"
      padding={isAnIcon ? 'large' : 'xxlarge'}
      data-braid-component-name={item.name}
    >
      <Stack space={isAnIcon ? 'small' : 'xxlarge'}>
        <Stack space="large">
          <Inline space="small" alignY="center">
            <Box position="relative">
              <Heading level={isAnIcon ? '3' : '2'}>
                <TextLink
                  href={`/components/${item.name}`}
                  target="gallery-detail"
                >
                  {isAnIcon ? item.name.replace('Icon', '') : item.name}
                </TextLink>
              </Heading>
            </Box>
            {markAsNew ? (
              <Box
                component={Link}
                cursor="pointer"
                href={`/components/${item.name}/releases`}
                target="gallery-detail"
              >
                <Badge
                  tone="positive"
                  weight="strong"
                  title="Added in the last two months"
                  bleedY
                >
                  New
                </Badge>
              </Box>
            ) : null}
            {updateCount > 0 ? (
              <Box
                component={Link}
                cursor="pointer"
                href={`/components/${item.name}/releases`}
                target="gallery-detail"
              >
                <Badge
                  tone="promote"
                  weight="strong"
                  title={`${updateCount} update${
                    updateCount === 1 ? '' : 's'
                  } in the last two months`}
                  bleedY
                >
                  {`${updateCount} update${updateCount === 1 ? '' : 's'}`}
                </Badge>
              </Box>
            ) : undefined}
          </Inline>
          {'description' in componentDocs &&
          componentDocs.description &&
          !isAnIcon ? (
            <Box style={{ width: '700px' }}>
              <Disclosure
                collapseLabel="Hide description"
                expandLabel="Show description"
                id="id"
              >
                {componentDocs.description}
              </Disclosure>
            </Box>
          ) : null}
        </Stack>

        <Columns space="xlarge">
          {item.examples.map((exampleChunk, idx) => (
            <Column key={`${item.name}_${idx}`}>
              <Stack space="xlarge">
                {exampleChunk.map((example, index) => (
                  <Box
                    style={{
                      width: isAnIcon ? undefined : '700px',
                    }}
                    key={`${example.label}_${index}`}
                  >
                    <PlayroomStateProvider>
                      <RenderExample
                        id={`${example.label}_${index}`}
                        example={example}
                      />
                    </PlayroomStateProvider>
                  </Box>
                ))}
              </Stack>
            </Column>
          ))}
        </Columns>

        {'alternatives' in componentDocs ? (
          <Stack space="large">
            <Divider />
            <Stack space="medium">
              <Text size="small" weight="strong" tone="secondary">
                Alternatives
              </Text>
              <Tiles
                space="xxlarge"
                columns={
                  Math.min(item.examples.length * 2, 6) as ComponentProps<
                    typeof Tiles
                  >['columns']
                }
              >
                {componentDocs.alternatives.map((alt) => (
                  <Stack space="medium" key={alt.name}>
                    <Text size="xsmall" weight="strong">
                      {alt.name}
                    </Text>
                    <Text size="xsmall" tone="secondary">
                      {alt.description}
                    </Text>
                  </Stack>
                ))}
              </Tiles>
            </Stack>
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};

export const Gallery = memo(() => (
  <Box display="flex">
    <Box>
      <Stack space="xxlarge">
        <Box padding="xxlarge">
          <Heading level="1">
            <span style={{ fontSize: '3em' }}>Components</span>
          </Heading>
        </Box>
        <Box>
          {getRowsFor('components').map((row, index) => (
            <Columns space="none" key={index}>
              {row.map((item) => (
                <Column key={item.name} width="content">
                  <Box padding="xxlarge">
                    <GalleryItem item={item} />
                  </Box>
                </Column>
              ))}
            </Columns>
          ))}
        </Box>
      </Stack>
    </Box>
    <Box style={{ paddingLeft: 800 }}>
      <Box data-braid-component-name="Icons">
        <Stack space="xxlarge">
          <Box padding="xxlarge">
            <Heading level="1">
              <span style={{ fontSize: '3em' }}>Icons</span>
            </Heading>
          </Box>
          <Box>
            {getRowsFor('icons').map((row, index) => (
              <Columns space="none" key={index}>
                {row.map((item) => (
                  <Column key={item.name} width="content">
                    <Box padding="small">
                      <GalleryItem item={item} />
                    </Box>
                  </Column>
                ))}
              </Columns>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  </Box>
));
