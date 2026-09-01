export type Audience = 'Hirer' | 'Candidate';
export type Presentation = 'Full page' | 'Alert' | 'Notice' | 'Dialog';
export type Status = 'Live' | 'Backlog' | 'Recommended' | 'Design';

export interface ErrorMessageContent {
  heading?: string;
  body?: string[];
  list?: string[];
  listType?: 'bullet' | 'number';
  footer?: string[];
}

export interface StatusEntry {
  label: Status;
  notes?: string[];
}

export interface ErrorMessageRow {
  error: string;
  audience: Audience[];
  scenario?: string;
  presentation?: Presentation[];
  message: ErrorMessageContent;
  statuses?: StatusEntry[];
  notes?: string[];
}

export interface ErrorMessageTable {
  label: string;
  rows: ErrorMessageRow[];
}

export const errorMessageTables: ErrorMessageTable[] = [
  {
    label: 'Permissions',
    rows: [
      {
        error: '401 Unauthorised',
        audience: ['Hirer', 'Candidate'],
        presentation: ['Full page'],
        message: {},
        statuses: [
          { label: 'Live' },
          { label: 'Backlog' },
          { label: 'Recommended' },
        ],
      },
      {
        error: '403 Forbidden',
        audience: ['Hirer'],
        scenario:
          'Trying to access SEEK Premium Talent Search without a subscription',
        presentation: ['Full page'],
        message: {
          heading: 'Get access with SEEK Premium Talent Search',
          body: [
            'Our Customer Service team can help to organise a subscription.',
            'Or you can browse talent search matches for your active job ads.',
          ],
        },
        statuses: [{ label: 'Recommended' }],
      },
      {
        error: '403 Forbidden',
        audience: ['Hirer'],
        scenario:
          'Trying to access SEEK Premium Talent Search when trial has expired',
        presentation: ['Full page'],
        message: {
          heading: 'Subscribe to keep searching',
          body: [
            'Your Premium Talent Search trial has expired. If you’d like to keep searching, our Customer Service team can help to organise a subscription.',
          ],
        },
        statuses: [{ label: 'Recommended' }],
      },
      {
        error: '403 Forbidden',
        audience: ['Hirer'],
        scenario:
          'Trying to access Guaranteed Hire in a region where it’s not available',
        presentation: ['Full page'],
        message: {
          heading: 'Guaranteed Hire isn’t available',
          body: [
            'Right now, Guaranteed Hire is only available in some regions. Post a Premium ad for the same features and take a look at some of our ad writing tips.',
          ],
        },
        statuses: [{ label: 'Live' }],
      },
      {
        error: '403 Forbidden',
        audience: ['Hirer'],
        scenario:
          'Trying to access content that they don’t have the permissions to access',
        presentation: ['Full page', 'Alert'],
        message: {
          heading: 'Only some people can see this [content]',
          body: [
            'If you think you should be one of them, ask your system administrator to give you access.',
          ],
        },
        statuses: [{ label: 'Recommended' }],
      },
      {
        error: '403 Forbidden',
        audience: ['Hirer'],
        scenario:
          'Trying to access content that they don’t have the permissions to access',
        presentation: ['Full page', 'Alert'],
        message: {
          heading: 'Only admin accounts can view invoices',
          body: [
            'If you think you should be able to view invoices, ask your company’s SEEK administrator to give you access or send you the invoices.',
          ],
        },
      },
      {
        error: '403 Forbidden',
        audience: ['Hirer'],
        scenario: 'Need to re-authenticate',
        presentation: ['Full page'],
        message: {
          heading: 'We can’t give you access to this right now',
          body: ['Try:'],
          listType: 'number',
          list: [
            'Refreshing the page',
            'Signing out and signing in again',
            'Asking your admin for access',
          ],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700.',
          ],
        },
        statuses: [{ label: 'Backlog' }],
      },
      {
        error: 'Verification link broken',
        audience: ['Hirer'],
        scenario: 'Authenticated user',
        presentation: ['Full page'],
        message: {
          heading: 'This link isn’t working',
          body: ['Try sending a new link to [email account].'],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700.',
          ],
        },
        statuses: [{ label: 'Backlog', notes: ['Hirer'] }],
      },
      {
        error: 'Verification link broken',
        audience: ['Hirer'],
        scenario: 'Unauthenticated user',
        presentation: ['Full page'],
        message: {
          heading: 'This link isn’t working',
          body: ['Try signing in to send a new link to your email.'],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700.',
          ],
        },
        statuses: [{ label: 'Backlog', notes: ['Hirer'] }],
      },
    ],
  },
  {
    label: 'Systems',
    rows: [
      {
        error: '500 Internal server error',
        audience: ['Hirer', 'Candidate'],
        message: {},
        statuses: [
          { label: 'Live' },
          { label: 'Backlog' },
          { label: 'Recommended' },
        ],
      },
      {
        error: 'Connection timeout',
        audience: ['Hirer', 'Candidate'],
        scenario: 'No internet connection',
        presentation: ['Full page', 'Alert'],
        message: {
          heading: 'We’re trying to connect',
          body: ['Check your internet connection and try again.'],
        },
        statuses: [
          { label: 'Backlog', notes: ['Apps'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Connection timeout',
        audience: ['Hirer', 'Candidate'],
        scenario: 'Refresh and try again for search',
        presentation: ['Full page', 'Alert'],
        message: {
          heading: 'Can we try that again?',
          body: ['Refresh the page to see your search results.'],
        },
        statuses: [{ label: 'Recommended' }],
      },
      {
        error: 'Connection timeout',
        audience: ['Hirer'],
        scenario: 'Can’t connect to recruitment software',
        presentation: ['Alert'],
        message: {
          body: [
            'We couldn’t connect to your recruitment software. Try refreshing the page or check back later. If it still doesn’t work, reach out to your recruitment software contact.',
          ],
        },
        statuses: [{ label: 'Design', notes: ['Indirect'] }],
      },
      {
        error: 'Bad request/server error',
        audience: ['Hirer', 'Candidate'],
        scenario: 'With error code',
        presentation: ['Full page'],
        message: {
          heading: 'Can we try that again?',
          body: ['Bear with us, we’re having technical issues.', 'Try:'],
          listType: 'number',
          list: ['Refreshing the page', 'Clearing your browser history'],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700. Tell them you’re having trouble with [error code].',
          ],
        },
        statuses: [{ label: 'Backlog', notes: ['Hirer'] }],
      },
      {
        error: 'Bad request/server error',
        audience: ['Hirer', 'Candidate'],
        scenario: 'With error code',
        presentation: ['Full page', 'Alert', 'Notice'],
        message: {
          body: [
            'We can’t load your ad products right now. Try refreshing the page or check back later. If it still doesn’t work, reach out to the SEEK Customer Service team and tell them you’re having trouble with [error code].',
          ],
        },
        statuses: [{ label: 'Design', notes: ['Indirect'] }],
      },
      {
        error: 'Bad request/server error',
        audience: ['Hirer', 'Candidate'],
        scenario: 'No error code',
        presentation: ['Full page'],
        message: {
          heading: 'Can we try that again?',
          body: ['Bear with us, we’re having technical issues.', 'Try:'],
          listType: 'number',
          list: ['Refreshing the page', 'Clearing your browser history'],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700.',
          ],
        },
        statuses: [{ label: 'Backlog', notes: ['Hirer'] }],
      },
      {
        error: 'Scheduled maintenance - site down',
        audience: ['Hirer', 'Candidate'],
        presentation: ['Alert'],
        message: {
          body: [
            'We’re improving our site and aren’t available until 5 am, Thu 10 Aug 2022. Sorry for the inconvenience.',
          ],
        },
        statuses: [
          { label: 'Live', notes: ['Asia Apps'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer', 'Candidate'],
        presentation: ['Full page', 'Alert', 'Notice'],
        message: {
          heading: 'We’re working on it',
          body: [
            'We can’t load this right now but we’re doing our best to fix it.',
            'Try refreshing the page or check back later.',
          ],
        },
        statuses: [
          { label: 'Live', notes: ['CAJA job categories', 'Analytics reports'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer', 'Candidate'],
        presentation: ['Alert', 'Notice'],
        message: {
          body: [
            'We can’t show this data right now. We’re doing our best to fix this. Try refreshing the page or check back later.',
          ],
        },
        statuses: [
          { label: 'Backlog', notes: ['Analytics reports'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer', 'Candidate'],
        presentation: ['Notice'],
        message: {
          body: ['Data not available. Refresh the page or check back later.'],
        },
        statuses: [
          { label: 'Design', notes: ['Analytics reports'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer', 'Candidate'],
        presentation: ['Notice'],
        message: {
          body: [
            'Filters aren’t available right now. Refresh the page or check back later.',
          ],
        },
        statuses: [
          { label: 'Backlog', notes: ['Candidate Management'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer'],
        scenario: 'With CS number',
        presentation: ['Alert', 'Notice'],
        message: {
          body: [
            'We can’t show your [widget content e.g. notifications] right now. Refresh the page or check back later.',
          ],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700.',
          ],
        },
        statuses: [
          { label: 'Design', notes: ['Candidate Management'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer'],
        scenario: 'With CS link',
        presentation: ['Alert', 'Notice'],
        message: {
          body: [
            'We can’t show your [widget content e.g. notifications] right now. Refresh the page or check back later.',
          ],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team.',
          ],
        },
        statuses: [
          { label: 'Design', notes: ['Candidate Management'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Widget won\'t load',
        audience: ['Hirer'],
        scenario: 'Ad selection panel fails to load',
        presentation: ['Alert'],
        message: {
          body: [
            'We can’t load your ad products right now. Try refreshing the page or check back later. If it still doesn’t work, reach out to the SEEK Customer Service team and tell them you’re having trouble with [error code].',
          ],
        },
        statuses: [{ label: 'Design', notes: ['Indirect'] }],
      },
      {
        error: 'Action couldn’t be completed',
        audience: ['Hirer', 'Candidate'],
        scenario: 'Try again immediately',
        presentation: ['Alert', 'Notice'],
        message: {
          body: ['Sorry, we couldn’t save your changes. Can we try again?'],
        },
        statuses: [
          { label: 'Live', notes: ['Asia Apps'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Action couldn’t be completed',
        audience: ['Hirer', 'Candidate'],
        scenario: 'Try again immediately',
        presentation: ['Alert', 'Notice'],
        message: {
          body: [
            'Sorry, we couldn’t [perform the action e.g. add the file]. Can we try again?',
          ],
        },
        statuses: [
          { label: 'Design', notes: ['Candidate Management'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Action couldn’t be completed',
        audience: ['Hirer', 'Candidate'],
        scenario: 'Come back later',
        message: {
          body: [
            'Sorry, we can’t [perform the action e.g. add the file] right now. Can we try again later?',
          ],
        },
        statuses: [
          { label: 'Design', notes: ['Candidate Management'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Action couldn’t be completed',
        audience: ['Hirer', 'Candidate'],
        scenario: 'Come back later, with CS escalation',
        message: {
          body: [
            'Sorry, we can’t save your changes right now. Can we try again later?',
          ],
          footer: [
            'If it still doesn’t work, reach out to our Customer Service team on 1300 658 700.',
          ],
        },
        statuses: [
          { label: 'Design', notes: ['Candidate Management'] },
          { label: 'Recommended', notes: ['Other products'] },
        ],
      },
      {
        error: 'Action couldn’t be completed',
        audience: ['Hirer', 'Candidate'],
        message: {
          heading: 'Can we try that again?',
          body: [
            'Sorry, we couldn’t save your changes. Try refreshing the page or check back later.',
          ],
          footer: [
            'If it still doesn’t work, reach out to the SEEK Customer Service team and tell them you’re having trouble with [error code].',
          ],
        },
      },
    ],
  },
  {
    label: 'Configuration required',
    rows: [
      {
        error: 'App or browser version not supported',
        audience: ['Candidate'],
        presentation: ['Full page'],
        message: {
          body: [
            'Update your app to keep using it. We’ve made some security improvements and don’t support your app version anymore. You can also continue on JobsDB.com',
          ],
        },
        statuses: [{ label: 'Live', notes: ['Apps'] }],
      },
    ],
  },
  {
    label: 'Not found',
    rows: [
      {
        error: '404 Not found - we can\'t find that page.',
        audience: ['Candidate'],
        scenario: 'Link to Help Centre',
        presentation: ['Full page'],
        message: {
          heading: 'We couldn’t find that page',
          body: ['But maybe we can help you find what you need.'],
          listType: 'number',
          list: [
            'Check that the URL is correct.',
            'Try going back to the previous page.',
            'Visit our Help Centre',
          ],
        },
        statuses: [{ label: 'Live' }],
      },
      {
        error: '404 Not found - we can\'t find that page.',
        audience: ['Hirer'],
        scenario: 'Customer Service number',
        presentation: ['Full page'],
        message: {
          heading: 'We couldn’t find that page',
          body: ['But maybe we can help you find what you need.'],
          listType: 'number',
          list: [
            'Check that the URL is correct.',
            'Try going back to the previous page.',
            'Reach out to our Customer Service team.',
          ],
        },
        statuses: [{ label: 'Live' }],
      },
      {
        error: '404 Not found - we can\'t find that page.',
        audience: ['Candidate'],
        scenario: 'App',
        presentation: ['Dialog'],
        message: {
          heading: 'We couldn’t find that page',
          footer: ['OK'],
        },
      },
      {
        error: 'Search results not found',
        audience: ['Hirer'],
        scenario: 'Laws Of Attraction',
        message: {
          heading:
            'We’ll show this data when we have more responses from people who match your search',
          body: [
            'We’re working on gathering enough responses from these candidates to confidently share what attracts them to a role. We’ll update the data when we do.',
            'In the meantime, you can adjust your filters to try a broader search.',
          ],
        },
        statuses: [{ label: 'Live' }],
      },
      {
        error: 'Search results not found',
        audience: ['Hirer'],
        scenario: 'Role and market insights',
        message: {},
      },
    ],
  },
  {
    label: 'Validation',
    rows: [
      {
        error: 'Required field not completed',
        audience: ['Hirer', 'Candidate'],
        message: {
          body: ['Enter [data required].'],
        },
      },
      {
        error: 'Required field not completed',
        audience: ['Hirer'],
        scenario: 'Salary pay range',
        message: {
          body: ['Enter a minimum pay.', 'Enter a maximum pay.'],
        },
        statuses: [{ label: 'Backlog' }],
      },
      {
        error: 'Entered value exceeds maximum for the field',
        audience: ['Hirer', 'Candidate'],
        message: {
          body: ['[Field name] must be less than [maximum value]'],
        },
      },
      {
        error: 'Entered value exceeds maximum for the field',
        audience: ['Hirer'],
        scenario: 'Salary pay range',
        message: {
          body: ['Maximum pay must be less than $1,000,000.'],
        },
        statuses: [{ label: 'Backlog' }],
      },
      {
        error: 'Dates out of historical data range',
        audience: ['Hirer'],
        scenario: 'Analytics Ad Usage report (date selection field)',
        message: {
          body: ['Enter a date between DD/MM/YYYY and DD/MM/YYYY'],
        },
      },
      {
        error: 'Dates in the future',
        audience: ['Hirer'],
        scenario: 'Analytics Ad Usage report (date selection field)',
        message: {
          body: ['Enter a date between DD/MM/YYYY and DD/MM/YYYY'],
        },
      },
      {
        error: 'Dates out of order',
        audience: ['Hirer'],
        scenario: 'Analytics Ad Usage report (date selection field)',
        message: {
          body: ['Enter a date that’s after the ‘From’ date.'],
        },
      },
      {
        error: 'Invalid format',
        audience: ['Hirer'],
        scenario: 'Analytics Ad Usage report (date selection field)',
        message: {
          body: ['Enter the date as DD/MM/YYYY'],
        },
      },
    ],
  },
];
