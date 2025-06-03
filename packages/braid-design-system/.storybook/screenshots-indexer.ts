/**
 * Custom indexer for Storybook to recognize `.screenshots.tsx` files as stories
 */
export default {
  // Define the file pattern to match
  test: /\.screenshots\.(tsx|ts|jsx|js)$/,

  // Define how to extract the stories
  indexer: (fileName, { makeTitle }) =>
    // Return entry metadata for the story file
    ({
      type: 'auto',

      // Use the file path to create a title
      title: makeTitle(fileName),

      // Import the story file
      importPath: fileName,
    }),
};
