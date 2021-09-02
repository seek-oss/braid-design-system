import '@testing-library/jest-dom/extend-expect';
import 'html-validate/jest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, Pagination } from '..';

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

  it('should not show the Previous button on the first page', () => {
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

    expect(queryByLabelText('Prev')).not.toBeInTheDocument();
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Pg 1')).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Next')).toHaveFocus();
    userEvent.tab({ shift: true });
    userEvent.tab({ shift: true });
    expect(document.body).toHaveFocus();
  });

  it('should not show the Next button on the last page', () => {
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

    expect(queryByLabelText('Next')).not.toBeInTheDocument();
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Prev')).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Pg 8')).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
    userEvent.tab({ shift: true });
    userEvent.tab({ shift: true });
    expect(getByLabelText('Prev')).toHaveFocus();
  });
});
