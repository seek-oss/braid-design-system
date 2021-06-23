import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, TooltipRenderer, Box, Text } from '..';

const tick = async () => new Promise((resolve) => setTimeout(resolve, 0));

describe('TooltipRenderer', () => {
  it('should associate the trigger with the label', async () => {
    const { getByRole, getByLabelText } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer id="TEST_ID" tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    const trigger = getByLabelText('Trigger');
    const tooltip = getByRole('tooltip', { hidden: true });

    expect(trigger.getAttribute('aria-describedby')).toBe('TEST_ID');
    expect(tooltip.id).toBe('TEST_ID');
  });

  it('should handle hover', async () => {
    const { getByRole, getByLabelText } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer id="TEST_ID" tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    const tooltip = getByRole('tooltip', { hidden: true });
    expect(tooltip.hidden).toBe(true);

    const trigger = getByLabelText('Trigger');
    await act(async () => {
      userEvent.hover(trigger);
      await tick();
    });

    expect(tooltip.hidden).toBe(false);

    await act(async () => {
      userEvent.unhover(trigger);
      await tick();
    });

    expect(tooltip.hidden).toBe(true);
  });

  it('should hide on scroll', async () => {
    const { getByRole, getByLabelText, container } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer id="TEST_ID" tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    const tooltip = getByRole('tooltip', { hidden: true });
    expect(tooltip.hidden).toBe(true);

    const trigger = getByLabelText('Trigger');
    await act(async () => {
      userEvent.hover(trigger);
      await tick();
    });

    expect(tooltip.hidden).toBe(false);

    await act(async () => {
      fireEvent.scroll(container);
      await tick();
    });

    expect(tooltip.hidden).toBe(true);
  });

  it('should handle keyboard focus', async () => {
    const { getByRole, getByLabelText } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer id="TEST_ID" tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    const tooltip = getByRole('tooltip', { hidden: true });
    expect(tooltip.hidden).toBe(true);

    const trigger = getByLabelText('Trigger');

    expect(document.body).toHaveFocus();

    await act(async () => {
      userEvent.tab();
      await tick();
    });

    expect(trigger).toHaveFocus();
    expect(tooltip.hidden).toBe(false);

    await act(async () => {
      userEvent.tab({ shift: true });
      await tick();
    });

    expect(document.body).toHaveFocus();
    expect(tooltip.hidden).toBe(true);
  });
});
