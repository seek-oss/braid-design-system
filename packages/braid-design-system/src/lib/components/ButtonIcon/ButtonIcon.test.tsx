import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderToStaticMarkup } from 'react-dom/server';

import { ButtonIcon, IconBookmark, Text } from '..';
import { BraidTestProvider } from '../../../test';

describe('ButtonIcon', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
          <ButtonIcon icon={<IconBookmark />} label="Loading" loading />
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
      rules: {
        'attribute-boolean-style': 'warn', // React generates `disabled=""` which cannot be changed
      },
    });
  });

  it('should render a button with an aria-label', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <ButtonIcon icon={<IconBookmark />} label="Label" />
      </BraidTestProvider>,
    );

    const button = getByLabelText('Label');
    expect(button).toHaveTextContent('');
  });

  it('should render a tooltip on hover, with content matching the aria-label', async () => {
    const { getByLabelText, getByRole } = render(
      <BraidTestProvider>
        <ButtonIcon icon={<IconBookmark />} label="Label" />
      </BraidTestProvider>,
    );

    const button = getByLabelText('Label');

    await userEvent.hover(button);
    const tooltip = getByRole('tooltip');

    expect(tooltip).toHaveTextContent('Label');
  });

  it('should be disabled when loading', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <ButtonIcon icon={<IconBookmark />} label="Bookmark" loading />
      </BraidTestProvider>,
    );

    const button = getByLabelText('Bookmark');
    expect(button).toBeDisabled();
  });

  it('should honour aria-describedby if provided', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <ButtonIcon
          icon={<IconBookmark />}
          label="Label"
          aria-describedby="descriptionId"
        />
        <Text id="descriptionId">Actual description</Text>
      </BraidTestProvider>,
    );

    const button = getByLabelText('Label');

    expect(button).toHaveAccessibleDescription('Actual description');
  });

  it('should honour aria-pressed if provided', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <ButtonIcon
          icon={<IconBookmark />}
          label="Bookmark"
          aria-pressed="true"
        />
      </BraidTestProvider>,
    );

    const button = getByLabelText('Bookmark');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });
});
