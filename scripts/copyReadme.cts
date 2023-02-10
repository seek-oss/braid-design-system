import fs from 'fs/promises';
import path from 'path';

(async () => {
  await fs.copyFile(
    path.join(__dirname, '../README.md'),
    'packages/braid-design-system/README.md',
  );
})();
