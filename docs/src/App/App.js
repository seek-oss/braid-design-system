// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import * as components from '../../../lib/components';
import React, { Component } from 'react';
import { withRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Logo from './Logo/Logo';
import ComponentRoute from './ComponentRoute/ComponentRoute';
import styles from './App.css.js';

const { ThemeProvider, Text, Box, BulletList, Bullet } = components;

export default withRouter(
  class App extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    constructor() {
      super();

      this.state = {
        isMenuOpen: false
      };
    }

    toggleMenu = () => {
      this.setState(state => ({
        isMenuOpen: !state.isMenuOpen
      }));
    };

    closeMenu = () => {
      this.setState({
        isMenuOpen: false
      });
    };

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
      const isHome = this.props.location.pathname === '/';
      const isMenuOpen = isHome ? true : this.state.isMenuOpen;

      return (
        <ThemeProvider theme={themes.wireframe}>
          <div className={styles.header}>
            <Box
              paddingTop="large"
              paddingBottom="xsmall"
              paddingLeft="gutter"
              paddingRight="gutter"
            >
              <div style={{ position: 'relative' }}>
                <Link to="/" style={{ display: 'inline-block' }}>
                  <Logo />
                </Link>

                <button
                  className={classnames({
                    [styles.menuButton]: true,
                    [styles.menuButton__isHidden]: isHome,
                    [styles.menuButton__isOpen]: isMenuOpen && !isHome
                  })}
                  onClick={this.toggleMenu}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <div
                    className={classnames(
                      styles.menuButton__bar,
                      styles.menuButton__bar1
                    )}
                  />
                  <div
                    className={classnames(
                      styles.menuButton__bar,
                      styles.menuButton__bar2
                    )}
                  />
                  <div
                    className={classnames(
                      styles.menuButton__bar,
                      styles.menuButton__bar3
                    )}
                  />
                </button>
              </div>
            </Box>
          </div>
          <div className={styles.container}>
            <div
              className={classnames({
                [styles.menu]: true,
                [styles.menu__isOpen]: isMenuOpen
              })}
            >
              <Box
                paddingTop="small"
                paddingBottom="large"
                paddingLeft="gutter"
                paddingRight="gutter"
              >
                <Text size="large" weight="strong" marginBottom="small">
                  Tools
                </Text>
                <BulletList marginBottom="small">
                  <Bullet>
                    <Link
                      style={{ color: 'inherit' }}
                      to="/playroom"
                      target="_blank"
                      onClick={this.closeMenu}
                    >
                      Playroom
                    </Link>
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
                          onClick={this.closeMenu}
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
                          onClick={this.closeMenu}
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
                paddingBottom="xlarge"
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
);
