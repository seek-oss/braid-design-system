import '@testing-library/jest-dom';
import 'html-validate/jest';

import { renderToStaticMarkup } from 'react-dom/server';

import { IconBookmark } from '..';
import { BraidTestProvider } from '../../../entries/test';

import { PrivateButtonIcon } from './ButtonIcon';

describe('ButtonIcon', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          {/*
            Rendering `PrivateButtonIcon` so no tooltip is added.
            Popper tooltip library does not like being rendered
            to static markup, but not required for this test.
          */}
          <PrivateButtonIcon icon={<IconBookmark />} label="Bookmark" />
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });
});
