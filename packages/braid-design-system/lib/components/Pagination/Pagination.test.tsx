import '@testing-library/jest-dom';
import 'html-validate/jest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { Pagination } from '..';

describe('Pagination', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          <Pagination
            page={1}
            total={10}
            linkProps={() => ({ href: `#` })}
            label="Pagination Example"
          />
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });

  it('should have correct document relationships', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Pagination
          page={5}
          total={10}
          linkProps={() => ({ href: `#` })}
          label="Pagination Example"
          previousLabel="Prev"
          nextLabel="Next"
          pageLabel={(page) => `Pg ${page}`}
        />
      </BraidTestProvider>,
    );

    const previousLink = getByLabelText('Prev');
    const nextLink = getByLabelText('Next');

    expect(previousLink).toHaveAttribute('rel', 'prev');
    expect(nextLink).toHaveAttribute('rel', 'next');
  });

  it('should not show the Previous button on the first page', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <BraidTestProvider>
        <Pagination
          page={1}
          total={10}
          linkProps={() => ({ href: `#` })}
          label="Pagination Example"
          previousLabel="Prev"
          pageLabel={(page) => `Pg ${page}`}
        />
      </BraidTestProvider>,
    );

    expect(queryByLabelText('Prev')).not.toBeVisible();
    expect(document.body).toHaveFocus();
    await userEvent.tab();
    expect(getByLabelText('Pg 1')).toHaveFocus();
    await userEvent.tab();
    expect(getByLabelText('Next')).toHaveFocus();
    await userEvent.tab({ shift: true });
    await userEvent.tab({ shift: true });
    expect(document.body).toHaveFocus();
  });

  it('should not show the Next button on the last page', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <BraidTestProvider>
        <Pagination
          page={8}
          total={8}
          linkProps={() => ({ href: `#` })}
          label="Pagination Example"
          previousLabel="Prev"
          nextLabel="Next"
          pageLabel={(page) => `Pg ${page}`}
        />
      </BraidTestProvider>,
    );

    expect(queryByLabelText('Next')).not.toBeVisible();
    expect(document.body).toHaveFocus();
    await userEvent.tab();
    expect(getByLabelText('Prev')).toHaveFocus();
    await userEvent.tab();
    expect(getByLabelText('Pg 8')).toHaveFocus();
    await userEvent.tab();
    expect(document.body).toHaveFocus();
    await userEvent.tab({ shift: true });
    await userEvent.tab({ shift: true });
    expect(getByLabelText('Prev')).toHaveFocus();
  });
});
