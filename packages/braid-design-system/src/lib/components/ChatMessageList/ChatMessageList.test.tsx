import { fireEvent, render, screen, within } from '@testing-library/react';

import { ChatMessage, ChatMessageGroup, ChatMessageList } from '..';
import { BraidTestProvider } from '../../../test';
import { atoms } from '../../css/atoms/atoms';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';

import * as styles from './ChatMessage.css';
import { tight } from './ChatMessageGroup.css';
import { messages } from './ChatMessageList.css';
import { textSizeTrimmed, tone } from '../../css/typography.css';
import { size as avatarSizes } from '../Avatar/Avatar.css';
import { root as hiddenVisually } from '../HiddenVisually/HiddenVisually.css';
import {
  direction as scrollDirection,
  scrollOverlaySizeName,
} from '../private/ScrollContainer/ScrollContainer.css';

const sentAt = new Date('2026-10-23T09:41:00');

const classNamesFor = (value: Parameters<typeof atoms>[0]) =>
  atoms(value).split(' ').filter(Boolean);

const bubbleFor = (text: string) => {
  const message = screen.getByText(text);
  const bubble = message.parentElement;

  if (!bubble) {
    throw new Error(`No bubble found for "${text}"`);
  }

  return bubble;
};

describe('ChatMessageList', () => {
  it('renders a named log around an ordered list of groups', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage>Hello</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage>Hi</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const log = screen.getByRole('log', { name: 'Conversation' });

    expect(log.tagName).toBe('OL');
    expect(log).toHaveClass(...classNamesFor({ gap: 'large' }), messages);
    expect(log).toHaveAttribute('tabindex', '0');
    expect(within(log).getAllByRole('listitem')).toHaveLength(2);
    expect(log.parentElement).toHaveClass(
      ...classNamesFor({ height: 'full' }),
      scrollDirection.vertical,
    );
  });

  it('puts data attributes on the log', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation" data={{ testid: 'conversation' }}>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage>Hello</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getByRole('log')).toHaveAttribute(
      'data-testid',
      'conversation',
    );
  });

  it('opens on the latest message and follows growth only from the end', () => {
    const conversation = (count: number) => (
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          {Array.from({ length: count }, (_, index) => (
            <ChatMessageGroup
              key={index}
              sender={index % 2 === 0 ? 'participant' : 'user'}
              name={index % 2 === 0 ? 'Alex Nguyen' : 'You'}
            >
              <ChatMessage>Message {index}</ChatMessage>
            </ChatMessageGroup>
          ))}
        </ChatMessageList>
      </BraidTestProvider>
    );

    const { rerender } = render(conversation(1));
    const scroller = screen.getByRole('log', {
      name: 'Conversation',
    }).parentElement;

    if (!scroller) {
      throw new Error('ChatMessageList log has no scroll container');
    }

    let height = 0;
    let top = 0;

    Object.defineProperty(scroller, 'scrollHeight', {
      configurable: true,
      get: () => height,
    });
    Object.defineProperty(scroller, 'scrollWidth', {
      configurable: true,
      get: () => 0,
    });
    Object.defineProperty(scroller, 'scrollTop', {
      configurable: true,
      get: () => top,
      set: (value: number) => {
        top = value;
      },
    });

    height = 200;
    rerender(conversation(2));

    expect(top).toBe(200);

    top = 40;
    rerender(conversation(2));

    expect(top).toBe(40);

    height = 360;
    rerender(conversation(3));

    expect(top).toBe(40);

    top = 360;
    height = 480;
    rerender(conversation(4));

    expect(top).toBe(480);
  });

  it('opens a message taller than the list at its top', () => {
    const conversation = (text: string) => (
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage>Hello</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="assistant" name="Assistant">
            <ChatMessage>{text}</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>
    );

    const { rerender } = render(conversation('Short'));
    const log = screen.getByRole('log', { name: 'Conversation' });
    const scroller = log.parentElement;
    const latest = log.querySelectorAll(`.${styles.root}`).item(1);

    if (!scroller || !(latest instanceof HTMLElement)) {
      throw new Error('ChatMessageList log has no scroll container');
    }

    let height = 800;
    const client = 280;
    let top = 0;
    const messageTop = 120;
    let messageHeight = 500;

    scroller.style.setProperty(scrollOverlaySizeName, '40px');
    Object.defineProperty(scroller, 'scrollHeight', {
      configurable: true,
      get: () => height,
    });
    Object.defineProperty(scroller, 'clientHeight', {
      configurable: true,
      get: () => client,
    });
    Object.defineProperty(scroller, 'scrollTop', {
      configurable: true,
      get: () => top,
      set: (value: number) => {
        top = value;
      },
    });
    Object.defineProperty(latest, 'offsetTop', {
      configurable: true,
      get: () => messageTop,
    });
    Object.defineProperty(latest, 'offsetHeight', {
      configurable: true,
      get: () => messageHeight,
    });
    Object.defineProperty(latest, 'offsetParent', {
      configurable: true,
      get: () => scroller,
    });

    rerender(conversation('A message taller than the list'));

    expect(top).toBe(80);

    messageHeight = 700;
    height = 1000;
    rerender(conversation('A message taller than the list, still growing'));

    expect(top).toBe(80);

    top = height - client;
    fireEvent.scroll(scroller);
    messageHeight = 860;
    height = 1160;
    rerender(
      conversation('A message taller than the list, followed to the end'),
    );

    expect(top).toBe(1160 - 280);
  });

  it('leaves a reader at the top of a tall message when a later one arrives', () => {
    const conversation = (followUp?: string) => (
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="assistant" name="Assistant">
            <ChatMessage>A long answer</ChatMessage>
          </ChatMessageGroup>
          {followUp ? (
            <ChatMessageGroup sender="user" name="You">
              <ChatMessage>{followUp}</ChatMessage>
            </ChatMessageGroup>
          ) : null}
        </ChatMessageList>
      </BraidTestProvider>
    );

    const { rerender } = render(conversation());
    const log = screen.getByRole('log', { name: 'Conversation' });
    const scroller = log.parentElement;
    const latest = log.querySelector(`.${styles.root}`);

    if (!scroller || !(latest instanceof HTMLElement)) {
      throw new Error('ChatMessageList log has no scroll container');
    }

    let height = 800;
    let top = 0;

    Object.defineProperty(scroller, 'scrollHeight', {
      configurable: true,
      get: () => height,
    });
    Object.defineProperty(scroller, 'clientHeight', {
      configurable: true,
      get: () => 280,
    });
    Object.defineProperty(scroller, 'scrollTop', {
      configurable: true,
      get: () => top,
      set: (value: number) => {
        top = value;
      },
    });
    scroller.style.setProperty(scrollOverlaySizeName, '40px');
    Object.defineProperty(latest, 'offsetTop', {
      configurable: true,
      get: () => 80,
    });
    Object.defineProperty(latest, 'offsetHeight', {
      configurable: true,
      get: () => 500,
    });
    Object.defineProperty(latest, 'offsetParent', {
      configurable: true,
      get: () => scroller,
    });

    rerender(conversation());
    expect(top).toBe(40);

    height = 900;
    rerender(conversation('Thanks'));

    expect(top).toBe(40);
  });

  it('rejects a child that is not a ChatMessageGroup', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation">
            <span>Nope</span>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/Only ChatMessageGroup elements/);
  });

  it('rejects a missing label', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="">
            <ChatMessageGroup sender="user" name="You">
              <ChatMessage>Hello</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/requires a label/);
  });
});

