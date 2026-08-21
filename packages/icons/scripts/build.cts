import path from 'path';

import { load } from 'cheerio';
import glob from 'fast-glob';
import fs from 'fs-extra';
// @ts-expect-error svgo@3 has types
import { optimize } from 'svgo';

const packageDir = path.join(__dirname, '..');
const sourceDir = path.join(packageDir, 'source');
const distDir = path.join(packageDir, 'dist');

const validColors = ['currentColor', 'none', '#000'];

const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false,
      },
    },
    { name: 'convertStyleToAttrs' },
  ],
};

const optimiseSvg = (rawSvg: string, fileName: string) => {
  const svg = rawSvg.replace(/ data-name=".*?"/g, '');
  const optimisedSvg = optimize(svg, svgoConfig).data;

  const $ = load(optimisedSvg);
  $('svg *').each((_i, el) => {
    const $el = $(el);

    ['stroke', 'fill'].forEach((attr) => {
      const color = $el.attr(attr);
      if (color && !validColors.includes(color)) {
        throw new Error(`${fileName}: Invalid ${attr} color: ${$.html(el)}`);
      }
    });
  });

  return optimisedSvg;
};

(async () => {
  const svgFilePaths = await glob('*.svg', { cwd: sourceDir, absolute: true });

  await fs.emptyDir(distDir);

  await Promise.all(
    svgFilePaths.map(async (svgFilePath) => {
      const fileName = path.basename(svgFilePath);
      const rawSvg = await fs.readFile(svgFilePath, 'utf-8');
      const optimisedSvg = optimiseSvg(rawSvg, fileName);

      await fs.writeFile(
        path.join(distDir, fileName),
        `${optimisedSvg}\n`,
        'utf-8',
      );
    }),
  );
})();
