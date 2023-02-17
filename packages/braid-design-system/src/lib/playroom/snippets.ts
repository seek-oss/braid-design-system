import { snippets as snippets$Accordion } from './snippets/Accordion';
import { snippets as snippets$Actions } from './snippets/Actions';
import { snippets as snippets$Alert } from './snippets/Alert';
import { snippets as snippets$Autosuggest } from './snippets/Autosuggest';
import { snippets as snippets$Badge } from './snippets/Badge';
import { snippets as snippets$Bleed } from './snippets/Bleed';
import { snippets as snippets$Button } from './snippets/Button';
import { snippets as snippets$ButtonIcon } from './snippets/ButtonIcon';
import { snippets as snippets$Card } from './snippets/Card';
import { snippets as snippets$Checkbox } from './snippets/Checkbox';
import { snippets as snippets$Columns } from './snippets/Columns';
import { snippets as snippets$ContentBlock } from './snippets/ContentBlock';
import { snippets as snippets$Dialog } from './snippets/Dialog';
import { snippets as snippets$Disclosure } from './snippets/Disclosure';
import { snippets as snippets$Divider } from './snippets/Divider';
import { snippets as snippets$Drawer } from './snippets/Drawer';
import { snippets as snippets$Dropdown } from './snippets/Dropdown';
import { snippets as snippets$FieldLabel } from './snippets/FieldLabel';
import { snippets as snippets$FieldMessage } from './snippets/FieldMessage';
import { snippets as snippets$Heading } from './snippets/Heading';
import { snippets as snippets$Inline } from './snippets/Inline';
import { snippets as snippets$List } from './snippets/List';
import { snippets as snippets$Loader } from './snippets/Loader';
import { snippets as snippets$MonthPicker } from './snippets/MonthPicker';
import { snippets as snippets$Notice } from './snippets/Notice';
import { snippets as snippets$OverflowMenu } from './snippets/OverflowMenu';
import { snippets as snippets$Pagination } from './snippets/Pagination';
import { snippets as snippets$PasswordField } from './snippets/PasswordField';
import { snippets as snippets$RadioGroup } from './snippets/RadioGroup';
import { snippets as snippets$Rating } from './snippets/Rating';
import { snippets as snippets$Secondary } from './snippets/Secondary';
import { snippets as snippets$Stack } from './snippets/Stack';
import { snippets as snippets$Stepper } from './snippets/Stepper';
import { snippets as snippets$Strong } from './snippets/Strong';
import { snippets as snippets$Tabs } from './snippets/Tabs';
import { snippets as snippets$Tag } from './snippets/Tag';
import { snippets as snippets$Text } from './snippets/Text';
import { snippets as snippets$TextDropdown } from './snippets/TextDropdown';
import { snippets as snippets$TextField } from './snippets/TextField';
import { snippets as snippets$TextLink } from './snippets/TextLink';
import { snippets as snippets$Textarea } from './snippets/Textarea';
import { snippets as snippets$Tiles } from './snippets/Tiles';
import { snippets as snippets$Toggle } from './snippets/Toggle';
import { snippets as snippets$TooltipRenderer } from './snippets/TooltipRenderer';

export default [
  { snippets: snippets$Accordion, group: 'Accordion' },
  { snippets: snippets$Actions, group: 'Actions' },
  { snippets: snippets$Alert, group: 'Alert' },
  { snippets: snippets$Autosuggest, group: 'Autosuggest' },
  { snippets: snippets$Badge, group: 'Badge' },
  { snippets: snippets$Bleed, group: 'Bleed' },
  { snippets: snippets$Button, group: 'Button' },
  { snippets: snippets$ButtonIcon, group: 'ButtonIcon' },
  { snippets: snippets$Card, group: 'Card' },
  { snippets: snippets$Checkbox, group: 'Checkbox' },
  { snippets: snippets$Columns, group: 'Columns' },
  { snippets: snippets$ContentBlock, group: 'ContentBlock' },
  { snippets: snippets$Dialog, group: 'Dialog' },
  { snippets: snippets$Disclosure, group: 'Disclosure' },
  { snippets: snippets$Divider, group: 'Divider' },
  { snippets: snippets$Drawer, group: 'Drawer' },
  { snippets: snippets$Dropdown, group: 'Dropdown' },
  { snippets: snippets$FieldLabel, group: 'FieldLabel' },
  { snippets: snippets$FieldMessage, group: 'FieldMessage' },
  { snippets: snippets$Heading, group: 'Heading' },
  { snippets: snippets$Inline, group: 'Inline' },
  { snippets: snippets$List, group: 'List' },
  { snippets: snippets$Loader, group: 'Loader' },
  { snippets: snippets$MonthPicker, group: 'MonthPicker' },
  { snippets: snippets$Notice, group: 'Notice' },
  { snippets: snippets$OverflowMenu, group: 'OverflowMenu' },
  { snippets: snippets$Pagination, group: 'Pagination' },
  { snippets: snippets$PasswordField, group: 'PasswordField' },
  { snippets: snippets$RadioGroup, group: 'RadioGroup' },
  { snippets: snippets$Rating, group: 'Rating' },
  { snippets: snippets$Secondary, group: 'Secondary' },
  { snippets: snippets$Stack, group: 'Stack' },
  { snippets: snippets$Stepper, group: 'Stepper' },
  { snippets: snippets$Strong, group: 'Strong' },
  { snippets: snippets$Tabs, group: 'Tabs' },
  { snippets: snippets$Tag, group: 'Tag' },
  { snippets: snippets$Text, group: 'Text' },
  { snippets: snippets$TextDropdown, group: 'TextDropdown' },
  { snippets: snippets$TextField, group: 'TextField' },
  { snippets: snippets$TextLink, group: 'TextLink' },
  { snippets: snippets$Textarea, group: 'Textarea' },
  { snippets: snippets$Tiles, group: 'Tiles' },
  { snippets: snippets$Toggle, group: 'Toggle' },
  { snippets: snippets$TooltipRenderer, group: 'TooltipRenderer' },
]
  .map(({ snippets, group }) =>
    snippets.map((snippet) => ({
      ...snippet,
      group,
    })),
  )
  .flat();
