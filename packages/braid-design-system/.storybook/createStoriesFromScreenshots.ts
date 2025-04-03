// src/lib/storybook/createStoriesFromScreenshots.ts
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentScreenshot } from 'site/types';
import { Box } from '../components/Box/Box';

interface CreateStoriesOptions {
  component: React.ComponentType<any>;
  title: string;
}

type StoryCollection = Record<string, StoryObj>;

export const createStoriesFromScreenshots = <T extends React.ComponentType<any>>(
  options: CreateStoriesOptions,
  screenshots: ComponentScreenshot
): Meta<React.ComponentProps<T>> & { stories: StoryCollection } => {
  const { component, title } = options;
  const DefaultContainer = ({ children }: { children: React.ReactNode }) => <>{children}</>;

  const createStory = (example: ComponentScreenshot['examples'][number]): StoryObj => {
    const {
      label,
      Container = DefaultContainer,
      background = 'body',
      gutter = true,
      Example,
    } = example;

    if (!Example) {
      throw new Error(`Example is required for story ${label}`);
    }

    return {
      name: label,
      render: () => (
        <div style={{ minHeight: 300, paddingBottom: 32, overflow: 'hidden' }}>
          <div
            style={{
              margin: 0,
              marginBottom: 18,
              padding: 0,
              fontSize: 14,
              fontFamily: 'arial',
              color: '#ccc',
            }}
          >
            {label}
          </div>
          <Box background={background} style={gutter ? { padding: 12 } : undefined}>
            <Container>
              <Example id={`id-${Math.random()}`} handler={() => {}} />
            </Container>
          </Box>
          <div style={{ paddingTop: 18 }}>
            <hr
              style={{
                margin: 0,
                border: 0,
                height: 1,
                background: '#eee',
              }}
            />
          </div>
        </div>
      ),
      parameters: {
        chromatic: {
          viewports: screenshots.screenshotWidths,
        },
        layout: 'fullscreen',
      },
    };
  };

  const stories: StoryCollection = {};

  screenshots.examples.forEach((example) => {
    const storyKey = (example.label || 'Default')
      .replace(/\s+/g, '')
      .replace(/[^a-zA-Z0-9]/g, '');
    
    stories[storyKey] = createStory(example);
  });

  return {
    component,
    title,
    stories,
  };
};
