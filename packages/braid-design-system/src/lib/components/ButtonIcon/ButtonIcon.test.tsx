import '@testing-library/jest-dom';
import 'html-validate/jest';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderToStaticMarkup } from 'react-dom/server';

import { ButtonIcon, IconBookmark, Text } from '..';
import { BraidTestProvider } from '../../../entries/test';

import { PrivateButtonIcon } from './ButtonIcon';

describe('ButtonIcon', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          {/*
            Rendering `PrivateButtonIcon` so no tooltip is added.
            Tooltip does not like being rendered to static markup,
            but not required for this test.
          */}
          <PrivateButtonIcon icon={<IconBookmark />} label="Bookmark" />
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
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
});
