import '@testing-library/jest-dom';
import 'html-validate/jest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { BraidTestProvider } from '../../../entries/test';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeadCell,
  TableHeader,
  TableRow,
  Text,
} from '..';
import { render } from '@testing-library/react';

describe('Table', () => {
  it('should have accessible label', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Table label="Table label">
          <TableBody>
            <TableRow>
              <TableCell>
                <Text>Content</Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </BraidTestProvider>,
    );
    const tableEl = getByLabelText('Table label');
    expect(tableEl.tagName).toBe('TABLE');
  });

  describe('should render valid html structure', () => {
    it('with all sections', () => {
      expect(
        renderToStaticMarkup(
          <BraidTestProvider>
            <Table label="Table label">
              <TableHeader>
                <TableRow>
                  <TableHeadCell>
                    <Text>Content</Text>
                  </TableHeadCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Text>Content</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>
                    <Text>Content</Text>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </BraidTestProvider>,
        ),
      ).toHTMLValidate({
        extends: ['html-validate:recommended'],
      });
    });

    it('with body only', () => {
      expect(
        renderToStaticMarkup(
          <BraidTestProvider>
            <Table label="Table label">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Text>Content</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </BraidTestProvider>,
        ),
      ).toHTMLValidate({
        extends: ['html-validate:recommended'],
      });
    });

    it('with row headers and no column headers', () => {
      expect(
        renderToStaticMarkup(
          <BraidTestProvider>
            <Table label="Table label">
              <TableBody>
                <TableRow>
                  <TableHeadCell>
                    <Text>Content</Text>
                  </TableHeadCell>
                  <TableCell>
                    <Text>Content</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </BraidTestProvider>,
        ),
      ).toHTMLValidate({
        extends: ['html-validate:recommended'],
      });
    });

    it('with column and row headers', () => {
      expect(
        renderToStaticMarkup(
          <BraidTestProvider>
            <Table label="Table label">
              <TableHeader>
                <TableRow>
                  <TableHeadCell>
                    <Text>Content</Text>
                  </TableHeadCell>
                  <TableHeadCell>
                    <Text>Content</Text>
                  </TableHeadCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableHeadCell>
                    <Text>Content</Text>
                  </TableHeadCell>
                  <TableCell>
                    <Text>Content</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </BraidTestProvider>,
        ),
      ).toHTMLValidate({
        extends: ['html-validate:recommended'],
      });
    });
  });
});
