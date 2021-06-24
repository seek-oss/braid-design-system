import { ClassValue } from 'clsx';
import React from 'react';
import { LinkComponentProps } from '../BraidProvider/BraidProvider';
export declare type LinkProps = Omit<LinkComponentProps, 'className'> & {
  className?: ClassValue;
};
export declare const Link: React.ForwardRefExoticComponent<
  Omit<LinkComponentProps, 'className'> & {
    className?: ClassValue;
  } & React.RefAttributes<HTMLAnchorElement>
>;
