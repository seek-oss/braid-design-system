import contribution from './contribution';
import designWorkflow from './design-workflow';
import developmentWorkflow from './development-workflow';
import jobSummary from './job-summary';
import playroomPrototyping from './playroom-prototyping';
import testingGuide from './testing-guide';

const guides = {
  '/guides/job-summary': jobSummary,
  '/guides/design-workflow': designWorkflow,
  '/guides/development-workflow': developmentWorkflow,
  '/guides/playroom-prototyping': playroomPrototyping,
  '/guides/contribution': contribution,
  '/guides/testing-guide': testingGuide,
};

const guideDescriptions: Record<keyof typeof guides, string> = {
  '/guides/job-summary':
    'Build a job card in Playroom, layer by layer, using Braid layout and content components.',
  '/guides/design-workflow':
    'How to use Braid during a typical product design workflow.',
  '/guides/development-workflow':
    'How to build interfaces that properly leverage Braid components and theming.',
  '/guides/playroom-prototyping':
    'Prototype with live Braid components in Playroom.',
  '/guides/contribution':
    'How we add to Braid, and how to raise gaps without waiting on a tiny team.',
  '/guides/testing-guide':
    'Best practices for testing applications that use Braid.',
};

export const guideLandingCards = Object.entries(guides).map(
  ([href, guide]) => ({
    href,
    label: guide.title,
    description: guideDescriptions[href as keyof typeof guides],
  }),
);

export default guides;
