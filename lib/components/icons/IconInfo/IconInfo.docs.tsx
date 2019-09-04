import { ComponentDocs } from '../../../../site/src/types';
import examplesForIcon from '../../private/examplesForIcon';
import { IconInfo } from './IconInfo';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: examplesForIcon(IconInfo),
};

export default docs;
