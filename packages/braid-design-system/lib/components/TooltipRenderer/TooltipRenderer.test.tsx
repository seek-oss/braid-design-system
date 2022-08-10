import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { TooltipRenderer, Box, Text } from '..';

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
    await userEvent.hover(trigger);
    await waitFor(() => expect(tooltip.hidden).toBe(false));

    await userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip.hidden).toBe(true));
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
    await userEvent.hover(trigger);
    await waitFor(() => expect(tooltip.hidden).toBe(false));

    fireEvent.scroll(container);
    await waitFor(() => expect(tooltip.hidden).toBe(true));
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

    await userEvent.tab();

    expect(trigger).toHaveFocus();
    await waitFor(() => expect(tooltip.hidden).toBe(false));

    await userEvent.tab({ shift: true });

    expect(document.body).toHaveFocus();
    await waitFor(() => expect(tooltip.hidden).toBe(true));
  });
});
