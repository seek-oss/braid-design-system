#!/usr/bin/env tsx

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import glob from 'fast-glob';
import * as ts from 'typescript';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'src/lib/components');
const OUTPUT_DIR = path.resolve(process.cwd(), 'src/lib/stories');

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Generate CSF story file content from a screenshots file
 */
function generateCsfContent(componentName: string, fileName: string, content: string): string {
  // Parse the TypeScript file
  const sourceFile = ts.createSourceFile(fileName, content, ts.ScriptTarget.Latest, true);

  // Initialize result
  const componentImports: string[] = [];
  let screenshotWidths: number[] = [];
  let screenshotOnlyInWireframe = false;
  const examples: string[] = [];

  // Find the screenshots variable declaration
  const visitor = (node: ts.Node) => {
    // Get imports
    if (ts.isImportDeclaration(node)) {
      componentImports.push(node.getText());
    }

    // Find the screenshots object declaration
    if (ts.isVariableDeclaration(node) && node.name.getText() === 'screenshots') {
      const initializer = node.initializer;
      if (initializer && ts.isObjectLiteralExpression(initializer)) {
        // Extract properties from the screenshots object
        initializer.properties.forEach((prop) => {
          if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name)) {
            const propName = prop.name.getText();

            if (propName === 'screenshotWidths' && ts.isArrayLiteralExpression(prop.initializer)) {
              screenshotWidths = prop.initializer.elements
                .map((element) => Number(element.getText()))
                .filter((width) => !isNaN(width));
            } else if (propName === 'screenshotOnlyInWireframe') {
              screenshotOnlyInWireframe = prop.initializer.getText() === 'true';
            } else if (propName === 'examples' && ts.isArrayLiteralExpression(prop.initializer)) {
              // Extract each example object
              prop.initializer.elements.forEach((element, index) => {
                if (ts.isObjectLiteralExpression(element)) {
                  let label = '';
                  let exampleFunction = '';
                  let background = "'body'";
                  let gutter = 'true';
                  let container = '';

                  // Extract properties from each example object
                  element.properties.forEach((exampleProp) => {
                    if (ts.isPropertyAssignment(exampleProp) && ts.isIdentifier(exampleProp.name)) {
                      const examplePropName = exampleProp.name.getText();

                      if (examplePropName === 'label') {
                        label = exampleProp.initializer.getText();
                      } else if (examplePropName === 'Example') {
                        exampleFunction = exampleProp.initializer.getText();
                      } else if (examplePropName === 'background') {
                        background = exampleProp.initializer.getText();
                      } else if (examplePropName === 'gutter') {
                        gutter = exampleProp.initializer.getText();
                      } else if (examplePropName === 'Container') {
                        container = exampleProp.initializer.getText();
                      }
                    }
                  });

                  // Create story ID: based on label or index if no label
                  const storyId = label
                    ? label
                        .replace(/['"]/g, '')
                        .replace(/\s+/g, '')
                        .replace(/[^a-zA-Z0-9]/g, '')
                    : `Example${index + 1}`;

                  // Default label if not provided
                  const storyLabel = label || `Example ${index + 1}`;

                  // Build story export
                  const storyExport = `
export const ${storyId} = {
  name: ${storyLabel || `'${componentName} Example ${index + 1}'`},
  render: () => {
    const Example = ${exampleFunction};
    const Container = ${container || '({ children }) => <>{children}</>'}; 
    
    return (
      <div style={{ padding: 12 }}>
        <Box background=${background} style={${gutter} ? { padding: 12 } : undefined}>
          <Container>
            <Example id={'${storyId}'} handler={() => {}} />
          </Container>
        </Box>
      </div>
    );
  },
  parameters: {
    chromatic: {
      viewports: [${screenshotWidths.join(', ')}],
    },
    layout: 'fullscreen',
  },
};`;

                  examples.push(storyExport);
                }
              });
            }
          }
        });
      }
    }
  };

  // Traverse the AST
  ts.forEachChild(sourceFile, visitor);

  // Build the CSF file content
  return `${componentImports.join('\n')}
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    screenshotOnlyInWireframe: ${screenshotOnlyInWireframe},
  },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

${examples.join('\n\n')}
`;
}

async function main() {
  // Find all .screenshots.tsx files
  const screenshotFiles = await glob('**/*.screenshots.tsx', {
    cwd: COMPONENTS_DIR,
    absolute: true,
  });

  console.log(`Found ${screenshotFiles.length} screenshot files to convert`);

  // Process each file
  for (const file of screenshotFiles) {
    try {
      // Get component name from filename (e.g., "Card" from "Card.screenshots.tsx")
      const fileName = path.basename(file);
      const componentName = fileName.replace(/\.screenshots\.tsx$/, '');

      console.log(`Processing ${componentName}...`);

      // Read the file content
      const content = readFileSync(file, 'utf8');

      // Generate CSF content
      const csfContent = generateCsfContent(componentName, fileName, content);

      // Write to output directory
      const outputFile = path.join(OUTPUT_DIR, `${componentName}.stories.tsx`);
      writeFileSync(outputFile, csfContent, 'utf8');

      console.log(`✅ Generated ${outputFile}`);
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }

  console.log('\nConversion complete!');
  console.log(`\nNext steps:
1. Update .storybook/main.ts to point to the new stories directory
2. Update Storybook dependencies to v8 in package.json
3. Run Storybook to test the converted stories`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
