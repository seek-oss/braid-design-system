import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Link } from 'react-router-dom';
import { ButtonRenderer } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Button with Custom Renderer',
      Container,
      Example: () => (
        <ButtonRenderer>
          {(ButtonChildren, buttonProps) => (
            <Link to="#" {...buttonProps}>
              <ButtonChildren>Link button</ButtonChildren>
            </Link>
          )}
        </ButtonRenderer>
      ),
    },
  ],
};
