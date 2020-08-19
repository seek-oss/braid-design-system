import React from 'react';

// @ts-expect-error
import changelogContent from '!!raw-loader!../../../../../CHANGELOG.md';

import { Page } from '../../../types';
import { Markdown } from '../../Markdown/Markdown';

const Changelog = () => (
  <Markdown>
    {changelogContent.replace('# braid-design-system', '# Release Notes')}
  </Markdown>
);

const page: Page = {
  title: 'Release Notes',
  exact: true,
  component: Changelog,
};

export default {
  '/release-notes': page,
};
