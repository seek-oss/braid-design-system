import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render } from '@testing-library/react';
import { createRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeaderCell,
  TableHeader,
  TableRow,
  Text,
} from '..';
import { BraidTestProvider } from '../../../entries/test';

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
                  <TableHeaderCell>
                    <Text>Content</Text>
                  </TableHeaderCell>
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
                  <TableHeaderCell>
                    <Text>Content</Text>
                  </TableHeaderCell>
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
                  <TableHeaderCell>
                    <Text>Content</Text>
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <Text>Content</Text>
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableHeaderCell>
                    <Text>Content</Text>
                  </TableHeaderCell>
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

  describe('ref forwarding', () => {
    it('should forward ref to TableBody', () => {
      const bodyRef = createRef<HTMLTableSectionElement>();

      render(
        <BraidTestProvider>
          <Table label="Table with refs">
            <TableBody ref={bodyRef}>
              <TableRow>
                <TableCell>
                  <Text>Content</Text>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </BraidTestProvider>,
      );

      expect(bodyRef.current).not.toBeNull();
      expect(bodyRef.current?.tagName).toBe('TBODY');
    });

    it('should forward ref to TableRow', () => {
      const rowRef = createRef<HTMLTableRowElement>();

      render(
        <BraidTestProvider>
          <Table label="Table with refs">
            <TableBody>
              <TableRow ref={rowRef}>
                <TableCell>
                  <Text>Content</Text>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </BraidTestProvider>,
      );

      expect(rowRef.current).not.toBeNull();
      expect(rowRef.current?.tagName).toBe('TR');
    });
  });
});
