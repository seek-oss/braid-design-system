import { TitleLink } from '@braid-design-system/docs-ui';
import {
  Heading,
  IconArrow,
  Stack,
  Text,
  TextLink,
} from 'braid-src/lib/components';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import { useParams } from 'react-router';

import { DocExample } from '../../DocNavigation/DocExample';
import { PageTitle } from '../../Seo/PageTitle';
import { templateLookup } from '../../navigationHelpers';

export const TemplateDetail = () => {
  const { groupName = '', templateName = '' } = useParams<{
    groupName: string;
    templateName: string;
  }>();
  const templateInfo = templateLookup[templateName];

  return (
    <Stack space="xxlarge">
      <PageTitle title={templateInfo.title} />
      <Stack space="medium">
        <Text tone="secondary" size="small">
          <TextLink
            href={`/templates/${groupName}`}
            weight="weak"
            icon={<IconArrow direction="left" />}
          >
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
            <Heading level="3">
              <TitleLink copyable>Usage</TitleLink>
            </Heading>
            <Stack space="medium">{templateInfo.usage}</Stack>
          </Stack>
        ) : null}

        {templateInfo.additional
          ? templateInfo.additional.map((info, index) => (
              <Stack space="large" key={`${info.label}_${index}`}>
                {info.label ? (
                  <Heading level="3">
                    <TitleLink copyable>{info.label}</TitleLink>
                  </Heading>
                ) : null}
                {info.description ? (
                  <Stack space="medium">{info.description}</Stack>
                ) : null}
                {info.Example ? (
                  <PlayroomStateProvider>
                    <DocExample
                      Example={info.Example}
                      Container={info.Container}
                      showCodeByDefault={false}
                    />
                  </PlayroomStateProvider>
                ) : null}
              </Stack>
            ))
          : null}
      </Stack>
    </Stack>
  );
};
