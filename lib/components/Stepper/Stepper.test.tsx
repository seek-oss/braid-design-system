import assert from 'assert';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { Step, Stepper } from '..';

const renderLinearStepper = ({
  onStepClick,
  activeStep,
}: {
  onStepClick?: () => void;
  activeStep?: number;
} = {}) => {
  const { container, getAllByRole, getByRole } = render(
    <BraidTestProvider>
      <input />
      <Stepper
        label="Linear steps"
        progress={3}
        activeStep={activeStep}
        onStepClick={onStepClick}
      >
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
      </Stepper>
      <input />
    </BraidTestProvider>,
  );

  return {
    currentStep: container.querySelector<HTMLButtonElement>(
      '[aria-current="step"]',
    ),
    steps: getAllByRole('button'),
    progressBar: getByRole('progressbar'),
    siblingInputs: getAllByRole('textbox'),
  };
};

const renderNonLinearStepper = ({
  onStepClick,
  activeStep,
}: {
  onStepClick?: () => void;
  activeStep: number;
}) => {
  const { container, getAllByRole, queryByRole } = render(
    <BraidTestProvider>
      <input />
      <Stepper
        label="Linear steps"
        mode="non-linear"
        activeStep={activeStep}
        onStepClick={onStepClick}
      >
        <Step>1. First step</Step>
        <Step>2. Second step</Step>
        <Step>3. Third step</Step>
        <Step>4. Forth step</Step>
      </Stepper>
      <input />
    </BraidTestProvider>,
  );

  return {
    currentStep: container.querySelector<HTMLButtonElement>(
      '[aria-current="step"]',
    ),
    steps: getAllByRole('button'),
    progressBar: queryByRole('progressbar'),
    siblingInputs: getAllByRole('textbox'),
  };
};

