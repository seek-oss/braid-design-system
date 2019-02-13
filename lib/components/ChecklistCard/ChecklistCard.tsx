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
        {React.Children.map(children, (child, i) => {
          if (typeof child !== 'object') {
            return null;
          }

          const checkboxChild = child as ReactElement<CheckboxProps>;

          return (
            <Fragment>
              {i > 0 && checkboxChild.props.tone !== 'critical' ? (
                <Divider />
              ) : null}
              {React.cloneElement(child, {
                variant: 'inChecklistCard'
              })}
            </Fragment>
          );
        })}
      </Card>
    );
  }
}
