// Modified version of
// https://github.com/atlassian/changesets/blob/master/packages/changelog-github/src/index.ts
// changing the release line formatting
import path from 'path';
import { fileURLToPath } from 'url';

import { getCommitInfo } from '@changesets/get-github-info';
import fs from 'fs-extra';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const repo = 'seek-oss/braid-design-system';

interface ChangesetMeta {
  new?: Record<string, string>;
  updated?: Record<string, string>;
}

const parseSummary = (summary: string) => {
  const mdRegex = /\s*---([^]*?)\n\s*---\n([^]*)/;

  const execResult = mdRegex.exec(summary);
  if (!execResult) {
    return {
      summary: summary.trim(),
    };
  }

  const [, frontmatter, roughSummary] = execResult;

  const data = yaml.load(frontmatter) as ChangesetMeta;

  return {
    summary: roughSummary.trim(),
    data,
  };
};

interface Changeset {
  id: string;
  commit?: string;
  summary: string;
}

const changelogFunctions = {
  getDependencyReleaseLine: async () => '',
  getReleaseLine: async (changeset: Changeset) => {
    const { data, summary } = parseSummary(changeset.summary);

    const [firstLine, ...futureLines] = summary
      .split('\n')
      .map((l) => l.trimEnd());

    if (data) {
      for (const key of Object.keys(data)) {
        if (!['new', 'updated'].includes(key)) {
          throw new Error(
            `${changeset}: Incorrect update meta data. Unknown key: ${key}`,
          );
        }
      }

      await fs.writeJSON(path.join(__dirname, `${changeset.id}-data.json`), {
        ...data,
        summary,
      });
    }

    if (changeset.commit) {
      const commitInfo = await getCommitInfo({
        repo,
        commit: changeset.commit,
      });

      const versionInfo = commitInfo?.pull?.markdownLink ?? changeset.commit;

      return `- ${firstLine} (${versionInfo})\n${futureLines
        .map((l) => `  ${l}`)
        .join('\n')}`;
    }
    return `\n\n- ${firstLine}\n${futureLines.map((l) => `  ${l}`).join('\n')}`;
  },
};

export default changelogFunctions;
