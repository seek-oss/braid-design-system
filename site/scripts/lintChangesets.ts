/* eslint-disable no-console */
import { glob, readFile } from 'fs/promises';
import { resolve } from 'path';
import { styleText } from 'util';

import { supportedLanguages } from '../src/App/Code/supportedLanguages.ts';

const braidChangesetRegex =
  /^---\n'braid-design-system': (?:patch|minor|major)\n---$/m;

const markdownCodeBlockLanguageRegex = /``` *(?<language>[a-z]+)\n/g;

const info = (s: string) => styleText('blue', s);
const critical = (s: string) => styleText('red', s);

const repoRoot = resolve(import.meta.dirname, '../../');

const errorMessages: string[] = [];

for await (const entry of glob('.changeset/!(README).md', {
  cwd: repoRoot,
})) {
  console.log(`Checking changeset: ${info(entry)}`);

  const content = await readFile(resolve(repoRoot, entry), 'utf-8');

  const isBraidChangeset = braidChangesetRegex.test(content);
  if (!isBraidChangeset) {
    console.log(`Skipping changeset: ${info(entry)} (not a Braid changeset)`);
    continue;
  }

  const matches = content.matchAll(markdownCodeBlockLanguageRegex);

  for (const match of matches) {
    const language = match.groups?.language;
    // We should always have a language, this is just a type guard
    if (!language) {
      continue;
    }

    const isValidLanguage = (supportedLanguages as readonly string[]).includes(
      language,
    );
    if (!isValidLanguage) {
      const errorMessage = `${critical(entry)}: Unsupported code block language \`${critical(language)}\` in ${info(entry)}. Please configure the syntax highlighter inside the \`Code\` component to support this language.`;
      errorMessages.push(errorMessage);
    }
  }
}

if (errorMessages.length > 0) {
  for (const errorMessage of errorMessages) {
    console.error(errorMessage);
  }

  // eslint-disable-next-line no-process-exit
  process.exit(1);
}
