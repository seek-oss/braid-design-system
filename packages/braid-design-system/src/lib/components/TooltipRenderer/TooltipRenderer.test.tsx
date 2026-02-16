import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TooltipRenderer, Box, Text } from '..';
import { BraidTestProvider } from '../../../test';

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

    await userEvent.hover(trigger);
    const tooltip = getByRole('tooltip');

    expect(trigger.getAttribute('aria-describedby')).toBe('TEST_ID');
    expect(tooltip.id).toBe('TEST_ID');
  });

  it('should handle hover', async () => {
    const { queryByRole, getByRole, getByLabelText } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    expect(queryByRole('tooltip')).toBeNull();

    const trigger = getByLabelText('Trigger');
    await userEvent.hover(trigger);
    await waitFor(() => expect(getByRole('tooltip')).toBeInTheDocument());

    await userEvent.unhover(trigger);
    await waitFor(() => expect(queryByRole('tooltip')).toBeNull());
  });

  it('should hide on scroll', async () => {
    const { queryByRole, getByRole, getByLabelText, container } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    expect(queryByRole('tooltip')).toBeNull();

    const trigger = getByLabelText('Trigger');
    await userEvent.hover(trigger);
    await waitFor(() => expect(getByRole('tooltip')).toBeInTheDocument());

    fireEvent.scroll(container);
    await waitFor(() => expect(queryByRole('tooltip')).toBeNull());
  });

  it('should handle keyboard focus', async () => {
    const { queryByRole, getByRole, getByLabelText } = render(
      <BraidTestProvider themeName="wireframe">
        <Text>
          <TooltipRenderer tooltip={<Text>Tooltip text.</Text>}>
            {({ triggerProps }) => (
              <Box component="span" aria-label="Trigger" {...triggerProps}>
                Trigger
              </Box>
            )}
          </TooltipRenderer>
        </Text>
      </BraidTestProvider>,
    );

    expect(queryByRole('tooltip')).toBeNull();

    const trigger = getByLabelText('Trigger');

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(trigger).toHaveFocus();
    await waitFor(() => expect(getByRole('tooltip')).toBeInTheDocument());

    await userEvent.tab({ shift: true });

    expect(document.body).toHaveFocus();
    await waitFor(() => expect(queryByRole('tooltip')).toBeNull());
  });
});
