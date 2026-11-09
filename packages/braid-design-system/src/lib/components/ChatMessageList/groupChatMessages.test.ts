import { groupChatMessages } from './groupChatMessages';

const user = (id: string) => ({
  id,
  sender: 'user' as const,
  name: 'You',
  text: id,
});
const participant = (id: string, name = 'Alex') => ({
  id,
  sender: 'participant' as const,
  name,
  text: id,
});
const assistant = (id: string) => ({
  id,
  sender: 'assistant' as const,
  name: 'Assistant',
  text: id,
});

describe('groupChatMessages', () => {
  it('returns an empty list for an empty list', () => {
    expect(groupChatMessages([])).toEqual([]);
  });

  it('keeps a single message as one group', () => {
    expect(groupChatMessages([user('1')])).toEqual([
      { sender: 'user', name: 'You', messages: [{ id: '1', text: '1' }] },
    ]);
  });

  it('groups a run of the same sender and starts a new group when the sender changes', () => {
    const groups = groupChatMessages([
      participant('1'),
      participant('2'),
      user('3'),
      user('4'),
      assistant('5'),
      participant('6'),
    ]);

    expect(groups.map((group) => group.sender)).toEqual([
      'participant',
      'user',
      'assistant',
      'participant',
    ]);
    expect(
      groups.map((group) => group.messages.map((message) => message.id)),
    ).toEqual([['1', '2'], ['3', '4'], ['5'], ['6']]);
  });

  it('takes the name from the first message in the run', () => {
    const [group] = groupChatMessages([
      participant('1', 'Alex'),
      participant('2', 'Sam'),
    ]);

    expect(group.name).toBe('Alex');
    expect(group.messages).toHaveLength(2);
  });

  it('takes the avatar from the last message that has one', () => {
    const [group] = groupChatMessages([
      { ...participant('1'), avatar: 'first' },
      { ...participant('2'), avatar: 'second' },
      participant('3'),
    ]);

    expect(group.avatar).toBe('second');
    expect(group.messages[0]).not.toHaveProperty('avatar');
  });

  it('keeps sentDate and handlers on each message', () => {
    const onCopy = () => undefined;
    const onFeedback = () => undefined;
    const [group] = groupChatMessages([
      { ...assistant('1'), sentDate: 1, onCopy, onFeedback },
      { ...assistant('2'), sentDate: 2 },
    ]);

    expect(group.messages).toEqual([
      { id: '1', text: '1', sentDate: 1, onCopy, onFeedback },
      { id: '2', text: '2', sentDate: 2 },
    ]);
  });

  it('starts a new run at local midnight for the same sender', () => {
    const groups = groupChatMessages([
      { ...participant('1'), sentDate: new Date(2026, 9, 23, 23, 50) },
      { ...participant('2'), sentDate: new Date(2026, 9, 24, 0, 10) },
    ]);

    expect(
      groups.map((group) => group.messages.map((message) => message.id)),
    ).toEqual([['1'], ['2']]);
  });

  it('keeps a run together across the same local day', () => {
    const groups = groupChatMessages([
      { ...participant('1'), sentDate: new Date(2026, 9, 23, 9, 0) },
      { ...participant('2'), sentDate: new Date(2026, 9, 23, 23, 59) },
    ]);

    expect(groups).toHaveLength(1);
  });

  it('starts a new run when the day returns to an earlier day, without reordering', () => {
    const groups = groupChatMessages([
      { ...participant('1'), sentDate: new Date(2026, 9, 23, 9, 0) },
      { ...participant('2'), sentDate: new Date(2026, 9, 24, 9, 0) },
      { ...participant('3'), sentDate: new Date(2026, 9, 23, 9, 0) },
    ]);

    expect(
      groups.map((group) => group.messages.map((message) => message.id)),
    ).toEqual([['1'], ['2'], ['3']]);
  });

  it('lets a message with no sentDate join the current run', () => {
    const groups = groupChatMessages([
      { ...participant('1'), sentDate: new Date(2026, 9, 23, 9, 0) },
      participant('2'),
      { ...participant('3'), sentDate: new Date(2026, 9, 23, 9, 5) },
    ]);

    expect(
      groups.map((group) => group.messages.map((message) => message.id)),
    ).toEqual([['1', '2', '3']]);
  });

  it('keeps a run with no dated message as one run with no day', () => {
    const groups = groupChatMessages([participant('1'), participant('2')]);

    expect(groups).toHaveLength(1);
    expect(groups[0].messages).toHaveLength(2);
  });

  it('rejects a sentDate that is not a valid date', () => {
    expect(() =>
      groupChatMessages([{ ...participant('1'), sentDate: 'not a date' }]),
    ).toThrow(/not a valid date/);
  });

  it('does not mutate the list it is given', () => {
    const messages = [user('1'), assistant('2')];

    groupChatMessages(messages);

    expect(messages).toEqual([user('1'), assistant('2')]);
  });

  it('rejects a value that is not a list', () => {
    expect(() =>
      groupChatMessages(
        // @ts-expect-error runtime guard
        undefined,
      ),
    ).toThrow(/array of messages/);
  });

  it('rejects a message without a valid sender', () => {
    expect(() =>
      groupChatMessages([
        { sender: 'bot', name: 'Bot' } as unknown as {
          sender: 'user';
          name: string;
        },
      ]),
    ).toThrow(/sender/);
  });

  it('rejects a message without a name', () => {
    expect(() =>
      groupChatMessages([
        { sender: 'user' } as unknown as { sender: 'user'; name: string },
      ]),
    ).toThrow(/name/);
  });

  it('allows a system message without a name', () => {
    const groups = groupChatMessages([
      { sender: 'system', id: '1', text: 'Alex joined' },
      { sender: 'system', id: '2', text: 'Sam joined' },
    ]);

    expect(groups).toHaveLength(1);
    expect(groups[0].sender).toBe('system');
    expect(groups[0].name).toBeUndefined();
    expect(groups[0].messages).toHaveLength(2);
  });
});
