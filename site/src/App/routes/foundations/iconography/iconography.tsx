import { Stack, Heading } from 'braid-src/lib/components';
import { Outlet, Route } from 'react-router';

import type { Page } from '../../../../types';
import {
  DocNavigationBar,
  DocNavigationItem,
} from '../../../DocNavigation/DocNavigation';
import { PageTitle } from '../../../Seo/PageTitle';

import { IconsBrowse } from './IconsBrowse';
import { IconsDetails } from './IconsDetails';

const Iconography = () => (
  <Stack space="xlarge">
    <Heading component="h1" level="2">
      <PageTitle title="Iconography Foundation" />
      Iconography
    </Heading>

    <DocNavigationBar title="Subnavigation">
      <DocNavigationItem href="/foundations/iconography">
        Details
      </DocNavigationItem>
      <DocNavigationItem href="/foundations/iconography/browse">
        Browse
      </DocNavigationItem>
    </DocNavigationBar>

    <Outlet />
  </Stack>
);

const page: Page = {
  title: 'Iconography',
  element: <Iconography />,
  children: (
    <>
      <Route path="" element={<IconsDetails />} />
      <Route path="browse" element={<IconsBrowse />} />
    </>
  ),
};

export default page;
