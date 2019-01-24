import React from 'react';
import ChecklistCard from './ChecklistCard';
import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

const handleChange = () => undefined;

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Checklist Card',
      render: ({ id }) => (
        <ChecklistCard>
          <Checkbox
            id={`${id}_1`}
            label="This is a checkbox"
            checked={false}
            message={false}
            onChange={handleChange}
          />
          <Checkbox
            id={`${id}_2`}
            label="This is a checkbox"
            checked={false}
            message={false}
            onChange={handleChange}
          />
          <Checkbox
            id={`${id}_3`}
            label="This is a checkbox"
            checked={false}
            message={false}
            onChange={handleChange}
          />
        </ChecklistCard>
      )
    },
    {
      label: 'Nested Checklist Card',
      render: ({ id }) => (
        <ChecklistCard>
          <Checkbox
            id={`${id}_1`}
            label="This is a checkbox"
            checked={false}
            message={false}
            onChange={handleChange}
          >
            <Text>This text is visible when the checkbox is checked.</Text>
          </Checkbox>
          <Checkbox
            id={`${id}_2`}
            label="This is a checkbox"
            checked={true}
            message={false}
            onChange={handleChange}
          >
            <Text>This text is visible when the checkbox is checked.</Text>
          </Checkbox>
          <Checkbox
            id={`${id}_3`}
            label="This is a checkbox"
            checked={false}
            message={false}
            onChange={handleChange}
          >
            <Text>This text is visible when the checkbox is checked.</Text>
          </Checkbox>
        </ChecklistCard>
      )
    }
  ]
};

export default docs;
