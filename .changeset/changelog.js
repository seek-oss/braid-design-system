// Slightly modified version of
// https://github.com/atlassian/changesets/blob/master/packages/changelog-github/src/index.ts
// changing the release line formatting
const { getInfo } = require('@changesets/get-github-info');

const repo = 'seek-oss/braid-design-system';

const changelogFunctions = {
  getDependencyReleaseLine: async (changesets, dependenciesUpdated) => {
    if (dependenciesUpdated.length === 0) return '';

    const changesetLink = `- Updated dependencies [${(
      await Promise.all(
        changesets.map(async (cs) => {
          if (cs.commit) {
            let { links } = await getInfo({
              repo,
              commit: cs.commit,
            });
            return links.commit;
          }
        }),
      )
    )
      .filter((_) => _)
      .join(', ')}]:`;

    const updatedDepenenciesList = dependenciesUpdated.map(
      (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
    );

    return [changesetLink, ...updatedDepenenciesList].join('\n');
  },
  getReleaseLine: async (changeset) => {
    const [firstLine, ...futureLines] = changeset.summary
      .split('\n')
      .map((l) => l.trimRight());

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
