import React, { useState, Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import {
  Actions,
  Drawer,
  Button,
  Inline,
  Text,
  Stack,
  TextLink,
  IconMail,
  Box,
} from '../../';
import { Placeholder } from '../../../playroom/components';
import { ModalPanel } from './ModalPanel';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320, 768, 1200],
  examples: [
    {
      label: 'Test: Default',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="default"
          title="Default test"
          headingLevel="3"
          position="center"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </ModalPanel>
      ),
    },
    // {
    //   label: 'Test: With illustration/logo',
    //   docsSite: false,
    //   Example: () => (
    //     <ModalPanel
    //       id="illustrated"
    //       title="Illustration test"
    //       illustration={
    //         <Placeholder
    //           height={150}
    //           width={150}
    //           shape="round"
    //           label="Illustration"
    //         />
    //       }
    //       onClose={() => {}}
    //       scrollLock={false}
    //     >
    //       <Stack space="xlarge" align="center">
    //         <Placeholder width="100%" height={100} />
    //         <Inline space="small">
    //           <Placeholder height={44} width={80} label="OK" />
    //           <Placeholder height={44} width={80} label="Cancel" />
    //         </Inline>
    //       </Stack>
    //     </ModalPanel>
    //   ),
    // },
    // {
    //   label: 'Test: Description',
    //   docsSite: false,
    //   Example: () => (
    //     <ModalPanel
    //       id="description"
    //       title="Description test"
    //       description={
    //         <Placeholder height="auto" width="100%" label="Description" />
    //       }
    //       onClose={() => {}}
    //       scrollLock={false}
    //     >
    //       <Placeholder height={100} width="100%" />
    //     </ModalPanel>
    //   ),
    // },
    // {
    //   label: 'Test: Content width',
    //   docsSite: false,
    //   Example: () => (
    //     <Box display="flex" alignItems="center" justifyContent="center">
    //       <ModalPanel
    //         id="content"
    //         title="Content-sized"
    //         width="content"
    //         onClose={() => {}}
    //         scrollLock={false}
    //       >
    //         <Placeholder height={100} width={200} label="200px wide" />
    //       </ModalPanel>
    //     </Box>
    //   ),
    // },
    // {
    //   label: 'Test: Xsmall width',
    //   docsSite: false,
    //   Example: () => (
    //     <ModalPanel
    //       id="xsmall"
    //       title="Xsmall"
    //       width="xsmall"
    //       onClose={() => {}}
    //       scrollLock={false}
    //     >
    //       <Placeholder height={100} width="100%" label="Xsmall Drawer" />
    //     </ModalPanel>
    //   ),
    // },
    // {
    //   label: 'Test: Small width',
    //   docsSite: false,
    //   Example: () => (
    //     <ModalPanel
    //       id="small"
    //       title="Small"
    //       width="small"
    //       onClose={() => {}}
    //       scrollLock={false}
    //     >
    //       <Placeholder height={100} width="100%" label="Small Drawer" />
    //     </ModalPanel>
    //   ),
    // },
    // {
    //   label: 'Test: Medium width',
    //   docsSite: false,
    //   Example: () => (
    //     <ModalPanel
    //       id="medium"
    //       title="Medium"
    //       width="medium"
    //       onClose={() => {}}
    //       scrollLock={false}
    //     >
    //       <Placeholder height={100} width="100%" label="Medium Drawer" />
    //     </ModalPanel>
    //   ),
    // },
    // {
    //   label: 'Test: Large width',
    //   docsSite: false,
    //   Example: () => (
    //     <ModalPanel
    //       id="large"
    //       title="Large"
    //       width="large"
    //       onClose={() => {}}
    //       scrollLock={false}
    //     >
    //       <Placeholder height={100} width="100%" label="Large Drawer" />
    //     </ModalPanel>
    //   ),
    // },
  ],
};

export default docs;
