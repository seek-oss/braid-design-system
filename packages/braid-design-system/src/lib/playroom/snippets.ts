import { snippets as Accordion } from './snippets/Accordion';
import { snippets as Actions } from './snippets/Actions';
import { snippets as Alert } from './snippets/Alert';
import { snippets as Autosuggest } from './snippets/Autosuggest';
import { snippets as Badge } from './snippets/Badge';
import { snippets as Bleed } from './snippets/Bleed';
import { snippets as Button } from './snippets/Button';
import { snippets as ButtonIcon } from './snippets/ButtonIcon';
import { snippets as Card } from './snippets/Card';
import { snippets as Checkbox } from './snippets/Checkbox';
import { snippets as Columns } from './snippets/Columns';
import { snippets as ContentBlock } from './snippets/ContentBlock';
import { snippets as Dialog } from './snippets/Dialog';
import { snippets as Disclosure } from './snippets/Disclosure';
import { snippets as Divider } from './snippets/Divider';
import { snippets as Drawer } from './snippets/Drawer';
import { snippets as Dropdown } from './snippets/Dropdown';
import { snippets as FieldLabel } from './snippets/FieldLabel';
import { snippets as FieldMessage } from './snippets/FieldMessage';
import { snippets as Heading } from './snippets/Heading';
import { snippets as Inline } from './snippets/Inline';
import { snippets as List } from './snippets/List';
import { snippets as Loader } from './snippets/Loader';
import { snippets as MenuRenderer } from './snippets/MenuRenderer';
import { snippets as MonthPicker } from './snippets/MonthPicker';
import { snippets as Notice } from './snippets/Notice';
import { snippets as OverflowMenu } from './snippets/OverflowMenu';
import { snippets as Page } from './snippets/Page';
import { snippets as PageBlock } from './snippets/PageBlock';
import { snippets as Pagination } from './snippets/Pagination';
import { snippets as PasswordField } from './snippets/PasswordField';
import { snippets as RadioGroup } from './snippets/RadioGroup';
import { snippets as Rating } from './snippets/Rating';
import { snippets as Secondary } from './snippets/Secondary';
import { snippets as Spread } from './snippets/Spread';
import { snippets as Stack } from './snippets/Stack';
import { snippets as Stepper } from './snippets/Stepper';
import { snippets as Strong } from './snippets/Strong';
import { snippets as Table } from './snippets/Table';
import { snippets as Tabs } from './snippets/Tabs';
import { snippets as Tag } from './snippets/Tag';
import { snippets as Text } from './snippets/Text';
import { snippets as TextDropdown } from './snippets/TextDropdown';
import { snippets as TextField } from './snippets/TextField';
import { snippets as TextLink } from './snippets/TextLink';
import { snippets as Textarea } from './snippets/Textarea';
import { snippets as Tiles } from './snippets/Tiles';
import { snippets as Toggle } from './snippets/Toggle';
import { snippets as TooltipRenderer } from './snippets/TooltipRenderer';

export default Object.entries({
  Accordion,
  Actions,
  Alert,
  Autosuggest,
  Badge,
  Bleed,
  Button,
  ButtonIcon,
  Card,
  Checkbox,
  Columns,
  ContentBlock,
  Dialog,
  Disclosure,
  Divider,
  Drawer,
  Dropdown,
  FieldLabel,
  FieldMessage,
  Heading,
  Inline,
  List,
  Loader,
  MenuRenderer,
  MonthPicker,
  Notice,
  OverflowMenu,
  Page,
  PageBlock,
  Pagination,
  PasswordField,
  RadioGroup,
  Rating,
  Secondary,
  Spread,
  Stack,
  Stepper,
  Strong,
  Table,
  Tabs,
  Tag,
  Text,
  TextDropdown,
  TextField,
  TextLink,
  Textarea,
  Tiles,
  Toggle,
  TooltipRenderer,
})
  .map(([name, snippets]) =>
    snippets.map((snippet) => ({
      ...snippet,
      name: 'name' in snippet ? snippet.name : name,
    })),
  )
  .flat();
