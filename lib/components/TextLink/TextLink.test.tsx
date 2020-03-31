import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BraidTestProvider, LinkComponent, Text, TextLink } from '..';

afterEach(cleanup);

describe('TextLink', () => {
  it('should render a native link by default', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Text>
          <TextLink href="/foo/bar">Link content</TextLink>
        </Text>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(link.innerHTML).toEqual('Link content');
  });

  it('should render a custom link component if provided', () => {
    const BraidLink: LinkComponent = props => (
      <a {...props} data-custom-link-component="true" />
    );

    const { getByRole } = render(
      <BraidTestProvider linkComponent={BraidLink}>
        <Text>
          <TextLink href="/foo/bar">Link content</TextLink>
        </Text>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(link.innerHTML).toEqual('Link content');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });

  it("should inherit custom link components from the root provider if the nearest provider doesn't have one", () => {
    const BraidLink: LinkComponent = props => (
      <a {...props} data-custom-link-component="true" />
    );

    const { getByRole } = render(
      <BraidTestProvider linkComponent={BraidLink}>
        {/* Note: No linkComponent prop provided here: */}
        <BraidTestProvider>
          <Text>
            <TextLink href="/foo/bar">Link content</TextLink>
          </Text>
        </BraidTestProvider>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(link.innerHTML).toEqual('Link content');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
});
