import fs from 'fs/promises';
import path from 'path';

await fs.copyFile(
  path.join(import.meta.dirname, '../README.md'),
  'packages/braid-design-system/README.md',
);
