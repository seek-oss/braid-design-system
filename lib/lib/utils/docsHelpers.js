import { responsiveProperties } from '../atoms/atomicProperties';
import { vars } from '../themes/vars.css';
export var backgrounds = Object.keys(vars.backgroundColor).sort();
export var textAlignments = responsiveProperties.textAlign;
export var spaces = Object.keys(responsiveProperties.paddingTop).filter(function (space) {
  return space !== 'none';
});