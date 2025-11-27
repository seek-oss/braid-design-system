import { differenceInMonths, format } from 'date-fns';

import releases from '../../componentUpdates.json';

function memo<P extends string | number, R>(
  fn: (...params: P[]) => R,
): (...params: P[]) => R {
  const cache = new Map<string, R>();

  return (...params: P[]) => {
    const key = params.join('');

    const cachedValue = cache.get(key);

    if (cachedValue) {
      return cachedValue;
    }

    const calculatedValue = fn(...params);

    cache.set(key, calculatedValue);

    return calculatedValue;
  };
}

interface New {
  summary: string;
  new: string[];
}

interface Updated {
  summary: string;
  updated: string[];
}

type Update = Updated | New;

export interface Release {
  version: string;
  updates: Update[];
}

let renderDate: Date;
let currentVersion: string;
let versionMap: Record<string, string>;
let newThings: Set<string>;
let updatedThings: Set<string>;
let componentReleases: Map<string, Set<string>>;

const intersection = (a: string[], b: string[]) =>
  a.filter((value) => b.includes(value));
const hasIntersection = (a: string[], b: string[]) =>
  intersection(a, b).length > 0;

const allReleases = releases as Release[];

export const initUpdates = (
  newRenderDate: Date,
  newVersionMap: Record<string, string>,
  newCurrentVersion: string,
) => {
  renderDate = newRenderDate;
  versionMap = newVersionMap;
  currentVersion = newCurrentVersion;
  newThings = new Set<string>();
  updatedThings = new Set<string>();
  componentReleases = new Map<string, Set<string>>();

  for (const release of allReleases) {
    const { version, updates } = release;
    const versionReleaseDate = new Date(versionMap[version]);

    const isRecentRelease =
      versionMap[version] &&
      differenceInMonths(renderDate, versionReleaseDate) < 2;

    for (const releaseUpdate of updates) {
      if ('new' in releaseUpdate) {
        for (const name of releaseUpdate.new) {
          if (isRecentRelease) {
            newThings.add(name);
          }

          const c = componentReleases.get(name) ?? new Set();
          c.add(version);
          componentReleases.set(name, c);
        }
      }

      if ('updated' in releaseUpdate) {
        for (const name of releaseUpdate.updated) {
          if (isRecentRelease) {
            updatedThings.add(name);
          }

          const c = componentReleases.get(name) ?? new Set();
          c.add(version);
          componentReleases.set(name, c);
        }
      }
    }
  }
};

export const getCurrentVersionInfo = () => ({
  version: currentVersion,
  date: versionMap[currentVersion],
});

const getNew = memo((...names: string[]) =>
  intersection(names, Array.from(newThings.values())),
);

export const isNew = (...names: string[]) => getNew(...names).length > 0;

const getUpdated = memo((...names: string[]) =>
  intersection(names, Array.from(updatedThings.values())),
);

export const isUpdated = (...names: string[]) =>
  getUpdated(...names).length > 0;

export const getHistory = memo((...names: string[]) => {
  let releventReleases = new Set<string>();

  for (const name of names) {
    releventReleases = new Set([
      ...Array.from(releventReleases),
      ...Array.from(componentReleases.get(name) ?? []),
    ]);
  }

  if (!releventReleases) {
    return [];
  }

  return allReleases
    .filter(({ version }) => releventReleases.has(version))
    .flatMap(({ version, updates }) =>
      updates
        .filter((update) =>
          'new' in update
            ? hasIntersection(update.new, names)
            : hasIntersection(update.updated, names),
        )
        .map((update) => {
          const versionReleaseDate = versionMap[version]
            ? new Date(versionMap[version])
            : undefined;

          return {
            version,
            time: versionReleaseDate
              ? format(versionReleaseDate, 'PP')
              : undefined,
            rawTime: versionReleaseDate?.getTime(),
            type: 'new' in update ? 'added' : 'updated',
            summary: update.summary,
            isRecent: Boolean(
              versionReleaseDate &&
              differenceInMonths(renderDate, versionReleaseDate) < 2,
            ),
          };
        }),
    )
    .sort((a, b) => {
      if (b.rawTime && a.rawTime) {
        return b.rawTime - a.rawTime;
      }
      return 0;
    });
});
