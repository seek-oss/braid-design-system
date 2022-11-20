import dedent from 'dedent';

declare const global: any;
if (global?.__IS_PLAYROOM_ENVIRONMENT__ !== 'clearly') {
  throw new Error(dedent`
    Playroom prototyping components are being imported instead of Braid components.
    ‎
    These components must not be used in production. Please import from the top level Braid entry point:
    ‎
    -import { Component } from 'braid-design-system/playroom/components';
    +import { Component } from 'braid-design-system';
  `);
}

export * from '../lib/playroom/components';
