import path from 'path';

import fs from 'fs-extra';

import generate from './generate';

(async () => {
  const typeDocs = generate();

  await fs.writeFile(
    path.join(process.cwd(), './componentDocs.json'),
    JSON.stringify(typeDocs, null, 2),
    'utf8',
  );
})();
