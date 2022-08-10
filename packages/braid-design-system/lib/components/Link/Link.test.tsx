import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { htmlToText } from '../../utils/htmlToText';
import { BraidTestProvider } from '../../../test';
import { makeLinkComponent, LinkComponent, Link } from '..';

describe('Link', () => {
  it('should render a native link by default', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Link href="/foo/bar" data-attribute="true">
          Link content
        </Link>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
  });

  it('should render a custom link component if provided', () => {
    const CustomLink = makeLinkComponent((props, ref) => (
      <a ref={ref} {...props} data-custom-link-component="true" />
    ));

    const { getByRole } = render(
      <BraidTestProvider linkComponent={CustomLink}>
        <Link href="/foo/bar" data-attribute="true">
          Link content
        </Link>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });

  it('should render a legacy link component if provided', () => {
    const CustomLink: LinkComponent = (props) => (
      <a {...props} data-custom-link-component="true" />
    );

    const { getByRole } = render(
      <BraidTestProvider linkComponent={CustomLink}>
        <Link href="/foo/bar" data-attribute="true">
          Link content
        </Link>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });

  it("should inherit custom link components from the root provider if the nearest provider doesn't have one", () => {
    const CustomLink = makeLinkComponent((props, ref) => (
      <a ref={ref} {...props} data-custom-link-component="true" />
    ));

    const { getByRole } = render(
      <BraidTestProvider linkComponent={CustomLink}>
        {/* Note: No linkComponent prop provided here: */}
        <BraidTestProvider>
          <Link href="/foo/bar" data-attribute="true">
            Link content
          </Link>
        </BraidTestProvider>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.nodeName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/foo/bar');
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
    expect(link.getAttribute('data-custom-link-component')).toEqual('true');
  });
});
