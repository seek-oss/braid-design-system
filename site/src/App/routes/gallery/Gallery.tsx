import source from '@braid-design-system/source.macro';
import {
  Stack,
  Text,
  Heading,
  Badge,
  Inline,
  Link,
  TextLink,
  Columns,
  Column,
  Divider,
  TextLinkButton,
  IconNewWindow,
  IconAdd,
  IconMinus,
  TextDropdown,
  Strong,
  TooltipRenderer,
  Button,
  Secondary,
  IconCopy,
  ButtonIcon,
  Spread,
} from 'braid-src/lib/components';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from 'braid-src/lib/components/Box/Box';
import * as icons from 'braid-src/lib/components/icons';
import {
  IconContainer,
  type IconContainerProps,
} from 'braid-src/lib/components/icons/IconContainer';
import type { SVGProps } from 'braid-src/lib/components/icons/SVGTypes';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import copy from 'copy-to-clipboard';
import chunk from 'lodash.chunk';
import memoize from 'lodash.memoize';
import panzoom from 'panzoom';
import {
  type ReactNode,
  Fragment,
  memo,
  useEffect,
  useState,
  useRef,
  useCallback,
  createContext,
  useContext,
} from 'react';

import type { ComponentExample } from '../../../types';
import { CodeButton, formatSnippet } from '../../Code/Code';
import { Logo } from '../../Logo/Logo';
import {
  useThemeSettings,
  ThemedExample,
  ThemeToggle,
} from '../../ThemeSetting';
import { getHistory, isNew } from '../../Updates';
import {
  galleryComponents as allGalleryComponents,
  getComponentDocs,
} from '../../navigationHelpers';
import { useSourceFromExample } from '../../useSourceFromExample/useSourceFromExample';

import { GalleryPanel } from './GalleryPanel';

import * as styles from './gallery.css';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const COLUMN_SIZE = 4;

const galleryComponentNames = allGalleryComponents.map(({ name }) => name);

const allStandardGalleryComponents = allGalleryComponents.map(
  ({ examples, ...rest }) => ({
    ...rest,
    examples: chunk(examples, COLUMN_SIZE),
  }),
);

const galleryContentComponents = allStandardGalleryComponents.filter(
  (component) => getComponentDocs(component.name).category === 'Content',
);

const galleryLayoutComponents = allStandardGalleryComponents.filter(
  (component) => getComponentDocs(component.name).category === 'Layout',
);

const galleryIcons: typeof galleryContentComponents = Object.keys(icons).map(
  (iconName) => {
    const IconComponent = icons[iconName as keyof typeof icons];

    return {
      name: iconName,
      itemWidth: 'icon',
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
            Example: () => source(<IconComponent size="fill" />),
            code: `<${iconName} />`,
          },
        ],
      ],
    };
  },
);

type SetName = 'components' | 'layout' | 'icons';
const getRowsFor = memoize((type: SetName) => {
  const componentTypeMap = {
    components: galleryContentComponents,
    icons: galleryIcons,
    layout: galleryLayoutComponents,
  };

  const items = componentTypeMap[type];

  const ratio = Math.max(
    (window.innerWidth / window.innerHeight) * (type === 'icons' ? 0.5 : 0.65),
    1,
  );
  const rowLength = Math.ceil(Math.sqrt(items.length) * ratio);

  return chunk(items, rowLength);
});

interface RenderExampleProps {
  example: ComponentExample;
  isIcon: boolean;
}
const RenderExample = ({ example, isIcon }: RenderExampleProps) => {
  const { label, Container = DefaultContainer } = example;
  const { code, value } = useSourceFromExample(example);

  const CopyCodeButton = () => (
    <Spread space="medium" alignY="center">
      {label ? (
        <Text component="h5" tone="secondary">
          {label}
        </Text>
      ) : null}
      {code ? (
        <CodeButton
          title="Copy code to clipboard"
          onClick={async () => copy(await formatSnippet(code))}
          successLabel="Copied!"
        >
          <IconCopy /> Copy code
        </CodeButton>
      ) : null}
    </Spread>
  );

  const children = [
    <CopyCodeButton key="copyCode" />,
    value ? (
      <ThemedExample key="themedExample">
        <Container>
          <Box height="full" width="full" style={{ cursor: 'auto' }}>
            {value}
          </Box>
        </Container>
      </ThemedExample>
    ) : null,
  ];

  return (
    <Stack space={isIcon ? 'xxsmall' : 'small'}>
      {isIcon ? children.reverse() : children}
    </Stack>
  );
};

