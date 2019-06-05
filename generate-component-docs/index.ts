import fs from 'fs';
import path from 'path';

import generate from './generate';

const typeDocs = generate();

fs.writeFileSync(
  path.join(__dirname, '../lib/componentDocs/componentDocs.json'),
  JSON.stringify(typeDocs, null, 2),
  'utf8',
);
