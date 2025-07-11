type Mode = { disabled: boolean } | { theme: string; viewport: number };
type Modes = Record<string, Mode>;

type MakeModeOptions<T, V> = {
  /**
   * Defines the mode as a root-level mode. Non root-level modes disable every mode not explicitly defined.
   * @see https://www.chromatic.com/docs/modes/#disable-a-higher-level-mode
   * @default false
   */
  root?: boolean;
  /**
   * List of theme names.
   * @example ['seekJobs', 'seekJobsDark']
   */
  themes?: T[];
  /**
   * Record of viewport definitions in `{ [name]: value }` format.
   * @see {@link https://www.chromatic.com/docs/modes/viewports/#define-viewport-modes} for acceptable viewport values.
   * @example { small: 320, large: 1200 }
   */
  viewports: V[];
};

const makeModeName = (themeName: string, viewportName: string) =>
  `${themeName} ${viewportName}`;

/**
 * Creates a function that takes a list of themes and viewport definitions and returns a list of modes compatible with Chromatic.
 * @see {@link https://www.chromatic.com/docs/modes/}
 */
export function makeChromaticModes<
  const T extends readonly string[],
  const V extends Record<string, number>,
>(
  allThemes: T,
  viewportDefinitions: V,
  { defaultThemes }: { defaultThemes: Partial<T> },
): (options: MakeModeOptions<T[number], keyof V>) => Modes {
  return (options) => {
    const viewports = Object.keys(viewportDefinitions);
    const {
      root = false,
      viewports: includedViewports,
      themes: includedThemes = defaultThemes,
    } = options;

    const excludedThemes = allThemes.filter(
      (value) => !includedThemes.includes(value),
    );

    return {
      ...(!root &&
        makeModeData(excludedThemes, viewports, () => ({
          disabled: true,
        }))),
      ...makeModeData(
        includedThemes as Array<T[number]>,
        viewports,
        (theme, viewport) => {
          // theme may be partially disabled when not all viewports are included
          if (!includedViewports.includes(viewport)) {
            return root ? undefined : { disabled: true };
          }

          return {
            theme,
            viewport: viewportDefinitions[viewport],
          };
        },
      ),
    };
  };
}

/**
 * Loops the provided themes and viewports, calling a function that returns a Mode for each combination.
 */
const makeModeData = (
  themes: string[],
  viewports: string[],
  callback: (theme: string, viewport: string) => Mode | undefined,
): Modes => {
  const modes: Modes = {};
  for (const theme of themes) {
    for (const viewport of viewports) {
      const value = callback(theme, viewport);
      if (!value) {
        continue;
      }

      modes[makeModeName(theme, viewport)] = value;
    }
  }
  return modes;
};
