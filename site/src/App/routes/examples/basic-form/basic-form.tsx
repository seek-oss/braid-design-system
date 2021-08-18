import React, { ReactChild } from 'react';
import { Page } from '../../../../types';
import {
  Heading,
  Text,
  Divider,
  Card,
  Stack,
  TextLink,
  List,
  Button,
  Actions,
  filterSuggestions,
} from '../../../../../../lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import {
  Autosuggest,
  TextField,
  MonthPicker,
  Textarea,
} from '../../../../../../lib/playroom/components';
import Code from '../../../Code/Code';
import { ReactNodeNoStrings } from '../../../../../../lib/components/private/ReactNodeNoStrings';
import { PageTitle } from '../../../Seo/PageTitle';

interface StepProps {
  heading?: string;
  detail: ReactNodeNoStrings;
  children: ReactChild;
}
const Step = ({ heading, detail, children }: StepProps) => (
  <Stack space="xlarge">
    {heading ? <Heading level="3">{heading}</Heading> : null}
    {detail}
    <Code>{children}</Code>
  </Stack>
);

const page: Page = {
  title: 'Basic Form',
  component: () => (
    <TextStack>
      <Stack space="medium">
        <Heading level="3" weight="weak">
          <PageTitle title="Basic Form Example" />
          Examples /
        </Heading>
        <Heading component="h1" level="2">
          Basic Form
        </Heading>
      </Stack>

      <Code collapsedByDefault>
        <Card>
          <Stack space="large">
            <Heading level="3">Add role</Heading>
            <Stack space="medium">
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
              <TextField label="Company name" />
              <MonthPicker label="Started" />
              <Textarea
                label="Description"
                secondaryLabel="recommended"
                description="Summarise your responsibilities, skills and achievements."
              />
              <Actions>
                <Button>Save</Button>
              </Actions>
            </Stack>
          </Stack>
        </Card>
      </Code>

      <Heading level="3">How do I build this example for myself?</Heading>

      <Text>
        Designs like this are rarely built top-to-bottom in a single pass.
        Instead, they typically start very simple, with further details and
        refinements added in layers.
      </Text>
      <Text>
        To give you a sense of what this looks like, the following tutorial will
        guide you through the design process that you might go through when
        using <TextLink href="/playroom">Playroom</TextLink>.
      </Text>

      <Text tone="secondary">
        At any stage you can click the &ldquo;Open in Playroom&rdquo; button
        under the examples to view the design across themes and viewports.
      </Text>

      <Divider />

      <Stack space="xxlarge">
        <Step
          heading="1. Create the card with a heading"
          detail={
            <Text>
              To get started, we can use a{' '}
              <TextLink href="/components/Card">Card</TextLink> as the container
              for the form, as well as providing a{' '}
              <TextLink href="/components/Heading">Heading</TextLink>.
            </Text>
          }
        >
          <Card>
            <Heading level="3">Add role</Heading>
          </Card>
        </Step>

        <Step
          heading="2. Add the first field"
          detail={
            <Text>
              Let&rsquo;s add the first field to the form using the{' '}
              <TextLink href="/components/Autosuggest">Autosuggest</TextLink>{' '}
              component. We&rsquo;ll give it a `label` and also provide some
              suggestions.
            </Text>
          }
        >
          <Card>
            <Heading level="3">Add role</Heading>
            <Autosuggest
              label="Job title"
              suggestions={filterSuggestions([
                { text: 'Developer' },
                { text: 'Designer' },
                { text: 'Product Manager' },
              ])}
            />
          </Card>
        </Step>

        <Step
          heading="3. Space out the content"
          detail={
            <Text>
              You&rsquo;ll notice that there is no space between the heading and
              field by default. This is actually a good thing! We now get to
              decide exactly how spaced out we want the content to be. To
              achieve this, we&rsquo;ll use a{' '}
              <TextLink href="/components/Stack">Stack</TextLink> component
              which applies space evenly between its child elements.
            </Text>
          }
        >
          <Card>
            <Stack space="large">
              <Heading level="3">Add role</Heading>
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
            </Stack>
          </Card>
        </Step>

        <Step
          heading="4. Add some more fields"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Now that we have described how we want to manage the space
                within the `Card`, we can add more fields to the form by placing
                them within this `Stack`.
              </Text>
              <Text component="p">
                Let&rsquo;s add a{' '}
                <TextLink href="/components/TextField">TextField</TextLink>,{' '}
                <TextLink href="/components/MonthPicker">MonthPicker</TextLink>{' '}
                and a <TextLink href="/components/Textarea">Textarea</TextLink>,
                providing each of them with a `label`.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="large">
              <Heading level="3">Add role</Heading>
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
              <TextField label="Company name" />
              <MonthPicker label="Started" />
              <Textarea label="Description" />
            </Stack>
          </Card>
        </Step>

        <Step
          heading="5. Add additional information to a field"
          detail={
            <Stack space="xlarge">
              <Text component="p">
                Sometimes it is necessary to provide more information to a
                field, either adding additional context, indicating whether a
                field is optional, or even providing field specific help. All
                fields within Braid support a `secondaryLabel`, `tertiaryLabel`
                and `description`.
              </Text>
              <Text component="p">
                Let&rsquo;s encourage the users of this form to provide a
                description by marking it as &ldquo;recommended&rdquo; using the
                `secondaryLabel`.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="large">
              <Heading level="3">Add role</Heading>
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
              <TextField label="Company name" />
              <MonthPicker label="Started" />
              <Textarea label="Description" secondaryLabel="recommended" />
            </Stack>
          </Card>
        </Step>

        <Step
          detail={
            <Text component="p">
              While we&rsquo;re at it, we can also add a `description` to
              provide more context to the user—prompting them with what sort of
              information they should provide.
            </Text>
          }
        >
          <Card>
            <Stack space="large">
              <Heading level="3">Add role</Heading>
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
              <TextField label="Company name" />
              <MonthPicker label="Started" />
              <Textarea
                label="Description"
                secondaryLabel="recommended"
                description="Summarise your responsibilities, skills and achievements."
              />
            </Stack>
          </Card>
        </Step>

        <Step
          heading="6. Add the button"
          detail={
            <Text>
              Now that we have all of our form fields in the card, we can now
              add a <TextLink href="/components/Button">Button</TextLink> to
              submit the form.
            </Text>
          }
        >
          <Card>
            <Stack space="large">
              <Heading level="3">Add role</Heading>
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
              <TextField label="Company name" />
              <MonthPicker label="Started" />
              <Textarea
                label="Description"
                secondaryLabel="recommended"
                description="Summarise your responsibilities, skills and achievements."
              />
              <Button>Save</Button>
            </Stack>
          </Card>
        </Step>

        <Step
          detail={
            <Stack space="xlarge">
              <Text component="p">
                You&rsquo;ll notice the button is the full width of the card.
                This is fine from a mobile perspective, but less that ideal on a
                larger device.
              </Text>
              <Text component="p">
                We can address this by wrapping the button in an{' '}
                <TextLink href="/components/Actions">Actions</TextLink>{' '}
                component. Now it will be full width on mobile and only as wide
                as its content on larger screens.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="large">
              <Heading level="3">Add role</Heading>
              <Autosuggest
                label="Job title"
                suggestions={filterSuggestions([
                  { text: 'Developer' },
                  { text: 'Designer' },
                  { text: 'Product Manager' },
                ])}
              />
              <TextField label="Company name" />
              <MonthPicker label="Started" />
              <Textarea
                label="Description"
                secondaryLabel="recommended"
                description="Summarise your responsibilities, skills and achievements."
              />
              <Actions>
                <Button>Save</Button>
              </Actions>
            </Stack>
          </Card>
        </Step>

        <Step
          heading="7. Polish!"
          detail={
            <Stack space="xlarge">
              <Text>
                Now that we have all our elements in place we can polish until
                we are happy. Adjusting white space between elements across
                mobile, tablet and desktop to achieve the desired goal.
              </Text>
              <Text>
                In this case, we might define the space around the form fields
                to be tighter than the space between the heading and button. We
                can achieve this by wrapping the fields in a `large` spaced
                `Stack`, and also increase the `space` on the first `Stack` to
                `xlarge`.
              </Text>
            </Stack>
          }
        >
          <Card>
            <Stack space="xlarge">
              <Heading level="3">Add role</Heading>
              <Stack space="large">
                <Autosuggest
                  label="Job title"
                  suggestions={filterSuggestions([
                    { text: 'Developer' },
                    { text: 'Designer' },
                    { text: 'Product Manager' },
                  ])}
                />
                <TextField label="Company name" />
                <MonthPicker label="Started" />
                <Textarea
                  label="Description"
                  secondaryLabel="recommended"
                  description="Summarise your responsibilities, skills and achievements."
                />
              </Stack>
              <Actions>
                <Button>Save</Button>
              </Actions>
            </Stack>
          </Card>
        </Step>
      </Stack>

      <Divider />

      <TextStack>
        <Heading level="3">Next steps</Heading>

        <Stack space="xlarge">
          <Text>
            Now that you are familiar with the code we have just written, this
            is a good chance to head over to Playroom and continue refining this
            design.
          </Text>
          <Text>You may want to consider:</Text>
          <List>
            <Text>
              Specifying different spacing responsively using{' '}
              <TextLink href="/components/Stack">Stack</TextLink>,
            </Text>
            <Text>
              Add a <TextLink href="/components/Dropdown">Dropdown</TextLink>{' '}
              field labelled &ldquo;Work type&rdquo; with a list of options.
            </Text>
            <Text>
              Constrain the width of card on larger devices using{' '}
              <TextLink href="/components/Columns">Columns</TextLink>.
            </Text>
          </List>
        </Stack>
      </TextStack>
    </TextStack>
  ),
};

export default page;
