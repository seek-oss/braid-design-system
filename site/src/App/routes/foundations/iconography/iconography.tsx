import React from 'react';
import { Outlet, Route } from 'react-router';
import { Stack, Heading } from 'braid-src/lib/components';
import type { Page } from '../../../../types';
import { PageTitle } from '../../../Seo/PageTitle';
import {
  DocNavigationBar,
  DocNavigationItem,
} from '../../../DocNavigation/DocNavigation';
import { IconsBrowse } from './IconsBrowse';
import { IconsDetails } from './IconsDetails';

const Iconography = () => (
  <Stack space="xlarge">
    <Heading component="h1" level="2">
      <PageTitle title="Iconography Foundation" />
      Iconography
    </Heading>

    <DocNavigationBar title="Side Navigation">
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
  badge: 'New',
  element: <Iconography />,
  children: (
    <>
      <Route path="" element={<IconsDetails />} />
      <Route path="browse" element={<IconsBrowse />} />
    </>
  ),
};

export default page;
