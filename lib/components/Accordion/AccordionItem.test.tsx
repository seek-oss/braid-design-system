import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { AccordionItem } from '..';
import { htmlToText } from '../../utils/htmlToText';

describe('AccordionItem', () => {
  it('should provide internal state by default', () => {
    const { getByRole, getByText } = render(
      <BraidTestProvider>
        <AccordionItem id="content" label="Label">
          Content
        </AccordionItem>
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

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should support listening to toggle events while uncontrolled', () => {
    const toggleHander = jest.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <AccordionItem id="content" label="Label" onToggle={toggleHander}>
          Content
        </AccordionItem>
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
          <AccordionItem
            id="content"
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

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');

    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
  });
});
