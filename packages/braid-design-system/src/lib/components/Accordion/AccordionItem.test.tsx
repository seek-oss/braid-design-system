import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { AccordionItem, Badge, IconHelp } from '..';
import { BraidTestProvider } from '../../../test';
import { htmlToText } from '../../utils/htmlToText';

describe('AccordionItem', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          <AccordionItem id="item1" label="Label 1">
            Content 1
          </AccordionItem>
          <AccordionItem id="item2" label="Label 2" icon={<IconHelp />}>
            Content 2
          </AccordionItem>
          <AccordionItem
            id="item3"
            label="Label 3"
            badge={<Badge>Badge</Badge>}
          >
            Content 3
          </AccordionItem>
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
      rules: {
        // React generates `inert="true"` / `inert=""` which cannot be changed
        'attribute-boolean-style': 'warn',
      },
    });
  });

  it('should provide internal state by default', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <AccordionItem label="Label">Content</AccordionItem>
      </BraidTestProvider>,
    );

    const button = getByRole('button');
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    // Label should be inside button
    expect(htmlToText(button.innerHTML)).toEqual('Label');

    expect(content).not.toBeNull();
    expect(content).toHaveTextContent('Content');

    expect(button.getAttribute('aria-expanded')).toEqual('false');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should support listening to toggle events while uncontrolled', async () => {
    const toggleHander = vi.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <AccordionItem label="Label" onToggle={toggleHander}>
          Content
        </AccordionItem>
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
          <AccordionItem
            label="Label"
            expanded={expanded}
            onToggle={setExpanded}
          >
            Content
          </AccordionItem>
        </BraidTestProvider>
      );
    };

    const { getByRole } = render(<TestCase />);

    const button = getByRole('button');
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    // Label should be inside button
    expect(htmlToText(button.innerHTML)).toEqual('Label');

    expect(content).not.toBeNull();
    expect(content).toHaveTextContent('Content');

    expect(button.getAttribute('aria-expanded')).toEqual('true');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
  });

  it('should hide collapsed content from the accessibility tree', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <AccordionItem label="Label">Content</AccordionItem>
      </BraidTestProvider>,
    );

    const button = getByRole('button');
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    expect(content).toHaveAttribute('aria-hidden', 'true');
    expect(content).toHaveAttribute('inert');

    await userEvent.click(button);
    expect(content).not.toHaveAttribute('aria-hidden');
    expect(content).not.toHaveAttribute('inert');

    await userEvent.click(button);
    expect(content).toHaveAttribute('aria-hidden', 'true');
    expect(content).toHaveAttribute('inert');
  });

  it('should hide collapsed content from the tab order', async () => {
    const { getByRole, queryByRole } = render(
      <BraidTestProvider>
        <AccordionItem label="Label">
          <a href="/">Hidden link</a>
        </AccordionItem>
      </BraidTestProvider>,
    );

    expect(queryByRole('link')).toBeNull();

    await userEvent.click(getByRole('button', { name: 'Label' }));
    expect(getByRole('link', { name: 'Hidden link' })).toBeInTheDocument();

    await userEvent.click(getByRole('button', { name: 'Label' }));
    expect(queryByRole('link')).toBeNull();
  });
});
