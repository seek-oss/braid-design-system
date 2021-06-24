import _jsx from '@babel/runtime/helpers/jsx';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, TextLinkButton, Text, Actions } from '..';

const createMockClickHander = function createMockClickHander() {
  return jest.fn(
    function (event) {
      return event.persist();
    }, // https://reactjs.org/docs/events.html#event-pooling
  );
};

describe('TextLink', function () {
  describe('in Text', function () {
    it('should call the click handler on click', function () {
      const clickHandler = createMockClickHander();

      const _render = render(
          /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                TextLinkButton,
                {
                  onClick: clickHandler,
                },
                void 0,
                'Link text',
              ),
            ),
          ),
        ),
        getByRole = _render.getByRole;

      const button = getByRole('button');
      userEvent.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
    it('should call the click handler on keyboard interaction', function () {
      const clickHandler = createMockClickHander();

      const _render2 = render(
          /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                TextLinkButton,
                {
                  onClick: clickHandler,
                },
                void 0,
                'Link text',
              ),
            ),
          ),
        ),
        getByRole = _render2.getByRole;

      const button = getByRole('button');
      fireEvent.keyDown(button, {
        key: 'Enter',
      });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
      fireEvent.keyDown(button, {
        key: ' ',
      });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
  });
  describe('in Actions', function () {
    it('should call the click handler on click', function () {
      const clickHandler = createMockClickHander();

      const _render3 = render(
          /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Actions,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                TextLinkButton,
                {
                  onClick: clickHandler,
                },
                void 0,
                'Link text',
              ),
            ),
          ),
        ),
        getByRole = _render3.getByRole;

      const button = getByRole('button');
      userEvent.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
    it('should call the click handler on keyboard interaction', function () {
      const clickHandler = createMockClickHander();

      const _render4 = render(
          /* #__PURE__*/ _jsx(
            BraidTestProvider,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Actions,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                TextLinkButton,
                {
                  onClick: clickHandler,
                },
                void 0,
                'Link text',
              ),
            ),
          ),
        ),
        getByRole = _render4.getByRole;

      const button = getByRole('button');
      fireEvent.keyDown(button, {
        key: 'Enter',
      });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
      fireEvent.keyDown(button, {
        key: ' ',
      });
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].type).toEqual('click');
      clickHandler.mockClear();
    });
  });
});
