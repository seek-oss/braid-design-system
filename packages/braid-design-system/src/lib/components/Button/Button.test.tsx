import { render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Button, IconSend } from '..';
import { BraidTestProvider } from '../../../test';

describe('Button', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          <Button>Button</Button>
          <Button icon={<IconSend />}>Button</Button>
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });

  it('should honour aria-label if provided', () => {
    const { getByLabelText, queryByLabelText } = render(
      <BraidTestProvider>
        <Button icon={<IconSend />}>Button</Button>
        <Button aria-label="Actual Label">Visible Label</Button>
      </BraidTestProvider>,
    );
    const buttonEl = getByLabelText('Actual Label');
    expect(buttonEl.tagName).toBe('BUTTON');
    expect(buttonEl.textContent).toBe('Visible Label');

    const button = queryByLabelText('Visible Label');
    expect(button).toBeNull();
  });
});
