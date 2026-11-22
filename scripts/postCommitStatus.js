/* eslint-disable no-console */
import core from '@actions/core';
import { Octokit } from '@octokit/rest';

const writeSummary = async ({ title, link }) => {
  core.summary.addHeading(title, 3);
  core.summary.addLink(link, link);

  await core.summary.write();
};

try {
  console.log('Posting commit status to GitHub...');

  const { GITHUB_TOKEN, GITHUB_SHA, BASE_NAME } = process.env;

  if (!GITHUB_TOKEN || !GITHUB_SHA || !BASE_NAME) {
    throw new Error(
      'GITHUB_TOKEN, GITHUB_SHA & BASE_NAME environment variables must be present',
    );
  }

  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });

  const previewUrl = `https://seek-oss.github.io${BASE_NAME}`;

  await octokit.repos.createCommitStatus({
    owner: 'seek-oss',
    repo: 'braid-design-system',
    sha: GITHUB_SHA,
    state: 'success',
    context: 'Preview Site',
    target_url: previewUrl,
    description: 'The preview for this PR has been successfully deployed',
  });

  console.log('Successfully posted commit status to GitHub');

  await writeSummary({
    title: 'Preview published',
    link: previewUrl,
  });
} catch (err) {
  console.error(err);
  process.exit(1); // eslint-disable-line no-process-exit
}
