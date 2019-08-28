import React, { ReactNode, Fragment } from 'react';
import { storiesOf } from 'sku/@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import values from 'lodash/values';
import * as themes from '../themes';
import { BraidProvider } from '../components';
import { ComponentDocs } from '../../site/src/types';

const handler = () => {
  /* No-op for docs examples */
};

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const req = require.context('../components', true, /\.docs\.tsx?$/);
req.keys().forEach(filename => {
  const matches = filename.match(/([a-zA-Z]+)\.docs\.tsx?$/);
  if (!matches) {
    return;
  }

  const componentName = matches[1];
  const stories = storiesOf(componentName, module);
  const docs = req(filename).default as ComponentDocs;

  if (
    docs.storybook === false ||
    !docs.examples.some(({ render }) => typeof render === 'function')
  ) {
    return;
  }

  values(themes)
    .filter(theme => theme.name !== 'wireframe')
    .forEach(theme => {
      stories.add(theme.name, () => (
        <BrowserRouter>
          <BraidProvider theme={theme} styleBody={false}>
            {docs.examples.map(
              (
                { label = componentName, render, Container = DefaultContainer },
                i,
              ) =>
                render ? (
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
                    <Container>{render({ id: 'id', handler })}</Container>
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
          </BraidProvider>
        </BrowserRouter>
      ));
    });
});
