import { Fragment } from 'react';

// ESLint wants to correct this to `braid-design-system/CHANGELOG.md`, but we don't expose this as
// an entrypoint. The previous `braid-src` alias no longer seems to work in combination with the `raw`
// query param.
// eslint-disable-next-line import-x/no-relative-packages
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
