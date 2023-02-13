import '@testing-library/jest-dom';
import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle, Button } from '..';
import { BraidTestProvider } from '../../../entries/test';

describe('Toggle', () => {
  it('associates toggle with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Toggle id="field" label="My toggle" onChange={() => {}} on={false} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My toggle').tagName).toBe('INPUT');
  });

  it('associates a ref with the toggle element correctly', async () => {
    const TestCase = () => {
      const ref = useRef<HTMLInputElement | null>(null);

      return (
        <BraidTestProvider>
          <Button onClick={() => ref.current?.focus()}>Focus</Button>
          <Toggle
            label="Toggle"
            id="toggle"
            on={false}
            onChange={() => {}}
            ref={ref}
          />
        </BraidTestProvider>
      );
    };
    const { getByRole, getByLabelText } = render(<TestCase />);

    await userEvent.click(getByRole('button'));

    expect(getByLabelText('Toggle')).toHaveFocus();
  });
});
