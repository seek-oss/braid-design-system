import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Disclosure } from '..';
import { BraidTestProvider } from '../../../test';

describe('Disclosure', () => {
  it('should provide internal state by default', async () => {
    const { getByRole, getByText } = render(
      <BraidTestProvider>
        <Disclosure expandLabel="Expand" collapseLabel="Collapse">
          Content
        </Disclosure>
      </BraidTestProvider>,
    );

    let button = getByRole('button', { name: 'Expand' });
    const content = getByText('Content');

    expect(button).toBeInTheDocument();

    // 'aria-controls' should point at disclosure content
    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );

    expect(button.getAttribute('aria-expanded')).toEqual('false');

    await userEvent.click(button);
    button = getByRole('button', { name: 'Collapse' });
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    button = getByRole('button', { name: 'Expand' });
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(button).toBeInTheDocument();
  });

  it('should default the value of "collapseLabel" to "expandLabel" when not provided', async () => {
    const { getByRole, getByText } = render(
      <BraidTestProvider>
        <Disclosure expandLabel="Details">Content</Disclosure>
      </BraidTestProvider>,
    );

    const button = getByRole('button');

    expect(button).toEqual(getByText('Details'));

    await userEvent.click(button);
    expect(button).toEqual(getByText('Details'));
  });

  it('should support listening to toggle events while uncontrolled', async () => {
    const toggleHander = vi.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <Disclosure
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

    expect(button).toEqual(getByText('Collapse'));

    // 'aria-controls' should point at disclosure content
    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );

    expect(button.getAttribute('aria-expanded')).toEqual('true');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(button).toEqual(getByText('Expand'));

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(button).toEqual(getByText('Collapse'));
  });
});
