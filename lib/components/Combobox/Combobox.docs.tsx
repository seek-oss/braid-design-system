import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Combobox } from '../';
// import { Dropdown as PlayroomDropdown } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: ({ id, handler }) => (
        <Combobox aria-label="Job Title" id={id} onChange={handler} value="">
          <option value="1">Developer</option>
          <option value="2">Designer</option>
        </Combobox>
      ),
    },
    {
      label: 'Combobox with options group',
      Container,
      Example: ({ id, handler }) => (
        <Combobox aria-label="Location" id={id} value="" onChange={handler}>
          <optgroup label="Major Cities">
            <option value="3004">Melbourne</option>
            <option value="3002">Sydney</option>
          </optgroup>
          <option value="3020">Wonthaggi</option>
        </Combobox>
      ),
    },
    {
      label: 'Combobox on Brand Background',
      Container,
      Example: ({ id, handler }) => (
        <Box background="brand" padding="small">
          <Combobox aria-label="Job Title" id={id} onChange={handler} value="">
            <option value="1">Developer</option>
            <option value="2">Designer</option>
          </Combobox>
        </Box>
      ),
    },
  ],
  snippets: [
    // {
    //   name: 'Standard',
    //   code: (
    //     <PlayroomDropdown aria-label="Label">
    //       <option>Option</option>
    //       <option>Option</option>
    //       <option>Option</option>
    //     </PlayroomDropdown>
    //   ),
    // },
    // {
    //   name: 'Grouped',
    //   code: (
    //     <PlayroomDropdown
    //       aria-label="Location"
    //       placeholder="Please select a location"
    //     >
    //       <optgroup aria-label="Major Cities">
    //         <option value="3004">Melbourne</option>
    //         <option value="3002">Sydney</option>
    //       </optgroup>
    //       <option value="3020">Wonthaggi</option>
    //     </PlayroomDropdown>
    //   ),
    // },
    // {
    //   name: 'With error',
    //   code: (
    //     <PlayroomDropdown
    //       tone="critical"
    //       message="Required field"
    //       aria-label="Label"
    //     >
    //       <option>Option</option>
    //       <option>Option</option>
    //       <option>Option</option>
    //     </PlayroomDropdown>
    //   ),
    // },
  ],
};

export default docs;
