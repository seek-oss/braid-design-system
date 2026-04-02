import {
  BraidProvider,
  Heading,
  Link,
  Stack,
  Text,
  Tiles,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

import type { TemplateDocs } from '../../../types';
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

interface ScaledPreviewProps {
  docs: TemplateDocs;
}

const ScaledPreview = ({ docs }: ScaledPreviewProps) => {
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

  return (
    <div ref={outerRef} className={styles.tilePreview}>
      <div
        className={styles.tileStage}
        style={{
          transform: scale
            ? `translate(-50%, -50%) scale(${scale})`
            : undefined,
          opacity: scale ? 1 : 0,
          maxHeight: scale ? `${scale * 1000}%` : undefined,
          overflow: 'hidden',
        }}
      >
        {scale !== 0 ? (
          <BraidProvider styleBody={false} theme={theme}>
            <Container>{value}</Container>
          </BraidProvider>
        ) : null}
      </div>
    </div>
  );
};

interface TemplateTileProps {
  group: string;
  name: string;
  label: string;
  docs: TemplateDocs;
}

const TemplateTile = ({ group, name, label, docs }: TemplateTileProps) => (
  <PlayroomStateProvider>
    <Link href={`/templates/${group}/${name}`} className={styles.tileLink}>
      <Stack space="small">
        <Text weight="strong">{label}</Text>
        <ScaledPreview docs={docs} />
      </Stack>
    </Link>
  </PlayroomStateProvider>
);

export const TemplateGroupPage = () => {
  const { templateGroup = '' } = useParams<{ templateGroup: string }>();
  const templates = allTemplateDocs.filter((t) => t.group === templateGroup);
  const groupTitle =
    templateGroup.charAt(0).toUpperCase() + templateGroup.slice(1);
  const description = groupDescriptions[templateGroup];

  return (
    <Stack space="xxlarge">
      <Stack space="medium">
        <Heading level="3" weight="weak">
          <PageTitle title={`Templates / ${groupTitle}`} />
          Templates /
        </Heading>
        <Heading component="h1" level="2">
          {groupTitle}
        </Heading>
        {description ? <Text>{description}</Text> : null}
      </Stack>

      <Tiles space="xlarge" columns={[1, 2, 3]}>
        {templates.map(({ group, name, ...docs }) => (
          <TemplateTile
            key={name}
            group={group}
            name={name}
            label={docs.title ?? name}
            docs={docs}
          />
        ))}
      </Tiles>
    </Stack>
  );
};
