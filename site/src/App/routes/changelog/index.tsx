import React from 'react';

// @ts-expect-error
import changelogContent from '!!raw-loader!../../../../../CHANGELOG.md';

import { Page } from '../../../types';
import { Markdown } from '../../Markdown/Markdown';

const Changelog = () => <Markdown>{changelogContent}</Markdown>;

const page: Page = {
  title: 'Changelog',
  exact: true,
  component: Changelog,
};

export default {
  '/changelog': page,
};
