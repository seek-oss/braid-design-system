import '@testing-library/jest-dom/extend-expect';
import React, { MouseEvent } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { TextLinkButton, Text, Actions } from '..';

const createMockClickHandler = () =>
  jest.fn(
    (event: MouseEvent<HTMLElement>) => event.persist(), // https://reactjs.org/docs/events.html#event-pooling
  );

describe('TextLink', () => {
  describe('in Text', () => {
    it('should call the click handler on click', () => {
      const clickHandler = createMockClickHandler();
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
      const clickHandler = createMockClickHandler();
      render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );

      userEvent.tab();
      userEvent.keyboard('{enter}');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();

      userEvent.keyboard('{space}');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });

    it('should honour the tabIndex', () => {
      const { getAllByRole } = render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={() => {}} tabIndex={-1}>
              Not Focusable
            </TextLinkButton>
            <TextLinkButton onClick={() => {}} tabIndex={1}>
              Focusable Second
            </TextLinkButton>
            <TextLinkButton onClick={() => {}}>Focusable First</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );
      const buttons = getAllByRole('button');

      expect(document.body).toHaveFocus();
      userEvent.tab();
      expect(buttons[2]).toHaveFocus();
      userEvent.tab();
      expect(buttons[1]).toHaveFocus();
      userEvent.tab();
      expect(document.body).toHaveFocus();
    });
  });

  describe('in Actions', () => {
    beforeAll(() => {
      jest.spyOn(console, 'warn').mockImplementation();
    });

    it('should call the click handler on click', () => {
      const clickHandler = createMockClickHandler();
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
      const clickHandler = createMockClickHandler();
      render(
        <BraidTestProvider>
          <Actions>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Actions>
        </BraidTestProvider>,
      );

      userEvent.tab();
      userEvent.keyboard('{enter}');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();

      userEvent.keyboard('{space}');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
  });
});
