import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Disclosure, Text } from '..';
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
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    expect(button).toBeInTheDocument();

    // 'aria-controls' should point at disclosure content
    expect(content).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();

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
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    expect(button).toEqual(getByText('Collapse'));

    // 'aria-controls' should point at disclosure content
    expect(content).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();

    expect(button.getAttribute('aria-expanded')).toEqual('true');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');
    expect(button).toEqual(getByText('Expand'));

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(button).toEqual(getByText('Collapse'));
  });

  it('should hide collapsed content from the accessibility tree', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Disclosure expandLabel="Expand" collapseLabel="Collapse">
          Content
        </Disclosure>
      </BraidTestProvider>,
    );

    const button = getByRole('button');
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    expect(content).toHaveAttribute('aria-hidden', 'true');
    expect(content).toHaveAttribute('inert');
    expect(content).toHaveStyle({ display: 'none' });
    expect(content?.style.gridTemplateRows).toBe('');
    expect(content?.style.transitionDuration).toBe('');

    await userEvent.click(button);
    expect(content).not.toHaveAttribute('aria-hidden');
    expect(content).not.toHaveAttribute('inert');
  });

  it('should hide collapsed content from the tab order', async () => {
    const { getByRole, queryByRole } = render(
      <BraidTestProvider>
        <Disclosure expandLabel="Expand" collapseLabel="Collapse">
          <a href="/">Hidden link</a>
        </Disclosure>
      </BraidTestProvider>,
    );

    expect(queryByRole('link')).toBeNull();

    await userEvent.click(getByRole('button'));
    expect(getByRole('link', { name: 'Hidden link' })).toBeInTheDocument();
  });

  it('should keep expanded content in document flow without JS measurement', () => {
    const html = renderToStaticMarkup(
      <BraidTestProvider>
        <Disclosure expandLabel="Expand" expanded onToggle={() => {}}>
          Visible
        </Disclosure>
      </BraidTestProvider>,
    );

    expect(html).toContain('Visible');
    expect(html).not.toMatch(/grid-template-rows:\s*0fr/);
  });

  it('should support inline use inside Text', async () => {
    const { getByRole, getByText } = render(
      <BraidTestProvider>
        <Text>
          Before
          <Disclosure expandLabel="Expand" collapseLabel="Collapse">
            Hidden
          </Disclosure>
          After
        </Text>
      </BraidTestProvider>,
    );

    const button = getByRole('button', { name: 'Expand' });
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    expect(getByText('Before', { exact: false })).toBeInTheDocument();
    expect(content).toHaveAttribute('aria-hidden', 'true');
    expect(content).toHaveAttribute('inert');
    expect(content).toHaveStyle({ display: 'none' });

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(content).not.toHaveAttribute('inert');
    expect(getByText('Hidden')).toBeInTheDocument();
  });

  it('should skip height animation when the user prefers reduced motion', async () => {
    const matchMedia = window.matchMedia;
    window.matchMedia = (query) =>
      ({
        matches: query.includes('prefers-reduced-motion'),
        media: query,
        onchange: null,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent() {
          return false;
        },
      }) as MediaQueryList;

    try {
      const { getByRole } = render(
        <BraidTestProvider>
          <Disclosure expandLabel="Expand" collapseLabel="Collapse">
            Content
          </Disclosure>
        </BraidTestProvider>,
      );

      const button = getByRole('button');
      const content = document.getElementById(
        button.getAttribute('aria-controls')!,
      );

      await userEvent.click(button);

      expect(button.getAttribute('aria-expanded')).toEqual('true');
      expect(content).not.toHaveAttribute('aria-hidden');
      expect(content).not.toHaveAttribute('inert');
      expect(content?.style.gridTemplateRows).toBe('');
      expect(content?.style.transitionDuration).toBe('');
    } finally {
      window.matchMedia = matchMedia;
    }
  });
});
