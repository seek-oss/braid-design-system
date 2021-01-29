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
      label: 'Development considerations',
      background: 'card',
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
  ],
};

export default docs;
