import { mapResponsiveValue } from '../atoms/sprinkles.css';
var alignToFlexAlignLookup = {
  left: 'flexStart',
  center: 'center',
  right: 'flexEnd'
};
export var alignToFlexAlign = function alignToFlexAlign(align) {
  return align ? mapResponsiveValue(align, function (value) {
    return alignToFlexAlignLookup[value];
  }) : undefined;
};
var alignYToFlexAlignLookup = {
  top: 'flexStart',
  center: 'center',
  bottom: 'flexEnd'
};
export var alignYToFlexAlign = function alignYToFlexAlign(alignY) {
  return alignY ? mapResponsiveValue(alignY, function (value) {
    return alignYToFlexAlignLookup[value];
  }) : undefined;
};