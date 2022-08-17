import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { htmlToText } from '../../utils/htmlToText';
import { BraidTestProvider } from '../../../test';
import { makeLinkComponent, LinkComponent, Text, TextLink } from '..';

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
    expect(htmlToText(link.innerHTML)).toEqual('Link content');
    expect(link.getAttribute('data-attribute')).toEqual('true');
  });

  it('should render a custom link component if provided', () => {
    const CustomLink = makeLinkComponent((props, ref) => (
      <a ref={ref} {...props} data-custom-link-component="true" />
    ));

    const { getByRole } = render(
      <BraidTestProvider linkComponent={CustomLink}>
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
          <Text>
            <TextLink href="/foo/bar" data-attribute="true">
              Link content
            </TextLink>
          </Text>
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

  it('should not support custom styles', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Text>
          <TextLink
            href="/foo/bar"
            data-attribute="true"
            // @ts-ignore
            className="CUSTOM_CLASS_NAME"
            style={{ color: 'CUSTOM_COLOR' }}
          >
            Link content
          </TextLink>
        </Text>
      </BraidTestProvider>,
    );

    const link = getByRole('link');
    expect(link.classList.contains('CUSTOM_CLASS_NAME')).toEqual(false);
    expect(link.style.color).not.toEqual('CUSTOM_COLOR');
  });
});
