import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { ConfigConsumer } from '../ConfigContext';
import { Logo } from '../Logo/Logo';
import { Github } from './Github/Github';
import * as styles from './Home.treat';

const actionProps: BoxProps = {
  display: 'flex',
  width: 'full',
  marginLeft: ['none', 'xxsmall'],
  marginRight: ['none', 'xxsmall'],
  paddingBottom: ['xsmall', 'none'],
};

export const Home = () => {
  return (
    <ConfigConsumer>
      {({ playroomUrl }) => (
        <Fragment>
          <Box
            display="flex"
            flexDirection="column"
            paddingLeft="gutter"
            paddingRight="gutter"
            className={styles.content}
          >
            <Box
              width="full"
              paddingBottom="xxsmall"
              className={styles.container}
            >
              <Logo width="100%" />
            </Box>

            <Box
              width="full"
              className={styles.actionsContainer}
              paddingBottom={['xlarge', 'large']}
            >
              <Text>
                <Box
                  component="span"
                  display="flex"
                  className={styles.subtitle}
                >
                  <span>Themeable design system</span>&nbsp;
                  <span>for the SEEK Group</span>
                </Box>
              </Text>
            </Box>

            <Box
              width="full"
              className={styles.actionsContainer}
              display={['block', 'flex']}
            >
              <Box {...actionProps}>
                <Link
                  to="/components"
                  className={styles.linkButton}
                  tabIndex={-1}
                >
                  <Button weight="weak">Components</Button>
                </Link>
              </Box>
              <Box {...actionProps}>
                <a
                  href={playroomUrl}
                  className={styles.linkButton}
                  tabIndex={-1}
                >
                  <Button weight="weak">Playroom</Button>
                </a>
              </Box>
            </Box>
          </Box>

          <Box className={styles.source}>
            <a
              href="https://github.com/seek-oss/braid-design-system"
              title="View on GitHub"
              className={styles.sourceLink}
            >
              <Github color="currentColor" backgroundColor="black" />
            </a>
          </Box>
        </Fragment>
      )}
    </ConfigConsumer>
  );
};
