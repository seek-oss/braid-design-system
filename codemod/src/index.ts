#!/usr/bin/env node

/* eslint-disable no-console */

import glob from 'fast-glob';
import workerpool from 'workerpool';
import cliProgress from 'cli-progress';
import chalk from 'chalk';
import { CodemodResult } from './codemod';

if (process.argv.length < 4) {
  console.error(
    chalk.red(`Requires a \`version\` and a \`glob\` to run against.

For example:
$> yarn braid-upgrade v31 "**/*.{ts,tsx}"
  `),
  );

  process.exitCode = 1;
} else {
  const version = process.argv[2];
  const pathGlob = process.argv[3];

  const paths = glob.sync(pathGlob, {
    ignore: ['**/node_modules/**', '*.d.ts'],
  });

  const progress = new cliProgress.SingleBar(
    {
      format: (options, params) => {
        if (params.value === 0) {
          return `Searching for files matching "${pathGlob}"...`;
        }
        const {
          barsize = 0,
          barCompleteString = '',
          barIncompleteString = '',
        } = options;

        const completeSize = Math.round(params.progress * barsize);
        const incompleteSize = barsize - completeSize;
        const bar =
          barCompleteString.substr(0, completeSize) +
          barIncompleteString.substr(0, incompleteSize);

        return `[${bar}] ${params.value}/${params.total}`;
      },
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

  for (const filePath of paths) {
    jobs.push(
      pool
        .exec('codemod', [{ version, filePath }])
        .catch((err) => err)
        .then((result) => {
          progress.increment();
          return result;
        }),
    );
  }

  Promise.all(jobs)
    .then((results: Array<CodemodResult>) => {
      progress.stop();

      for (const result of results) {
        if (result.error) {
          console.error(chalk.red(`${result.filePath}\n\n${result.error}\n`));
        }
        if (result.warnings.length > 0) {
          console.log(result.filePath);
          result.warnings.forEach((warning: string) => console.log(warning));
        }
      }

      const errors = results.filter((result) => Boolean(result.error));
      const updateCount = results.filter((result) => result.updated).length;
      const warningCount = results.filter(
        (result) => result.warnings.length > 0,
      ).length;

      if (errors.length > 0) {
        console.error(
          chalk.red(
            `${errors.length} file${errors.length !== 1 ? 's' : ''} contained ${
              errors.length === 1 ? 'an error' : 'errors'
            } (see above).`,
          ),
        );
      }

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

      if (errors.length === 0 && warningCount === 0 && updateCount === 0) {
        console.log(chalk.green("You're up to date!"));
      }
    })
    .finally(() => {
      pool.terminate();
    });
}
