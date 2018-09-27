import React from 'react';
import Card from '../Card/Card';
import Divider from '../Divider/Divider';
import Checkbox from '../Checkbox/Checkbox';

export default class ChecklistCard extends React.Component {
  static displayName = 'ChecklistCard';

  static propTypes = {
    children: (props, propName, componentName) => {
      let error;
      const prop = props[propName];

      React.Children.forEach(prop, function(child) {
        if (child.type.displayName !== Checkbox.displayName) {
          const type = child.type.displayName || child.type;

          error = new Error(
            `'${componentName}' only accepts children of type 'Checkbox', got type '${type}' instead.`
          );
        }
      });

      return error;
    }
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <Card {...props}>
        {React.Children.map(children, (child, i) => (
          <React.Fragment>
            {i > 0 && <Divider />}
            {React.cloneElement(child, { variant: 'inChecklistCard' })}
          </React.Fragment>
        ))}
      </Card>
    );
  }
}
