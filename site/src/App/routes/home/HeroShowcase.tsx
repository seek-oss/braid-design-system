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
  const [toggle, setToggle] = useState(true);
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
              <Badge tone="positive">Positive</Badge>
              <Badge tone="critical">Critical</Badge>
              <Badge tone="promote">Promote</Badge>
              <Badge tone="info">Info</Badge>
              <Badge tone="caution">Caution</Badge>
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
              label="Field label"
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
            display="flex"
            alignItems="flexEnd"
          >
            <Toggle label="Toggle" on={toggle} onChange={setToggle} />
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
