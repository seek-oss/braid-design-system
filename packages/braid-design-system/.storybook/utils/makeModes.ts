type Mode = { disabled: boolean } | { theme: string; viewport: number };
type Modes = Record<string, Mode>;

type MakeModeOptions<T, V> = {
  /**
   * When true, disables every mode not explicitly defined. Required to turn off higher-level modes.
   * @see https://www.chromatic.com/docs/modes/#disable-a-higher-level-mode
   * @default true
   */
  disableHigherLevelModes?: boolean;
  themes?: T[];
  viewports: V[];
};

export const makeModes =
  <const T extends readonly string[], const V extends Record<string, number>>(
    allThemes: T,
    allViewports: V,
    { defaultThemes }: { defaultThemes: Partial<T> },
  ) =>
  (options: MakeModeOptions<T[number], keyof V>): Modes => {
    const {
      disableHigherLevelModes = true,
      viewports: userViewports,
      themes: userThemes = defaultThemes,
    } = options;

    const excludedViewports = Object.keys(allViewports).filter(
      (value) => !userViewports.includes(value),
    );
    const excludedThemes = allThemes.filter(
      (value) => !userThemes.includes(value),
    );

    const disabledValue = disableHigherLevelModes
      ? { disabled: true }
      : undefined;

    return {
      ...(disableHigherLevelModes
        ? excludedThemes.reduce<Modes>(
            makeModeReducer(allViewports, () => ({
              disabled: true,
            })),
            {},
          )
        : {}),
      ...userThemes.reduce<Modes>(
        makeModeReducer(allViewports, (themeName, size) =>
          excludedViewports.includes(size)
            ? disabledValue
            : {
                theme: themeName,
                viewport: allViewports[size],
              },
        ),
        {},
      ),
    };
  };

const makeModeName = (themeName: string, size: string) =>
  `${themeName} ${size}`;

const makeModeReducer = (
  allViewports: Record<string, number>,
  callback: (themeName: string, size: string) => Mode | undefined,
) => {
  const allViewportSizes = Object.keys(allViewports);

  return (acc: Modes, themeName: string | undefined): Modes => {
    if (!themeName) {
      throw new Error(
        'chromatic modes: no themes provided or no defaults have been set.',
      );
    }
    return {
      ...acc,
      ...allViewportSizes.reduce<Modes>((acc2, size) => {
        const value = callback(themeName, size);
        if (!value) {
          return acc2;
        }

        return {
          ...acc2,
          [makeModeName(themeName, size)]: value,
        };
      }, {}),
    };
  };
};
