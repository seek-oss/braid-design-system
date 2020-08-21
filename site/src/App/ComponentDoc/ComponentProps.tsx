import React, { Fragment } from 'react';
import sortBy from 'lodash/sortBy';
import { Box, Text, Stack } from '../../../../lib/components';
import componentDocs from '../../../../generate-component-docs/componentDocs.json';
import {
  NormalisedPropType,
  ExportDoc,
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

  const propList = sortBy(
    doc.props.props,
    ({ required }) => required,
  ).reverse();

  return Object.keys(doc.props).length === 0 ? null : (
    <Stack space="large">
      {propList.map(({ propName, type, required }) => (
        <Stack space="small" key={propName}>
          <Text size="small" weight="strong">
            {propName}
            {required ? ' (Required)' : null}
          </Text>
          <Text size="small" tone="secondary">
            <PropType type={type} />
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};
