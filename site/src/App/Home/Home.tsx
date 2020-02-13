import React, { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '../../../../lib/components';
import { ConfigConsumer } from '../ConfigContext';
import { Logo } from '../Logo/Logo';
import { Github } from './Github/Github';
import * as styles from './Home.treat';

const Action = ({ children }: { children: ReactNode }) => (
  <Box
    display="flex"
    width="full"
    marginX={['none', 'xxsmall']}
    paddingBottom={['xsmall', 'none']}
  >
    {children}
  </Box>
);

export const Home = () => {
  return (
    <ConfigConsumer>
      {({ playroomUrl }) => (
        <Fragment>
          <Box
            display="flex"
            flexDirection="column"
            paddingX="gutter"
            alignItems="center"
            justifyContent="center"
            className={styles.content}
          >
            <Box
              width="full"
              paddingBottom="small"
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
                  justifyContent="center"
                  flexWrap="wrap"
                >
                  <span className={styles.nowrap}>Themeable design system</span>
                  &nbsp;
                  <span className={styles.nowrap}>for the SEEK Group</span>
                </Box>
              </Text>
            </Box>

            <Box
              width="full"
              className={styles.actionsContainer}
              display={['block', 'flex']}
            >
              <Action>
                <Link
                  to="/components"
                  className={styles.linkButton}
                  tabIndex={-1}
                >
                  <Button weight="weak">Documentation</Button>
                </Link>
              </Action>
              <Action>
                <a
                  href={playroomUrl}
                  className={styles.linkButton}
                  tabIndex={-1}
                >
                  <Button weight="weak">Playroom</Button>
                </a>
              </Action>
            </Box>
          </Box>

          <Box position="absolute" className={styles.source}>
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
