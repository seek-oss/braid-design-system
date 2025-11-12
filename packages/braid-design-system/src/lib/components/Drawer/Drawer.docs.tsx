import source from '@braid-design-system/source.macro';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import type { ComponentDocs } from 'site/types';

import {
  Drawer,
  Button,
  Inline,
  Text,
  TextLink,
  Strong,
  IconLanguage,
  Checkbox,
  Alert,
  Box,
} from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { DrawerContent } from './Drawer';

import * as styles from '../private/Modal/Modal.css';

const Screen = () => (
  <Box
    position="absolute"
    inset={0}
    borderRadius="xlarge"
    boxShadow="borderNeutralLarge"
    pointerEvents="none"
    zIndex="modal"
  />
);

type DrawerElement = ReactElement<ComponentProps<typeof Drawer>>;
const drawerPreviewPropsFromSourceValue = (element: DrawerElement) => ({
  ...element.props,
  onClose: () => {},
  scrollLock: false,
});

const DrawerPreview = ({ children }: { children: ReactNode }) => (
  <Box position="relative">
    <Box position="absolute" inset={0} className={styles.backdrop} />
    <Box position="relative" zIndex="modal">
      {children}
    </Box>
  </Box>
);

const docs: ComponentDocs = {
  category: 'Content',
  examplebackground: false,
  Example: () => {
    const { code, value } = source<DrawerElement>(
      <Drawer
        title="Title"
        description={<Text tone="secondary">Optional description</Text>}
        width="small"
        open={true}
        onClose={() => {}}
      >
        <Placeholder height={200} width="100%" label="Drawer Content" />
      </Drawer>,
    );

    return {
      code,
      value: (
        <Box borderRadius="xlarge" overflow="hidden">
          <DrawerPreview>
            <DrawerContent {...drawerPreviewPropsFromSourceValue(value)}>
              <Placeholder height={200} width="100%" label="Drawer Content" />
            </DrawerContent>
            <Screen />
          </DrawerPreview>
        </Box>
      ),
    };
  },
  accessibility: (
    <>
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">
          WAI-ARIA Dialog (Modal) Pattern.
        </TextLink>
      </Text>
      <Text>
        Due to the size of the Drawer, all entrance and exit animations adhere
        to the users{' '}
        <TextLink href="https://www.w3.org/WAI/WCAG21/Techniques/css/C39">
          reduce motion
        </TextLink>{' '}
        preference.
      </Text>
    </>
  ),
  alternatives: [
    { name: 'Dialog', description: 'For a smaller amount of content.' },
    {
      name: 'Accordion',
      description:
        'For revealing content inline with a strong visual treatment.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing content inline with a light visual treatment.',
    },
  ],
  additional: [
    {
      label: 'Title and description',
      description: (
        <>
          <Text>
            The <Strong>title</Strong> prop provides an accessible name
            announced to the user when the Drawer is opened. Optionally, a{' '}
            <Strong>description</Strong> can be provided and will be announced
            by a screen reader as well as visually forming part of the header
            block.
          </Text>
          <Alert>
            <Text>
              Open in Playroom and enable your screen reader to preview the
              announcements.
            </Text>
          </Alert>
        </>
      ),
      background: false,
      Example: () => {
        const { code, value } = source<DrawerElement>(
          <Drawer
            title="Example Title"
            description={
              <Text tone="secondary">
                An optional description of the Drawer content
              </Text>
            }
            width="small"
            open={true}
            onClose={() => {}}
          >
            <Placeholder height={200} width="100%" label="Drawer Content" />
          </Drawer>,
        );

        return {
          code,
          value: (
            <Box borderRadius="xlarge" overflow="hidden">
              <DrawerPreview>
                <DrawerContent {...drawerPreviewPropsFromSourceValue(value)}>
                  <Placeholder
                    height={200}
                    width="100%"
                    label="Drawer Content"
                  />
                </DrawerContent>
                <Screen />
              </DrawerPreview>
            </Box>
          ),
        };
      },
    },
    {
      label: 'Design considerations',
      description: (
        <Text>
          Recommended for providing a focused or drill-down view into a subset
          of the page content, e.g. viewing more details about a list item, or
          editing a piece of data/information. For a smaller amount content or
          to prompt the user, consider using a{' '}
          <TextLink href="/components/Dialog">Dialog</TextLink> instead.
        </Text>
      ),
    },
    {
      label: 'Development considerations',
      description: (
        <Text>
          It’s recommended that you connect the Drawer’s <Strong>open</Strong>{' '}
          state to your router so that it can be closed via the browser’s back
          button.
        </Text>
      ),
    },
    {
      label: 'Widths',
      description: (
        <Text>There are a variety of standard widths to choose from.</Text>
      ),
      Example: ({ setDefaultState, setState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('width', 'small')}

            <Inline space="small">
              <Button
                onClick={() => {
                  setState('width', 'small');
                  setState('open', true);
                }}
              >
                Small width
              </Button>
              <Button
                onClick={() => {
                  setState('width', 'medium');
                  setState('open', true);
                }}
              >
                Medium width
              </Button>
              <Button
                onClick={() => {
                  setState('width', 'large');
                  setState('open', true);
                }}
              >
                Large width
              </Button>
            </Inline>

            <Drawer
              title={`Width: ${getState('width')}`}
              open={getState('open')}
              width={getState('width')}
              onClose={() => toggleState('open')}
            >
              <Placeholder height={600} width="100%" label="Drawer Content" />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Position',
      description: (
        <Text>
          The Drawer can be positioned on either the <Strong>left</Strong> or
          the <Strong>right</Strong> by setting the <Strong>position</Strong>{' '}
          prop.
        </Text>
      ),
      Example: ({ setState, getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button
                onClick={() => {
                  setState('position', 'left');
                  setState('open', true);
                }}
              >
                Open from left
              </Button>
              <Button
                onClick={() => {
                  setState('position', 'right');
                  setState('open', true);
                }}
              >
                Open from right
              </Button>
            </Inline>

            <Drawer
              title={`Position: ${getState('position')}`}
              open={getState('open')}
              position={getState('position')}
              onClose={() => toggleState('open')}
            >
              <Placeholder height={600} width="100%" label="Drawer Content" />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Tailoring the close behaviour',
      description: (
        <>
          <Text>
            The <Strong>onClose</Strong> function is called when the user either
            click the close button inside the Drawer, or clicks on the backdrop
            outside the Drawer.
          </Text>
          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the close button can be tailored by
            providing a <Strong>closeLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('drawer')}>Open drawer</Button>
            </Inline>

            <Drawer
              title="Drawer Title"
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
              closeLabel="Close Drawer"
            >
              <Placeholder height={600} width="100%" label="Drawer Content" />
            </Drawer>
          </>,
        ),
    },
    {
      description: (
        <Text>
          To prevent the Drawer from closing, e.g. due to validation, this
          function should return <Strong>false</Strong>.
        </Text>
      ),
      Example: ({ getState, toggleState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('valid', false)}
            {setDefaultState('showError', false)}

            <Inline space="small">
              <Button onClick={() => toggleState('drawer')}>
                Open validated drawer
              </Button>
            </Inline>

            <Drawer
              title="Drawer Title"
              open={getState('drawer')}
              onClose={() => {
                if (getState('valid') === false) {
                  setState('showError', true);
                  return false;
                }

                setState('showError', false);
                toggleState('drawer');
              }}
              closeLabel="Close Drawer"
            >
              <Checkbox
                label="Can this Drawer be closed?"
                checked={getState('valid')}
                onChange={() => {
                  setState('showError', false);
                  toggleState('valid');
                }}
                tone={getState('showError') ? 'critical' : undefined}
                message={getState('showError') ? 'Required field' : undefined}
              />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Nested drawers',
      description: (
        <Text>
          Although supported, in order to keep experiences simple nesting
          Drawers is not encouraged.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('firstDrawer')}>
                Open nested drawer
              </Button>
            </Inline>

            <Drawer
              title="Third Drawer"
              width="small"
              open={getState('thirdDrawer')}
              onClose={() => toggleState('thirdDrawer')}
            >
              <Placeholder height={100} label="Drawer Content" />
            </Drawer>
            <Drawer
              title="First Drawer"
              width="large"
              open={getState('firstDrawer')}
              onClose={() => toggleState('firstDrawer')}
            >
              <Placeholder height={600} label="Drawer Content" />
              <Button onClick={() => toggleState('secondDrawer')}>
                Open second drawer
              </Button>
            </Drawer>
            <Drawer
              title="Second Drawer"
              width="medium"
              open={getState('secondDrawer')}
              onClose={() => toggleState('secondDrawer')}
            >
              <Placeholder height={400} label="Drawer Content" />
              <Button onClick={() => toggleState('thirdDrawer')}>
                Open third drawer
              </Button>
            </Drawer>
          </>,
        ),
    },
    dataAttributeDocs({
      code: `
        <Drawer
          data={{ testid: 'drawer-1' }}
          // => data-testid="drawer-1"
        >
          ...
        </Drawer>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
