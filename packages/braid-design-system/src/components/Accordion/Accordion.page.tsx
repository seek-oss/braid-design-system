import React from 'react';
import { createRouteData } from '@crackle/router';

export const routeData = createRouteData(() => ({
  route: '/components/accordion',
  globalMetadata: {
    componentName: 'Accordion',
  },
}));

export default () => <div>Accordion</div>;
