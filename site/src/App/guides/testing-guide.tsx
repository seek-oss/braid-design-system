import React from 'react';

import { Page } from '../../types';
import { TextStack } from '../TextStack/TextStack';
import {
  Heading,
  Divider,
  Text,
  BulletList,
  Bullet,
  Alert,
} from '../../../../lib/components';
import { Link, ExternalLink } from '../Documentation/Link';
import Code from '../Code/Code';

const page: Page = {
  title: 'Testing guide',
  Component: () => (
    <TextStack>
      <Heading level="2">Testing guide</Heading>

      <Text tone="secondary">
        This document aims to provide guidance and best practices for testing
        applications that use Braid.
      </Text>

      <Alert tone="info">
        The following info is opinions we&apos;ve formed from our experience
        building Braid and other React applications. Each team should decide
        what testing approach works best for them.
      </Alert>

      <Divider />

      <Heading level="3">How do I render Braid components in jest?</Heading>

      <Text>
        Braid doesn&apos;t require any special setup to render within{' '}
        <ExternalLink href="https://jestjs.io/">jest</ExternalLink>, however,
        all Braid components must be wrapped in a provider. Unit tests should
        use the{' '}
        <Link to="/components/BraidTestProvider">BraidTestProvider</Link>. This
        component performs the same role as the{' '}
        <Link to="/components/BraidProvider">BraidProvider</Link> but smooths
        over a few issues that are unique to unit testing. It also sets a
        default theme for you as themes are largely irrelevant when unit
        testing.
      </Text>

      <Heading level="3">Should I use Enyzme or React Testing Library?</Heading>

      <Text>
        While{' '}
        <ExternalLink href="https://enzymejs.github.io/enzyme/">
          Enzyme
        </ExternalLink>{' '}
        will work perfectly fine, we recommend{' '}
        <ExternalLink href="https://testing-library.com/docs/react-testing-library/intro">
          React Testing Library
        </ExternalLink>{' '}
        and use it internally in the Braid codebase. We feel it encourages you
        to write good tests.
      </Text>

      <Text>
        <ExternalLink href="https://testing-library.com/docs/react-testing-library/intro">
          React Testing Library
        </ExternalLink>{' '}
        has the following great features:
      </Text>

      <BulletList>
        <Bullet>Forces you to treat your components like DOM elements</Bullet>
        <Bullet>
          <ExternalLink href="https://testing-library.com/docs/dom-testing-library/api-queries#byrole">
            Role based querying
          </ExternalLink>
        </Bullet>
        <Bullet>No shallow rendering</Bullet>
      </BulletList>

      <Heading level="3">What is a good unit test?</Heading>

      <Text weight="medium">
        This question is obviously a lot larger than Braid, but we will outline
        our testing philosophy below in hopes it will help other teams decide
        what&apos;s best for them.
      </Text>

      <Text>A good test:</Text>

      <BulletList>
        <Bullet>
          Meaningfully documents the intended usage of the component
        </Bullet>
        <Bullet>Doesn&apos;t change when code is refactored</Bullet>
        <Bullet>Encourages better API design</Bullet>
        <Bullet>
          Doesn&apos;t require knowledge of the implementation to be understood
        </Bullet>
      </BulletList>

      <Text>
        Having good tests is priceless, especially when revisiting complex
        components that handle many edge-cases. It also makes onboarding new
        contributors easier as they can understand the tests without
        understanding the implementation.
      </Text>

      <Text tone="secondary">Example of testing a Menu component:</Text>

      <Code playroom={false}>{`
        test('should open menu when clicked', () => {
          const { getByRole } = render(<MyMenu />);
          
          expect(getByRole('menu')).not.toBeVisible();
  
          const menuTrigger = getByRole('button');

          menuTrigger.click();
  
          expect(getByRole('menu')).toBeVisible();
        });
      `}</Code>

      <Text>
        For more info on unit testing check out the following resources.
      </Text>
      <BulletList>
        <Bullet>
          <ExternalLink href="https://testing-library.com/docs/react-testing-library/intro">
            React Testing Library documentation
          </ExternalLink>
        </Bullet>
        <Bullet>
          <ExternalLink href="https://kentcdodds.com/blog/testing-implementation-details">
            Testing Implementation Details
          </ExternalLink>
        </Bullet>
      </BulletList>

      <Heading level="3">What about React snapshot testing?</Heading>

      <Text>
        The main benefit of snapshots tests is how quick they are to create.
        Teams often lean on them heavily to reach an arbitrary code coverage
        metric. However, what&apos;s often not discussed is the on-going cost
        they add to your code base.
      </Text>

      <Text>
        Everytime a component changes (including it&apos;s children) the
        snapshot will change, meaning the test is broken. It&apos;s very
        difficult to tell whether the component still does what it&apos;s
        supposed to do just by looking at the HTML it produced. Over time, the
        amount of snapshots you have will grow and break more frequently. In our
        experience this causes people to grow accustomed to them changing and
        ignore them all together. This is especially relevant when using Braid,
        as the components will change frequently, causing many snapshots to
        break through your app, even though it remains functional.
      </Text>

      <Text>
        Referencing our definition of a &quot;good test&quot;, snapshots
        don&apos;t meet any of this criteria. Instead of documenting what a
        component should do. They document what a component does right now.
        Instead of being resilient to refactors, they break even when
        meaningless changes occur (e.g. class names change).
      </Text>

      <Text>
        What&apos;s often raised as a solution to some of the above is shallow
        rendered snapshots. Check out &quot;
        <ExternalLink href="https://kentcdodds.com/blog/why-i-never-use-shallow-rendering">
          Why I Never Use Shallow Rendering
        </ExternalLink>
        &quot; for great article on the issues with shallow rendering.
      </Text>

      <Text>
        Note: The above is specifically discussing react component snapshots.
        Snapshot testing is a great tool when applied to the appropriate
        use-case.
      </Text>

      <Heading level="3">What about integration tests?</Heading>

      <Text>
        We suggest all teams have at least a small number of integration tests
        making sure their core flows work as expected. Here&apos;s a couple of
        great libraries to consider:
      </Text>

      <BulletList>
        <Bullet>
          <ExternalLink href="https://www.cypress.io/">Cypress</ExternalLink>
        </Bullet>
        <Bullet>
          <ExternalLink href="https://testing-library.com/docs/cypress-testing-library/intro">
            Cypress Testing Library
          </ExternalLink>
        </Bullet>
        <Bullet>
          <ExternalLink href="https://github.com/puppeteer/puppeteer">
            Puppeteer
          </ExternalLink>
        </Bullet>
        <Bullet>
          <ExternalLink href="https://github.com/smooth-code/jest-puppeteer">
            jest-puppeteer
          </ExternalLink>
        </Bullet>
        <Bullet>
          <ExternalLink href="https://testing-library.com/docs/pptr-testing-library/intro">
            Puppeteer Testing Library
          </ExternalLink>
        </Bullet>
      </BulletList>

      <Heading level="3">
        How do I query for elements rendered by Braid?
      </Heading>

      <Text>
        If you need to query for an element rendered via a Braid component we
        suggest using{' '}
        <ExternalLink href="https://testing-library.com/docs/dom-testing-library/api-queries#byrole">
          role based querying
        </ExternalLink>
        . Targetting labels and ids is also a good option. Some Braid components
        also allow passing{' '}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
          html data attributes
        </ExternalLink>{' '}
        via the `data` prop. This allows you to pass the `data-testid` prop used
        by React Testing Library.
      </Text>

      <Text>
        If you are having trouble targetting an element in a test please reach
        out to us in{' '}
        <ExternalLink href="https://seekchat.slack.com/channels/braid-support">
          #braid-support
        </ExternalLink>
        .
      </Text>
    </TextStack>
  ),
};

export default page;
