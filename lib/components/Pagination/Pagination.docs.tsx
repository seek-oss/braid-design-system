import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Pagination, Card } from '../';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { TextLink } from '../TextLink/TextLink';
import { maxPages } from './paginate';

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
        it is neccessary to provide a <Strong>label</Strong>.
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
      label: 'Design considerations',
      description: (
        <Text>
          To keep the design simple, a maximum of {maxPages} pages are displayed
          above <Strong>tablet</Strong> screen sizes. On <Strong>mobile</Strong>{' '}
          only the current page along with the next and previous links are
          displayed.
        </Text>
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
