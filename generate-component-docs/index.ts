import fs from 'fs-extra';
import path from 'path';

import generate from './generate';

(async () => {
  const typeDocs = generate();

  await fs.writeFile(
    path.join(__dirname, './componentDocs.json'),
    JSON.stringify(typeDocs, null, 2),
    'utf8',
  );
})();
