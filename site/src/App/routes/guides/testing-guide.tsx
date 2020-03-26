import React from 'react';

import { Page } from '../../../types';
import { TextStack } from '../../TextStack/TextStack';
import {
  Heading,
  Divider,
  Text,
  BulletList,
  Bullet,
  Strong,
} from '../../../../../lib/components';
import { Link, ExternalLink } from '../../Link/Link';
import Code from '../../Code/Code';

const page: Page = {
  title: 'Testing Guide',
  component: () => (
    <TextStack>
      <Heading level="2">Testing Guide</Heading>

      <Text tone="secondary">
        This document aims to provide guidance and best practices for testing
        applications that use Braid.
      </Text>

      <Text tone="secondary">
        Note that, while these opinions are based on our experience building
        Braid and other React applications, each team is still free to decide
        which testing strategy works best for them.
      </Text>

      <Divider />

      <Heading level="3">How do I render Braid components in Jest?</Heading>

      <Text>
        Since Braid relies on{' '}
        <ExternalLink href="https://github.com/seek-oss/sku">sku</ExternalLink>,
        it doesn&rsquo;t require any special setup to render within{' '}
        <ExternalLink href="https://jestjs.io/">Jest</ExternalLink>.
      </Text>
      <Text>
        However, all Braid components must be wrapped in a provider. Unit tests
        should use{' '}
        <Link to="/components/BraidTestProvider">BraidTestProvider</Link>, which
        performs the same role as{' '}
        <Link to="/components/BraidProvider">BraidProvider</Link> but smooths
        over a few issues that are unique to unit testing. It also sets a
        default theme for you since themes are largely irrelevant when unit
        testing.
      </Text>

      <Heading level="3">Should I use Enyzme or React Testing Library?</Heading>

      <Text>
        While{' '}
        <ExternalLink href="https://enzymejs.github.io/enzyme/">
          Enzyme
        </ExternalLink>{' '}
        works perfectly well, we recommend{' '}
        <ExternalLink href="https://testing-library.com/docs/react-testing-library/intro">
          React Testing Library
        </ExternalLink>
        . In fact, we use it internally in the Braid codebase. We feel it
        encourages you to write more effective unit tests by decoupling them
        from implementation detail.
      </Text>
      <Text>
        For example, the vast majority of React Testing Library&rsquo;s API is
        focused on{' '}
        <ExternalLink href="https://testing-library.com/docs/dom-testing-library/api-queries#queries">
          querying
        </ExternalLink>{' '}
        DOM elements based on outcomes a user might expect, rather than using
        test IDs or snapshotting raw markup.
      </Text>
      <Text>
        Most notably, it features{' '}
        <ExternalLink href="https://testing-library.com/docs/dom-testing-library/api-queries#byrole">
          role based querying
        </ExternalLink>{' '}
        that leverages the accessibilty of your application for testing
        purposes. This has the attractive side effect of making accessibilty
        much more prominent during the development process.
      </Text>
      <Text>
        For example, a typical unit test written with React Testing Library
        might look something like this:
      </Text>
      <Code playroom={false}>{`
        import { render } from 'react-testing-library';

        test('should open menu when clicked', () => {
          const { getByRole } = render(<MyMenu />);
          expect(getByRole('menu')).not.toBeVisible();

          const menuTrigger = getByRole('button');
          menuTrigger.click();

          expect(getByRole('menu')).toBeVisible();
        });
      `}</Code>
      <Text>
        We feel this approach to unit testing is more appropriate to Braid
        consumers for a few reasons:
      </Text>
      <BulletList>
        <Bullet>
          Your tests will execute Braid code rather than mocking or hiding it
          behind shallow rendering. This is important if you want to catch
          issues with the integration between your codebase and Braid.
        </Bullet>
        <Bullet>
          It more clearly catches issues with Braid itself. Don&rsquo;t forget
          that we make mistakes too. If we break something, your tests should
          break too.
        </Bullet>
        <Bullet>
          As we iterate on Braid&rsquo;s internals, you won&rsquo;t have
          snapshot tests that constantly break because of implementation
          details. Ideally, your test should only break if something is actually
          broken.
        </Bullet>
      </BulletList>

      <Heading level="3">
        How do I query for elements rendered by Braid?
      </Heading>

      <Text>
        As much as possible, we suggest using{' '}
        <ExternalLink href="https://testing-library.com/docs/dom-testing-library/api-queries#byrole">
          role based querying
        </ExternalLink>{' '}
        to maximise accessibilty. Queries based on text content, title text,
        labels and display values are also good options. Some Braid components
        allow passing{' '}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
          HTML data attributes
        </ExternalLink>{' '}
        via the `data` prop. This allows you to pass the `data-testid` prop used
        by React Testing Library. However, using data props should be treated as
        a last resort since it&rsquo;s considered implementation detail.
      </Text>

      <Text>
        If you&rsquo;re having trouble targeting an element in a test, please
        reach out to us in{' '}
        <ExternalLink href="https://seekchat.slack.com/channels/braid-support">
          #braid-support
        </ExternalLink>
        .
      </Text>

      <Text>
        For more information on this style of unit testing, check out the
        following resources:
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
          </ExternalLink>{' '}
          by Kent C. Dodds.
        </Bullet>
      </BulletList>

      <Heading level="3">What about component snapshot testing?</Heading>

      <Text>
        The main benefit of snapshots tests is how quick they are to create,
        which means that you can get a lot of code coverage with little effort.
        However, what&rsquo;s often not discussed is their relative
        effectiveness at catching issues compared to their maintenance cost.
      </Text>

      <Text>
        Every time a component or its children change, the snapshot will change,
        resulting in a broken test. It&rsquo;s very difficult to tell whether
        the component still does what it&rsquo;s supposed to do just by looking
        at the HTML it produced. Over time, the amount of snapshots you have
        will grow and break more frequently. In our experience, this causes
        people to grow accustomed to approving screenshot diffs based on a
        cursory glance of the output, which means that you&rsquo;re much less
        likely to notice when something is actually broken. This is especially
        relevant when using Braid because the components will change frequently,
        causing snapshots to break your app&rsquo;s tests even though it remains
        perfectly functional.
      </Text>

      <Text>
        When dealing with overly noisy snapshot diffs, it&rsquo;s common for
        people to reach for{' '}
        <ExternalLink href="https://enzymejs.github.io/enzyme/docs/api/shallow.html">
          shallow rendering
        </ExternalLink>{' '}
        of components as a solution. However, we believe this further reduces
        the effectiveness of your tests. Check out{' '}
        <ExternalLink href="https://kentcdodds.com/blog/why-i-never-use-shallow-rendering">
          &ldquo;Why I Never Use Shallow Rendering&rdquo;
        </ExternalLink>{' '}
        for a great article on the issues with shallow rendering.
      </Text>

      <Text>
        <Strong>Note:</Strong> The above specifically discusses React component
        snapshots. Snapshot testing is a great tool when care is taken to ensure
        that all snapshot diffs represent meaningful differences in the
        behaviour of your application. In contrast, React component markup can
        be quite volatile and full of irrelevant markup changes.
      </Text>

      <Heading level="3">What about integration tests?</Heading>

      <Text>
        We recommend all teams employ a small number of integration tests to
        ensure their core flows work as expected. Here are some great libraries
        to consider:
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
    </TextStack>
  ),
};

export default page;
