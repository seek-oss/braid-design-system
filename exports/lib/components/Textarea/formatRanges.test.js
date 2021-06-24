import { formatRanges } from './formatRanges';
describe('formatRanges', function () {
  it('should return the unformatted text if no highlighting is required', function () {
    const value = 'aaaaaaaaa bbbbbbbbbb';
    const ranges = [
      {
        start: 30,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "aaaaaaaaa bbbbbbbbbb",\n      ]\n    ',
    );
  });
  it('should highlight from a start point to the end of a string', function () {
    const value = 'my string of text';
    const ranges = [
      {
        start: 6,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "my str",\n        <Highlight>\n          ing of text\n        </Highlight>,\n      ]\n    ',
    );
  });
  it('should highlight a range', function () {
    const value = 'my longer text';
    const ranges = [
      {
        start: 3,
        end: 9,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "my ",\n        <Highlight>\n          longer\n        </Highlight>,\n        " text",\n      ]\n    ',
    );
  });
  it('should highlight multiple ranges correctly', function () {
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
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "my ",\n        <Highlight>\n          lon\n        </Highlight>,\n        "g",\n        <Highlight>\n          e\n        </Highlight>,\n        "r te",\n        <Highlight>\n          x\n        </Highlight>,\n        "t",\n      ]\n    ',
    );
  });
  it('should highlight correctly when only the first range is present', function () {
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
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "aaaaaaaaaa",\n        <Highlight>\n          bbb\n        </Highlight>,\n      ]\n    ',
    );
  });
  it('should not render highlight when range is invalid', function () {
    const value = 'my longer text';
    const ranges = [
      {
        start: 10,
        end: 5,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "my longer text",\n      ]\n    ',
    );
  });
  it('should highlight only valid ranges', function () {
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
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        "aaaaaaaaaa",\n        <Highlight>\n          bbb\n        </Highlight>,\n      ]\n    ',
    );
  });
  it('should handle out of order ranges', function () {
    const value = 'some text some text some text some text';
    const ranges = [
      {
        start: 20,
        end: 24,
      },
      {
        start: 0,
        end: 4,
      },
      {
        start: 30,
        end: 34,
      },
      {
        start: 10,
        end: 14,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        <Highlight>\n          some\n        </Highlight>,\n        " text ",\n        <Highlight>\n          some\n        </Highlight>,\n        " text ",\n        <Highlight>\n          some\n        </Highlight>,\n        " text ",\n        <Highlight>\n          some\n        </Highlight>,\n        " text",\n      ]\n    ',
    );
  });
  it('should handle overlapping ranges', function () {
    const value = 'some text some text some text some text some text';
    const ranges = [
      {
        start: 0,
        end: 4,
      },
      {
        start: 10,
        end: 32,
      },
      {
        start: 20,
        end: 24,
      },
      {
        start: 30,
        end: 34,
      },
      {
        start: 40,
        end: 44,
      },
    ];
    expect(formatRanges(value, ranges)).toMatchInlineSnapshot(
      '\n      Array [\n        <Highlight>\n          some\n        </Highlight>,\n        " text ",\n        <Highlight>\n          some text some text so\n        </Highlight>,\n        <Highlight>\n          me\n        </Highlight>,\n        " text ",\n        <Highlight>\n          some\n        </Highlight>,\n        " text",\n      ]\n    ',
    );
  });
});
