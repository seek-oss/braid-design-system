import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { Disclosure } from '..';
import { htmlToText } from '../../utils/htmlToText';

describe('Disclosure', () => {
  it('should provide internal state by default', () => {
    const { getByRole, getByText } = render(
      <BraidTestProvider>
        <Disclosure id="content" expandLabel="Expand" collapseLabel="Collapse">
          Content
        </Disclosure>
      </BraidTestProvider>,
    );

    const button = getByRole('button');
    const content = getByText('Content');

    // Label should be inside button
    expect(htmlToText(button.innerHTML)).toEqual('Expand');

    // 'aria-controls' should point at disclosure content
    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );

    expect(button.getAttribute('aria-expanded')).toEqual('false');

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');
  });

  it('should default the value of "collapseLabel" to "expandLabel" when not provided', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Disclosure id="content" expandLabel="Details">
          Content
        </Disclosure>
      </BraidTestProvider>,
    );

    const button = getByRole('button');

    expect(htmlToText(button.innerHTML)).toEqual('Details');

    button.click();
    expect(htmlToText(button.innerHTML)).toEqual('Details');
  });

  it('should support listening to toggle events while uncontrolled', () => {
    const toggleHander = jest.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <Disclosure
          id="content"
          expandLabel="Expand"
          collapseLabel="Collapse"
          onToggle={toggleHander}
        >
          Content
        </Disclosure>
      </BraidTestProvider>,
    );

    const button = getByRole('button');

    button.click();
    expect(toggleHander).toHaveBeenCalledWith(true);

    button.click();
    expect(toggleHander).toHaveBeenCalledWith(false);

    expect(toggleHander).toHaveBeenCalledTimes(2);
  });

  it('should support controlled state', () => {
    const TestCase = () => {
      const [expanded, setExpanded] = useState(true);

      return (
        <BraidTestProvider>
          <Disclosure
            id="content"
            expandLabel="Expand"
            collapseLabel="Collapse"
            expanded={expanded}
            onToggle={setExpanded}
          >
            Content
          </Disclosure>
        </BraidTestProvider>
      );
    };

    const { getByRole, getByText } = render(<TestCase />);

    const button = getByRole('button');
    const content = getByText('Content');

    // Label should be inside button
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');

    // 'aria-controls' should point at disclosure content
    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );

    expect(button.getAttribute('aria-expanded')).toEqual('true');

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');
  });
});
