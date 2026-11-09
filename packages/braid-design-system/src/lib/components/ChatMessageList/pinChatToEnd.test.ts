import { pinTarget, slackBeyondScroll } from './pinChatToEnd';

describe('slackBeyondScroll', () => {
  it('moves the whole growth when the list is not scrolling yet', () => {
    expect(slackBeyondScroll(48, 280, 280, 280)).toBe(48);
  });

  it('leaves the growth to scroll once the list already overflows', () => {
    expect(slackBeyondScroll(48, 400, 448, 280)).toBe(0);
  });

  it('splits the growth when a message crosses the end of the list', () => {
    expect(slackBeyondScroll(50, 280, 320, 280)).toBe(10);
  });
});

describe('pinTarget', () => {
  it('aligns a message that fits to the end of the list', () => {
    expect(pinTarget(400, 80, 800, 280, false)).toBe(520);
  });

  it('opens a message taller than the list below the top fade', () => {
    expect(pinTarget(120, 500, 800, 280, false, 40)).toBe(80);
  });

  it('stays at the top when the message starts inside the fade', () => {
    expect(pinTarget(24, 500, 800, 280, false, 40)).toBe(0);
  });

  it('keeps a message that only just fits at the end', () => {
    expect(pinTarget(120, 280, 800, 280, false)).toBe(520);
  });

  it('stays at the end once the reader has followed a tall message there', () => {
    expect(pinTarget(120, 500, 800, 280, true)).toBe(520);
  });

  it('does not scroll past the end when the message top is already in view', () => {
    expect(pinTarget(0, 500, 800, 280, false)).toBe(0);
  });
});
