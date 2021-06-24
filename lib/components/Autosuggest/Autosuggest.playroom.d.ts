import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { AutosuggestProps } from './Autosuggest';
declare type PlayroomAutosuggestProps<Value> = StateProp & Optional<AutosuggestProps<Value>, 'id' | 'value' | 'onChange'>;
export declare function Autosuggest<Value>({ id, stateName, value, onChange, onClear, ...restProps }: PlayroomAutosuggestProps<Value>): JSX.Element;
export {};
