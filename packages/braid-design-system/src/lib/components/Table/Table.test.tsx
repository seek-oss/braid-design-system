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
import { BraidTestProvider } from '../../../test';

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
    it('should forward refs to all table components', () => {
      const tableRef = createRef<HTMLTableElement>();
      const headerRef = createRef<HTMLTableSectionElement>();
      const rowRef = createRef<HTMLTableRowElement>();
      const bodyRef = createRef<HTMLTableSectionElement>();
      const cellRef = createRef<HTMLTableCellElement>();
      const footerRef = createRef<HTMLTableSectionElement>();
      const headerCellRef = createRef<HTMLTableCellElement>();

      render(
        <BraidTestProvider>
          <Table label="Table with refs" ref={tableRef}>
            <TableHeader ref={headerRef}>
              <TableRow ref={rowRef}>
                <TableHeaderCell ref={headerCellRef}>
                  <Text>Header</Text>
                </TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody ref={bodyRef}>
              <TableRow>
                <TableCell ref={cellRef}>
                  <Text>Content</Text>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter ref={footerRef}>
              <TableRow>
                <TableCell>
                  <Text>Footer</Text>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </BraidTestProvider>,
      );

      expect(tableRef.current?.tagName).toBe('TABLE');
      expect(headerRef.current?.tagName).toBe('THEAD');
      expect(headerCellRef.current?.tagName).toBe('TH');
      expect(bodyRef.current?.tagName).toBe('TBODY');
      expect(cellRef.current?.tagName).toBe('TD');
      expect(footerRef.current?.tagName).toBe('TFOOT');
    });
  });
});
