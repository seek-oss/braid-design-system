import { LinkableHeading } from '@braid-design-system/docs-ui';
import { Heading, Stack, Text } from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import type { ReactNode } from 'react';
import { useParams } from 'react-router';

import { DocExample } from '../../DocNavigation/DocExample';
import { PageTitle } from '../../Seo/PageTitle';
import { getTemplateDoc } from '../../navigationHelpers';

export const TemplateDetail = () => {
  const { templateGroup = '', templateName = '' } = useParams<{
    templateGroup: string;
    templateName: string;
  }>();

  const docs = getTemplateDoc(templateGroup, templateName);
  const displayName = docs.title ?? templateName;
  const Container =
    docs.Container ??
    (({ children }: { children: ReactNode }) => <>{children}</>);

  return (
    <>
      <PageTitle title={displayName} />

      <Stack space="xxlarge">
        <Stack space="medium">
          <Text tone="secondary" size="small">
            Templates /{' '}
            {templateGroup.charAt(0).toUpperCase() + templateGroup.slice(1)}
          </Text>
          <Heading component="h1" level="2">
            {displayName}
          </Heading>
        </Stack>

        <Stack space="xxlarge">
          {docs.description ? (
            <Stack space="large">{docs.description}</Stack>
          ) : null}

          {docs.Example ? (
            <PlayroomStateProvider>
              <DocExample
                Example={docs.Example}
                Container={Container}
                showCodeByDefault={false}
              />
            </PlayroomStateProvider>
          ) : null}

          {docs.usage ? (
            <Stack space="large">
              <LinkableHeading level="3">Usage</LinkableHeading>
              <Stack space="medium">{docs.usage}</Stack>
            </Stack>
          ) : null}
        </Stack>
      </Stack>
    </>
  );
};
