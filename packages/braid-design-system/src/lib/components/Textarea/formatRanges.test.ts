import { formatRanges } from './formatRanges';

describe('formatRanges', () => {
  it('should return the unformatted text if no highlighting is required', () => {
    const value = 'aaaaaaaaa bbbbbbbbbb';
    const ranges = [{ start: 30 }];
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        "my str",
        <Highlight
          tone="critical"
        >
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        "my ",
        <Highlight
          tone="critical"
        >
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        "my ",
        <Highlight
          tone="critical"
        >
          lon
        </Highlight>,
        "g",
        <Highlight
          tone="critical"
        >
          e
        </Highlight>,
        "r te",
        <Highlight
          tone="critical"
        >
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        "aaaaaaaaaa",
        <Highlight
          tone="critical"
        >
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        "aaaaaaaaaa",
        <Highlight
          tone="critical"
        >
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        <Highlight
          tone="critical"
        >
          some
        </Highlight>,
        " text ",
        <Highlight
          tone="critical"
        >
          some
        </Highlight>,
        " text ",
        <Highlight
          tone="critical"
        >
          some
        </Highlight>,
        " text ",
        <Highlight
          tone="critical"
        >
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        <Highlight
          tone="critical"
        >
          some
        </Highlight>,
        " text ",
        <Highlight
          tone="critical"
        >
          some text some text so
        </Highlight>,
        <Highlight
          tone="critical"
        >
          me
        </Highlight>,
        " text ",
        <Highlight
          tone="critical"
        >
          some
        </Highlight>,
        " text",
      ]
    `);
  });

  it('should highlight ranges with caution when tone is caution', () => {
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
    expect(formatRanges(value, ranges, 'caution')).toMatchInlineSnapshot(`
      [
        "my ",
        <Highlight
          tone="caution"
        >
          lon
        </Highlight>,
        "g",
        <Highlight
          tone="caution"
        >
          e
        </Highlight>,
        "r te",
        <Highlight
          tone="caution"
        >
          x
        </Highlight>,
        "t",
      ]
    `);
  });

  it('should highlight ranges with critical when tone is explicitly critical', () => {
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
    expect(formatRanges(value, ranges, 'critical')).toMatchInlineSnapshot(`
      [
        "my ",
        <Highlight
          tone="critical"
        >
          lon
        </Highlight>,
        "g",
        <Highlight
          tone="critical"
        >
          e
        </Highlight>,
        "r te",
        <Highlight
          tone="critical"
        >
          x
        </Highlight>,
        "t",
      ]
    `);
  });
});
