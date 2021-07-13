// Modified version of
// https://github.com/atlassian/changesets/blob/master/packages/changelog-github/src/index.ts
// changing the release line formatting
const { getInfo } = require('@changesets/get-github-info');
const yaml = require('js-yaml');
const fs = require('fs-extra');
const path = require('path');

const repo = 'seek-oss/braid-design-system';

const parseSummary = (summary) => {
  const mdRegex = /\s*---([^]*?)\n\s*---\n([^]*)/;

  const execResult = mdRegex.exec(summary);
  if (!execResult) {
    // No frontmatter found
    return {
      summary: summary.trim(),
    };
  }

  const [, frontmatter, roughSummary] = execResult;

  const data = yaml.load(frontmatter);

  return {
    summary: roughSummary.trim(),
    data,
  };
};

const changelogFunctions = {
  getDependencyReleaseLine: async () => {
    // Not implemented as Braid is not a monorepo
    return '';
  },
  getReleaseLine: async (changeset) => {
    const { data, summary } = parseSummary(changeset.summary);

    const [firstLine, ...futureLines] = summary
      .split('\n')
      .map((l) => l.trimRight());

    if (data) {
      for (const key of Object.keys(data)) {
        if (!['new', 'updated'].includes(key)) {
          throw new Error(
            `${changeset}: Incorect update meta data. Unknown key: ${key}`,
          );
        }
      }

      await fs.writeJSON(path.join(__dirname, `${changeset.id}-data.json`), {
        ...data,
        summary,
      });
    }

    if (changeset.commit) {
      let { links } = await getInfo({
        repo,
        commit: changeset.commit,
      });

      const versionInfo = links.pull === null ? changeset.commit : links.pull;

      const summary = `- ${firstLine} (${versionInfo})`;

      return `${summary}\n${futureLines.map((l) => `  ${l}`).join('\n')}`;
    } else {
      return `\n\n- ${firstLine}\n${futureLines
        .map((l) => `  ${l}`)
        .join('\n')}`;
    }
  },
};

module.exports = changelogFunctions;
