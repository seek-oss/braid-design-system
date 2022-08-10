import '@testing-library/jest-dom';
import 'html-validate/jest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { BraidTestProvider } from '../../../test';
import { ButtonIcon, IconBookmark } from '..';

describe('ButtonIcon', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          {/*
            Rendering without `id` so no tooltip is added.
            Popper tooltip library does not like being rendered
            to static markup, but not required for this test.
          */}
          {/* @ts-expect-error */}
          <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });
});
