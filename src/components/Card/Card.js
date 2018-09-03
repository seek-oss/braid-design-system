import React from 'react';
import Box from '../Box/Box';

const Card = props => (
  <Box backgroundColor="card" marginBottom="medium" {...props} />
);

Card.displayName = 'Card';

export default Card;
