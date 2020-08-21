import React from 'react';

// @ts-expect-error
import changelogContent from '!!raw-loader!../../../../../CHANGELOG.md';

import { Page } from '../../../types';
import { Markdown } from '../../Markdown/Markdown';

const Changelog = () => (
  <Markdown>
    {changelogContent.replace('# braid-design-system', '# Releases')}
  </Markdown>
);

const page: Page = {
  title: 'Releases',
  exact: true,
  component: Changelog,
};

export default {
  '/releases': page,
};
