import '../../../reset';

import { hydrate } from 'react-dom';

import apac from '../../../themes/apac';
import { BraidProvider, Box } from '../../../lib/components';

export default () => {
  hydrate(
    <BraidProvider theme={apac}>
      <Box />
    </BraidProvider>,
    document.getElementById('app'),
  );
};
