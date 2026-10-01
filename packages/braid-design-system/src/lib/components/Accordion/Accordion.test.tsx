import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Accordion, AccordionItem } from '..';
import { BraidTestProvider } from '../../../test';

describe('Accordion', () => {
  it('should allow multiple items to be expanded by default', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion>
          <AccordionItem label="One">First</AccordionItem>
          <AccordionItem label="Two">Second</AccordionItem>
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

  it('should close the open item when another is opened if autoCollapse', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion autoCollapse>
          <AccordionItem label="One">First</AccordionItem>
          <AccordionItem label="Two">Second</AccordionItem>
          <AccordionItem label="Three">Third</AccordionItem>
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

  it('should allow the open item to be collapsed when autoCollapse', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion autoCollapse>
          <AccordionItem label="One">First</AccordionItem>
          <AccordionItem label="Two">Second</AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });

    await userEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'false');
  });

  it('should fire onToggle on the item that was clicked when autoCollapse', async () => {
    const onOne = vi.fn();
    const onTwo = vi.fn();

    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion autoCollapse>
          <AccordionItem label="One" onToggle={onOne}>
            First
          </AccordionItem>
          <AccordionItem label="Two" onToggle={onTwo}>
            Second
          </AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    await userEvent.click(getByRole('button', { name: 'One' }));
    expect(onOne).toHaveBeenCalledWith(true);
    expect(onTwo).not.toHaveBeenCalled();

    await userEvent.click(getByRole('button', { name: 'Two' }));
    expect(onTwo).toHaveBeenCalledWith(true);
    expect(onOne).toHaveBeenLastCalledWith(false);
  });

  it('should not share autoCollapse state across Accordion instances', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion autoCollapse>
          <AccordionItem label="A one">A</AccordionItem>
          <AccordionItem label="A two">A2</AccordionItem>
        </Accordion>
        <Accordion autoCollapse>
          <AccordionItem label="B one">B</AccordionItem>
          <AccordionItem label="B two">B2</AccordionItem>
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

  it('should not allow expanded on AccordionItem when autoCollapse', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Accordion autoCollapse>
            <AccordionItem label="One" expanded onToggle={() => {}}>
              First
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/expanded cannot be set/i);
  });

  it('should start with defaultExpanded items open', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion>
          <AccordionItem label="One" defaultExpanded>
            First
          </AccordionItem>
          <AccordionItem label="Two" defaultExpanded>
            Second
          </AccordionItem>
          <AccordionItem label="Three">Third</AccordionItem>
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

  it('should start with a defaultExpanded item open when autoCollapse', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Accordion autoCollapse>
          <AccordionItem id="one" label="One" defaultExpanded>
            First
          </AccordionItem>
          <AccordionItem label="Two">Second</AccordionItem>
          <AccordionItem label="Three">Third</AccordionItem>
        </Accordion>
      </BraidTestProvider>,
    );

    const first = getByRole('button', { name: 'One' });
    const second = getByRole('button', { name: 'Two' });
    const third = getByRole('button', { name: 'Three' });

    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'false');
    expect(third).toHaveAttribute('aria-expanded', 'false');

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
    expect(third).toHaveAttribute('aria-expanded', 'false');
  });

  it('should not allow more than one defaultExpanded item when autoCollapse', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Accordion autoCollapse>
            <AccordionItem id="one" label="One" defaultExpanded>
              First
            </AccordionItem>
            <AccordionItem id="two" label="Two" defaultExpanded>
              Second
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/only one accordionitem can set 'defaultexpanded'/i);
  });

  it('should not allow defaultExpanded without id when autoCollapse', () => {
    expect(() =>
      render(
        <BraidTestProvider>
          <Accordion autoCollapse>
            <AccordionItem label="One" defaultExpanded>
              First
            </AccordionItem>
          </Accordion>
        </BraidTestProvider>,
      ),
    ).toThrow(/'id' must be set on accordionitem/i);
  });
});
