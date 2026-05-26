import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  Box,
  BraidProvider,
  Heading,
  Link,
  Stack,
  Text,
  Tiles,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { useIsomorphicLayoutEffect } from 'react-use';

import { PageTitle } from '../../Seo/PageTitle';
import { useThemeSettings } from '../../ThemeSetting';
import { allTemplateDocs } from '../../navigationHelpers';
import { useSourceFromExample } from '../../useSourceFromExample/useSourceFromExample';

import * as styles from './templateGroupPage.css';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

const groupDescriptions: Record<string, string> = {
  layouts:
    'Full-page structural patterns defining content width, spacing, and page chrome.',
  sections: 'Composable content blocks intended to slot into page layouts.',
};

const ScaledPreview = (docs: (typeof allTemplateDocs)[number]) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const Container = docs.Container ?? DefaultContainer;
  const { theme } = useThemeSettings();
  const { value } = useSourceFromExample({ Example: docs.Example });

  useEffect(() => {
    const el = outerRef.current;
    if (!el) {
      return;
    }
    const obs = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / styles.STAGE_WIDTH);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useIsomorphicLayoutEffect(() => {
    // Remove in favour of direct DOM attribute when we drop React 18 support
    outerRef.current?.setAttribute('inert', 'true');
  }, []);

  return (
    <div ref={outerRef} className={styles.tilePreview}>
      <Box
        className={styles.tileStage}
        opacity={scale === 0 ? 0 : undefined}
        style={assignInlineVars({ [styles.scaleVar]: String(scale) })}
      >
        {scale !== 0 ? (
          <BraidProvider styleBody={false} theme={theme}>
            <Container>{value}</Container>
          </BraidProvider>
        ) : null}
      </Box>
    </div>
  );
};

const TemplateTile = ({
  groupName,
  ...docs
}: (typeof allTemplateDocs)[number] & { groupName: string }) => (
  <PlayroomStateProvider>
    <Box position="relative">
      <Link
        href={`/templates/${groupName}/${docs.slug}`}
        className={styles.tileLinkOverlay}
      />
      <Stack space="small">
        <Text weight="strong">{docs.title}</Text>
        <ScaledPreview {...docs} />
      </Stack>
    </Box>
  </PlayroomStateProvider>
);

export const TemplateGroup = () => {
  const { groupName = '' } = useParams<{ groupName: string }>();

  const description = groupDescriptions[groupName];
  const templates = allTemplateDocs.filter((doc) => doc.group === groupName);

  if (!description) {
    return <Navigate to="/templates/layouts" replace />;
  }

  const title = groupName.charAt(0).toUpperCase() + groupName.slice(1);

  return (
    <Stack space="xxlarge">
      <PageTitle title={`${title} Templates`} />
      <Stack space="medium">
        <Heading component="h1" level="2">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Stack>
      <Tiles space="xlarge" columns={[1, 2, 3]}>
        {templates.map((docs) => (
          <TemplateTile key={docs.name} groupName={groupName} {...docs} />
        ))}
      </Tiles>
    </Stack>
  );
};
