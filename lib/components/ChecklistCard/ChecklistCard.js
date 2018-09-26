import React from 'react';
import Card from '../Card/Card';
import Divider from '../Divider/Divider';

const ChecklistCard = ({ children, ...props }) => (
  <Card {...props}>
    {React.Children.map(children, (child, i) => (
      <React.Fragment>
        {i > 0 && <Divider />}
        {React.cloneElement(child, { variant: 'inChecklistCard' })}
      </React.Fragment>
    ))}
  </Card>
);

ChecklistCard.displayName = 'ChecklistCard';

export default ChecklistCard;
