import {
  Strong,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  TextLink,
} from 'braid-design-system';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Represents a group of components and patterns used to reveal non-critical,
      supplementary information without cluttering the primary content.
    </Text>
  ),
  additional: [
    {
      label: 'Components',
      description: (
        <Table label="Secondary information components" alignY="top">
          <TableHeader>
            <TableRow>
              <TableHeaderCell wrap width="30%" minWidth={150}>
                <Text size="small">Component</Text>
              </TableHeaderCell>
              <TableHeaderCell wrap width="70%" minWidth={200}>
                <Text size="small">Purpose and use</Text>
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/components/TooltipRenderer">
                    TooltipRenderer
                  </TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  A concise, floating message that gives users non-critical,
                  extra context on mouse hover or keyboard focus.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/components/Disclosure">Disclosure</TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  A single section of inline content that can be expanded and
                  collapsed by the user.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/components/Accordion">Accordion</TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  A vertically stacked list of panels that expand and collapse
                  to reveal sections of content.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/components/Dialog">Dialog</TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  A modal overlay that focusses user attention by disabling the
                  screen to show a message.
                </Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
    },
    {
      label: 'Alternative approaches',
      description: (
        <Text>
          To surface secondary info upfront, use{' '}
          <TextLink href="/components/Text">Text</TextLink> and adjust the{' '}
          <Strong>size</Strong> or <Strong>tone</Strong> to acheive the desired
          prominence. This works well for always-visible copy such as legal or
          explanatory text (
          <TextLink
            target="_blank"
            href="https://seek-oss.github.io/braid-design-system/playroom/preview/#?code=N4Igxg9gJgpiBcIA8AFAhgcxgIQDYTAGsACAdwEsoAXACwF4AdEAZwFs1dcmA+BgO2LEkAZSpoixZgAdxMRiAAeuNACcsTYlHIA3SjBXN5KmBgCuylT36DBIsROmz5rGFtOsrAm7YASMNFp8GMS4MNowuPIALDwAggIwCmisUqHENP6BGEgA9H4B5EG8Xt5IACqJVMXe3sIQLsQARtAAnsSQUm34xqzE5FLM7poQ3ZLkVMTJMFQANO0QfMwwYFTTpiqTWlLkzGCFGNY1ghHjAHTEAGo6yabMfeLmO8SmE3wwAI6mMGMTUxMmMGYYmYp0OpRyFQUVTBNnKlWIVAWciYS0gfCgqhaniOgjqDUqKjQCPhhQRSMkywWGJULTm3RgvX6g16aNRqyo602-R2eyCMO8Jyo5yu2hud3ID1wTxexDen2+zHGkxc-ywQLQIP5QghlWqsJyonEhGKMLsRskMjAyJALjcHhAetK+SyITCEWicQSSRSaQyBSCuWd+0dsMh0JKNTx32aUDaHS6EB6fQGQygI0TP2V0zmrOW7M5BW2u32WuOUqFl2urFu9zAjzuMrlX0zf2IAPVmojth1UJDtjDYwAXtaFGwOFwHaXiFG21DCcSoX0BIrh8RR+xOHTEwzk8z5os82sNoWeSWuzZBcKqzWJXWpQ3Xh9m4rfiq22rgaDz7kwyHcoaiBNCMzQcS1rVtch3GxGokCDIJXXCSImBiB14lnZJUm+P0skDTJgy1OFeynGcYzjCBOhCbdGRTXo01GF8s1mfc2SPLki15A5zzLM5K1FatxUlaVH3lFs33bT8CJ7cMjkIiZETeeRUSpTENBXEcx04aCjhnAkiVWRdSTUtcNNwSZ0TJN4KTRalaUopMmSgrjmMPDljy2U94MvXixVretnmE58lT+KdxI1L8ZKkv8DXsY1Dn-GLilydAsDwAhYr4EAZhAWgGTgRAlhgQgACkIEaZgQAAXyAA"
          >
            example
          </TextLink>
          ).
        </Text>
      ),
    },
  ],
};

export default docs;
