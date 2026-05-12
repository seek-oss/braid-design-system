import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Actions,
  Button,
  Column,
  Columns,
  IconArrow,
  PageBlock,
  Placeholder,
  Stack,
  Step,
  Stepper,
} from '../../../components';
import { getState, setDefaultState, setState } from '../../stateStubs';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Stepped Section',
    code: source(
      <PageBlock width="medium">
        {setDefaultState('progress', 1)}
        {setDefaultState('activeStep', 1)}
        <Stack space="large">
          <Stepper
            label="Stepped Block"
            align="left"
            progress={getState('progress')}
            activeStep={getState('activeStep')}
            onStepClick={({ stepNumber }) => setState('activeStep', stepNumber)}
          >
            <Step>Step 1</Step>
            <Step>Step 2</Step>
            <Step>Step 3</Step>
            <Step>Step 4</Step>
            <Step>Step 5</Step>
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
          {getState('activeStep') === 5 && (
            <Placeholder label="Step content 5" height={400} />
          )}

          <Columns space="small">
            <Column>
              {getState('activeStep') > 1 && (
                <Actions>
                  <Button
                    icon={<IconArrow direction="left" />}
                    onClick={() =>
                      setState('activeStep', getState('activeStep') - 1)
                    }
                  >
                    Back
                  </Button>
                </Actions>
              )}
            </Column>
            <Column width="content">
              {getState('activeStep') < 5 && (
                <Actions>
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
                </Actions>
              )}
            </Column>
          </Columns>
        </Stack>
      </PageBlock>,
    ),
  },
];
