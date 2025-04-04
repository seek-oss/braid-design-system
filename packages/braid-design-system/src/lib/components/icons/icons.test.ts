import path from 'path';

import glob from 'fast-glob';
import fs from 'fs-extra';

const svgComponentPaths = glob.sync('Icon*/*Svg.tsx', {
  cwd: __dirname,
  absolute: true,
});

svgComponentPaths.forEach((svgComponentPath) => {
  const componentName = path.basename(svgComponentPath, '.tsx');

  // eslint-disable-next-line jest/valid-title
  describe(componentName, () => {
    it('should match snapshot', async () => {
      const source = await fs.readFile(svgComponentPath, 'utf-8');
      expect(source).toMatchSnapshot();
    });
  });
});
