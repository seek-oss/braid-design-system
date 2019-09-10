import dedent from 'dedent';

let resetImported = false;

export const markResetImported = () => {
  resetImported = true;
};

export const ensureResetImported = () => {
  if (!resetImported) {
    throw new Error(dedent`
      Braid components imported before reset.

      Make sure to import the Braid reset module before importing any components. 
      This ensures the CSS reset does not override the component styles. 
    
      e.g.

      import 'braid-design-system/reset'; // <-- Must be first
      import { BraidProvider, Box } from 'braid-design-system';
    `);
  }
};
