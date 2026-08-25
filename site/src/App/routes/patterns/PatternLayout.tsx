import { Divider, Heading, List, Text, TextLink } from 'braid-design-system';
import type { ComponentProps, ReactElement } from 'react';

import type { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import { TextStack } from '../../TextStack/TextStack';

import { getPatternEntry } from './catalog';

interface PatternLayoutProps {
  slug: string;
  description?: string;
  sections: ReadonlyArray<{ href: string; label: string }>;
  children: ComponentProps<typeof TextStack>['children'];
}

export const PatternLayout = ({
  slug,
  description,
  sections,
  children,
}: PatternLayoutProps) => {
  const entry = getPatternEntry(slug);

  return (
    <TextStack>
      <Heading level="1">
        <PageTitle title={entry.title} />
        {entry.title}
      </Heading>
      <Text tone="secondary">{description ?? entry.description}</Text>
      {sections.length > 0 ? (
        <List>
          {sections.map((section) => (
            <Text key={section.href}>
              <TextLink href={section.href}>{section.label}</TextLink>
            </Text>
          ))}
        </List>
      ) : null}
      <Divider />
      {children}
    </TextStack>
  );
};

export const patternPage = (slug: string, element: ReactElement): Page => ({
  title: getPatternEntry(slug).title,
  element,
});