describe('Stepper', () => {
  describe('Linear', () => {
    it('should indicate the current step', () => {
      const { currentStep } = renderLinearStepper();
      expect(currentStep?.textContent).toBe('3. Third step');
    });

    it('should provide progress information', () => {
      const { progressBar } = renderLinearStepper();

      expect(progressBar.getAttribute('aria-valuemin')).toBe('0');
      expect(progressBar.getAttribute('aria-valuemax')).toBe('3');
      expect(progressBar.getAttribute('aria-valuenow')).toBe('2');
      expect(progressBar.getAttribute('aria-valuetext')).toBe('Linear steps');
    });

    it('should override progress with activeStep when provided', () => {
      const { currentStep } = renderLinearStepper({ activeStep: 2 });
      expect(currentStep?.textContent).toBe('2. Second step');
    });

    it('should have correct tab flow', () => {
      const { currentStep, siblingInputs } = renderLinearStepper();
      const [previousEl, nextEl] = siblingInputs;

      expect(document.body).toHaveFocus();
      userEvent.tab();
      expect(previousEl).toHaveFocus();
      userEvent.tab();
      expect(currentStep).toHaveFocus();
      userEvent.tab();
      expect(nextEl).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(currentStep).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(previousEl).toHaveFocus();
    });

    it('should not implement roving focus without `onStepClick`', () => {
      const { currentStep, steps } = renderLinearStepper();
      const [, secondStep] = steps;
      assert(currentStep, 'Current step not found');
      userEvent.click(currentStep);

      // keyboard navigation should not work
      userEvent.keyboard('{arrowleft}');
      expect(currentStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(currentStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(currentStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(currentStep).toHaveFocus();

      // clicking should not move focus
      expect(() =>
        userEvent.click(secondStep),
      ).toThrowErrorMatchingInlineSnapshot(
        `"unable to click element as it has or inherits pointer-events set to \\"none\\"."`,
      );
      expect(currentStep).toHaveFocus();
    });

    it('should implement roving focus when `onStepClick` provided', () => {
      const onStepClick = jest.fn();
      const { currentStep, steps, siblingInputs } = renderLinearStepper({
        onStepClick,
      });
      const [firstStep, secondStep, thirdStep] = steps;
      const [, nextEl] = siblingInputs;
      assert(currentStep, 'Current step not found');
      userEvent.click(currentStep);

      expect(currentStep).toHaveFocus();
      // arrow left
      userEvent.keyboard('{arrowleft}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(thirdStep).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(secondStep).toHaveFocus();

      // arrow right
      userEvent.keyboard('{arrowright}');
      expect(thirdStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(thirdStep).toHaveFocus();

      // arrow up
      userEvent.keyboard('{arrowup}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(thirdStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(secondStep).toHaveFocus();

      // arrow down
      userEvent.keyboard('{arrowdown}');
      expect(thirdStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(thirdStep).toHaveFocus();

      // tab flow resets roaming focus position
      userEvent.keyboard('{arrowleft}');
      expect(secondStep).toHaveFocus();
      userEvent.tab();
      expect(nextEl).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(thirdStep).toHaveFocus();

      // home
      userEvent.keyboard('{home}');
      expect(firstStep).toHaveFocus();

      // end
      userEvent.keyboard('{end}');
      expect(thirdStep).toHaveFocus();

      // space invokes handler
      userEvent.keyboard('{arrowleft}');
      expect(onStepClick).not.toHaveBeenCalled();
      userEvent.keyboard('{space}');
      expect(secondStep).toHaveFocus();
      expect(onStepClick).toHaveBeenCalledWith({ stepNumber: 2 });
      onStepClick.mockReset();

      // enter invokes handler
      userEvent.keyboard('{arrowleft}');
      expect(onStepClick).not.toHaveBeenCalled();
      userEvent.keyboard('{enter}');
      expect(firstStep).toHaveFocus();
      expect(onStepClick).toHaveBeenCalledWith({ stepNumber: 1 });
      onStepClick.mockReset();

      // mouse click invokes handler
      expect(onStepClick).not.toHaveBeenCalled();
      userEvent.click(secondStep);
      expect(secondStep).toHaveFocus();
      expect(onStepClick).toHaveBeenCalledWith({ stepNumber: 2 });
    });
  });

  describe('Non-linear', () => {
    it('should indicate the current step', () => {
      const { currentStep } = renderNonLinearStepper({ activeStep: 2 });
      expect(currentStep?.textContent).toBe('2. Second step');
    });

    it('should not provide progress information', () => {
      const { progressBar } = renderNonLinearStepper({ activeStep: 2 });

      expect(progressBar).not.toBeInTheDocument();
    });

    it('should have correct tab flow', () => {
      const { currentStep, siblingInputs } = renderNonLinearStepper({
        activeStep: 2,
      });
      const [previousEl, nextEl] = siblingInputs;

      expect(document.body).toHaveFocus();
      userEvent.tab();
      expect(previousEl).toHaveFocus();
      userEvent.tab();
      expect(currentStep).toHaveFocus();
      userEvent.tab();
      expect(nextEl).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(currentStep).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(previousEl).toHaveFocus();
    });

    it('should not implement roving focus without `onStepClick`', () => {
      const { currentStep, steps } = renderNonLinearStepper({ activeStep: 2 });
      const [firstStep] = steps;
      assert(currentStep, 'Current step not found');
      userEvent.click(currentStep);

      // keyboard navigation should not work
      userEvent.keyboard('{arrowleft}');
      expect(currentStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(currentStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(currentStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(currentStep).toHaveFocus();

      // clicking should not move focus
      expect(() =>
        userEvent.click(firstStep),
      ).toThrowErrorMatchingInlineSnapshot(
        `"unable to click element as it has or inherits pointer-events set to \\"none\\"."`,
      );
      expect(currentStep).toHaveFocus();
    });

    it('should implement roving focus when `onStepClick` provided', () => {
      const onStepClick = jest.fn();
      const { currentStep, steps, siblingInputs } = renderNonLinearStepper({
        activeStep: 3,
        onStepClick,
      });
      const [firstStep, secondStep, thirdStep, forthStep] = steps;
      const [, nextEl] = siblingInputs;
      assert(currentStep, 'Current step not found');
      userEvent.click(currentStep);

      expect(currentStep).toHaveFocus();
      // arrow left
      userEvent.keyboard('{arrowleft}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(forthStep).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(thirdStep).toHaveFocus();

      // arrow right
      userEvent.keyboard('{arrowright}');
      expect(forthStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(thirdStep).toHaveFocus();

      // arrow up
      userEvent.keyboard('{arrowup}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(forthStep).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(thirdStep).toHaveFocus();

      // arrow down
      userEvent.keyboard('{arrowdown}');
      expect(forthStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(firstStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(secondStep).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(thirdStep).toHaveFocus();

      // tab flow resets roaming focus position
      userEvent.keyboard('{arrowleft}');
      expect(secondStep).toHaveFocus();
      userEvent.tab();
      expect(nextEl).toHaveFocus();
      userEvent.tab({ shift: true });
      expect(thirdStep).toHaveFocus();

      // home
      userEvent.keyboard('{home}');
      expect(firstStep).toHaveFocus();

      // end
      userEvent.keyboard('{end}');
      expect(forthStep).toHaveFocus();

      // space invokes handler
      expect(onStepClick).not.toHaveBeenCalled();
      userEvent.keyboard('{space}');
      expect(forthStep).toHaveFocus();
      expect(onStepClick).toHaveBeenCalledWith({ stepNumber: 4 });
      onStepClick.mockReset();

      // enter invokes handler
      userEvent.keyboard('{arrowleft}');
      userEvent.keyboard('{arrowleft}');
      expect(onStepClick).not.toHaveBeenCalled();
      userEvent.keyboard('{enter}');
      expect(secondStep).toHaveFocus();
      expect(onStepClick).toHaveBeenCalledWith({ stepNumber: 2 });
      onStepClick.mockReset();

      // mouse click invokes handler
      expect(onStepClick).not.toHaveBeenCalled();
      userEvent.click(firstStep);
      expect(firstStep).toHaveFocus();
      expect(onStepClick).toHaveBeenCalledWith({ stepNumber: 1 });
    });
  });
});
