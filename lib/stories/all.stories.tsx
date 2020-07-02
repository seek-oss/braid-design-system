import React, { ReactNode, Fragment } from 'react';
import { storiesOf } from 'sku/@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { uniq, flatten, values } from 'lodash';
import '../../reset';
import * as themes from '../themes';
import { BraidProvider } from '../components';
import { ComponentDocs } from '../../site/src/types';

const webFontLinkTags = uniq(
  flatten(values(themes).map((theme) => theme.webFonts)).map(
    (font) => font.linkTag,
  ),
).join('');
document.head.innerHTML += webFontLinkTags;

const handler = () => {
  /* No-op for docs examples */
};

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const req = require.context('../components', true, /\.docs\.tsx?$/);
req.keys().forEach((filename) => {
  const matches = filename.match(/([a-zA-Z]+)\.docs\.tsx?$/);
  if (!matches) {
    return;
  }

  const componentName = matches[1];
  const stories = storiesOf(componentName, module);
  const docs = req(filename).default as ComponentDocs;

  if (
    !docs.examples.some(
      ({ Example, storybook }) =>
        typeof Example === 'function' && storybook !== false,
    )
  ) {
    return;
  }

  const storyThemes = values(themes).filter((theme) => {
    if (theme.name === 'docs') {
      return false;
    }

    return docs.screenshotOnlyInWireframe
      ? theme.name === 'wireframe'
      : theme.name !== 'wireframe';
  });

  storyThemes.forEach((theme) => {
    const storyConfig = {
      chromatic: {
        viewports: docs.screenshotWidths,
      },
    };

    const renderStory = () => (
      <BrowserRouter>
        <BraidProvider theme={theme}>
          <style type="text/css">
            {`
              .noAnimation * {
                animation-delay: -0.0001s !important;
                animation-duration: 0s !important;
                animation-play-state: paused !important;
              }`}
          </style>
          <div
            className="noAnimation"
            style={{
              background: 'white',
            }}
          >
            {docs.examples.map(
              (
                {
                  storybook = true,
                  label = componentName,
                  Example,
                  Container = DefaultContainer,
                },
                i,
              ) =>
                Example && storybook ? (
                  <div
                    key={i}
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
                    <Container>
                      <Example id="id" handler={handler} />
                    </Container>
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
                ) : null,
            )}
          </div>
        </BraidProvider>
      </BrowserRouter>
    );

    stories.add(theme.name, renderStory, storyConfig);
  });
});
