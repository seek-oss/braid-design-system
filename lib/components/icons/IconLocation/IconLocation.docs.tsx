import { ComponentDocs } from '../../../../site/src/types';
import examplesForIcon from '../../private/examplesForIcon';
import { IconLocation } from './IconLocation';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: examplesForIcon(IconLocation),
};

export default docs;
