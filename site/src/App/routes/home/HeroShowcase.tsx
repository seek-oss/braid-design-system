import {
  Badge,
  Box,
  BraidProvider,
  ButtonIcon,
  IconBookmark,
  Inline,
  TextField,
  Toggle,
} from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

import * as styles from './HeroShowcase.css';

const focusableSelector =
  'a[href], button, input, select, textarea, [tabindex]';

export const HeroShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [jobTitle, setJobTitle] = useState('Product Designer');
  const [remote, setRemote] = useState(true);
  const [saved, setSaved] = useState(true);

  // The collage is decorative, so it responds to pointers but never takes
  // keyboard focus. Toggle doesn't expose `tabIndex`, so sweep the DOM
  // rather than setting it per component.
  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    for (const node of container.querySelectorAll<HTMLElement>(
      focusableSelector,
    )) {
      node.tabIndex = -1;
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.showcase} aria-hidden>
      <BraidProvider styleBody={false} theme={seekJobs}>
        <Box className={styles.tileBadges}>
          <Box
            background="surface"
            borderRadius="large"
            boxShadow="small"
            padding="gutter"
          >
            <Inline space="small">
              <Badge tone="positive">New</Badge>
              <Badge tone="promote" weight="strong">
                Featured
              </Badge>
              <Badge tone="caution">Closing soon</Badge>
              <Badge tone="neutral">Draft</Badge>
            </Inline>
          </Box>
        </Box>

        <Box className={styles.tileField}>
          <Box
            background="surface"
            borderRadius="large"
            boxShadow="small"
            padding="gutter"
          >
            <TextField
              label="Job title"
              value={jobTitle}
              onChange={(event) => setJobTitle(event.currentTarget.value)}
              onClear={() => setJobTitle('')}
            />
          </Box>
        </Box>

        <Box className={styles.tileToggle}>
          <Box
            background="surface"
            borderRadius="large"
            boxShadow="small"
            padding="gutter"
          >
            <Toggle label="Remote friendly" on={remote} onChange={setRemote} />
          </Box>
        </Box>

        <Box className={styles.tileButton}>
          <Box
            background="surface"
            borderRadius="large"
            boxShadow="small"
            padding="xsmall"
          >
            <ButtonIcon
              bleed={false}
              variant="solid"
              icon={<IconBookmark active={saved} />}
              label="Save job"
              tone="brandAccent"
              onClick={() => setSaved(!saved)}
            />
          </Box>
        </Box>
      </BraidProvider>
    </div>
  );
};
