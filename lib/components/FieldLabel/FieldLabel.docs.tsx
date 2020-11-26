import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDetail } from '../../../site/src/types';
import {
  FieldLabel,
  Stack,
  Text,
  TextLink,
  Strong,
  Box,
  Hidden,
  Alert,
  List,
} from '../';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDetail = {
  category: 'Content',
  Example: () =>
    source(
      <Box style={{ maxWidth: 400 }}>
        <Stack space="small">
          <FieldLabel
            htmlFor="field"
            label="Label"
            secondaryLabel={
              <>
                Secondary<Hidden below="tablet"> label</Hidden>
              </>
            }
            tertiaryLabel={
              <TextLink href="#">
                Tertiary<Hidden below="tablet"> label</Hidden>
              </TextLink>
            }
          />
          <Box id="field">
            <Placeholder height={40} />
          </Box>
        </Stack>
      </Box>,
    ),
  description: (
    <Alert tone="info">
      <Text weight="medium">
        This component is only required when building a custom field that isn’t
        provided by Braid.
      </Text>
    </Alert>
  ),
  accessibility: (
    <Text>
      The <Strong>htmlFor</Strong> prop is mandatory, which accepts the ID of
      the field being labelled.
    </Text>
  ),
  alternatives: [],
  additional: [
    {
      label: 'See also',
      description: (
        <List>
          <Text tone="secondary">
            <TextLink href="/components/FieldMessage">FieldMessage</TextLink>{' '}
            &mdash; For displaying messages below a custom field.
          </Text>
        </List>
      ),
    },
  ],
};

export default docs;
