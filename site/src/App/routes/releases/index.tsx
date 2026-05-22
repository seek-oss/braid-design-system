import { Fragment } from 'react';

// `braid-src/CHANGELOG.md?raw` doesn't work for some reason, maybe Vite's asset loading doesn't
// handle aliases?
import changelogContent from '../../../../../packages/braid-design-system/CHANGELOG.md?raw';
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
