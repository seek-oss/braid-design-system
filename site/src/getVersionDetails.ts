// @ts-expect-error
import RegClient from 'npm-registry-client';

type VersionMap = { [version: string]: string };

let inFlight: Promise<VersionMap> | undefined;
let cache: VersionMap;

const resolveVersions = (): Promise<VersionMap> =>
  new Promise((resolve, reject) => {
    const npmClient = new RegClient();

    npmClient.get(
      'https://registry.npmjs.org/braid-design-system',
      {},
      (err: Error, data: any) => {
        if (err) {
          reject(err);
        }

        if (typeof data !== 'object') {
          reject(
            new Error(
              `Package '${name}' returned with no data from npm client`,
            ),
          );
        }

        resolve(data.time as VersionMap);
      },
    );
  });

export const braidVersionToDate = () => {
  if (cache) {
    return cache;
  }

  if (inFlight) {
    return inFlight;
  }

  inFlight = resolveVersions().then((result) => {
    cache = result;

    return cache;
  });

  return inFlight;
};
