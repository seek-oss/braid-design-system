import React from 'react';
import { BoxProps } from '../../../../../../lib/components/Box/Box';
import {
  Text,
  Columns,
  Column,
  Heading,
  Stack,
  Divider,
  Hidden,
} from '../../../../../../lib/components';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../../../../../../lib/components/Box/Box';
import { TextStack } from '../../../TextStack/TextStack';
import { Page } from '../../../../types';
import { ThemedExample } from '../../../ThemeSetting';
import { PageTitle } from '../../../Seo/PageTitle';
import * as styles from './tones.css';

const tones = [
  'critical',
  'caution',
  'positive',
  'neutral',
  'info',
  'promote',
] as const;
type Tone = typeof tones[number];

const usageTypes = [
  'UI',
  'Messaging',
  'Status',
  'Graphs',
  'Time',
  'Payments',
] as const;
type Usage = typeof usageTypes[number];

interface ColorDoc {
  description: string;
  swatch: BoxProps['background'];
  usage: Record<Usage, string[]>;
}
const toneDocs: Record<Tone, ColorDoc> = {
  critical: {
    description: 'Super important. You need to see this.',
    swatch: 'critical',
    usage: {
      UI: ['High Risk', 'High Urgency', 'Error', 'Failed', 'Delete'],
      Messaging: ['Critical Message'],
      Status: ['Late/Overdue'],
      Graphs: ['Trending downward'],
      Time: ['Unsatisfactory'],
      Payments: ['Overdue', 'No Credits Remaining'],
    },
  },
  caution: {
    description:
      'You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.',
    swatch: 'caution',
    usage: {
      UI: ['Low Risk', 'Low Urgency', 'Pending', 'Upcoming'],
      Messaging: ['Caution Message', 'Draft (label)'],
      Status: ['Not Yet Contacted', 'Rating'],
      Graphs: [],
      Time: ['Below Average'],
      Payments: ['Partially Paid', 'Credits Expire Soon', 'Low Credits'],
    },
  },
  positive: {
    description:
      'Good vibes & new things! Wants to get the user to act on something or be aware something good happened.',
    swatch: 'positive',
    usage: {
      UI: ['Success', 'Complete', 'New Section', 'New Segment', 'New Message'],
      Messaging: ['Positive Message', 'Contacted/Sent Message'],
      Status: ['New Job', 'New Candidate'],
      Graphs: ['Trending upward'],
      Time: ['Above average'],
      Payments: ['Complete', 'Credit in Surplus', 'Credits Added'],
    },
  },
  neutral: {
    description:
      'Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.',
    swatch: 'neutral',
    usage: {
      UI: [
        'Default',
        'Archived',
        'History',
        'Saved/Previously Saved',
        'Date Created',
      ],
      Messaging: ['Read Message'],
      Status: ['Expired Job'],
      Graphs: ['No Change'],
      Time: [],
      Payments: [],
    },
  },
  info: {
    description:
      'Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.',
    swatch: 'info',
    usage: {
      UI: ['Help', 'Updated', 'Scheduled'],
      Messaging: ['Guidance Message', 'Unread'],
      Status: ['Updated Resume', 'Previously Contacted'],
      Graphs: [],
      Time: ['Average'],
      Payments: [],
    },
  },
  promote: {
    description:
      'Things we wish to make prominent and give more visibility to. Typically used to highlight features, updates or marketing messages.',
    swatch: 'promote',
    usage: {
      UI: ['Active', 'Beta'],
      Messaging: ['Promotional Message'],
      Status: [
        'Be an Early Applicant',
        'Featured Job (default)',
        'Follower (of a company)',
        'May be Approachable',
        "You're a Strong Applicant",
        'Recommended Job',
        'May be a Match',
        'May be Contactable',
      ],
      Graphs: ['Pricing Table Call-out / Recommended'],
      Time: ['Highlights'],
      Payments: [],
    },
  },
};

const ToneDefinition = ({ tone }: { tone: Tone }) => {
  const { swatch, description, usage } = toneDocs[tone];

  return (
    <Stack space="small">
      <Columns space="medium">
        <Column width="content">
          <ThemedExample>
            <Box background={swatch} className={styles.square} />
          </ThemedExample>
        </Column>
        <Box height="touchable" display="flex" alignItems="center">
          <Heading level="4">{tone}</Heading>
        </Box>
      </Columns>

      <Columns space={['xsmall', 'medium']} collapseBelow="tablet">
        <Column width="content">
          <Hidden below="tablet">
            <Box width="touchable" />
          </Hidden>
        </Column>
        <TextStack space="large">
          <Text>{description}</Text>

          {usageTypes.map((usageType) =>
            usage[usageType].length > 0 ? (
              <Columns
                key={usageType}
                space={['medium', 'large']}
                collapseBelow="tablet"
              >
                <Column width="1/5">
                  <Text tone="secondary">{usageType}</Text>
                </Column>
                <Stack space="small">
                  {usage[usageType].map((usageItem, index) => (
                    <Text key={index} tone="secondary">
                      - {usageItem}
                    </Text>
                  ))}
                </Stack>
              </Columns>
            ) : null,
          )}
        </TextStack>
      </Columns>
    </Stack>
  );
};

function TonePage() {
  return (
    <TextStack>
      <Heading component="h1" level="2">
        <PageTitle title="Tones Foundation" />
        Tones
      </Heading>

      <Text>
        The usage of colour in the system is designed to have a strong
        correlation with the tone of voice being used. The system makes
        available a spectrum of tones which are leveraged across the entire
        component suite.
      </Text>

      <Columns space={['small', 'gutter']}>
        {tones.map((tone) => (
          <Stack space={['none', 'xsmall']} key={tone}>
            <ThemedExample>
              <Box
                background={toneDocs[tone].swatch}
                width="full"
                className={styles.rectangle}
              />
            </ThemedExample>
            <Hidden below="tablet">
              <Box textAlign="center">
                <Text tone="secondary">{tone}</Text>
              </Box>
            </Hidden>
          </Stack>
        ))}
      </Columns>

      <Divider />

      {tones.map((tone) => (
        <ToneDefinition key={tone} tone={tone} />
      ))}
    </TextStack>
  );
}

const page: Page = {
  title: 'Tones',
  component: TonePage,
};

export default page;
