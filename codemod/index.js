#!/usr/bin/env node
/* eslint-disable no-console */

const glob = require('fast-glob');
const workerpool = require('workerpool');
const cliProgress = require('cli-progress');
const chalk = require('chalk');

const pathGlob = process.argv[2];

const paths = glob.sync(pathGlob, { ignore: ['**/node_modules/**', '*.d.ts'] });

const progress = new cliProgress.SingleBar(
  {
    format: '[{bar}] {value}/{total}',
    hideCursor: true,
    barCompleteChar: '■',
    barIncompleteChar: '-',
  },
  cliProgress.Presets.shades_classic,
).on('SIGINT', () => {
  progress.stop();
  process.exitCode = 1;
});

progress.start(paths.length, 0);

const pool = workerpool.pool(`${__dirname}/wrapper.js`);

const jobs = [];

for (const filepath of paths) {
  jobs.push(
    pool
      .exec('codemod', [filepath])
      .then((result) => {
        progress.increment();
        return result;
      })
      .catch((err) => {
        console.error(err);
      }),
  );
}

Promise.all(jobs)
  .then((results) => {
    progress.stop();
    let errored = false;

    for (const result of results) {
      errored = errored || !Boolean(result);

      if (result && result.warnings.length > 0) {
        console.log(result.filepath);
        result.warnings.forEach((warning) => console.log(warning));
      }
    }

    const updateCount = results.filter(({ updated } = {}) => updated).length;
    const warningCount = results.filter(
      ({ warnings } = {}) => (warnings || []).length > 0,
    ).length;

    if (warningCount > 0) {
      console.warn(
        chalk.yellow(
          `${warningCount} file${warningCount !== 1 ? 's' : ''} contained ${
            warningCount === 1 ? 'a warning' : 'warnings'
          } (see above).`,
        ),
      );
    }
    if (updateCount > 0) {
      console.log(
        chalk.green(
          `${updateCount} file${
            updateCount !== 1 ? 's' : ''
          } updated successfully.`,
        ),
      );
    }

    if (errored) {
      console.error(chalk.red('Something went wrong :('));
    } else if (warningCount === 0 && updateCount === 0) {
      console.log(chalk.green("You're up to date!"));
    }
  })
  .finally(() => {
    pool.terminate();
  });