describe('ChatMessageGroup', () => {
  it('shows the name once and the time on the last message', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage sentDate={new Date('2026-10-23T09:40:00')}>
              First
            </ChatMessage>
            <ChatMessage sentDate={sentAt}>Second</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getAllByText('Alex Nguyen')).toHaveLength(1);
    expect(screen.getByText('Alex Nguyen')).not.toHaveClass(hiddenVisually);
    const [dayStamp, sent] = document.querySelectorAll('time');

    expect(document.querySelectorAll('time')).toHaveLength(2);
    expect(dayStamp).toHaveAttribute('dateTime', '2026-10-23');
    expect(sent).toHaveAttribute('dateTime', sentAt.toISOString());
    expect(bubbleFor('First')).toHaveClass(styles.radius.start);
    expect(bubbleFor('Second')).toHaveClass(styles.radius.startJoined);
  });

  it('keeps the user name for assistive technology only', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage>Hello</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getByText('You')).toHaveClass(hiddenVisually);
  });

  it('squares the user corner and joins later messages in the run', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage>First</ChatMessage>
            <ChatMessage>Second</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const largeRadius = classNamesFor({ borderRadius: 'large' });

    expect(document.querySelector(`.${CSS.escape(tight)}`)).not.toBeNull();
    expect(bubbleFor('First')).toHaveClass(
      ...largeRadius,
      styles.radius.user,
      styles.alignEnd,
    );
    expect(bubbleFor('Second')).toHaveClass(
      ...largeRadius,
      styles.radius.userJoined,
    );
    expect(
      getComputedStyle(bubbleFor('First')).borderBottomRightRadius,
    ).toContain('borderRadius-small');
    expect(
      getComputedStyle(bubbleFor('First')).borderTopRightRadius,
    ).not.toContain('borderRadius-small');
    expect(
      getComputedStyle(bubbleFor('Second')).borderTopRightRadius,
    ).toContain('borderRadius-small');
  });

  it('shows the avatar once, beside the last message, with the name hidden visually', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation" variant="avatar">
          <ChatMessageGroup
            sender="participant"
            name="Alex Nguyen"
            avatar={<Avatar name="Alex Nguyen" />}
          >
            <ChatMessage>First</ChatMessage>
            <ChatMessage sentDate={sentAt}>Second</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const slots = document.querySelectorAll(
      `.${CSS.escape(styles.avatarSlot)}`,
    );

    expect(slots).toHaveLength(1);
    expect(slots[0].firstElementChild).toHaveClass(avatarSizes.small);
    expect(bubbleFor('Second').parentElement).toContainElement(
      slots[0] as HTMLElement,
    );
    expect(bubbleFor('First').parentElement).toHaveClass(styles.avatarOffset);
    expect(
      document.querySelector(`time[datetime="${sentAt.toISOString()}"]`),
    ).toHaveClass(styles.avatarOffset);
    expect(screen.getByText('Alex Nguyen')).toHaveClass(hiddenVisually);
  });

  it('renders a custom avatar unchanged', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation" variant="avatar">
          <ChatMessageGroup
            sender="assistant"
            name="Assistant"
            avatar={<span>Agent</span>}
          >
            <ChatMessage>Hello</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getByText('Agent').parentElement).toHaveClass(
      styles.avatarSlot,
    );
  });

  it('rejects a size on a Braid Avatar', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation" variant="avatar">
            <ChatMessageGroup
              sender="participant"
              name="Alex Nguyen"
              avatar={<Avatar name="Alex Nguyen" size="large" />}
            >
              <ChatMessage>Hello</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/size/);
  });

  it('reserves the avatar column and uses the name initial when a run has no avatar', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation" variant="avatar">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage>First</ChatMessage>
            <ChatMessage>Second</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage>Reply</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('Alex Nguyen')).toHaveClass(hiddenVisually);
    expect(bubbleFor('First').parentElement).toHaveClass(styles.avatarOffset);
    expect(bubbleFor('Reply').parentElement).not.toHaveClass(
      styles.avatarOffset,
    );
  });

  it('rejects an avatar when the list shows names', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation">
            <ChatMessageGroup
              sender="participant"
              name="Alex Nguyen"
              avatar={<Avatar name="Alex Nguyen" />}
            >
              <ChatMessage>Hello</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/variant is "avatar"/);
  });

  it('renders a system message as centered secondary text', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation" variant="avatar">
          <ChatMessageGroup sender="system">
            <ChatMessage
              sentDate={sentAt}
              onCopy={() => undefined}
              onFeedback={() => undefined}
            >
              Alex Nguyen joined the conversation.
            </ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const message = screen.getByText('Alex Nguyen joined the conversation.');

    expect(message).toHaveClass(
      ...classNamesFor({ textAlign: 'center' }),
      tone.secondary,
      textSizeTrimmed.xsmall,
    );
    expect(message.parentElement).not.toHaveClass(styles.bubble);
    expect(
      document.querySelector(`.${CSS.escape(styles.avatarSlot)}`),
    ).toBeNull();
    expect(
      screen.getByRole('listitem').querySelector(`.${hiddenVisually}`),
    ).toBeNull();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    // Only the day stamp is a time. System messages show no sent time.
    expect(document.querySelectorAll('time')).toHaveLength(1);
    expect(document.querySelector('li > time')).toHaveAttribute(
      'dateTime',
      '2026-10-23',
    );
  });

  it('does not require a name on a system run', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation">
            <ChatMessageGroup sender="system">
              <ChatMessage>Alex Nguyen joined the conversation.</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).not.toThrow();
  });

  it('requires a name on a participant run', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation">
            <ChatMessageGroup sender="participant">
              <ChatMessage>Hello</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/name/);
  });

  it('rejects an avatar on a system run', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation" variant="avatar">
            <ChatMessageGroup sender="system" avatar={<Avatar name="System" />}>
              <ChatMessage>Alex Nguyen joined the conversation.</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/centered text/);
  });

  it('rejects an avatar on a user run', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation" variant="avatar">
            <ChatMessageGroup
              sender="user"
              name="You"
              avatar={<Avatar name="You" />}
            >
              <ChatMessage>Hello</ChatMessage>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/end-aligned/);
  });

  it('rejects a child that is not a ChatMessage', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageList label="Conversation">
            <ChatMessageGroup sender="user" name="You">
              <ChatMessage>Hello</ChatMessage>
              <span>Nope</span>
            </ChatMessageGroup>
          </ChatMessageList>
        </BraidTestProvider>,
      ),
    ).toThrow(/Only ChatMessage elements/);
  });

  it('rejects a group outside a list', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage>Hello</ChatMessage>
          </ChatMessageGroup>
        </BraidTestProvider>,
      ),
    ).toThrow(/inside a ChatMessageList/);
  });
});

