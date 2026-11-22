import fs from 'fs/promises';
import path from 'path';

const readJson = async (filePath: string) =>
  JSON.parse(await fs.readFile(filePath, 'utf-8'));

const { version } = await readJson(
  path.join(
    import.meta.dirname,
    '../packages/braid-design-system/package.json',
  ),
);

const updates = [];

for await (const updateFile of fs.glob('.changeset/*-data.json')) {
  const update = await readJson(updateFile);

  updates.push(update);

  await fs.rm(updateFile, { force: true });
}

const componentUpdatesFile = path.join(
  import.meta.dirname,
  '../site/src/componentUpdates.json',
);

const existingComponentUpdates = await readJson(componentUpdatesFile);

existingComponentUpdates.push({ version, updates });

await fs.writeFile(
  componentUpdatesFile,
  `${JSON.stringify(existingComponentUpdates, null, 2)}\n`,
);
