import React, { createContext, ReactNode, useContext } from 'react';
import flatten from 'lodash/flatten';

import { differenceInMonths, format, formatDistance } from 'date-fns';

import releases from '../../componentUpdates.json';

interface New {
  summary: string;
  new: Array<string>;
}

interface Updated {
  summary: string;
  updated: Array<string>;
}
type Update = Updated | New;

export interface Release {
  version: string;
  updates: Array<Update>;
}

const allReleases = releases as Array<Release>;

export const makeUpdateManager = (
  renderDate: Date,
  versionMap: { [version: string]: string },
  currentVersion: string,
) => {
  const newThings = new Set();
  const updatedThings = new Set();
  const componentReleases = new Map();

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

  return {
    getCurrentVersionInfo: () => ({
      version: currentVersion,
      date: versionMap[currentVersion],
    }),
    isNew: (name: string) => newThings.has(name),
    isUpdated: (name: string) => updatedThings.has(name),
    getHistory: (name: string) => {
      const releventReleases = componentReleases.get(name);

      if (!releventReleases) {
        return [];
      }

      return flatten(
        allReleases
          .filter(({ version }) => releventReleases.has(version))
          .map(({ version, updates }) =>
            updates
              .filter((update) =>
                'new' in update
                  ? update.new.includes(name)
                  : update.updated.includes(name),
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
                  type: 'new' in update ? 'added' : 'updated',
                  summary: update.summary,
                  isRecent: Boolean(
                    versionReleaseDate &&
                      differenceInMonths(renderDate, versionReleaseDate) < 2,
                  ),
                  recency:
                    versionReleaseDate &&
                    formatDistance(versionReleaseDate, renderDate, {
                      addSuffix: true,
                    }),
                };
              }),
          ),
      );
    },
  };
};

type UpdateManager = ReturnType<typeof makeUpdateManager>;

const updateContext = createContext<UpdateManager | null>(null);

interface UpdateProviderProps {
  updateManager: UpdateManager;
  children: ReactNode;
}
export const UpdateProvider = ({
  updateManager,
  children,
}: UpdateProviderProps) => (
  <updateContext.Provider value={updateManager}>
    {children}
  </updateContext.Provider>
);

export const useUpdates = () => {
  const updateManager = useContext(updateContext);

  if (!updateManager) {
    throw new Error('No UpdateProvider');
  }

  return updateManager;
};
