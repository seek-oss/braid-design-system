import React, {
  Fragment,
  ReactNode,
  memo,
  useEffect,
  useState,
  useRef,
} from 'react';
import { chunk, memoize } from 'lodash';
import copy from 'copy-to-clipboard';
import { useIntersection } from 'react-use';
import reactElementToJSXString from 'react-element-to-jsx-string';

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
} from '../../../../../lib/components';
import { getHistory, isNew } from '../../Updates';
import { CopyIcon } from '../../Code/CopyIcon';
import { CodeButton } from '../../Code/Code';
import { ComponentExample } from '../../../types';
import { ThemedExample } from '../../ThemeSetting';
import { documentedComponents } from '../../navigationHelpers';
import { Overlay } from '../../../../../lib/components/private/Overlay/Overlay';
import * as icons from '../../../../../lib/components/icons';

const noop = () => {};
const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const COLUMN_SIZE = 4;

export const galleryComponents = documentedComponents
  .filter(
    ({ category, deprecationWarning, gallery, name }) =>
      category !== 'Logic' &&
      !deprecationWarning &&
      gallery !== false &&
      name !== 'Box' &&
      !/hidden/i.test(name),
  )
  .map(({ examples, ...rest }) => ({
    ...rest,
    examples: chunk(
      examples.filter(
        ({ docsSite, gallery, Example }) =>
          Example && (gallery || (docsSite !== false && gallery !== false)),
      ),
      COLUMN_SIZE,
    ),
  }));

export const galleryIcons = Object.keys(icons).map((iconName) => {
  const IconComponent = icons[iconName as keyof typeof icons];

  return {
    name: iconName,
    category: 'Icon' as const,
    screenshotWidths: [],
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

const GalleryItem = ({
  component,
}: {
  component: typeof galleryComponents[number];
}) => {
  const relevantNames = component.subComponents
    ? [component.name, ...component.subComponents]
    : [component.name];

  const history = getHistory(...relevantNames);
  const markAsNew = isNew(component.name);
  const actualUpdateCount = history.filter((item) => item.isRecent).length;
  const updateCount = markAsNew ? actualUpdateCount - 1 : actualUpdateCount;

  const isAnIcon = component.category === 'Icon';

  return (
    <Box
      background="card"
      borderRadius="standard"
      padding={isAnIcon ? 'large' : 'xxlarge'}
      data-braid-component-name={component.name}
    >
      <Stack space={isAnIcon ? 'small' : 'xxlarge'}>
        <Stack space="large">
          <Inline space="small" alignY="center">
            <Box position="relative">
              <Heading level={isAnIcon ? '3' : '2'}>
                <TextLink
                  href={`/components/${component.name}`}
                  target="gallery-detail"
                >
                  {isAnIcon
                    ? component.name.replace('Icon', '')
                    : component.name}
                </TextLink>
              </Heading>
            </Box>
            {markAsNew ? (
              <Box
                component={Link}
                cursor="pointer"
                href={`/components/${component.name}/releases`}
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
                href={`/components/${component.name}/releases`}
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
          {component.description && !isAnIcon ? (
            <Box style={{ width: '700px' }}>
              <Disclosure
                collapseLabel="Hide description"
                expandLabel="Show description"
                id="id"
              >
                {component.description}
              </Disclosure>
            </Box>
          ) : null}
        </Stack>
        <Columns space="xlarge">
          {component.examples.map((exampleChunk, idx) => (
            <Column key={`${component.name}_${idx}`}>
              <Stack space="xlarge">
                {exampleChunk.map(
                  (
                    {
                      Example,
                      Container = DefaultContainer,
                      background = 'body',
                      label,
                      code,
                    },
                    index,
                  ) => {
                    const codeAsString =
                      Example && !code
                        ? reactElementToJSXString(
                            Example({ id: 'id', handler: noop }), // eslint-disable-line new-cap
                            {
                              useBooleanShorthandSyntax: false,
                              showDefaultProps: false,
                              showFunctions: false,
                              filterProps: ['onChange', 'onBlur', 'onFocus'],
                            },
                          )
                        : code;

                    return (
                      <Box
                        style={{
                          width: isAnIcon ? undefined : '700px',
                        }}
                        key={`${label}_${index}`}
                      >
                        <Stack space="small">
                          <Columns space="medium" alignY="center">
                            <Column>
                              <Text tone="secondary">{label}</Text>
                            </Column>
                            {codeAsString ? (
                              <Column width="content">
                                <CodeButton
                                  title="Copy code to clipboard"
                                  onClick={() => copy(codeAsString)}
                                  successLabel="Copied!"
                                >
                                  <CopyIcon /> Copy code
                                </CodeButton>
                              </Column>
                            ) : null}
                          </Columns>
                          {Example ? (
                            <ThemedExample background={background}>
                              <Mask background={background}>
                                <Container>
                                  <Box
                                    height="full"
                                    width="full"
                                    style={{ cursor: 'auto' }}
                                  >
                                    <Example
                                      id={`${label}_${index}`}
                                      handler={noop}
                                    />
                                  </Box>
                                </Container>
                              </Mask>
                            </ThemedExample>
                          ) : null}
                        </Stack>
                      </Box>
                    );
                  },
                )}
              </Stack>
            </Column>
          ))}
        </Columns>
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
              {row.map((component) => (
                <Column key={component.name} width="content">
                  <Box padding="xxlarge">
                    <GalleryItem component={component} />
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
                {row.map((component) => (
                  <Column key={component.name} width="content">
                    <Box padding="small">
                      <GalleryItem component={component} />
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
