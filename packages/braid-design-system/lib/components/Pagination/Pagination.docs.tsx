import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Pagination, Card, Notice } from '../';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { TextLink } from '../TextLink/TextLink';
import { defaultPageLimit } from './Pagination';
import { IconLanguage } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ setDefaultState, getState, setState }) =>
    source(
      <>
        {setDefaultState('page', 1)}

        <Pagination
          page={getState('page')}
          total={10}
          linkProps={({ page }) => ({
            href: `#`,
            onClick: (e) => {
              e.preventDefault();
              setState('page', page);
            },
          })}
          label="Pagination Example"
        />
      </>,
    ),
  accessibility: (
    <>
      <Text>
        Renders a semantic <Strong>nav</Strong> element to encapsulate the
        pagination links. Given this is a{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#aria_landmark">
          Landmark Region
        </TextLink>
        , in order to comply with the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#general-principles-of-landmark-design">
          General Principles of Landmark Design
        </TextLink>{' '}
        it is neccessary for it to have an <Strong>aria-label</Strong>.
      </Text>
      <Text tone="promote" id="translate-nav">
        <IconLanguage title="Translation hint" titleId="translate-nav" /> The{' '}
        <Strong>aria-label</Strong> can be customised by providing the{' '}
        <Strong>label</Strong> prop.
      </Text>
      <Text>
        Given <Strong>Pagination</Strong> is presented semantically as a list of
        links, the <Strong>Next</Strong> and <Strong>Previous</Strong> links
        have defined their relationship to the current page by providing the{' '}
        <Strong>rel</Strong> attribute with their respective values.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Limiting the number of pages',
      description: (
        <>
          <Text>
            The number of pages displayed can be limited using the{' '}
            <Strong>pageLimit</Strong> prop.
          </Text>
          <Notice>
            <Text>
              To keep the design simple, only the current page, next and
              previous links are displayed on <Strong>mobile</Strong>, while on
              larger devices the limit cannot be increased above the default
              limit of {defaultPageLimit}.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('page', 5)}

            <Pagination
              page={getState('page')}
              total={10}
              label="Limiting the number of pages"
              pageLimit={3}
              linkProps={({ page }) => ({
                href: `#${page}`,
                onClick: (e) => {
                  e.preventDefault();
                  setState('page', page);
                },
              })}
            />
          </>,
        ),
    },
    {
      label: 'Customising the labels',
      description: (
        <>
          <Text>
            The label text for the navigation links can be customised using the{' '}
            <Strong>previousLabel</Strong> and <Strong>nextLabel</Strong> props.
          </Text>
          <Text tone="promote" id="translate-page">
            <IconLanguage title="Translation hint" titleId="translate-page" />{' '}
            The <Strong>aria-label</Strong> for the page links can be customised
            by providing a function to the <Strong>pageLabel</Strong> prop. The
            function receives the page number should it be required for
            interpolation.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('page', 3)}

            <Pagination
              page={getState('page')}
              total={10}
              linkProps={({ page }) => ({
                href: `#`,
                onClick: (e) => {
                  e.preventDefault();
                  setState('page', page);
                },
              })}
              label="Custom labels example"
              previousLabel="Back"
              nextLabel="Forward"
              pageLabel={(page) => `Jump to page ${page}`}
            />
          </>,
        ),
    },
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            It is a requirement that you have set up{' '}
            <Strong>linkComponent</Strong> on your{' '}
            <TextLink href="/components/BraidProvider/#providing-a-custom-link-component">
              BraidProvider
            </TextLink>
            .
          </Text>
          <Text>
            You must also provide a <Strong>linkProps</Strong> function to
            transform the page number into{' '}
            <TextLink href="/components/Link">Link</TextLink> props.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('page', 5)}

            <Pagination
              page={getState('page')}
              total={10}
              label="Pagination of results"
              linkProps={({ page }) => ({
                href: `#${page}`,
                onClick: (e) => {
                  e.preventDefault();
                  setState('page', page);
                },
              })}
            />
          </>,
        ),
      showCodeByDefault: true,
    },
    {
      label: 'Contextual design',
      description: (
        <Text>
          When inside a <TextLink href="/components/Card">Card</TextLink>, the
          outline of the Pagination&rsquo;s active page is omitted since the
          background has sufficient contrast without it.
        </Text>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('page', 1)}

            <Card>
              <Pagination
                page={getState('page')}
                total={10}
                linkProps={({ page }) => ({
                  href: `#`,
                  onClick: (e) => {
                    e.preventDefault();
                    setState('page', page);
                  },
                })}
                label="Pagination Example"
              />
            </Card>
          </>,
        ),
    },
  ],
};

export default docs;
