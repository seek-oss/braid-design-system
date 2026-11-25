type VersionMap = Record<string, string>;

let inFlight: Promise<VersionMap> | undefined;
let cache: VersionMap;

interface RegistryResponse {
  time: VersionMap;
}

const isRegistryResponse = (value: unknown): value is RegistryResponse =>
  typeof value === 'object' &&
  value !== null &&
  'time' in value &&
  typeof value.time === 'object' &&
  value.time !== null;

const resolveVersions = async (): Promise<VersionMap> => {
  const response = await fetch(
    'https://registry.npmjs.org/braid-design-system',
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch 'braid-design-system' from npm registry: ${response.status} ${response.statusText}`,
    );
  }

  const data: unknown = await response.json();

  if (!isRegistryResponse(data)) {
    throw new Error(
      `Package 'braid-design-system' returned no valid 'time' data from npm registry`,
    );
  }

  return data.time;
};

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
