import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Accordion, AccordionItem } from '..';
import { BraidTestProvider } from '../../../test';

describe('Accordion', () => {
  it('should allow multiple items to be expanded by default', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });
    const second = getByRole('button', { name: 'Two' });

    await userEvent.click(first);
    await userEvent.click(second);

    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'true');
  });

  it('should close the open item when another is opened if multiple is false', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={false}>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
          <AccordionItem value="three" label="Three">
            Third
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });
    const second = getByRole('button', { name: 'Two' });
    const third = getByRole('button', { name: 'Three' });

    await userEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'false');
    expect(third).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(third).toHaveAttribute('aria-expanded', 'false');
  });

  it('should allow the open item to be collapsed when multiple is false', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={false}>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });

    await userEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'false');
  });

  it('should fire onChange with the next open value', async () => {
    const onChange = vi.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={false} value="" onChange={onChange}>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    await userEvent.click(getByRole('button', { name: 'One' }));
    expect(onChange).toHaveBeenCalledWith('one');

    await userEvent.click(getByRole('button', { name: 'Two' }));
    expect(onChange).toHaveBeenLastCalledWith('two');
  });

  it('should fire onChange with the next open values', async () => {
    const onChange = vi.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={true} value={[]} onChange={onChange}>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    await userEvent.click(getByRole('button', { name: 'One' }));
    expect(onChange).toHaveBeenCalledWith(['one']);

    await userEvent.click(getByRole('button', { name: 'Two' }));
    expect(onChange).toHaveBeenLastCalledWith(['two']);
  });

  it('should not share open state across Accordion instances', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={false}>
          <AccordionItem value="one" label="A one">
            A
          </AccordionItem>
          <AccordionItem value="two" label="A two">
            A2
          </AccordionItem>
        </Accordion>
        <Accordion multiple={false}>
          <AccordionItem value="one" label="B one">
            B
          </AccordionItem>
          <AccordionItem value="two" label="B two">
            B2
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    await userEvent.click(getByRole('button', { name: 'A one' }));
    await userEvent.click(getByRole('button', { name: 'B one' }));

    expect(getByRole('button', { name: 'A one' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(getByRole('button', { name: 'B one' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('should start from defaultValue when multiple items can be open', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion defaultValue={['one', 'two']}>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
          <AccordionItem value="three" label="Three">
            Third
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });
    const second = getByRole('button', { name: 'Two' });
    const third = getByRole('button', { name: 'Three' });

    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(third).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');
  });

  it('should start from a string defaultValue when multiple is false', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={false} defaultValue="one">
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
          <AccordionItem value="three" label="Three">
            Third
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });
    const second = getByRole('button', { name: 'Two' });

    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'false');

    const firstContent = document.getElementById(
      first.getAttribute('aria-controls')!,
    );
    const secondContent = document.getElementById(
      second.getAttribute('aria-controls')!,
    );

    expect(firstContent).not.toHaveAttribute('aria-hidden');
    expect(firstContent).not.toHaveAttribute('inert');
    expect(firstContent?.style.height).toBe('');
    expect(firstContent?.style.transitionDuration).toBe('');
    expect(secondContent).toHaveAttribute('aria-hidden', 'true');

    await userEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');
  });

  it('should accept a single-item array when multiple is false', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion multiple={false} defaultValue="one">
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
          <AccordionItem value="two" label="Two">
            Second
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    expect(getByRole('button', { name: 'One' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(getByRole('button', { name: 'Two' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('should follow a controlled value', async () => {
    const TestCase = () => {
      const [open, setOpen] = useState<string[]>(['two']);

      return (
        <BraidTestProvider>
          <Accordion value={open} onChange={(value) => setOpen(value)}>
            <AccordionItem value="one" label="One">
              First
            </AccordionItem>
            <AccordionItem value="two" label="Two">
              Second
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>
      );
    };

    const { getByRole } = render(<TestCase />);

    expect(getByRole('button', { name: 'Two' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );

    await userEvent.click(getByRole('button', { name: 'One' }));

    expect(getByRole('button', { name: 'One' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(getByRole('button', { name: 'Two' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('should not allow more than one defaultValue when multiple is false', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          {/* @ts-expect-error should error when 'defaultValue' is array and `multiple` is false */}
          <Accordion multiple={false} defaultValue={['one', 'two']}>
            <AccordionItem value="one" label="One">
              First
            </AccordionItem>
            <AccordionItem value="two" label="Two">
              Second
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/single-item array/i);
  });

  it('should not allow defaultValue when value is set', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          {/* @ts-expect-error should error as 'defaultValue' should not be set with `value` */}
          <Accordion value={['one']} defaultValue={['one']} onChange={() => {}}>
            <AccordionItem value="one" label="One">
              First
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/'defaultvalue' cannot be set when 'value' is set/i);
  });

  it('should not allow value without onChange', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          {/* @ts-expect-error should error because 'onChange' is missing */}
          <Accordion value={['one']}>
            <AccordionItem value="one" label="One">
              First
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/'onchange' must be set when 'value' is set/i);
  });

  it('should not allow duplicate item values', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Accordion>
            <AccordionItem value="one" label="One">
              First
            </AccordionItem>
            <AccordionItem value="one" label="Also one">
              Second
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/used more than once/i);
  });

  it('should not allow expanded on AccordionItem when Accordion controls open items', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Accordion multiple={false}>
            <AccordionItem value="one" label="One" expanded onToggle={() => {}}>
              First
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/expanded cannot be set/i);
  });

  it('should not allow a managed AccordionItem without a value', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Accordion multiple={false}>
            <AccordionItem label="One">First</AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/'value' must be a non-empty string/i);
  });

  it('should hide collapsed content from the accessibility tree', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion>
          <AccordionItem value="one" label="One">
            First
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const button = getByRole('button', { name: 'One' });
    const content = document.getElementById(
      button.getAttribute('aria-controls')!,
    );

    expect(content).toHaveAttribute('aria-hidden', 'true');
    expect(content).toHaveAttribute('inert');

    await userEvent.click(button);
    expect(content).not.toHaveAttribute('aria-hidden');
    expect(content).not.toHaveAttribute('inert');
  });

  it('should hide collapsed content from the tab order', async () => {
    const { getByRole, queryByRole } = render(
      <BraidTestProvider>
        <Accordion>
          <AccordionItem value="one" label="One">
            <a href="/">Hidden link</a>
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    expect(queryByRole('link')).toBeNull();

    await userEvent.click(getByRole('button', { name: 'One' }));
    expect(getByRole('link', { name: 'Hidden link' })).toBeInTheDocument();
  });

  it('should keep expanded content in document flow without JS measurement', () => {
    const html = renderToStaticMarkup(
      <BraidTestProvider>
        <Accordion defaultValue={['one']}>
          <AccordionItem value="one" label="One">
            Visible
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    expect(html).toContain('Visible');
    expect(html).not.toMatch(/height:\s*0px/);
  });
});
