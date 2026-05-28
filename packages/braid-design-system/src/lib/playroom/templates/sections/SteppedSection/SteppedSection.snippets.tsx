import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Button,
  IconArrow,
  IconSend,
  PageBlock,
  Placeholder,
  Spread,
  Stack,
  Step,
  Stepper,
} from '../../../components';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Stepped Section',
    code: ({ setDefaultState, setState, getState }) =>
      source(
        <PageBlock width="medium">
          {setDefaultState('progress', 1)}
          {setDefaultState('activeStep', 1)}
          <Stack space="large">
            <Stepper
              label="Stepped Block"
              align="left"
              progress={getState('progress')}
              activeStep={getState('activeStep')}
              onStepClick={({ stepNumber }) =>
                setState('activeStep', stepNumber)
              }
            >
              <Step>Step 1</Step>
              <Step>Step 2</Step>
              <Step>Step 3</Step>
              <Step>Step 4</Step>
            </Stepper>

            {getState('activeStep') === 1 && (
              <Placeholder label="Step content 1" height={400} />
            )}
            {getState('activeStep') === 2 && (
              <Placeholder label="Step content 2" height={400} />
            )}
            {getState('activeStep') === 3 && (
              <Placeholder label="Step content 3" height={400} />
            )}
            {getState('activeStep') === 4 && (
              <Placeholder label="Step content 4" height={400} />
            )}

            <Spread space="small">
              <Actions>
                {getState('activeStep') > 1 && (
                  <Button
                    variant="soft"
                    icon={<IconArrow direction="left" />}
                    onClick={() =>
                      setState('activeStep', getState('activeStep') - 1)
                    }
                  >
                    Back
                  </Button>
                )}
              </Actions>
              <Actions>
                {getState('activeStep') < 4 ? (
                  <Button
                    variant="solid"
                    tone="formAccent"
                    icon={<IconArrow direction="right" />}
                    iconPosition="trailing"
                    onClick={() => {
                      const newStep = getState('activeStep') + 1;
                      setState('activeStep', newStep);
                      if (newStep > getState('progress')) {
                        setState('progress', newStep);
                      }
                    }}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    variant="solid"
                    tone="brandAccent"
                    icon={<IconSend />}
                    iconPosition="trailing"
                  >
                    Submit
                  </Button>
                )}
              </Actions>
            </Spread>
          </Stack>
        </PageBlock>,
      ),
  },
];
