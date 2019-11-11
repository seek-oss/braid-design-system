import React from 'react';
import { useStyles } from 'sku/treat';
import { BoxProps } from '../../../../lib/components/Box/Box';
import {
  Box,
  Text,
  Columns,
  Column,
  Heading,
  Stack,
  Divider,
  Hidden,
} from '../../../../lib/components';
import { TextStack } from '../TextStack/TextStack';
import * as styleRefs from './Tones.treat';

const tones = ['critical', 'positive', 'neutral', 'info', 'promote'] as const;
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

interface ColourDoc {
  description: string;
  swatch: BoxProps['background'];
  usage: Record<Usage, string[]>;
}
const toneDocs: Record<Tone, ColourDoc> = {
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
          <Box
            height="touchable"
            width="touchable"
            background={swatch}
            borderRadius="standard"
          />
        </Column>
        <Column>
          <Box height="touchable" display="flex" alignItems="center">
            <Heading level="4">{tone}</Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space={['xsmall', 'medium']} collapse>
        <Column width="content">
          <Hidden mobile>
            <Box width="touchable" />
          </Hidden>
        </Column>
        <Column>
          <TextStack space="large">
            <Text>{description}</Text>

            {usageTypes.map(usageType =>
              usage[usageType].length > 0 ? (
                <Columns key={usageType} space={['medium', 'large']} collapse>
                  <Column width="1/5">
                    <Text tone="secondary">{usageType}</Text>
                  </Column>
                  <Column>
                    <Stack space="small">
                      {usage[usageType].map((usageItem, index) => (
                        <Text key={index} tone="secondary">
                          - {usageItem}
                        </Text>
                      ))}
                    </Stack>
                  </Column>
                </Columns>
              ) : null,
            )}
          </TextStack>
        </Column>
      </Columns>
    </Stack>
  );
};
export const Tones = () => {
  const styles = useStyles(styleRefs);

  return (
    <TextStack>
      <Heading level="2">Tones</Heading>

      <Text>
        The usage of colour in the system is designed to have a strong
        correlation with the tone of voice being used. The system makes
        available a spectrum of tones which are leveraged across the entire
        component suite.
      </Text>

      <Columns space={['small', 'gutter']}>
        {tones.map(tone => (
          <Column key={tone}>
            <Stack space={['none', 'xsmall']}>
              <Box
                background={toneDocs[tone].swatch}
                borderRadius="standard"
                width="full"
                height="touchable"
              />
              <Hidden mobile>
                <Box className={styles.swatchLabel}>
                  <Text tone="secondary">{tone}</Text>
                </Box>
              </Hidden>
            </Stack>
          </Column>
        ))}
      </Columns>

      <Divider />

      {tones.map(tone => (
        <ToneDefinition key={tone} tone={tone} />
      ))}
    </TextStack>
  );
};
