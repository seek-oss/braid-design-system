import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BraidTestProvider, Text, TextLink } from '..';

afterEach(cleanup);

describe('TextLink', () => {
  it('should render a native link by default', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Text>
          <TextLink href="/foo/bar" data-attribute="true">
            Link content
          </TextLink>
        </Text>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(link.getAttribute('data-attribute')).toEqual('true');
  });
});
