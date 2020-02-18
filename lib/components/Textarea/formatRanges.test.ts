import { formatRanges } from './formatRanges';

describe('formatRanges', () => {
  it('should return the unformatted text if no highlighting is required', () => {
    const value = 'aaaaaaaaa bbbbbbbbbb';
    const ranges = [{ start: 30 }];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "aaaaaaaaa bbbbbbbbbb",
      ]
    `);
  });

  it('should highlight from a start point to the end of a string', () => {
    const value = 'my string of text';
    const ranges = [
      {
        start: 6,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "my str",
        <Highlight>
          ing of text
        </Highlight>,
      ]
    `);
  });

  it('should highlight a range', () => {
    const value = 'my longer text';
    const ranges = [
      {
        start: 3,
        end: 9,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "my ",
        <Highlight>
          longer
        </Highlight>,
        " text",
      ]
    `);
  });

  it('should highlight multiple ranges correctly', () => {
    const value = 'my longer text';
    const ranges = [
      {
        start: 3,
        end: 6,
      },
      {
        start: 7,
        end: 8,
      },
      {
        start: 12,
        end: 13,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "my ",
        <Highlight>
          lon
        </Highlight>,
        "g",
        <Highlight>
          e
        </Highlight>,
        "r te",
        <Highlight>
          x
        </Highlight>,
        "t",
      ]
    `);
  });

  it('should highlight correctly when only the first range is present', () => {
    const value = 'aaaaaaaaaabbb';
    const ranges = [
      {
        start: 10,
        end: 20,
      },
      {
        start: 30,
        end: 40,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "aaaaaaaaaa",
        <Highlight>
          bbb
        </Highlight>,
      ]
    `);
  });

  it('should not render highlight when range is invalid', () => {
    const value = 'my longer text';
    const ranges = [
      {
        start: 10,
        end: 5,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "my longer text",
      ]
    `);
  });

  it('should highlight only valid ranges', () => {
    const value = 'aaaaaaaaaabbb';
    const ranges = [
      {
        start: 10,
        end: 20,
      },
      {
        start: 8,
        end: 4,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        "aaaaaaaaaa",
        <Highlight>
          bbb
        </Highlight>,
      ]
    `);
  });

  it('should handle out of order ranges', () => {
    const value = 'some text some text some text some text';
    const ranges = [
      { start: 20, end: 24 },
      { start: 0, end: 4 },
      { start: 30, end: 34 },
      { start: 10, end: 14 },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        <Highlight>
          some
        </Highlight>,
        " text ",
        <Highlight>
          some
        </Highlight>,
        " text ",
        <Highlight>
          some
        </Highlight>,
        " text ",
        <Highlight>
          some
        </Highlight>,
        " text",
      ]
    `);
  });

  it('should handle overlapping ranges', () => {
    const value = 'some text some text some text some text some text';
    const ranges = [
      { start: 0, end: 4 },
      { start: 10, end: 32 },
      { start: 20, end: 24 },
      { start: 30, end: 34 },
      { start: 40, end: 44 },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(`
      Array [
        <Highlight>
          some
        </Highlight>,
        " text ",
        <Highlight>
          some text some text so
        </Highlight>,
        <Highlight>
          me
        </Highlight>,
        " text ",
        <Highlight>
          some
        </Highlight>,
        " text",
      ]
    `);
  });
});
