/* eslint-disable no-console */
(async () => {
  try {
    console.log('Posting commit status to GitHub...');

    const { GH_TOKEN, TRAVIS_PULL_REQUEST_SHA } = process.env;

    if (!GH_TOKEN || !TRAVIS_PULL_REQUEST_SHA) {
      throw new Error(
        'GH_TOKEN and TRAVIS_PULL_REQUEST_SHA environment variables must be present',
      );
    }

    const octokit = require('@octokit/rest')();

    octokit.authenticate({
      type: 'token',
      token: GH_TOKEN,
    });

    await octokit.repos.createStatus({
      owner: 'seek-oss',
      repo: 'braid-design-system',
      sha: TRAVIS_PULL_REQUEST_SHA,
      state: 'success',
      context: 'Preview Site',
      target_url: `https://braid-design-system--${TRAVIS_PULL_REQUEST_SHA}.surge.sh`,
      description: 'The preview for this PR has been successfully deployed',
    });

    console.log('Successfully posted commit status to GitHub');
  } catch (err) {
    console.error(err);
    process.exit(1); // eslint-disable-line no-process-exit
  }
})();
