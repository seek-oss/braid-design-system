import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, TextLinkButton, Text, Actions } from '..';

describe('TextLink', () => {
  describe('in Text', () => {
    it('should call the click handler on click', () => {
      const clickHandler = jest.fn();
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
      clickHandler.mockClear();
    });

    it('should call the click handler on keyboard interaction', () => {
      const clickHandler = jest.fn();
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
      clickHandler.mockClear();

      fireEvent.keyDown(button, { key: ' ' });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      clickHandler.mockClear();
    });
  });

  describe('in Actions', () => {
    it('should call the click handler on click', () => {
      const clickHandler = jest.fn();
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
      clickHandler.mockClear();
    });

    it('should call the click handler on keyboard interaction', () => {
      const clickHandler = jest.fn();
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
      clickHandler.mockClear();

      fireEvent.keyDown(button, { key: ' ' });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      clickHandler.mockClear();
    });
  });
});
