import React, { Fragment, useMemo } from 'react';
import partition from 'lodash/partition';
import {
  Box,
  Text,
  Stack,
  Inline,
  Badge,
  TooltipRenderer,
} from '../../../../lib/components';
import componentDocs from '../../../../generate-component-docs/componentDocs.json';
import type {
  NormalisedPropType,
  ExportDoc,
  NormalisedInterface,
} from '../../../../generate-component-docs/generate';

type ComponentName = keyof typeof componentDocs;

// @ts-ignore
const docs = componentDocs as Record<ComponentName, ExportDoc>;

interface Props {
  componentName: string;
}

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

export const ComponentProps = ({ componentName }: Props) => {
  if (!isValidComponentName(componentName)) {
    return null;
  }

  const doc = docs[componentName];

  if (doc.exportType === 'hook') {
    return null;
  }

  return Object.keys(doc.props).length === 0 ? null : (
    <PropList props={doc.props.props} />
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
        const deprecatedMessage = tags
          .filter(({ name }) => name === 'deprecated')
          .map(({ text }) => {
            const linkMatch = text.match(/\[(?<linkText>.*)\]\((.*)\)/);

            if (linkMatch && linkMatch.groups) {
              const [before, after] = text.split(linkMatch[0]);

              return [before, linkMatch.groups.linkText, after]
                .filter((t) => t)
                .join(' ');
            }

            return text;
          })
          .join('\n');

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
                {deprecatedMessage.length > 0 ? (
                  <TooltipRenderer
                    id={`prop_${propName}`}
                    tooltip={<Text>{deprecatedMessage}</Text>}
                  >
                    {({ triggerProps }) => (
                      <Badge tone="caution" bleedY {...triggerProps}>
                        Deprecated
                      </Badge>
                    )}
                  </TooltipRenderer>
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