describe('ChatMessage', () => {
  it('shows copy and feedback on the last assistant message only', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="assistant" name="Assistant">
            <ChatMessage
              sentDate={sentAt}
              onCopy={() => undefined}
              onFeedback={() => undefined}
            >
              First
            </ChatMessage>
            <ChatMessage
              sentDate={sentAt}
              onCopy={() => undefined}
              onFeedback={() => undefined}
            >
              Second
            </ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getAllByRole('button', { name: 'Copy' })).toHaveLength(1);
    // Only the day stamp is a time here. Assistant messages show no sent time.
    expect(document.querySelectorAll('time')).toHaveLength(1);
    expect(document.querySelector('li > time')).toHaveAttribute(
      'dateTime',
      '2026-10-23',
    );

    const good = screen.getByRole('button', { name: 'Good response' });
    const bad = screen.getByRole('button', { name: 'Bad response' });

    expect(good).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(good);

    expect(good).toHaveAttribute('aria-pressed', 'true');
    expect(bad).toHaveAttribute('aria-pressed', 'false');
  });

  it('does not show copy or feedback on a user message', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage onCopy={() => undefined} onFeedback={() => undefined}>
              Hello
            </ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('rejects a message outside a group', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <ChatMessage>Hello</ChatMessage>
        </BraidTestProvider>,
      ),
    ).toThrow(/inside a ChatMessageGroup/);
  });
});

