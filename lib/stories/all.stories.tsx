import React, { ReactNode, Fragment } from 'react';
import { storiesOf } from 'sku/@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { uniq, flatten, values } from 'lodash';
import '../../reset';
import * as themes from '../themes';
import { ComponentExample, ComponentScreenshot } from '../../site/src/types';
import { PlayroomStateProvider } from '../playroom/playroomState';
import { useSourceFromExample } from '../utils/useSourceFromExample';
import { BraidProvider, ToastProvider } from '../components';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../components/Box/Box';
import { darkMode } from '../css/atoms/sprinkles.css';

const webFontLinkTags = uniq(
  flatten(values(themes).map((theme) => theme.webFonts)).map(
    (font) => font.linkTag,
  ),
).join('');
document.head.innerHTML += webFontLinkTags;

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const getComponentName = (filename: string) => {
  const matches = filename.match(/([a-zA-Z]+)(?:\.docs|\.screenshots)\.tsx?$/);
  if (!matches) {
    throw new Error(
      `Expected file name ending in .docs.tsx or .screenshots.tsx, got ${filename}`,
    );
  }

  return matches[1];
};

interface RenderExampleProps {
  example: ComponentExample;
}
const RenderExample = ({ example }: RenderExampleProps) => {
  const { label, Container = DefaultContainer, background = 'body' } = example;
  const { value } = useSourceFromExample('id', example);

  return (
    <div
      style={{
        minHeight: 300,
        paddingBottom: 32,
        overflow: 'hidden',
      }}
    >
      <h4
        style={{
          margin: 0,
          marginBottom: 18,
          padding: 0,
          fontSize: 14,
          fontFamily: 'arial',
          color: '#ccc',
        }}
      >
        {label}
      </h4>
      <Box background={background} style={{ padding: 12 }}>
        <Container>{value}</Container>
      </Box>
      <div style={{ paddingTop: 18 }}>
        <hr
          style={{
            margin: 0,
            border: 0,
            height: 1,
            background: '#eee',
          }}
        />
      </div>
    </div>
  );
};

const allStories: Record<string, ComponentScreenshot> = {};

/* New standalone screenshot format */
const storiesFromScreenshots = require.context(
  '../components',
  true,
  /\.screenshots\.tsx?$/,
);
storiesFromScreenshots.keys().forEach((filename) => {
  const componentName = getComponentName(filename);

  allStories[componentName] = storiesFromScreenshots(filename)
    .screenshots as ComponentScreenshot;
});

Object.keys(allStories)
  .sort((a, b) => a.localeCompare(b))
  .forEach((componentName) => {
    const stories = storiesOf(componentName, module);
    const docs = allStories[componentName];
    const storyThemes = values(themes).filter((theme) => {
      if (theme.name === 'docs') {
        return false;
      }

      return docs.screenshotOnlyInWireframe
        ? theme.name === 'wireframe'
        : theme.name !== 'wireframe';
    });

    if (!docs.screenshotOnlyInWireframe) {
      storyThemes.unshift({
        ...themes.apac,
        displayName: 'apacDark',
        name: 'apacDark',
      });
    }

    storyThemes.forEach((theme) => {
      const renderStory = () => {
        if (theme.name === 'apacDark') {
          document.documentElement.classList.add(darkMode);
        } else {
          document.documentElement.classList.remove(darkMode);
        }

        return (
          <BrowserRouter>
            <BraidProvider theme={theme}>
              <ToastProvider>
                <style type="text/css">
                  {`
              .noAnimation * {
                animation-delay: -0.0001s !important;
                animation-duration: 0s !important;
                animation-play-state: paused !important;
              }
              .artboard {
                --deepColor: ${
                  theme.name === 'apacDark'
                    ? `rgba(255, 255, 255, .1)`
                    : `rgba(0, 0, 0, .05)`
                };
                --cubeSize: 12px;
                background-color: ${
                  theme.name === 'apacDark' ? `black` : `white`
                };
                background-image: linear-gradient(45deg, var(--deepColor) 25%, transparent 25%, transparent 75%, var(--deepColor) 75%, var(--deepColor)),
                  linear-gradient(45deg, var(--deepColor) 25%, transparent 25%, transparent 75%, var(--deepColor) 75%, var(--deepColor));
                background-size: calc(var(--cubeSize) * 2) calc(var(--cubeSize) * 2);
                background-position: 0 0, var(--cubeSize) var(--cubeSize);
              }
              `}
                </style>
                <div className="noAnimation artboard">
                  {docs.examples.map((example, i) => (
                    <PlayroomStateProvider key={i}>
                      <RenderExample
                        example={{
                          ...example,
                          label: example.label ?? componentName,
                        }}
                      />
                    </PlayroomStateProvider>
                  ))}
                </div>
              </ToastProvider>
            </BraidProvider>
          </BrowserRouter>
        );
      };

      stories.add(theme.name, renderStory, {
        layout: 'fullscreen',
        chromatic: {
          viewports: docs.screenshotWidths,
        },
      });
    });
  });
