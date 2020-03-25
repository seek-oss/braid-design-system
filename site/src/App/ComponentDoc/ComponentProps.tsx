import React, { Fragment } from 'react';
import partition from 'lodash/partition';
import {
  Box,
  Text,
  Secondary,
  Heading,
  Stack,
} from '../../../../lib/components';
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
): componentName is ComponentName => {
  return componentDocs.hasOwnProperty(componentName);
};

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
          {index > 0 && <Secondary> | </Secondary>}
          <PropType type={unionType} />
        </Fragment>
      ))}
    </Fragment>
  );
};

const PropList = ({
  label,
  props,
}: {
  label: string;
  props: Array<{ propName: string; type: NormalisedPropType }>;
}) => {
  if (props.length === 0) {
    return null;
  }

  return (
    <Stack space="gutter">
      <Heading level="3" component="h4">
        {label}
      </Heading>
      {props.map(({ propName, type }) => {
        return (
          <Stack space="xsmall" key={propName}>
            <Text weight="strong">{propName}</Text>
            <Text>
              <PropType type={type} />
            </Text>
          </Stack>
        );
      })}
    </Stack>
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

  // @ts-ignore
  const [requiredProps, optionalProps] = partition(
    doc.props.props,
    prop => prop.required,
  );

  return Object.keys(doc.props).length === 0 ? null : (
    <Stack space="large">
      <PropList label="Required props" props={requiredProps} />
      <PropList label="Optional props" props={optionalProps} />
    </Stack>
  );
};
