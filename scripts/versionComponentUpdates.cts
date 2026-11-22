import fs from 'fs/promises';

import glob from 'fast-glob';

// eslint-disable-next-line import-x/no-relative-packages
import { version } from '../packages/braid-design-system/package.json';

const readJson = async (filePath: string) =>
  JSON.parse(await fs.readFile(filePath, 'utf-8'));

(async () => {
  const componentUpdateFiles = await glob('.changeset/*-data.json', {
    absolute: true,
  });

  const updates = [];

  for (const updateFile of componentUpdateFiles) {
    const update = await readJson(updateFile);

    updates.push(update);

    await fs.rm(updateFile, { force: true });
  }

  const componentUpdatesFile =
    require.resolve('../site/src/componentUpdates.json');

  const existingComponentUpdates = await readJson(componentUpdatesFile);

  existingComponentUpdates.push({ version, updates });

  await fs.writeFile(
    componentUpdatesFile,
    `${JSON.stringify(existingComponentUpdates, null, 2)}\n`,
  );
})();
