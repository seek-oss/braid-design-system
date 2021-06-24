import _defineProperty from '@babel/runtime/helpers/defineProperty';
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/Tiles/Tiles.css.ts',
  'braid-design-system',
);

import { styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
const columnsWidths = {
  1: '100%',
  2: ''.concat(100 / 2, '%'),
  3: ''.concat(100 / 3, '%'),
  4: ''.concat(100 / 4, '%'),
  5: ''.concat(100 / 5, '%'),
  6: ''.concat(100 / 6, '%'),
};

const makeColumnsAtoms = function makeColumnsAtoms(breakpoint) {
  return styleVariants(
    columnsWidths,
    function (width) {
      return responsiveStyle(
        _defineProperty({}, breakpoint, {
          flex: '0 0 '.concat(width),
        }),
      );
    },
    'columns_'.concat(breakpoint),
  );
};

export var columnsMobile = makeColumnsAtoms('mobile');
export var columnsTablet = makeColumnsAtoms('tablet');
export var columnsDesktop = makeColumnsAtoms('desktop');

__vanilla_filescope__.endFileScope();
