import React, { Fragment } from 'react';

// @ts-expect-error
import changelogContent from '../../../../../CHANGELOG.md';

import { Page } from '../../../types';
import { Markdown } from '../../Markdown/Markdown';
import { PageTitle } from '../../Seo/PageTitle';

const Changelog = () => (
  <Fragment>
    <PageTitle title="Releases" />
    <Markdown>
      {changelogContent.replace('# braid-design-system', '# Releases')}
    </Markdown>
  </Fragment>
);

const page: Page = {
  title: 'Releases',
  exact: true,
  component: Changelog,
};

export default {
  '/releases': page,
};
