import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { Rating, Stack, Inline, Text, Strong, TextLink } from '../';
import { IconLanguage } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () => source(<Rating size="large" rating={3} />),
  accessibility: (
    <>
      <Text>
        To support users with screen readers, an <Strong>aria-label</Strong> is
        used to provider a description of the rating.
      </Text>

      <Text tone="promote" id="translations">
        <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
        <Strong>aria-label</Strong> can be customised by providing the{' '}
        <Strong>aria-label</Strong> prop.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Sizing',
      description: (
        <Text>
          Follows the same sizing rules as the{' '}
          <TextLink href="/components/Text">Text</TextLink> component.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="small">
              <Rating size="large" rating={3} />
              <Text tone="secondary" size="large">
                large
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="standard" rating={3} />
              <Text tone="secondary" size="standard">
                standard
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="small" rating={3} />
              <Text tone="secondary" size="small">
                small
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="xsmall" rating={3} />
              <Text tone="secondary" size="xsmall">
                xsmall
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Hiding the text rating',
      description: (
        <Text>
          The text rating can be hidden by setting{' '}
          <Strong>showTextRating</Strong> to <Strong>false</Strong>.
        </Text>
      ),
      Example: () =>
        source(<Rating size="large" rating={4.2} showTextRating={false} />),
    },
    {
      label: 'Single star rating',
      description: (
        <Text>
          You can set the Rating component to only show one star, by setting the
          prop <Strong>showSingleStar</Strong> to <Strong>true</Strong>.
        </Text>
      ),
      Example: () => source(<Rating rating={4.2} showSingleStar={true} />),
    },
  ],
};

export default docs;
