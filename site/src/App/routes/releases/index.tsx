// @ts-expect-error
import changelogContent from 'braid-src/CHANGELOG.md';
import { Fragment } from 'react';

import { Markdown } from '../../Markdown/Markdown';
import { PageTitle } from '../../Seo/PageTitle';

export const ReleasesPage = () => (
  <Fragment>
    <PageTitle title="Releases" />
    <Markdown>
      {changelogContent.replace('# braid-design-system', '# Releases')}
    </Markdown>
  </Fragment>
);
