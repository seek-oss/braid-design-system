import { render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';

import { IconTick, List, Text } from '..';
import { BraidTestProvider } from '../../../test';

describe('List', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          {(['bullet', 'icon', 'alpha', 'number', 'roman'] as const).map(
            (type) =>
              type === 'icon' ? (
                <List type={type} icon={<IconTick />} space="small" key={type}>
                  <Text>1</Text>
                  <Text>2</Text>
                  <Text>3</Text>
                </List>
              ) : (
                <List type={type} space="small" key={type}>
                  <Text>1</Text>
                  <Text>2</Text>
                  <Text>3</Text>
                </List>
              ),
          )}
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });

  it('should render a valid unordered list when "type" is "bullet"', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <List type="bullet" space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </List>
      </BraidTestProvider>,
    );

    expect(getByRole('list').nodeName).toBe('UL');
  });

  it('should render a valid unordered list when "type" is "icon"', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <List type="icon" icon={<IconTick />} space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </List>
      </BraidTestProvider>,
    );

    expect(getByRole('list').nodeName).toBe('UL');
  });

  it('should render a valid ordered list when "type" is "alpha"', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <List type="alpha" space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </List>
      </BraidTestProvider>,
    );

    expect(getByRole('list').nodeName).toBe('OL');
  });

  it('should render a valid ordered list when "type" is "number"', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <List type="number" space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </List>
      </BraidTestProvider>,
    );

    expect(getByRole('list').nodeName).toBe('OL');
  });

  it('should render a valid ordered list when "type" is "roman"', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <List type="roman" space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </List>
      </BraidTestProvider>,
    );

    expect(getByRole('list').nodeName).toBe('OL');
  });
});
