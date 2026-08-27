import { List, Stack, Strong, Text, TextLink } from 'braid-design-system';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Communicate time-sensitive conditions, events or responses in the UI.
    </Text>
  ),
  additional: [
    {
      label: 'Messaging components',
      description: (
        <>
          <Text>
            Braid includes a variety of messaging components, each with their
            own purpose and intended use.
          </Text>
          <Stack space="large">
            <Stack space="small">
              <Text>
                <Strong>
                  <TextLink href="/components/Alert">Alert</TextLink> and{' '}
                  <TextLink href="/components/Notice">Notice</TextLink>
                </Strong>
              </Text>
              <Text>
                Inform the user of an important status or condition relevant to
                their current task. They sit within the context of the page,
                close to the issue to which they relate.
              </Text>
            </Stack>
            <Stack space="small">
              <Text>
                <Strong>
                  <TextLink href="/components/useToast">useToast</TextLink>
                </Strong>
              </Text>
              <Text>
                Briefly acknowledges a user action without interrupting their
                flow. Toasts float at the bottom of the screen and disappear
                after a few seconds.
              </Text>
            </Stack>
            <Stack space="small">
              <Text>
                <Strong>
                  <TextLink href="/components/FieldMessage">
                    FieldMessage
                  </TextLink>
                </Strong>
              </Text>
              <Text>
                For displaying messages below a custom input field that
                isn&rsquo;t provided by Braid.
              </Text>
            </Stack>
          </Stack>
        </>
      ),
    },
    {
      label: 'Messaging patterns',
      description: (
        <List>
          <Text>
            <TextLink href="/patterns/empty-states">Empty states</TextLink> —
            Occurs when there is no data available at the present time, and
            informs the user about what they might see when there is data,
            and/or what they should do next.
          </Text>
          <Text>
            <TextLink href="/patterns/error-states">Error states</TextLink> —
            Occurs when the website or app fails to complete an expected action,
            and informs the user that a problem has occurred.
          </Text>
          <Text>
            <TextLink href="/patterns/nudge">Nudge</TextLink> — A prominent
            message that encourages the user to take a specific action on
            something relevant at that moment. A nudge is always actionable and
            drives desired behaviour.
          </Text>
          <Text>
            <TextLink href="/patterns/service-outage-banners">
              Service outage banners
            </TextLink>{' '}
            — Inform users of upcoming interruptions to SEEK products and
            services. This can include outages to the entire system or to
            specific products.
          </Text>
        </List>
      ),
    },
  ],
};

export default docs;
