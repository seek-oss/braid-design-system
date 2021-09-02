import '@testing-library/jest-dom/extend-expect';
import React, { MouseEvent } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, TextLinkButton, Text, Actions } from '..';

const createMockClickHander = () =>
  jest.fn(
    (event: MouseEvent<HTMLElement>) => event.persist(), // https://reactjs.org/docs/events.html#event-pooling
  );

describe('TextLink', () => {
  describe('in Text', () => {
    it('should call the click handler on click', () => {
      const clickHandler = createMockClickHander();
      const { getByRole } = render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );

      const button = getByRole('button');
      userEvent.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });

    it('should call the click handler on keyboard interaction', () => {
      const clickHandler = createMockClickHander();
      const { getByRole } = render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );

      const button = getByRole('button');

      fireEvent.keyDown(button, { key: 'Enter' });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();

      fireEvent.keyDown(button, { key: ' ' });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
  });

  describe('in Actions', () => {
    beforeAll(() => {
      jest.spyOn(console, 'warn').mockImplementation();
    });

    it('should call the click handler on click', () => {
      const clickHandler = createMockClickHander();
      const { getByRole } = render(
        <BraidTestProvider>
          <Actions>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Actions>
        </BraidTestProvider>,
      );

      const button = getByRole('button');
      userEvent.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });

    it('should call the click handler on keyboard interaction', () => {
      const clickHandler = createMockClickHander();
      const { getByRole } = render(
        <BraidTestProvider>
          <Actions>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Actions>
        </BraidTestProvider>,
      );

      const button = getByRole('button');

      fireEvent.keyDown(button, { key: 'Enter' });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();

      fireEvent.keyDown(button, { key: ' ' });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
  });
});
