import fs from 'fs';
import path from 'path';

import generate from './generate';

const typeDocs = generate();

fs.writeFileSync(
  path.join(__dirname, './componentDocs.json'),
  JSON.stringify(typeDocs, null, 2),
  'utf8',
);
