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
    });
  });

  it('should provide internal state by default', async () => {
    const { getByRole, getByText } = render(
      <BraidTestProvider>
        <AccordionItem label="Label">Content</AccordionItem>
      </BraidTestProvider>,
    );

    const button = getByRole('button');
    const content = getByText('Content');

    // Label should be inside button
    expect(htmlToText(button.innerHTML)).toEqual('Label');

    // 'aria-controls' should point at accordion content
    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );

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

    const { getByRole, getByText } = render(<TestCase />);

    const button = getByRole('button');
    const content = getByText('Content');

    // Label should be inside button
    expect(htmlToText(button.innerHTML)).toEqual('Label');

    // 'aria-controls' should point at accordion content
    expect(content.getAttribute('id')).toEqual(
      button.getAttribute('aria-controls'),
    );

    expect(button.getAttribute('aria-expanded')).toEqual('true');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('false');

    await userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toEqual('true');
  });
});
