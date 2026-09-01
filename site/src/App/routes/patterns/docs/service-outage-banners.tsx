import source from '@braid-design-system/source.macro';
import {
  Alert,
  Box,
  Dialog,
  Heading,
  IconCaution,
  IconCritical,
  List,
  Stack,
  Strong,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProvider,
  Text,
  TextLink,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';
import { isValidElement, type ReactNode } from 'react';

import type { PatternDocs } from '../../../../types';

type OutageMessages = {
  planned: ReactNode;
  unplanned: ReactNode;
};

type LanguageMessages = {
  widespread: OutageMessages;
  isolated: OutageMessages;
  slow: OutageMessages;
};

const disruptionRows = [
  { key: 'widespread', label: 'Widespread disruption' },
  { key: 'isolated', label: 'Isolated disruption' },
  { key: 'slow', label: 'Slow or intermittent service' },
] as const;

const Paragraphs = ({ children }: { children: [ReactNode, ReactNode] }) => (
  <Stack space="medium">
    {children.map((paragraph, index) => (
      <Text key={index} size="small">
        {paragraph}
      </Text>
    ))}
  </Stack>
);

const recommendedMessages = {
  english: {
    widespread: {
      planned:
        'We\u2019re improving our site and will not be available from 11 am, Friday 13 Jan 2023 to 3 pm, Saturday 14 Jan 2023. Sorry for any inconvenience.',
      unplanned:
        'Our site isn\u2019t available right now. We\u2019re doing our best to fix this. Try refreshing the page or check back later.',
    },
    isolated: {
      planned: (
        <Paragraphs>
          {[
            'We\u2019re improving our site. Your ad performance reports will not be available until 11 am, Friday 13 Jan 2023.',
            <>
              Sorry for any inconvenience. If you need help, reach out to our{' '}
              <TextLink href="#">Customer Service team</TextLink>.
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned: (
        <Paragraphs>
          {[
            'Your ad performance reports aren\u2019t available right now. We\u2019re doing our best to fix this. Try refreshing the page or check back later.',
            <>
              If it still doesn&rsquo;t work, reach out to our{' '}
              <TextLink href="#">Customer Service team</TextLink>.
            </>,
          ]}
        </Paragraphs>
      ),
    },
    slow: {
      planned: (
        <Paragraphs>
          {[
            'We\u2019re improving our site. Posting a job ad may be slower than usual until 11 am, Friday 13 Jan 2023.',
            <>
              Sorry for any inconvenience. If you need help, reach out to our{' '}
              <TextLink href="#">Customer Service team</TextLink>.
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned:
        'Posting a job ad may be slower than usual. We\u2019re doing our best to fix this. Try refreshing the page or check back later.',
    },
  },
  indonesian: {
    widespread: {
      planned:
        'Situs kami tidak dapat diakses mulai Jumat, 13 Jan 2023, pukul 11.00 \u2013 Sabtu, 14 Jan 2023, pukul 15.00 WIB karena perbaikan sistem. Mohon maaf atas ketidaknyamanannya.',
      unplanned: (
        <Paragraphs>
          {[
            'Situs kami sedang tidak dapat diakses. Kami sedang berusaha memperbaikinya.',
            'Silakan muat ulang halaman atau coba lagi nanti.',
          ]}
        </Paragraphs>
      ),
    },
    isolated: {
      planned: (
        <Paragraphs>
          {[
            'Kami sedang melakukan perbaikan situs. Laporan performa iklan Anda tidak dapat diakses hingga Jumat, 13 Jan 2023, pukul 11.00 WIB.',
            <>
              Mohon maaf atas ketidaknyamanannya. Jika memerlukan bantuan,
              silakan hubungi{' '}
              <TextLink href="#">Tim Layanan Pelanggan kami</TextLink>.
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned: (
        <Paragraphs>
          {[
            'Laporan performa iklan Anda tidak dapat diakses sementara. Kami sedang berusaha memperbaikinya. Silakan muat ulang halaman atau coba lagi nanti.',
            <>
              Jika masih belum bisa, hubungi{' '}
              <TextLink href="#">Tim Layanan Pelanggan kami</TextLink>.
            </>,
          ]}
        </Paragraphs>
      ),
    },
    slow: {
      planned: (
        <Paragraphs>
          {[
            'Kami sedang meningkatkan layanan kami. Pemasangan lowongan mungkin lebih lambat dari biasanya hingga Jumat, 13 Jan 2023, pukul 11.00 WIB.',
            <>
              Mohon maaf atas ketidaknyamanannya. Jika memerlukan bantuan,
              silakan hubungi{' '}
              <TextLink href="#">Tim Layanan Pelanggan kami</TextLink>.
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned: (
        <Paragraphs>
          {[
            'Proses memasang iklan mungkin lebih lambat dari biasanya. Kami sedang berusaha memperbaikinya.',
            'Silakan muat ulang halaman atau coba lagi nanti.',
          ]}
        </Paragraphs>
      ),
    },
  },
  thai: {
    widespread: {
      planned:
        'เราจะทำการปิดปรับปรุงเว็บไซต์ตั้งแต่เวลา 11:00 น. ของวันศุกร์ที่ 13 มกราคม 2023 - 15:00 น. ของวันเสาร์ที่ 14 มกราคม 2023 ขออภัยในความไม่สะดวก',
      unplanned:
        'ไม่สามารถใช้งานเว็บไซต์ได้ในขณะนี้ เรากำลังพยายามแก้ไขปัญหาอย่างเร็วที่สุด กรุณารีเฟรชหน้านี้หรือกลับมาอีกครั้งในภายหลัง',
    },
    isolated: {
      planned: (
        <Paragraphs>
          {[
            'เรากำลังทำการปรับปรุงเว็บไซต์ในขณะนี้ โดยรายงาน Ad Performance จะไม่สามารถใช้งานได้จนถึงเวลา 15:00 น. ของวันศุกร์ที่ 14 มกราคม 2023',
            <>
              ขออภัยในความไม่สะดวก หากต้องการความช่วยเหลือ กรุณาติดต่อ
              <TextLink href="#">แผนกลูกค้าสัมพันธ์</TextLink>
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned: (
        <Paragraphs>
          {[
            'ไม่สามารถใช้รายงาน Ad Performance ได้ในขณะนี้ เรากำลังพยายามแก้ไขปัญหาอย่างเร็วที่สุด กรุณารีเฟรชหน้านี้หรือกลับมาอีกครั้งในภายหลัง',
            <>
              หากยังพบปัญหาในการใช้งาน กรุณาติดต่อ
              <TextLink href="#">แผนกลูกค้าสัมพันธ์</TextLink>
            </>,
          ]}
        </Paragraphs>
      ),
    },
    slow: {
      planned: (
        <Paragraphs>
          {[
            'เรากำลังทำการปรับปรุงเว็บไซต์จนถึงเวลา 11:00 น. ของวันศุกร์ที่ 13 มกราคม 2023 โดยในระหว่างนี้การลงประกาศงานอาจมีความล่าช้ากว่าปกติ',
            <>
              ขออภัยในความไม่สะดวก หากต้องการความช่วยเหลือ กรุณาติดต่อ
              <TextLink href="#">แผนกลูกค้าสัมพันธ์</TextLink>
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned: (
        <Paragraphs>
          {[
            'ขณะนี้การลงประกาศงานอาจมีความล่าช้ากว่าปกติ เรากำลังพยายามแก้ไขปัญหาอย่างเร็วที่สุด',
            'กรุณาลองรีเฟรชหน้านี้หรือกลับมาอีกครั้งในภายหลัง',
          ]}
        </Paragraphs>
      ),
    },
  },
  traditionalChinese: {
    widespread: {
      planned:
        '系統升級中，於 2023 年 1 月 13 日（五）早上 11 時至 2023 年 1 月 14 日（六）下午 3 時暫停服務，不便之處，敬請見諒。',
      unplanned:
        '暫時未能使用服務，我們正努力修復問題，試重新整理此頁或稍後再試。',
    },
    isolated: {
      planned: (
        <Paragraphs>
          {[
            '系統升級中，招聘廣告表現分析報告暫停至 2023 年 1 月 13 日（五）上午 11 時。',
            <>
              如需協助，請聯絡
              <TextLink href="#">客戶服務</TextLink>
              ，不便之處，敬請見諒。
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned: (
        <Paragraphs>
          {[
            '暫時未能提供招聘廣告表現分析報告，我們正努力修復問題，試重新整理此頁或稍後再試。',
            <>
              如問題持續，請聯絡
              <TextLink href="#">客戶服務</TextLink>。
            </>,
          ]}
        </Paragraphs>
      ),
    },
    slow: {
      planned: (
        <Paragraphs>
          {[
            '系統升級中，發布招聘廣告或比平常 需時，將於 2023 年 1 月 13 日（五）上午 11 時回復正常。',
            <>
              如需協助，請聯絡
              <TextLink href="#">客戶服務</TextLink>
              ，不便之處，敬請見諒。
            </>,
          ]}
        </Paragraphs>
      ),
      unplanned:
        '發布招聘廣告或比平常需時，我們正努力修復問題，試重新整理此頁或稍後再試。',
    },
  },
};

const Message = ({ children }: { children: ReactNode }) =>
  isValidElement(children) &&
  (children.type === Stack || children.type === Paragraphs) ? (
    children
  ) : (
    <Text size="small">{children}</Text>
  );

const RecommendedMessagesTable = ({
  label,
  messages,
}: {
  label: string;
  messages: LanguageMessages;
}) => (
  <Table label={label} alignY="top">
    <TableHeader>
      <TableRow>
        <TableHeaderCell wrap width="24%" minWidth={150}>
          <Text size="small">Disruption</Text>
        </TableHeaderCell>
        <TableHeaderCell wrap width="38%" minWidth={200}>
          <Text size="small">Planned outages</Text>
        </TableHeaderCell>
        <TableHeaderCell wrap width="38%" minWidth={200}>
          <Text size="small">Unplanned outages</Text>
        </TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {disruptionRows.map((row) => (
        <TableRow key={row.key}>
          <TableCell wrap width="24%" minWidth={150}>
            <Text size="small" weight="strong">
              {row.label}
            </Text>
          </TableCell>
          <TableCell wrap width="38%" minWidth={200}>
            <Message>{messages[row.key].planned}</Message>
          </TableCell>
          <TableCell wrap width="38%" minWidth={200}>
            <Message>{messages[row.key].unplanned}</Message>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const docs: PatternDocs = {
  description: (
    <Text>
      Informs users of an existing or upcoming outage or reduced service level,
      affecting the whole system or specific products.
    </Text>
  ),
  alternatives: [
    {
      name: 'Alert',
      description:
        'For strong in-flow messages that sit at page or section level.',
    },
    {
      name: 'Dialog',
      description:
        'For exposing additional content in a modal with rich formatting.',
    },
    {
      name: 'Box',
      description:
        'For creating custom layouts and UI elements when there is no Braid equivalent.',
    },
    {
      name: 'messages-to-users',
      section: 'patterns',
      description:
        'For finding the right messaging component or pattern based on context and urgency.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Widespread outages',
        description: (
          <Text>
            For service disruptions that impact entire systems or products, such
            as site-wide maintenance, product outages and overdue accounts.
          </Text>
        ),
        Example: ({ getState, toggleState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('dialog', false)}
              <Box
                background="criticalLight"
                paddingY="gutter"
                // Follows the screen gutter sizing of PageBlock
                paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
              >
                <Stack space="none" align="center">
                  <Text icon={<IconCritical />}>
                    Critical system outage banner example. Notice how the text
                    wraps across different screen sizes. We maximise text width
                    to limit the height of the banner.{' '}
                    <TextLink href="#" onClick={() => toggleState('dialog')}>
                      Read more
                    </TextLink>
                  </Text>
                </Stack>
              </Box>
              <Dialog
                title="Critical message"
                description={<Text tone="secondary">Optional description</Text>}
                open={getState('dialog')}
                onClose={() => toggleState('dialog')}
              >
                <Placeholder height={100} width="100%" />
              </Dialog>
            </>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Anatomy</Heading>
            <Text>
              There is currently no out-of-the-box banner component for
              top-level messaging. Create a custom component and follow the
              recommendations below.
            </Text>
            <List space="large">
              <Text>
                Apply a <Strong>critical</Strong> or <Strong>caution</Strong>{' '}
                <TextLink href="/foundations/tones">tone</TextLink> and matching
                icon.
              </Text>
              <Text>
                Provide a “Read more” link which opens a{' '}
                <TextLink href="/components/Dialog">Dialog</TextLink> when
                relevant.
              </Text>
              <Text>
                Place the banner at the very top of the page, above the site
                navigation.
              </Text>
              <Text>
                Widespread disruption banners should remain constant without the
                option to dismiss them.
              </Text>
            </List>
          </>
        ),
      },
      {
        description: (
          <>
            <Heading level="4">Technical details</Heading>
            <List space="large">
              <Text>
                Create a custom banner using{' '}
                <TextLink href="/components/Box">Box</TextLink> with{' '}
                <Strong>paddingY=&quot;gutter&quot;</Strong> and{' '}
                <Strong>
                  paddingX=&#123;&#123; mobile: &quot;xsmall&quot;, tablet:
                  &quot;gutter&quot; &#125;&#125;
                </Strong>{' '}
                to follow PageBlock screen gutters.
              </Text>
              <Text>
                Set the background to the light version of the selected tone
                (e.g. <Strong>criticalLight</Strong>) and use the corresponding
                icon (e.g.{' '}
                <TextLink href="/components/IconCritical">
                  IconCritical
                </TextLink>
                ).
              </Text>
              <Text>
                Left-align the banner text and wrap it in a centre-aligned{' '}
                <Strong>Stack</Strong> so icon spacing stays uniform.
              </Text>
              <Text>
                Align the banner look and feel to the latest{' '}
                <TextLink href="/components/Alert">Alert</TextLink> component
                style, but do not round the corners.
              </Text>
            </List>
          </>
        ),
      },
      {
        label: 'Isolated outages',
        description: (
          <Text>
            For service disruptions that impact a specific part of a product,
            such as specific feature outages and limited site access.
          </Text>
        ),
        Example: () =>
          source(
            <Alert
              tone="caution"
              onClose={() => {}}
              closeLabel="Close info alert"
            >
              <Text>
                This is a contextual caution message that can be dismissed.
              </Text>
            </Alert>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Anatomy</Heading>
            <List space="large">
              <Text>
                Use the <TextLink href="/components/Alert">Alert</TextLink>{' '}
                component in tone <Strong>critical</Strong> or{' '}
                <Strong>caution</Strong>.
              </Text>
              <Text>
                Provide a “Read more” link which opens a{' '}
                <TextLink href="/components/Dialog">Dialog</TextLink> when
                relevant.
              </Text>
              <Text>
                Place the Alert within the context of the page, below the site
                navigation.
              </Text>
              <Text>
                Isolated disruption banners should generally remain constant but
                can be made dismissible using the <Strong>onClose</Strong>{' '}
                property.
              </Text>
            </List>
          </>
        ),
      },
    ],
    layout: [
      {
        label: 'Stacking multiple banners',
        description: (
          <List space="large">
            <Text>
              Widespread banners should sit at the very top of the page,{' '}
              <Strong>above the site navigation</Strong>.
            </Text>
            <Text>
              Isolated banners should sit within the context of the page,{' '}
              <Strong>below the site navigation</Strong>.
            </Text>
            <Text>
              Critical banners should be placed above caution banners.
            </Text>
          </List>
        ),
        Example: ({ getState, toggleState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('dialog', false)}
              {setDefaultState('dialog2', false)}
              <Box
                background="criticalLight"
                paddingY="gutter"
                // Follows the screen gutter sizing of PageBlock
                paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
              >
                <Stack space="none" align="center">
                  <Text icon={<IconCritical />}>
                    Critical system outage banner example with some text.{' '}
                    <TextLink href="#" onClick={() => toggleState('dialog')}>
                      Read more
                    </TextLink>
                  </Text>
                </Stack>
              </Box>
              <Box
                background="cautionLight"
                paddingY="gutter"
                // Follows the screen gutter sizing of PageBlock
                paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
              >
                <Stack space="none" align="center">
                  <Text icon={<IconCaution />}>
                    Caution banner example with some text.{' '}
                    <TextLink href="#" onClick={() => toggleState('dialog2')}>
                      Read more
                    </TextLink>
                  </Text>
                </Stack>
              </Box>
              <Stack space="xlarge">
                <Box background="info">
                  <Placeholder label="Navigation" height={70} />
                </Box>
                <Stack space="medium">
                  <Heading level="2">Hello world</Heading>
                  <Alert tone="critical">
                    <Text>
                      This is a contextual critical message that cannot be
                      dismissed.
                    </Text>
                  </Alert>
                  <Alert
                    tone="caution"
                    onClose={() => {}}
                    closeLabel="Close info alert"
                  >
                    <Text>
                      This is a contextual caution message that can be
                      dismissed.
                    </Text>
                  </Alert>
                  <Placeholder label="Content..." height={300} />
                </Stack>
                <Box background="neutral">
                  <Placeholder label="Footer" height={100} />
                </Box>
              </Stack>
              <Dialog
                title="Critical message"
                description={<Text tone="secondary">Optional description</Text>}
                open={getState('dialog')}
                onClose={() => toggleState('dialog')}
              >
                <Placeholder height={100} width="100%" />
              </Dialog>
              <Dialog
                title="Caution message"
                description={<Text tone="secondary">Optional description</Text>}
                open={getState('dialog2')}
                onClose={() => toggleState('dialog2')}
              >
                <Placeholder height={100} width="100%" />
              </Dialog>
            </>,
          ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <>
            <Text>A service outage banner should let customers know:</Text>
            <List space="large">
              <Text>what parts of the site are impacted</Text>
              <Text>how they&rsquo;ll be impacted</Text>
              <Text>when the site will be impacted</Text>
              <Text>when to expect regular performance.</Text>
            </List>
            <Text>
              Service outage banners should be used in conjunction with other
              communications. Ideally, the customer would have heard about the
              outage before arriving on platform. The outage banner should serve
              as a reminder rather than be the first news of the outage.
            </Text>
          </>
        ),
      },
      {
        label: 'Content guidelines',
        description: (
          <>
            <Heading level="4">Recommended messages</Heading>
            <TabsProvider>
              <Stack space="medium">
                <Tabs label="Recommended messages by language">
                  <Tab>English</Tab>
                  <Tab>Indonesian</Tab>
                  <Tab>Thai</Tab>
                  <Tab>Traditional Chinese</Tab>
                </Tabs>
                <TabPanels>
                  <TabPanel>
                    <RecommendedMessagesTable
                      label="Recommended messages in English"
                      messages={recommendedMessages.english}
                    />
                  </TabPanel>
                  <TabPanel>
                    <RecommendedMessagesTable
                      label="Recommended messages in Indonesian"
                      messages={recommendedMessages.indonesian}
                    />
                  </TabPanel>
                  <TabPanel>
                    <RecommendedMessagesTable
                      label="Recommended messages in Thai"
                      messages={recommendedMessages.thai}
                    />
                  </TabPanel>
                  <TabPanel>
                    <RecommendedMessagesTable
                      label="Recommended messages in Traditional Chinese"
                      messages={recommendedMessages.traditionalChinese}
                    />
                  </TabPanel>
                </TabPanels>
              </Stack>
            </TabsProvider>
          </>
        ),
      },
      {
        description: (
          <>
            <Heading level="4">Writing your own message</Heading>
            <Text>
              If the scenario you need isn&apos;s covered, use this template to
              craft your own message:
            </Text>
            <Text>
              &ldquo;We&rsquo;re improving our site.{' '}
              <Strong>[Affected task]</Strong> will be{' '}
              <Strong>[how it will be affected]</Strong> until{' '}
              <Strong>[time day date]</Strong>. Sorry for any inconvenience. If
              you need help, reach out to our Customer Service team.&rdquo;
            </Text>
          </>
        ),
        Example: ({ getState, toggleState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('dialog', false)}
              <Alert
                tone="caution"
                onClose={() => {}}
                closeLabel="Close caution alert"
              >
                <Text>
                  We&rsquo;re improving our site. Posting a job ad will be{' '}
                  <TextLink href="#" onClick={() => toggleState('dialog')}>
                    slower than usual
                  </TextLink>{' '}
                  until 11 am, Friday 13 Jan 2023. Sorry for any inconvenience.
                  If you need help, reach out to our Customer Service team.
                </Text>
              </Alert>
              <Dialog
                title="We&rsquo;re improving SEEK"
                open={getState('dialog')}
                onClose={() => toggleState('dialog')}
              >
                <Stack space="large">
                  <Stack space="small">
                    <Text>
                      Job Ads will be slower than usual. You might notice this
                      in:
                    </Text>
                    <List>
                      <Text>Ad budget balances</Text>
                      <Text>Performance rating in the job list</Text>
                    </List>
                  </Stack>
                  <Stack space="small">
                    <Text>You can still:</Text>
                    <List>
                      <Text>Create, edit and explore jobs</Text>
                      <Text>Receive candidate applications</Text>
                      <Text>Manage your applicants</Text>
                    </List>
                  </Stack>
                </Stack>
              </Dialog>
            </>,
          ),
      },
      {
        description: (
          <>
            <Text weight="strong">Recommendations</Text>
            <List space="large">
              <Text>
                Focus on the task that&rsquo;s likely to be disrupted. Try not
                to say a product or feature is unavailable, unless it&rsquo;s
                clear how this would impact the user.
              </Text>
              <Text>
                Show the right time for the user. Where possible, show the right
                date and time based on the user&rsquo;s location.
              </Text>
              <Text>
                Keep it short. Summarise what&rsquo;s happening in the banner.
                If you really need to provide more information, add a link to
                the banner that opens a{' '}
                <TextLink href="/components/Dialog">Dialog</TextLink>.
              </Text>
              <Text>
                Link the content you&rsquo;re providing more details about.
                Avoid &ldquo;Read more&rdquo; links, they&rsquo;re not great for
                accessibility and don&rsquo;t provide enough info about the
                content you&rsquo;re linking to.
              </Text>
              <Text>
                Only direct people to Customer Service when our team can
                genuinely provide help.
              </Text>
            </List>
          </>
        ),
      },
    ],
  },
};

export default docs;
