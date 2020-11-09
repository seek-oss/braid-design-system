import fs from 'fs-extra';
import glob from 'fast-glob';

import { version } from '../package.json';

(async () => {
  const componentUpdateFiles = await glob('.changeset/*-data.json', {
    absolute: true,
  });

  const updates = [];

  for (const updateFile of componentUpdateFiles) {
    const update = await fs.readJSON(updateFile);

    updates.push(update);

    await fs.remove(updateFile);
  }

  const componentUpdatesFile = require.resolve(
    '../site/src/componentUpdates.json',
  );

  const existingComponentUpdates = await fs.readJSON(componentUpdatesFile);

  existingComponentUpdates.push({ version, updates });

  await fs.writeJSON(componentUpdatesFile, existingComponentUpdates, {
    spaces: 2,
  });
})();
