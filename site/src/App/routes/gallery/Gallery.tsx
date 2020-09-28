import React, {
  Fragment,
  ReactNode,
  memo,
  useEffect,
  useState,
  useRef,
} from 'react';
import { chunk } from 'lodash';
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
import { getHistory } from '../../Updates';
import { CopyIcon } from '../../Code/CopyIcon';
import { CodeButton } from '../../Code/Code';
import { ComponentExample } from '../../../types';
import { ThemedExample } from '../../ThemeSetting';
import { documentedComponents } from '../../navigationHelpers';
import { Overlay } from '../../../../../lib/components/private/Overlay/Overlay';

const noop = () => {};
const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const COLUMN_SIZE = 4;

const galleryComponents = documentedComponents
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

const rowLength = Math.floor(Math.sqrt(galleryComponents.length));
const rows = chunk(galleryComponents, rowLength);

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
  const updateCount = history.filter((item) => item.isRecent).length;

  return (
    <Box padding="xxlarge" data-braid-component-name={component.name}>
      <Stack space="xxlarge">
        <Stack space="large">
          <Inline space="small" alignY="top">
            <Heading level="2">
              <TextLink
                href={`/components/${component.name}`}
                target="gallery-detail"
              >
                {component.name}
              </TextLink>
            </Heading>
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
                  title={`${updateCount} release${
                    updateCount === 1 ? '' : 's'
                  } in the last two months`}
                  bleedY
                >
                  {`${updateCount} new release${updateCount === 1 ? '' : 's'}`}
                </Badge>
              </Box>
            ) : undefined}
          </Inline>
          {component.description ? (
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
                    },
                    index,
                  ) => {
                    const codeAsString = Example
                      ? reactElementToJSXString(
                          Example({ id: 'id', handler: noop }), // eslint-disable-line new-cap
                          {
                            useBooleanShorthandSyntax: false,
                            showDefaultProps: false,
                            showFunctions: false,
                            filterProps: ['onChange', 'onBlur', 'onFocus'],
                          },
                        )
                      : '';

                    return (
                      <Box style={{ width: '700px' }} key={`${label}_${index}`}>
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
                                  <CopyIcon /> Copy
                                </CodeButton>
                              </Column>
                            ) : null}
                          </Columns>
                          {Example ? (
                            <ThemedExample background={background}>
                              <Mask background={background}>
                                <Container>
                                  <Box style={{ cursor: 'auto' }}>
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
  <Box>
    {rows.map((row, index) => (
      <Columns space="xxlarge" key={index}>
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
));
