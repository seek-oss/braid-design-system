// Needs to be imported before 'prop-types'
import 'parse-prop-types';

// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import * as components from '../../../lib/components';
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import ComponentRoute from './ComponentRoute/ComponentRoute';
import styles from './App.css.js';

const { ThemeProvider, Text, Box, BulletList, Bullet } = components;

export default class App extends Component {
  renderComponentRoute({ match }) {
    return <ComponentRoute componentName={match.params.componentName} />;
  }

  renderIconRoute({ match }) {
    return (
      <ComponentRoute
        componentName={match.params.componentName}
        category="icons"
      />
    );
  }

  render() {
    return (
      <ThemeProvider theme={themes.wireframe}>
        <Box
          paddingTop="large"
          paddingBottom="smaller"
          paddingLeft="gutter"
          paddingRight="gutter"
        >
          <Link to="/" style={{ display: 'inline-block' }}>
            <Logo />
          </Link>
        </Box>
        <div className={styles.container}>
          <div className={styles.nav}>
            <Box
              paddingTop="small"
              paddingBottom="small"
              paddingLeft="gutter"
              paddingRight="gutter"
            >
              <Text size="large" weight="strong" marginBottom="small">
                Tools
              </Text>
              <BulletList marginBottom="small">
                <Bullet>
                  <a
                    style={{ color: 'inherit' }}
                    href="/playroom"
                    target="_blank"
                  >
                    Playroom
                  </a>
                </Bullet>
              </BulletList>
              <Text size="large" weight="strong" marginBottom="small">
                Components
              </Text>
              <BulletList marginBottom="small">
                {Object.keys(components)
                  .filter(x => !/icon/i.test(x))
                  .sort()
                  .map(componentName => (
                    <Bullet key={componentName}>
                      <Link
                        style={{ color: 'inherit' }}
                        to={`/components/${componentName}`}
                      >
                        {componentName}
                      </Link>
                    </Bullet>
                  ))}
              </BulletList>
              <Text size="large" weight="strong" marginBottom="small">
                Icons
              </Text>
              <BulletList>
                {Object.keys(components)
                  .filter(x => /icon/i.test(x) && x !== 'Icon')
                  .sort()
                  .map(iconName => (
                    <Bullet key={iconName}>
                      <Link
                        style={{ color: 'inherit' }}
                        to={`/icons/${iconName}`}
                      >
                        {iconName}
                      </Link>
                    </Bullet>
                  ))}
              </BulletList>
            </Box>
          </div>
          <div className={styles.content}>
            <Box
              paddingLeft="gutter"
              paddingRight="gutter"
              paddingTop="small"
              paddingBottom="larger"
            >
              <Route
                path="/components/:componentName"
                render={this.renderComponentRoute}
              />
              <Route
                path="/icons/:componentName"
                render={this.renderIconRoute}
              />
            </Box>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
