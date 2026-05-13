import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Heading,
  IconArrow,
  Stack,
  Text,
  TextLink,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { Navigate, useParams } from 'react-router';

import { DocExample } from '../../DocNavigation/DocExample';
import { PageTitle } from '../../Seo/PageTitle';
import { templateLookup } from '../../navigationHelpers';

export const TemplateDetail = () => {
  const { templateName = '' } = useParams<{
    templateName: string;
  }>();
  const templateInfo = templateLookup[templateName];

  if (!templateInfo) {
    return <Navigate to="/templates" replace />;
  }

  return (
    <Stack space="xxlarge">
      <PageTitle title={templateInfo.title} />
      <Stack space="medium">
        <Text tone="secondary" size="small">
          <TextLink
            href="/templates"
            weight="weak"
            icon={<IconArrow direction="left" />}
          >
            Templates /{' '}
            {templateInfo.group.charAt(0).toUpperCase() +
              templateInfo.group.slice(1)}
          </TextLink>
        </Text>
        <Heading component="h1" level="2">
          {templateInfo.title}
        </Heading>
      </Stack>

      <Stack space="xxlarge">
        {templateInfo.description ? (
          <Stack space="large">{templateInfo.description}</Stack>
        ) : null}

        {templateInfo.Example ? (
          <PlayroomStateProvider>
            <DocExample
              Example={templateInfo.Example}
              Container={templateInfo.Container}
              showCodeByDefault={false}
            />
          </PlayroomStateProvider>
        ) : null}

        {templateInfo.usage ? (
          <Stack space="large">
            <LinkableHeading level="3">Usage</LinkableHeading>
            <Stack space="medium">{templateInfo.usage}</Stack>
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
};