const widthMap = {
  icon: undefined,
  standard: '700px',
  wide: '1500px',
};
const GalleryItemExample = ({
  exampleChunk,
  isIcon,
  width,
}: {
  exampleChunk: ComponentExample[];
  isIcon: boolean;
  width: keyof typeof widthMap;
}) => (
  <Stack space="xlarge">
    {exampleChunk.map((example, index) => (
      <Box
        component={isIcon ? undefined : 'section'}
        style={{
          width: widthMap[width],
        }}
        key={`${example.label}_${index}`}
        className={styles.animationsOnlyOnHover}
      >
        <PlayroomStateProvider>
          <RenderExample example={example} isIcon={isIcon} />
        </PlayroomStateProvider>
      </Box>
    ))}
  </Stack>
);

const GalleryItem = ({
  item,
}: {
  item: (typeof allStandardGalleryComponents)[number];
}) => {
  const jumpTo = useContext(JumpToContext);
  const componentDocs = getComponentDocs(item.name);
  const relevantNames = componentDocs.subComponents
    ? [item.name, ...componentDocs.subComponents]
    : [item.name];

  const history = getHistory(...relevantNames);
  const markAsNew = isNew(item.name);
  const actualUpdateCount = history.filter(
    (historyItem) => historyItem.isRecent,
  ).length;
  const updateCount = markAsNew ? actualUpdateCount - 1 : actualUpdateCount;

  const isIcon = componentDocs.category === 'Icon';

  return (
    <Box
      component="article"
      background="surface"
      borderRadius="xlarge"
      padding={isIcon ? 'large' : 'xxlarge'}
      margin={isIcon ? 'small' : 'xxlarge'}
      data-braid-component-name={item.name}
      tabIndex={0}
      onClick={(ev) => {
        if (ev.detail === 2) {
          jumpTo(item.name);
        }
      }}
    >
      <Stack space={isIcon ? 'medium' : 'xxlarge'}>
        <Box position="relative">
          <Inline space="small" alignY="center">
            <Heading component="h3" level={isIcon ? '3' : '2'}>
              <TextLink
                href={`/components/${item.name}`}
                target="gallery-detail"
              >
                {isIcon ? item.name.replace('Icon', '') : item.name}
              </TextLink>
            </Heading>
            {markAsNew ? (
              <Box
                component={Link}
                cursor="pointer"
                href={`/components/${item.name}/releases`}
                target="gallery-detail"
                title="Added in the last two months"
              >
                <Box pointerEvents="none">
                  <Badge tone="positive" weight="strong" bleedY>
                    New
                  </Badge>
                </Box>
              </Box>
            ) : null}
            {updateCount > 0 ? (
              <Box
                component={Link}
                cursor="pointer"
                href={`/components/${item.name}/releases`}
                target="gallery-detail"
                title={`${updateCount} update${
                  updateCount === 1 ? '' : 's'
                } in the last two months`}
              >
                <Box pointerEvents="none">
                  <Badge tone="promote" weight="strong" bleedY>
                    {`${updateCount} update${updateCount === 1 ? '' : 's'}`}
                  </Badge>
                </Box>
              </Box>
            ) : undefined}
          </Inline>
        </Box>

        <Columns space="xlarge">
          {item.examples.map((exampleChunk, idx) => (
            <Column key={`${item.name}_${idx}`}>
              <GalleryItemExample
                exampleChunk={exampleChunk}
                isIcon={isIcon}
                width={item.itemWidth}
              />
            </Column>
          ))}
        </Columns>

        {componentDocs.alternatives.length > 0 ? (
          <Stack space="large">
            <Divider />
            <Box component="aside">
              <Stack space="large">
                <Text component="h4" size="xsmall" tone="secondary">
                  <span style={{ textTransform: 'uppercase' }}>
                    Alternatives
                  </span>
                </Text>
                <Stack space="medium">
                  {componentDocs.alternatives.map((alt) => (
                    <Text size="xsmall" tone="secondary" key={alt.name}>
                      <Strong>
                        {galleryComponentNames.indexOf(alt.name) > -1 ? (
                          <TextLinkButton
                            weight="weak"
                            hitArea="large"
                            onClick={() => jumpTo(alt.name)}
                          >
                            {alt.name}
                          </TextLinkButton>
                        ) : (
                          <TextLink
                            weight="weak"
                            href={`/${alt.section || 'components'}/${alt.name}`}
                            hitArea="large"
                            target="_blank"
                          >
                            {alt.name} <IconNewWindow />
                          </TextLink>
                        )}
                      </Strong>{' '}
                      — {alt.description}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};
interface StageProps {
  setName: SetName;
  title: string;
}
const Stage = ({ setName, title }: StageProps) => {
  const items = getRowsFor(setName);
  const rowLength = items[0].length;

  return (
    <Box data-braid-component-name={title}>
      <Stack space="xxlarge">
        <Box padding="xxlarge">
          <Heading component="h2" level="1">
            <span style={{ fontSize: '3em' }}>{title}</span>
          </Heading>
        </Box>
        <Box>
          {items.map((row, index) => (
            <Columns space="none" key={`row-${index}`}>
              {Array.from({ length: rowLength }).map((_, item) => (
                <Column
                  key={`rowItem-${item}`}
                  width={row[item] ? 'content' : undefined}
                >
                  {row[item] ? <GalleryItem item={row[item]} /> : null}
                </Column>
              ))}
            </Columns>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const jumpToEdgeThreshold = 80;
interface FitToScreenDimensions {
  x: number;
  y: number;
  scale: number;
}
const calculateFitToScreenDimensions = (
  contentEl: HTMLDivElement,
): FitToScreenDimensions => {
  const width = contentEl.scrollWidth;
  const height = contentEl.scrollHeight;
  const xScale =
    (document.documentElement.clientWidth - jumpToEdgeThreshold * 2) / width;
  const yScale =
    (document.documentElement.clientHeight - jumpToEdgeThreshold * 2) / height;
  const scale = Math.min(xScale, yScale);

  return {
    x: (document.documentElement.clientWidth - width * scale) / 2,
    y: (document.documentElement.clientHeight - height * scale) / 2,
    scale,
  };
};

const zoomStep = 0.4;
const GalleryInternal = ({ children }: { children: ReactNode }) => {
  const { ready: themeReady } = useThemeSettings();
  const [ready, setReady] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const zoomInRef = useRef<HTMLButtonElement | null>(null);
  const zoomOutRef = useRef<HTMLButtonElement | null>(null);

  const [fitToScreenDims, setFitToScreenDimensions] =
    useState<FitToScreenDimensions | null>(null);
  const [zoom, setZoom] = useState(1);
  const [controller, setController] = useState<ReturnType<
    typeof panzoom
  > | null>(null);

  const zoomOut = useCallback(() => {
    if (controller) {
      const { scale } = controller.getTransform();
      const newScale = Math.ceil(scale / zoomStep) * zoomStep - zoomStep;
      const roundedNew = Math.round(newScale * 100) / 100;
      const roundedOld = Math.round(scale * 100) / 100;

      controller.smoothZoomAbs(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        roundedNew === roundedOld ? roundedNew - zoomStep : roundedNew,
      );
    }
  }, [controller]);

  const zoomIn = useCallback(() => {
    if (controller) {
      const { scale } = controller.getTransform();
      const newScale = Math.floor(scale / zoomStep) * zoomStep + zoomStep;
      const roundedNew = Math.round(newScale * 100) / 100;
      const roundedOld = Math.round(scale * 100) / 100;

      controller.smoothZoomAbs(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        roundedNew === roundedOld ? roundedNew + zoomStep : roundedNew,
      );
    }
  }, [controller]);

  const fitToScreen = () => {
    if (controller && fitToScreenDims) {
      controller.zoomAbs(0, 0, fitToScreenDims.scale);
      controller.moveTo(fitToScreenDims.x, fitToScreenDims.y);
    }
  };

  const actualSize = () => {
    if (controller) {
      controller.smoothZoomAbs(
        document.documentElement.clientWidth / 2,
        document.documentElement.clientHeight / 2,
        1,
      );
    }
  };
  useEffect(() => {
    if (themeReady && fitToScreenDims) {
      setReady(true);

      const keyboardZoomHandler = (e: KeyboardEvent) => {
        const cmdOrCtrl = navigator.platform.match('Mac')
          ? e.metaKey
          : e.ctrlKey;

        const plus = e.keyCode === 187;
        const minus = e.keyCode === 189;

        if (cmdOrCtrl && (plus || minus)) {
          e.preventDefault();
          e.stopPropagation();

          if (plus && zoomInRef.current) {
            zoomInRef.current.focus();
            zoomIn();
          }

          if (minus && zoomOutRef.current) {
            zoomOutRef.current.focus();
            zoomOut();
          }
        }
      };

      const resizeHandler = () => {
        if (contentRef.current && controller) {
          const dimensions = calculateFitToScreenDimensions(contentRef.current);
          controller.setMinZoom(dimensions.scale);
          setFitToScreenDimensions(dimensions);
        }
      };

      window.addEventListener('keydown', keyboardZoomHandler);
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('keydown', keyboardZoomHandler);
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, [
    themeReady,
    fitToScreenDims,
    controller,
    setFitToScreenDimensions,
    zoomIn,
    zoomOut,
  ]);

  const jumpTo = useCallback(
    (name: string) => {
      const component = document.querySelector<HTMLDivElement>(
        `[data-braid-component-name=${name}]`,
      );

      if (controller && component) {
        const { scale } = controller.getTransform();
        const viewportWidth = document.documentElement.clientWidth;
        const viewportHeight = document.documentElement.clientHeight;
        const clientRect = component.getBoundingClientRect();
        const actualWidth = clientRect.width / scale + jumpToEdgeThreshold * 2;
        const actualHeight =
          clientRect.height / scale + jumpToEdgeThreshold * 2;

        const targetScale = Math.min(
          viewportWidth / actualWidth,
          viewportHeight / actualHeight,
        );

        const scaled = (n: number) => n * targetScale;
        const targetX =
          scaled(-component.offsetLeft + jumpToEdgeThreshold) +
          (viewportWidth - scaled(actualWidth)) / 2;
        const targetY =
          scaled(-component.offsetTop + jumpToEdgeThreshold) +
          (viewportHeight - scaled(actualHeight)) / 2;

        controller.zoomAbs(targetX, targetY, targetScale);
        controller.moveTo(targetX, targetY);
      }
    },
    [controller],
  );

  useEffect(() => {
    if (contentRef.current) {
      const contentEl = contentRef.current;
      const dimensions = calculateFitToScreenDimensions(contentEl);

      const c = panzoom(contentEl, {
        maxZoom: 20,
        minZoom: dimensions.scale,
        zoomDoubleClickSpeed: 1,
        filterKey: () => true, // disables panzoom default handling of keys
        beforeDoubleClick: () => true,
        beforeTouch: (e) =>
          // @ts-expect-error
          /^(a|button|select)$/i.test(e.target.tagName) ||
          // @ts-expect-error
          e.target.getAttribute('role') === 'button',
        beforeMouseDown: (e) =>
          // @ts-expect-error
          /^(a|button|select)$/i.test(e.target.tagName) ||
          // @ts-expect-error
          e.target.getAttribute('role') === 'button',
      });

      c.on('zoom', () => {
        if (c) {
          setZoom(c.getTransform().scale);
        }
      });

      c.zoomAbs(dimensions.x, dimensions.y, dimensions.scale);
      setController(c);
      setFitToScreenDimensions(dimensions);

      return () => {
        c?.dispose();
      };
    }
  }, [setZoom, setFitToScreenDimensions, setController]);

  return (
    <>
      <Box
        transition="fast"
        opacity={ready ? undefined : 0}
        className={styles.delayPanels}
      >
        <GalleryPanel top left>
          <Inline space="small" alignY="center">
            <Box
              component={Link}
              display="block"
              paddingX="xxsmall"
              cursor="pointer"
              title="Back to documentation"
              href="/"
            >
              <Logo iconOnly height={28} width={28} />
            </Box>
            <PanelDivider />
            <ThemeToggle size="small" weight="strong" />
          </Inline>
        </GalleryPanel>

        <GalleryPanel bottom right>
          <Box paddingX="xsmall">
            <Inline space="medium" alignY="center">
              <JumpToSelector onSelect={jumpTo} />

              <PanelDivider />
              <ButtonIcon
                label="Fit to screen"
                variant="transparent"
                onClick={fitToScreen}
                icon={<IconFitToScreen tone="secondary" />}
              />
              <ButtonIcon
                ref={zoomOutRef}
                label="Zoom Out"
                variant="transparent"
                onClick={zoomOut}
                icon={<IconMinus tone="secondary" />}
              />
              <TooltipRenderer tooltip={<Text>Zoom to actual size</Text>}>
                {({ triggerProps }) => (
                  <Button
                    variant="transparent"
                    tone="neutral"
                    size="small"
                    bleed
                    onClick={actualSize}
                    {...triggerProps}
                  >
                    <CurrentZoom zoom={zoom} />
                  </Button>
                )}
              </TooltipRenderer>
              <ButtonIcon
                ref={zoomInRef}
                label="Zoom In"
                variant="transparent"
                onClick={zoomIn}
                icon={<IconAdd tone="secondary" />}
              />
            </Inline>
          </Box>
        </GalleryPanel>
      </Box>

      <Box
        transition="fast"
        opacity={ready ? undefined : 0}
        className={styles.grabCursor}
      >
        <Box
          ref={contentRef}
          display="flex"
          userSelect="none"
          className={styles.contentWrapper}
        >
          <JumpToContext.Provider value={jumpTo}>
            {children}
          </JumpToContext.Provider>
        </Box>
      </Box>
    </>
  );
};

type JumpTo = (componentName: string) => void;
const JumpToContext = createContext<JumpTo>(() => {});

export const Gallery = () => (
  <GalleryInternal>
    <GalleryContent />
  </GalleryInternal>
);

const GalleryContent = () => (
  <>
    <Box component="section">
      <Stage setName="components" title="Components" />
    </Box>
    <Box component="section" style={{ paddingLeft: 800 }}>
      <Stage setName="layout" title="Layout" />
    </Box>
    <Box component="section" style={{ paddingLeft: 800 }}>
      <Stage setName="icons" title="Icons" />
    </Box>
  </>
);

const CurrentZoom = ({ zoom }: { zoom: number }) => (
  <Secondary>{Math.round(zoom * 100)}%</Secondary>
);

const jumpToPlaceholder = 'Jump to';
const componentList = [jumpToPlaceholder].concat(
  [...galleryComponentNames, 'Icons'].sort(),
);
const JumpToSelector = memo(({ onSelect }: { onSelect: JumpTo }) => {
  const [value, setValue] = useState(jumpToPlaceholder);

  return (
    <Text size="small" tone="secondary">
      <TextDropdown
        label="Jump to component"
        options={componentList}
        value={value}
        onBlur={() => {
          setValue(jumpToPlaceholder);
        }}
        onChange={(name) => {
          setValue(name);

          if (name !== jumpToPlaceholder) {
            onSelect(name);
          }
        }}
      />
    </Text>
  );
});

const PanelDivider = () => <Box aria-hidden className={styles.divider} />;

const IconFitToScreenSvg = ({ title, titleId, ...props }: SVGProps) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 5a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm18 0a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm-2.077 6.618a.999.999 0 00-.217-.326l-1.999-1.999a1 1 0 00-1.414 1.414l.293.293H8.414l.293-.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414-1.414L8.414 13h7.172l-.293.293a1 1 0 101.414 1.414l1.999-1.999a1.003 1.003 0 00.217-1.09z" />
  </svg>
);

const IconFitToScreen = (props: IconContainerProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconFitToScreenSvg} {...svgProps} />}
  </IconContainer>
);
