import dedent from 'dedent';

declare const global: any;
if (global?.__IS_PLAYROOM_ENVIRONMENT__ !== 'clearly') {
  throw new Error(dedent`
    Playroom components were imported instead of Braid components.
    ‎
    Make sure to import from the correct entry point.
    ‎
    -import { Component } from 'braid-design-system/playroom/components';
    +import { Component } from 'braid-design-system';
  `);
}

export * from '../lib/playroom/components';
