import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Inline } from '../';
import { UseIconProps } from '../../hooks/useIcon';

import * as icons from './index';

type IconName = keyof typeof icons;
const iconNames = Object.keys(icons).map((icon) => icon as IconName);

const Icons = ({ tone }: { tone?: UseIconProps['tone'] }) => (
  <Inline space="small">
    {iconNames.map((icon) => {
      const IconComponent = icons[icon];
      return <IconComponent key={icon} tone={tone} />;
    })}
  </Inline>
);

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <Icons />,
    },
  ],
};

export default docs;
