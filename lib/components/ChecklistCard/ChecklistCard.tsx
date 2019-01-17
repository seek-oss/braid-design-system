import React, { Component, Fragment, ReactElement } from 'react';
import Card, { CardProps } from '../Card/Card';
import Divider from '../Divider/Divider';
import { CheckboxProps } from '../Checkbox/Checkbox';
import { RadioProps } from '../Radio/Radio';

export interface ChecklistCardProps extends CardProps {
  children:
    | Array<ReactElement<CheckboxProps>>
    | Array<ReactElement<RadioProps>>
    | ReactElement<CheckboxProps>
    | ReactElement<RadioProps>;
}

export default class ChecklistCard extends Component<ChecklistCardProps> {
  static displayName = 'ChecklistCard';

  render() {
    const { children, ...restProps } = this.props;
    return (
      <Card {...restProps}>
        {React.Children.map(children, (child, i) => (
          <Fragment>
            {i > 0 && <Divider />}
            {React.cloneElement(child as ReactElement<CheckboxProps>, {
              variant: 'inChecklistCard'
            })}
          </Fragment>
        ))}
      </Card>
    );
  }
}
