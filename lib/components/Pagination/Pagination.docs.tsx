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
        {setDefaultState('page', 5)}

        <Card>
          <Pagination
            page={getState('page')}
            total={10}
            linkProps={(page) => ({
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
  accessibility: (
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
  ),
  alternatives: [],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <Text>
          To keep the design simple, a maximum of {maxPages} pages are displayed
          above <Strong>tablet</Strong> screen sizes. On <Strong>mobile</Strong>{' '}
          this number is reduced to 3.
        </Text>
      ),
    },
    {
      label: 'Developer considerations',
      background: 'card',
      description: (
        <>
          <Text>
            The page and navigation links are generated based on the provided{' '}
            <Strong>page</Strong> and <Strong>total</Strong> props.
          </Text>
          <Text>
            To configure how these links behave, it is a requirement that you
            provide a <Strong>linkProps</Strong> function. This function is used
            to transform the page number into props that will be passed to the
            underlying <TextLink href="/components/Link">Link</TextLink>{' '}
            component as configured by the{' '}
            <TextLink href="/components/BraidProvider/#providing-a-custom-link-component">
              BraidProvider
            </TextLink>
            .
          </Text>
          <Text>
            As a result, if the pagination links are not handled by the router,
            an <Strong>onClick</Strong> handler can be provided to intercept and
            handle the click.
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
              linkProps={(page) => ({
                href: `/results?page=${page}`,
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
  ],
};

export default docs;
