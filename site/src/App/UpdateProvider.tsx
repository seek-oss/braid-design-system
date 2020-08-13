import React, { createContext, ReactNode, useContext } from 'react';

import { differenceInMonths } from 'date-fns';

import allUpdates from '../componentUpdates.json';

export const makeUpdateManager = (
  renderDate: Date,
  versionMap: { [version: string]: string },
) => {
  const newThings = new Set();
  const updatedThings = new Set();

  for (const update of allUpdates) {
    const { version, updates } = update;
    const versionReleaseDate = new Date(versionMap[version]);

    if (
      versionMap[version] &&
      differenceInMonths(versionReleaseDate, renderDate) < 2
    ) {
      for (const releaseUpdate of updates) {
        if ('new' in releaseUpdate) {
          for (const name of releaseUpdate.new) {
            newThings.add(name);
          }
        }

        if ('updated' in releaseUpdate) {
          for (const name of releaseUpdate.updated) {
            updatedThings.add(name);
          }
        }
      }
    }
  }

  return {
    isNew: (name: string) => newThings.has(name),
    isUpdated: (name: string) => updatedThings.has(name),
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
