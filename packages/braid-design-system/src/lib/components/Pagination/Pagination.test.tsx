import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderToStaticMarkup } from 'react-dom/server';

import { Pagination } from '..';
import { BraidTestProvider } from '../../../test';

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

    expect(queryByLabelText('Prev')).not.toBeInTheDocument();
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

    expect(queryByLabelText('Next')).not.toBeInTheDocument();
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

  it('should not render a link before the first page when on the first page', () => {
    const linkProps = vi.fn(({ page }: { page: number }) => ({
      href: `/results?page=${page}`,
    }));

    const { container } = render(
      <BraidTestProvider>
        <Pagination page={1} total={10} linkProps={linkProps} label="Results" />
      </BraidTestProvider>,
    );

    expect(container.querySelector('a[rel="prev"]')).not.toBeInTheDocument();
    expect(
      container.querySelector('a[href="/results?page=0"]'),
    ).not.toBeInTheDocument();
    expect(linkProps).not.toHaveBeenCalledWith({
      page: 0,
      type: 'previous',
    });
    expect(container.querySelector('a[rel="next"]')).toHaveAttribute(
      'href',
      '/results?page=2',
    );
  });

  it('should not render a link past the last page when on the last page', () => {
    const linkProps = vi.fn(({ page }: { page: number }) => ({
      href: `/results?page=${page}`,
    }));

    const { container } = render(
      <BraidTestProvider>
        <Pagination
          page={10}
          total={10}
          linkProps={linkProps}
          label="Results"
        />
      </BraidTestProvider>,
    );

    expect(container.querySelector('a[rel="next"]')).not.toBeInTheDocument();
    expect(
      container.querySelector('a[href="/results?page=11"]'),
    ).not.toBeInTheDocument();
    expect(linkProps).not.toHaveBeenCalledWith({
      page: 11,
      type: 'next',
    });
    expect(container.querySelector('a[rel="prev"]')).toHaveAttribute(
      'href',
      '/results?page=9',
    );
  });

  it('should not render previous or next links when there is only one page', () => {
    const linkProps = vi.fn(({ page }: { page: number }) => ({
      href: `/results?page=${page}`,
    }));

    const { container } = render(
      <BraidTestProvider>
        <Pagination page={1} total={1} linkProps={linkProps} label="Results" />
      </BraidTestProvider>,
    );

    expect(container.querySelector('a[rel="prev"]')).not.toBeInTheDocument();
    expect(container.querySelector('a[rel="next"]')).not.toBeInTheDocument();
    expect(container.querySelectorAll('a')).toHaveLength(1);
    expect(container.querySelector('a')).toHaveAttribute(
      'href',
      '/results?page=1',
    );
    expect(linkProps).toHaveBeenCalledTimes(1);
    expect(linkProps).toHaveBeenCalledWith({
      page: 1,
      type: 'pageNumber',
    });
  });
});
