import fs from 'node:fs/promises';
import path from 'path';

import generate from './generate.ts';

const typeDocs = generate();

await fs.writeFile(
  path.join(process.cwd(), './componentDocs.json'),
  JSON.stringify(typeDocs, null, 2),
  'utf8',
);
