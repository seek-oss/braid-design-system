import React, { Fragment, useContext, useMemo } from 'react';
import partition from 'lodash/partition';
import {
  Box,
  Text,
  Stack,
  Inline,
  Badge,
  TooltipRenderer,
  Heading,
  TextLink,
  IconInfo,
} from '../../../../lib/components';
import componentDocs from '../../../../generate-component-docs/componentDocs.json';
import type {
  NormalisedPropType,
  ExportDoc,
  NormalisedInterface,
} from '../../../../generate-component-docs/generate';
import { DocsContext } from '../DocNavigation/DocNavigation';
import { PageTitle } from '../Seo/PageTitle';
import { useConfig } from '../ConfigContext';

type ComponentName = keyof typeof componentDocs;

// @ts-ignore
const docsData = componentDocs as Record<ComponentName, ExportDoc>;

const isValidComponentName = (
  componentName: string,
): componentName is ComponentName =>
  componentDocs.hasOwnProperty(componentName);

const PropType = ({ type }: { type: NormalisedPropType }) => {
  if (typeof type === 'string') {
    // Display child component type (e.g. Column | Column[])
    const matches = type.match(/^ReactElement<([A-Z]{1}[a-zA-Z]+)Props/);
    if (matches && matches.length >= 2) {
      return (
        <Fragment>
          {matches[1]}
          {/* Support arrays: */ /\[\]$/.test(type) ? '[]' : ''}
        </Fragment>
      );
    }

    return <Fragment>{type}</Fragment>;
  }

  if (type.type === 'alias') {
    return (
      <Fragment>
        {type.alias}
        {'<'}
        {type.params.map((paramType, index) => (
          <PropType key={index} type={paramType} />
        ))}
        {'>'}
      </Fragment>
    );
  }

  if (type.type === 'interface') {
    return (
      <Fragment>
        {'{'}
        {Object.values(type.props).map(
          ({ propName, required, type: propType }) => (
            <Box key={propName} paddingLeft="small">
              {propName}
              {required ? ': ' : '?: '}
              <PropType type={propType} />;
            </Box>
          ),
        )}
        {'}'}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {type.types.map((unionType, index) => (
        <Fragment key={index}>
          {index > 0 && ' | '}
          <PropType type={unionType} />
        </Fragment>
      ))}
    </Fragment>
  );
};

const PropList = ({ props }: { props: NormalisedInterface['props'] }) => {
  const propList = useMemo(() => {
    const [requiredProps, notRequiredProps] = partition(
      props,
      ({ required }) => required,
    );

    const [deprecatedProps, optionalProps] = partition(
      notRequiredProps,
      ({ deprecated }) => deprecated,
    );

    return [...requiredProps, ...optionalProps, ...deprecatedProps];
  }, [props]);

  return (
    <Stack space="xlarge">
      {propList.map(({ propName, type, required, description, tags }) => {
        const [deprecatedMessage] = tags.filter(
          ({ name }) => name === 'deprecated',
        );

        return (
          <Stack space="medium" key={propName}>
            <Stack space="small">
              <Inline space="small" alignY="center">
                <Text weight="strong">{propName}</Text>
                {required ? (
                  <Badge tone="neutral" bleedY>
                    Required
                  </Badge>
                ) : null}
                {deprecatedMessage ? (
                  <Inline space="xxsmall" alignY="center">
                    <Badge tone="caution" bleedY>
                      Deprecated
                    </Badge>
                    {deprecatedMessage.text ? (
                      <TooltipRenderer
                        id={`prop_${propName}`}
                        tooltip={<Text>{deprecatedMessage.text}</Text>}
                      >
                        {({ triggerProps }) => (
                          <Box {...triggerProps}>
                            <Text tone="secondary">
                              <IconInfo />
                            </Text>
                          </Box>
                        )}
                      </TooltipRenderer>
                    ) : null}
                  </Inline>
                ) : null}
              </Inline>
              {description ? <Text size="small">{description}</Text> : null}
            </Stack>
            <Text size="small" tone="secondary">
              <PropType type={type} />
            </Text>
          </Stack>
        );
      })}
    </Stack>
  );
};

const ComponentProps = ({ componentName }: { componentName: string }) => {
  if (!isValidComponentName(componentName)) {
    return null;
  }

  const doc = docsData[componentName];

  if (doc.exportType === 'hook') {
    return null;
  }

  return Object.keys(doc.props.props).length === 0 ? null : (
    <PropList props={doc.props.props} />
  );
};

export const DocProps = () => {
  const { docsName = '', docs } = useContext(DocsContext);
  const { sourceUrlPrefix } = useConfig();

  if (!docs || !isValidComponentName(docsName)) {
    return null;
  }

  const subfolder = /^Icon/.test(docsName) ? 'icons' : undefined;
  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ''
  }${docsName}`;
  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  const migrationGuideUrl = `${sourceUrlPrefix}/${componentFolder}/${docsName}.migration.md`;

  const propsToDocument =
    'subComponents' in docs && docs.subComponents
      ? [docsName, ...docs.subComponents]
      : docsName;

  return (
    <>
      <PageTitle title={`${docsName} Props`} />

      <Stack space="xxlarge">
        {Array.isArray(propsToDocument) ? (
          propsToDocument.map((c) => (
            <Stack space="large" key={c}>
              <Heading level="3">{c}</Heading>
              <ComponentProps componentName={c} />
            </Stack>
          ))
        ) : (
          <ComponentProps componentName={docsName} />
        )}

        <Stack space="large">
          <Heading level="3" component="h4">
            Further References
          </Heading>
          <Text>
            <TextLink href={sourceUrl}>View Source</TextLink>
          </Text>
          {'migrationGuide' in docs && docs.migrationGuide ? (
            <Text>
              <TextLink href={migrationGuideUrl}>Migration Guide</TextLink>
            </Text>
          ) : null}
        </Stack>
      </Stack>
    </>
  );
};
