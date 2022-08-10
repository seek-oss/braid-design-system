import '@testing-library/jest-dom';
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
    it('should call the click handler on click', async () => {
      const clickHandler = createMockClickHandler();
      const { getByRole } = render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );

      const button = getByRole('button');
      await userEvent.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });

    it('should call the click handler on keyboard interaction', async () => {
      const clickHandler = createMockClickHandler();
      render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );

      await userEvent.tab();
      await userEvent.keyboard('{enter}');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();

      await userEvent.keyboard(' ');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });

    it('should honour the tabIndex', async () => {
      const { getAllByRole } = render(
        <BraidTestProvider>
          <Text>
            <TextLinkButton onClick={() => {}} tabIndex={-1}>
              Not Focusable
            </TextLinkButton>
            <TextLinkButton onClick={() => {}} tabIndex={1}>
              Focusable First
            </TextLinkButton>
            <TextLinkButton onClick={() => {}}>Focusable Second</TextLinkButton>
          </Text>
        </BraidTestProvider>,
      );
      const buttons = getAllByRole('button');

      expect(document.body).toHaveFocus();
      await userEvent.tab();
      expect(buttons[1]).toHaveFocus();
      await userEvent.tab();
      expect(buttons[2]).toHaveFocus();
      await userEvent.tab();
      expect(document.body).toHaveFocus();
    });
  });

  describe('in Actions', () => {
    beforeAll(() => {
      jest.spyOn(console, 'warn').mockImplementation();
    });

    it('should call the click handler on click', async () => {
      const clickHandler = createMockClickHandler();
      const { getByRole } = render(
        <BraidTestProvider>
          <Actions>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Actions>
        </BraidTestProvider>,
      );

      const button = getByRole('button');
      await userEvent.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });

    it('should call the click handler on keyboard interaction', async () => {
      const clickHandler = createMockClickHandler();
      render(
        <BraidTestProvider>
          <Actions>
            <TextLinkButton onClick={clickHandler}>Link text</TextLinkButton>
          </Actions>
        </BraidTestProvider>,
      );

      await userEvent.tab();
      await userEvent.keyboard('{enter}');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();

      await userEvent.keyboard(' ');
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
  });
});
