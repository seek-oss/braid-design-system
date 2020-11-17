import { filterSuggestions } from './filterSuggestions';

describe('filterSuggestions', () => {
  it('returns all flat suggestions when input text is blank', () => {
    expect(
      filterSuggestions(
        [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
        ],
        '',
      ),
    ).toEqual([
      {
        text: 'Apples',
      },
      {
        text: 'Bananas',
      },
    ]);
  });

  it('returns grouped suggestions when input text is blank', () => {
    expect(
      filterSuggestions(
        [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
              },
              {
                text: 'Bananas',
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Brocolli',
              },
              {
                text: 'Carrot',
              },
            ],
          },
        ],
        '',
      ),
    ).toEqual([
      {
        label: 'Fruit',
        suggestions: [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
        ],
      },
      {
        label: 'Vegetables',
        suggestions: [
          {
            text: 'Brocolli',
          },
          {
            text: 'Carrot',
          },
        ],
      },
    ]);
  });

  it('supports flat lists', () => {
    expect(
      filterSuggestions(
        [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
        ],
        'app',
      ),
    ).toEqual([
      {
        text: 'Apples',
        highlights: [{ start: 0, end: 3 }],
      },
    ]);
  });

  it('supports grouped lists', () => {
    expect(
      filterSuggestions(
        [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
              },
              {
                text: 'Bananas',
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Brocolli',
              },
              {
                text: 'Carrot',
              },
            ],
          },
        ],
        'app',
      ),
    ).toEqual([
      {
        label: 'Fruit',
        suggestions: [
          {
            text: 'Apples',
            highlights: [{ start: 0, end: 3 }],
          },
        ],
      },
    ]);
  });

  it('matches from multiple grouped lists', () => {
    expect(
      filterSuggestions(
        [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
              },
              {
                text: 'Bananas',
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Brocolli',
              },
              {
                text: 'Carrot',
              },
            ],
          },
        ],
        'b',
      ),
    ).toEqual([
      {
        label: 'Fruit',
        suggestions: [
          {
            text: 'Bananas',
            highlights: [{ start: 0, end: 1 }],
          },
        ],
      },
      {
        label: 'Vegetables',
        suggestions: [
          {
            text: 'Brocolli',
            highlights: [{ start: 0, end: 1 }],
          },
        ],
      },
    ]);
  });

  it('supports Autosuggest values', () => {
    expect(
      filterSuggestions(
        [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
        ],
        { text: 'app' },
      ),
    ).toEqual([
      {
        text: 'Apples',
        highlights: [{ start: 0, end: 3 }],
      },
    ]);
  });

  it('returns an empty array when there are no matches', () => {
    expect(
      filterSuggestions(
        [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
              },
              {
                text: 'Bananas',
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Brocolli',
              },
              {
                text: 'Carrot',
              },
            ],
          },
        ],
        'XYZ',
      ),
    ).toEqual([]);
  });

  it('supports currying', () => {
    expect(
      filterSuggestions([
        {
          text: 'Apples',
        },
        {
          text: 'Bananas',
        },
      ])(''),
    ).toEqual([
      {
        text: 'Apples',
      },
      {
        text: 'Bananas',
      },
    ]);
  });
});
