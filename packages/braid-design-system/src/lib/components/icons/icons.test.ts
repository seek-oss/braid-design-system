import fs from 'fs/promises';
import path from 'path';

const svgComponentPaths: string[] = [];
for await (const file of fs.glob('Icon*/*Svg.tsx', { cwd: __dirname })) {
  svgComponentPaths.push(path.join(__dirname, file));
}

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
