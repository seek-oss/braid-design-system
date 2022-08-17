import '@testing-library/jest-dom';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { Disclosure } from '..';
import { htmlToText } from '../../utils/htmlToText';

describe('Disclosure', () => {
  it('should provide internal state by default', async () => {
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

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');
  });

  it('should default the value of "collapseLabel" to "expandLabel" when not provided', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Disclosure id="content" expandLabel="Details">
          Content
        </Disclosure>
      </BraidTestProvider>,
    );

    const button = getByRole('button');

    expect(htmlToText(button.innerHTML)).toEqual('Details');

    await userEvent.click(button);
    expect(htmlToText(button.innerHTML)).toEqual('Details');
  });

  it('should support listening to toggle events while uncontrolled', async () => {
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

    await userEvent.click(button);
    expect(toggleHander).toHaveBeenCalledWith(true);

    await userEvent.click(button);
    expect(toggleHander).toHaveBeenCalledWith(false);

    expect(toggleHander).toHaveBeenCalledTimes(2);
  });

  it('should support controlled state', async () => {
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

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(htmlToText(button.innerHTML)).toEqual('Expand');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(htmlToText(button.innerHTML)).toEqual('Collapse');
  });
});
