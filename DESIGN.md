# Design System: Braid web — SEEK Jobs

**About this file:** Follows the extended `DESIGN.md` format of [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).
**Audience:** Designers, engineers and other partners using AI-powered design and coding tools to create SEEK UI.
**Themes:** `seekJobs` (SEEK Jobs).
**Platforms:** Currently web only (no Native or Email).

---

## Instructions for AI tools

- **Install the package** via `npm install braid-design-system` ([npm](https://www.npmjs.com/package/braid-design-system) · [source](https://github.com/seek-oss/braid-design-system/tree/master/packages/braid-design-system)). If your tool supports package installation, install this package and import components directly. Be sure to import `'braid-design-system/reset';` at the very top of the file. Always prefer Braid components and theme tokens over custom CSS — the system handles colour, typography, spacing, and accessibility out of the box.
- **Import font** via `@import url('https://www.seek.com.au/static/shared-web/seeksans.css');`
- **Layout patterns:** If your tool can read source files, see these ready-made Braid composition examples: [page layouts](https://raw.githubusercontent.com/seek-oss/braid-design-system/refs/heads/master/packages/braid-design-system/src/lib/playroom/templates/layouts.snippets.tsx) · [sections, cards, forms, tables](https://raw.githubusercontent.com/seek-oss/braid-design-system/refs/heads/master/packages/braid-design-system/src/lib/playroom/templates/sections.snippets.tsx)
- **Browse the docs** at [Braid Design System](https://seek-oss.github.io/braid-design-system/) for interactive component examples and API reference.

---

## 1. Visual theme & atmosphere

SEEK's interface is a clean and modern marketplace built on a single, cohesive visual language. It features a **confident magenta brand accent** on a **white** canvas.

The layout feels **open** and is highly systematic: components never own their surrounding white space, instead all spacing is applied purposfully with layout components like Stack, Inline, Columns and Tiles, each consuming a shared scale of space tokens (see **4 Layout and space scale** for details).

The typography uses **SEEK Sans**, a custom font that feels warm and approachable while echoing the rounded geometry of components.

Colour is used purposefully, with a spectrum of semantic **Tones** and **brand accents** being leveraged across the system. **Tones** are used to communicate the tone of voice being used: `critical`, `caution`, `positive`, `neutral`, `info`, and `promote`. **Brand accents** are used to dial up or down the prominence of content while expressing SEEK's brand: `brandAccent`, `formAccent`, `brand`, and `secondary`. Visually, this creates an interface that feels primarily neutral and content-first, with colour appearing where it communicates tone, status or brand — not as background noise.

**Design philosophy**

- **Tokens, not ad-hoc CSS:** Spacing, colour roles, type, radii, and shadows should map to Braid theme variables or component APIs.
- **Composable structure:** Prefer layout primitives (stack, inline, box, columns) and Braid components over bespoke flex/grid soup unless there is a clear gap.
- **Accessible by default:** Sufficient contrast for semantic pairings, visible keyboard focus, and interaction targets that meet the system’s touchable minimums.
- **Mood keywords:** Clear, direct, professional, human, optimistic, never gimmicky or ornamental for its own sake.

---

## 2. Colour palette & roles

Primitive scales live in [palette.ts](https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/lib/color/palette.ts); **semantic** foreground and background roles are built in [nvl.ts](https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/lib/themes/baseTokens/nvl.ts) for each theme. Below reflects **SEEK Jobs** theme (`brandAccent` = Seek Pink 500).

### Brand accents

| Token               | Hex         | Role                                              |
| ------------------- | ----------- | ------------------------------------------------- |
| `brandAccent`       | `#E60278`   | Hero CTAs, brand fills, strong emphasis           |
| `brandAccentHover`  | _(derived)_ | Slightly lighter on hover                         |
| `brandAccentActive` | _(derived)_ | Slightly darker on press                          |
| `brandAccentLight`  | `#F8B1DC`   | Soft brand borders, light brand emphasis on white |
| `brandAccentSoft`   | `#FEEFFA`   | Tinted surfaces, soft brand backgrounds           |
| `brand`             | `#051A49`   | Top brand bar, dark brand surfaces (background)   |
| `formAccent`        | `#1E47A9`   | Form and interactive accent                       |
| `formAccentLight`   | `#99BFF7`   | Lighter form-related UI, focus flavor             |

### Neutrals and surfaces

| Token          | Hex       | Role                                     |
| -------------- | --------- | ---------------------------------------- |
| `neutral`      | `#2E3849` | Body copy, default headings (foreground) |
| `secondary`    | `#5A6881` | Supporting text (foreground)             |
| `surface`      | `#FFFFFF` | Cards, panels (background)               |
| `body`         | `#FFFFFF` | Default page background                  |
| `bodyDark`     | `#1C2330` | Dark canvas background                   |
| `surfaceDark`  | `#1C2330` | Dark elevated surfaces                   |
| `neutralLight` | `#F3F5F7` | Soft grey panels (background)            |
| `neutralSoft`  | `#F3F5F7` | Soft grey fills (background)             |
| `field`        | `#838FA5` | Default field outlines (border)          |

### Semantic tones

| Token                  | Hex       | Role                                                     |
| ---------------------- | --------- | -------------------------------------------------------- |
| `critical`             | `#B91E1E` | Errors, destructive emphasis (foreground and background) |
| `criticalLight`        | `#FFE3E2` | Light error tint (background)                            |
| `criticalSoft`         | `#FEF3F3` | Soft error backgrounds                                   |
| `caution` (background) | `#FDC221` | Warning fills (background)                               |
| `caution` (foreground) | `#723D02` | Text on yellow/caution surfaces                          |
| `cautionLight`         | `#FEF8DE` | Soft warning backgrounds                                 |
| `positive`             | `#12784F` | Success (foreground and background)                      |
| `positiveLight`        | `#E2F7F1` | Success backgrounds                                      |
| `info`                 | `#1D559D` | Informational (foreground and background)                |
| `infoLight`            | `#E3F2FB` | Informational backgrounds                                |
| `promote`              | `#7F35A9` | Promotional / marketing accent                           |

### Links and focus

| Token         | Hex                        | Role                             |
| ------------- | -------------------------- | -------------------------------- |
| `link`        | `#2E3849`                  | Standard text links (foreground) |
| `linkVisited` | `#5B2084`                  | Visited links (foreground)       |
| `focus`       | `rgba(153, 191, 247, 0.7)` | Keyboard focus outline (border)  |

---

## 3. Typography rules

**Font family:** `SeekSans`, `"SeekSans Fallback"`, `Arial`, `Tahoma`, `sans-serif`  
**Web font URL (reference):** [https://www.seek.com.au/static/shared-web/seeksans.css](https://www.seek.com.au/static/shared-web/seeksans.css)  
**Weights:** regular `400`, medium `600`, strong `700`

**Heading weight model:** “Weak” headings use **regular** weight; default headings use **medium** (see `typography.heading.weight` in tokens).

Sizes are **px**; **line gap** is the Capsize line-gap token (implementation computes final line height and cap trims).

### Heading

| `level` | Mobile       | Tablet       | Role                        |
| ------- | ------------ | ------------ | --------------------------- |
| `"1"`   | 28px, gap 11 | 36px, gap 14 | Page titles, hero headings  |
| `"2"`   | 24px, gap 11 | 30px, gap 13 | Major section headings      |
| `"3"`   | 22px, gap 10 | 24px, gap 11 | Subsection headings         |
| `"4"`   | 20px, gap 9  | 20px, gap 9  | Minor headings, card titles |

### Text

| `size`       | Mobile       | Tablet       | Role                                 |
| ------------ | ------------ | ------------ | ------------------------------------ |
| `"large"`    | 18px, gap 13 | 18px, gap 13 | Hero copy                            |
| `"standard"` | 16px, gap 12 | 16px, gap 12 | Default body copy                    |
| `"small"`    | 14px, gap 10 | 14px, gap 10 | Metadata, captions, secondary labels |
| `"xsmall"`   | 12px, gap 9  | 12px, gap 9  | Fine print, legal (use sparingly)    |

**Links:** System default is **underlined** text links using link/visited foreground tokens.

---

## 4. Layout and space scale

**Base grid:** **4px**. All spacing tokens are multiples of the grid (`grid: 4`).

**Spacing scale** (token × 4px → px):

| Token      | Px  | Typical use                      |
| ---------- | --- | -------------------------------- |
| `xxsmall`  | 8   | Tight icon gaps, dense rows      |
| `xsmall`   | 12  | Compact inline spacing           |
| `small`    | 16  | Default tight stacks             |
| `gutter`   | 24  | Horizontal page gutter           |
| `medium`   | 24  | Standard block gap, card padding |
| `large`    | 32  | Section separation               |
| `xlarge`   | 48  | Large gaps, hero spacing         |
| `xxlarge`  | 64  | Major vertical breaks            |
| `xxxlarge` | 96  | Page-level rhythm                |

**Whitespace:** Prefer **repeated use of one or two scale steps** in a screen rather than arbitrary pixel values. Align columns to the **gutter** and keep **related items closer** than **unrelated sections**.

**Content max widths (px):** `xsmall` 400 · `small` 660 · `medium` 940 · `large` 1280 — use for readable copy columns and centered layouts.

---

## 5. Component stylings

### Buttons

- **Sizes:** **Standard** buttons target a **minimum height of 48px** (`touchableSize` 12 × grid 4px). **Small** uses ~80% of that touchable height with adjusted padding.
- **Shape:** Corners follow **border radius** tokens (typically **standard `8px`** on filled variants — exact variant styling is defined per Braid `Button` implementation).
- **Primary / brand:** **brandAccent** fill with **white** foreground on light backgrounds; **hover** and **active** use token-driven lighten/darken passes.
- **Secondary / neutral:** Grey neutral fills for non-primary actions.
- **Ghost / soft:** Light fills or transparent bodies with border or foreground emphasis as per variant.
- **Layout:** `Button` components should be wrapped within an `Action` component by default, otherwise `Inline` can also be used.
- **States:** **Focus-visible** shows the **focus ring** (see §6). **Hover** may show a translucent overlay; **active** applies `scale(0.95)` with a short easing (`transitions.touchable`). **Disabled** buttons are not supported as they are not accessible.

### Cards

- **Radius:** `large` (16px)
- **Background:** `surface` (#FFFFFF)
- **Padding:** `gutter` (24px)
- **Border:** Light neutral keyline (`borderNeutralLight`); optional `tone` prop adds a `promote` or `formAccent` accent keyline.

### Inputs and forms

- **Border:** `#838FA5` default field stroke, `2px` standard width.
- **Radius:** Typically `8px` (standard radius) for fields.
- **Accent:** Focus and key accents align with **form blue** (`#1E47A9` and lighter blues).
- **Errors:** **Critical** foreground and **critical soft** backgrounds for messages and highlights.
- **Checkboxes and radio buttons:** `Checkbox`, `RadioGroup` and `RadioItem` should always include a label.

### Navigation

- **Text nav:** Use **Text** + **Link** (or **ButtonLink**) with **link** / **visited** colours; keep **one clear active state** (weight, tone, or background per existing Braid patterns).
- **Tabs / steps:** Respect **neutral** and **brandAccent** semantics for selected vs default; do not invent new accent hues.
- **Side navigation:** Prefer **vertical stack** spacing from the space scale; align section titles with **text small** or **standard** and use **generous gutter** alignment to content (`space.gutter` → 24px).

### Lists and data-heavy UI

- **Rows:** Use **consistent vertical padding** from the space scale (**small** or **medium**); separate rows with **neutral light** dividers or whitespace, not random greys.
- **Metadata:** **Text small** (`14px` token) for timestamps, locations, and secondary labels; **standard** for titles.
- **Actions:** Align **secondary buttons** and **tertiary links** to the **end** of the row or in a **kebab** pattern only if the product already uses that idiom — keep **48px** touch targets for row-level actions where possible.

### Component props reference

| Name           | Available properties                                                                                                          |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Button`       | `id` · `size` · `tone` · `variant` · `bleed` · `loading` · `type` · `icon` · `iconPosition` · `onClick` · `data` · `children` |
| `Card`         | `tone` · `height` · `component` · `data`                                                                                      |
| `Heading`      | `level`(required) · `weight` · `align` · `icon` · `maxLines` · `component` · `data`                                           |
| `Text`         | `size` · `tone` · `weight` · `align` · `icon` · `maxLines` · `baseline` · `component` · `data`                                |
| `TextLink`     | `href`(required) · `weight` · `showVisited` · `hitArea` · `icon` · `iconPosition` · `data`                                    |
| `PageBlock`    | `width` · `component` · `data`                                                                                                |
| `ContentBlock` | `width` · `align` · `data`                                                                                                    |
| `Badge`        | `tone` · `weight` · `bleedY` · `title` · `data`                                                                               |
| `List`         | `size` · `space` · `tone` · `type` · `icon` · `start` · `data`                                                                |
| `Divider`      | `weight`                                                                                                                      |

---

## 6. Depth & elevation

Shadows use **cool grey** at **8% opacity** (`#1C2330` scaled to alpha) for a **soft, neutral float**:

- **Small:** tight ambient glow + short drop (`0 0 4px`, `0 4px 8px -2px`).
- **Medium:** medium spread (`0 0 8px`, `0 8px 16px -4px`).
- **Large:** strongest default elevation (`0 0 12px`, `0 12px 24px -6px`).

**Surface hierarchy:** Default UI is **flat** (white on white). Use **small** shadow for **popovers**, **medium/large** for **dialogs and prominent overlays**.

**Focus:** `6px` focus ring size token (`focusRingSize`) — do not remove or shrink focus styles for keyboard users.

---

## 7. Do's and Don'ts

**Do**

- Import and use **Braid components** and `BraidTheme` / `seekJobs` so colours, styles and type match production.
- Prefer Braid components and theme tokens over custom CSS.
- Use colour **Tones** in line with their **semantic meaning:** `critical`, `positive`, `caution`, `info`, `promote` ([documentation](https://seek-oss.github.io/braid-design-system/foundations/tones)).
- Step **typography at tablet** when building responsive layouts (see §8).
- Keep **primary actions** visually dominant with **formAccent**; secondary actions calmer in **neutral** tone.
- Use **brandAccent** sparingly for hero actions and limit to a **maximum** of one per screen.

**Don't**

- Substitute **other SEEK themes** (e.g. Business) or arbitrary hex when this file says **SEEK Jobs**.
- Use **colour alone** for critical meaning — pair with relevant **text or icon**.
- Bypass **focus-visible** styling for custom interactive elements.
- Hard-code **spacing** outside the **4px grid** without a strong reason.
- Hard-code **colours** outside of the provided tokens without a strong reason.
- Hard-code **styles** using `style={{ ... }}` unless absolutely necessary. Instead use real component properties.

---

## 8. Responsive behavior

**Breakpoints** (`min-width`, from [breakpoints.ts](https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/lib/css/breakpoints.ts)):

| Name        | Min width | Notes                                                 |
| ----------- | --------- | ----------------------------------------------------- |
| **mobile**  | 0         | Default; single-column layouts, smaller heading sizes |
| **tablet**  | 740px     | Larger heading sizes, multi-column layouts            |
| **desktop** | 992px     | Full two- and three-column shells                     |
| **wide**    | 1200px    | Maximum horizontal use                                |

**Typography:** Heading and text **sizes and gaps** are defined separately for **mobile** and **tablet**; from **tablet upward** the tablet values apply unless a component uses custom responsive props.

**Touch targets:** Treat **48px** minimum height as the baseline for **primary** interactive controls (standard button / touchable row).

**Collapsing strategy:** **Stack** on **mobile**; introduce **columns** from **tablet** or **desktop** depending on density. **Hide or move** secondary nav into **drawers, menus, or progressive disclosure** at narrow widths rather than squeezing horizontal nav.

---

## 9. AI prompt guide

Copy-ready snippets for **AI-powered design and coding tools** (for example Figma Make, Cursor, or similar). They assume **SEEK Jobs** and the tokens in this document.

### Quick hex reference (SEEK Jobs)

- Hero CTA (max 1 per screen): `#E60278`
- Primary CTAs: `#1E47A9`
- Primary text: `#2E3849`
- Secondary text: `#5A6881`
- Page / card surface: `#FFFFFF`
- Form accent: `#1E47A9`
- Error: `#B91E1E`
- Success: `#12784F`
- Warning yellow: `#FDC221` (pair with `#723D02` text)

### Example prompts (for AI tools)

1. "Create a **job summary card** using the `Card` component. Include the role title as a level 4 `Heading`, the componany name as standard `Text`, along with location, industry and salary as a `List` with icons. Include a single sentence job description as standard `Text` along with the date posted in small, secondary `Text`."
2. “Create a **basic form** that captures name, email and phone number using `TextField`. Include a `Checkbox` to subscribe to marketing communications, and a primary submit `Button` and secondary `Reset` button. The form should head a level 3 `Heading` and appropriate `Stack` spacing.”
3. “Create a **table** using the `Table` component. Follow the component structure using `<Table>`, `<TableHeader>`,`<TableRow>`,`<TableHeaderCell>` and `<Text>`. Include the column headings: date, name, email and phone number. Include a level 3 `Heading` and Fill the table with mock data.”

---

## Maintenance

When `seekJobs` or **base tokens** change, update **§2–§6** and the **AI prompt guide** (**§9**) so this file stays aligned with the [packages/braid-design-system](https://github.com/seek-oss/braid-design-system/tree/master/packages/braid-design-system) package in [seek-oss/braid-design-system](https://github.com/seek-oss/braid-design-system). Add brand or content guidelines in new sections when your team is ready.