describe('date stamps', () => {
  const monday = (hour: number, minute = 0) =>
    new Date(2020, 2, 9, hour, minute);
  const tuesday = (hour: number, minute = 0) =>
    new Date(2020, 2, 10, hour, minute);
  const longDate = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });
  const relative = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' });

  it('shows one stamp on the first group of each local day', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage sentDate={monday(9)}>First</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage sentDate={monday(9, 5)}>Second</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage sentDate={tuesday(8)}>Third</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const items = within(screen.getByRole('log')).getAllByRole('listitem');
    const stamps = document.querySelectorAll('li > time');

    expect(stamps).toHaveLength(2);
    expect(items[0].firstElementChild).toBe(stamps[0]);
    expect(items[1].querySelector(':scope > time')).toBeNull();
    expect(items[2].firstElementChild).toBe(stamps[1]);
    expect(stamps[0]).toHaveAttribute('dateTime', '2020-03-09');
    expect(stamps[1]).toHaveAttribute('dateTime', '2020-03-10');
    expect(stamps[0]).toHaveTextContent(longDate.format(monday(9)));
    expect(stamps[1]).toHaveTextContent(longDate.format(tuesday(8)));
  });

  it('adds a large space between the stamp and the group on a dated item', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage sentDate={monday(9)}>First</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const item = screen.getByRole('listitem');

    expect(item).toHaveClass(...classNamesFor({ gap: 'large' }));
  });

  it('labels the current and previous local day as Today and Yesterday', () => {
    const now = new Date();
    const yesterday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
      12,
    );

    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage sentDate={now}>Now</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage sentDate={yesterday}>Before</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const stamps = document.querySelectorAll('li > time');

    const titleCase = (text: string) =>
      text.charAt(0).toLocaleUpperCase() + text.slice(1);

    expect(stamps[0]).toHaveTextContent(titleCase(relative.format(0, 'day')));
    expect(stamps[1]).toHaveTextContent(titleCase(relative.format(-1, 'day')));
  });

  it('uses the same neutral regular Badge as the Braid Badge', () => {
    render(
      <BraidTestProvider>
        <Badge tone="neutral" weight="regular">
          Reference
        </Badge>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage sentDate={monday(9)}>First</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    expect(screen.getByText(longDate.format(monday(9))).className).toBe(
      screen.getByText('Reference').className,
    );
  });

  it('shows no stamp for a run with no dated message', () => {
    render(
      <BraidTestProvider>
        <ChatMessageList label="Conversation">
          <ChatMessageGroup sender="participant" name="Alex Nguyen">
            <ChatMessage>Undated</ChatMessage>
          </ChatMessageGroup>
          <ChatMessageGroup sender="user" name="You">
            <ChatMessage sentDate={monday(9)}>Dated</ChatMessage>
          </ChatMessageGroup>
        </ChatMessageList>
      </BraidTestProvider>,
    );

    const items = within(screen.getByRole('log')).getAllByRole('listitem');
    const stamps = document.querySelectorAll('li > time');

    expect(stamps).toHaveLength(1);
    expect(items[0].querySelector(':scope > time')).toBeNull();
    expect(items[1].firstElementChild).toBe(stamps[0]);
  });
});
