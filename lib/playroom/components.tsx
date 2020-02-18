import React from 'react';
import { useTheme } from 'sku/react-treat';
import '../reset';
import { default as ToastComponent } from '../components/useToast/Toast';
export * from '../components';

export { Autosuggest } from '../components/Autosuggest/Autosuggest.playroom';
export { Checkbox } from '../components/Checkbox/Checkbox.playroom';
export { Dropdown } from '../components/Dropdown/Dropdown.playroom';
export { FieldLabel } from '../components/FieldLabel/FieldLabel.playroom';
export { FieldMessage } from '../components/FieldMessage/FieldMessage.playroom';
export { MonthPicker } from '../components/MonthPicker/MonthPicker.playroom';
export { Radio } from '../components/Radio/Radio.playroom';
export { Textarea } from '../components/Textarea/Textarea.playroom';
export { TextField } from '../components/TextField/TextField.playroom';
export { TextLink } from '../components/TextLink/TextLink.playroom';
export { Toggle } from '../components/Toggle/Toggle.playroom';

export { Placeholder } from '../components/private/Placeholder/Placeholder';

// @ts-ignore
export const Toast = props => {
  const treatTheme = useTheme();

  return <ToastComponent treatTheme={treatTheme} {...props} />;
};
