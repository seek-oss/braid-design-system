import _jsx from '@babel/runtime/helpers/jsx';
import '@testing-library/jest-dom/extend-expect';
import 'html-validate/jest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, Pagination } from '..';
describe('Pagination', function () {
  it('should render valid html structure', function () {
    expect(
      renderToStaticMarkup(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Pagination, {
            page: 1,
            total: 10,
            linkProps: function linkProps() {
              return {
                href: '#',
              };
            },
            label: 'Pagination Example',
          }),
        ),
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });
  it('should have correct document relationships', function () {
    const _render = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Pagination, {
            page: 5,
            total: 10,
            linkProps: function linkProps() {
              return {
                href: '#',
              };
            },
            label: 'Pagination Example',
            previousLabel: 'Prev',
            nextLabel: 'Next',
            pageLabel: function pageLabel(page) {
              return 'Pg '.concat(page);
            },
          }),
        ),
      ),
      getByLabelText = _render.getByLabelText;

    const previousLink = getByLabelText('Prev');
    const nextLink = getByLabelText('Next');
    expect(previousLink).toHaveAttribute('rel', 'prev');
    expect(nextLink).toHaveAttribute('rel', 'next');
  });
  it('should not show the Previous button on the first page', function () {
    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Pagination, {
            page: 1,
            total: 10,
            linkProps: function linkProps() {
              return {
                href: '#',
              };
            },
            label: 'Pagination Example',
            previousLabel: 'Prev',
            pageLabel: function pageLabel(page) {
              return 'Pg '.concat(page);
            },
          }),
        ),
      ),
      getByLabelText = _render2.getByLabelText,
      queryByLabelText = _render2.queryByLabelText;

    expect(queryByLabelText('Prev')).not.toBeInTheDocument();
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Pg 1')).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Next')).toHaveFocus();
    userEvent.tab({
      shift: true,
    });
    userEvent.tab({
      shift: true,
    });
    expect(document.body).toHaveFocus();
  });
  it('should not show the Next button on the last page', function () {
    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Pagination, {
            page: 8,
            total: 8,
            linkProps: function linkProps() {
              return {
                href: '#',
              };
            },
            label: 'Pagination Example',
            previousLabel: 'Prev',
            nextLabel: 'Next',
            pageLabel: function pageLabel(page) {
              return 'Pg '.concat(page);
            },
          }),
        ),
      ),
      getByLabelText = _render3.getByLabelText,
      queryByLabelText = _render3.queryByLabelText;

    expect(queryByLabelText('Next')).not.toBeInTheDocument();
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Prev')).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText('Pg 8')).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
    userEvent.tab({
      shift: true,
    });
    userEvent.tab({
      shift: true,
    });
    expect(getByLabelText('Prev')).toHaveFocus();
  });
});
