import globby from 'globby';
import path from 'path';
import fs from 'fs';

const svgComponentPaths = globby.sync('Icon*/*Svg.tsx', {
  cwd: __dirname,
  absolute: true,
});

svgComponentPaths.forEach(svgComponentPath => {
  const componentName = path.basename(svgComponentPath, '.tsx');

  describe(componentName, () => {
    it('should match snapshot', () => {
      const source = fs.readFileSync(svgComponentPath, 'utf-8');
      expect(source).toMatchSnapshot();
    });
  });
});
