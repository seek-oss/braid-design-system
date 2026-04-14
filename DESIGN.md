# Design System: Braid web — SEEK Jobs

---

## About this document

**Format:** Follows the extended `DESIGN.md` pattern popularised by [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).
**Audience:** Designers, engineers and other partners using AI-powered design and coding tools to create SEEK UI.
**Themes:** `seekJobs` (SEEK Jobs).
**Platforms:** Currently web only (no Native or Email).
**Usage:** Values and tables below are usable on their own; GitHub links are optional for checking against source code.  
**Implementation:** Tokens and components live in [packages/braid-design-system](https://github.com/seek-oss/braid-design-system/tree/master/packages/braid-design-system).  
**Documentation:** [Braid Design System](https://seek-oss.github.io/braid-design-system/).

---

## 1. Visual theme & atmosphere

SEEK's interface is a clean and modern marketplace built on a single, cohesive visual language. It features a **confident magenta brand accent** on a **white** canvas.

The layout feels **open** and is highly systematic: components never own their surrounding white space, instead all spacing is applied purposfully with layout components like Stack, Inline, Columns and Tiles, each consuming a shared scale of space tokens (see **5 Layout Principles** for details).

The typography uses **SEEK Sans**, a custom font that feels warm and approachable while echoing the rounded geometry of components.

Colour is used purposefully, with a spectrum of semantic **Tones** and **brand accents** being leveraged across the system. **Tones** are used to communicate the tone of voice being used: `critical`, `caution`, `positive`, `neutral`, `info`, and `promote`. **Brand accents** are used to dial up or down the prominence of content while expressing SEEK's brand: `brandAccent`, `formAccent`, `brand`, and `secondary`. Visually, this creates an interface that feels primarily neutral and content-first, with colour appearing where it communicates tone, status or brand — not as background noise.

**Design philosophy**

- **Tokens, not ad-hoc CSS:** Spacing, color roles, type, radii, and shadows should map to Braid theme variables or component APIs.
- **Composable structure:** Prefer layout primitives (stack, inline, box, columns) and Braid components over bespoke flex/grid soup unless there is a clear gap.
- **Accessible by default:** Sufficient contrast for semantic pairings, visible keyboard focus, and interaction targets that meet the system’s touchable minimums.
- **Mood keywords:** Clear, direct, professional, human, optimistic, never gimmicky or ornamental for its own sake.

---

## 2. Color palette & roles

Primitive scales live in [palette.ts](https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/lib/color/palette.ts); **semantic** foreground and background roles are built in [nvl.ts](https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/lib/themes/baseTokens/nvl.ts) for each theme. Below reflects **SEEK Jobs** theme (`brandAccent` = Seek Pink 500).

### Brand accents

| Token               | Hex         | Role                                              |
| ------------------- | ----------- | ------------------------------------------------- |
| `brandAccent`       | `#E60278`   | Primary CTAs, brand fills, strong emphasis        |
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

**Font family:** `SeekSans, "SeekSans Fallback", Arial, Tahoma, sans-serif`  
**Web font URL (reference):** `https://www.seek.com.au/static/shared-web/seeksans.css`  
**Weights:** regular `400`, medium `600`, strong `700`

**Heading weight model:** “Weak” headings use **regular** weight; default headings use **medium** (see `typography.heading.weight` in tokens).

### Hierarchy (font size + line gap from tokens)

Sizes are **px**; **line gap** is the Capsize line-gap token (implementation computes final line height and cap trims).

| Role              | Mobile       | Tablet       |
| ----------------- | ------------ | ------------ |
| **Heading 1**     | 28px, gap 11 | 36px, gap 14 |
| **Heading 2**     | 24px, gap 11 | 30px, gap 13 |
| **Heading 3**     | 22px, gap 10 | 24px, gap 11 |
| **Heading 4**     | 20px, gap 9  | 20px, gap 9  |
| **Text large**    | 18px, gap 13 | 18px, gap 13 |
| **Text standard** | 16px, gap 12 | 16px, gap 12 |
| **Text small**    | 14px, gap 10 | 14px, gap 10 |
| **Text xsmall**   | 12px, gap 9  | 12px, gap 9  |

**Links:** System default is **underlined** text links using link/visited foreground tokens.

---

## 4. Component stylings

### Buttons

- **Sizes:** **Standard** buttons target a **minimum height of 48px** (`touchableSize` 12 × grid 4px). **Small** uses ~80% of that touchable height with adjusted padding.
- **Shape:** Corners follow **border radius** tokens (typically **standard `8px`** on filled variants — exact variant styling is defined per Braid `Button` implementation).
- **Primary / brand:** **Seek Magenta** fill with **white** foreground on light backgrounds; **hover** and **active** use token-driven lighten/darken passes.
- **Secondary / neutral:** Grey neutral fills for non-primary actions.
- **Ghost / soft:** Light fills or transparent bodies with border or foreground emphasis as per variant.
- **States:** **Disabled** reduces visual weight and blocks interaction; **focus-visible** shows the **focus ring** (see §6). **Hover** may show a translucent overlay; **active** applies `scale(0.95)` with a short easing (`transitions.touchable`).

### Cards and containers

- **Radius:** `small` (4px), `standard`(8px),`large` (16px), `xlarge` (24px) — pick by prominence; marketing tiles often use larger radii.
- **Background:** Default `surface` (#FFFFFF) body; use neutral soft tints for grouped content when tokens allow.
- **Borders:** `standard` border width (2px); `large` emphasis borders (4px).

### Inputs and forms

- **Border:** `#838FA5`\*\* default field stroke, `2px` standard width.
- **Radius:** Typically `8px` (standard radius) for fields.
- **Accent:** Focus and key accents align with **form blue** (`#1E47A9` and lighter blues).
- **Errors:** **Critical** foreground and **critical soft** backgrounds for messages and highlights.

### Navigation

- **Text nav:** Use **Text** + **Link** (or **ButtonLink**) with **link** / **visited** colors; keep **one clear active state** (weight, tone, or background per existing Braid patterns).
- **Tabs / steps:** Respect **neutral** and **brandAccent** semantics for selected vs default; do not invent new accent hues.
- **Side navigation:** Prefer **vertical stack** spacing from the space scale; align section titles with **text small** or **standard** and use **generous gutter** alignment to content (`space.gutter` → 24px).

### Lists and data-heavy UI

- **Rows:** Use **consistent vertical padding** from the space scale (**small** or **medium**); separate rows with **neutral light** dividers or whitespace, not random greys.
- **Metadata:** **Text small** (`14px` token) for timestamps, locations, and secondary labels; **standard** for titles.
- **Actions:** Align **secondary buttons** and **tertiary links** to the **end** of the row or in a **kebab** pattern only if the product already uses that idiom — keep **48px** touch targets for row-level actions where possible.

---

## 5. Layout principles

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

## 6. Depth & elevation

Shadows use **cool grey** at **8% opacity** (`#1C2330` scaled to alpha) for a **soft, neutral float**:

- **Small:** tight ambient glow + short drop (`0 0 4px`, `0 4px 8px -2px`).
- **Medium:** medium spread (`0 0 8px`, `0 8px 16px -4px`).
- **Large:** strongest default elevation (`0 0 12px`, `0 12px 24px -6px`).

**Surface hierarchy:** Default UI is **flat** (white on white). Use **small** shadow for **cards and popovers**, **medium/large** for **dialogs and prominent overlays**.

**Focus:** `**6px` focus ring size token (`focusRingSize`) — do not remove or shrink focus styles for keyboard users.

---

## 7. Do's and Don'ts

**Do**

- Import and use **Braid components** and `BraidTheme` / `seekJobs` (or the app’s existing theme provider) so colors and type match production.
- Use **semantic color roles** (`critical`, `positive`, `caution`, `info`, `promote`, …) when describing or implementing state.
- Step **typography at tablet** when building responsive layouts (see §8).
- Keep **primary actions** visually dominant with **Seek Magenta**; secondary actions calmer in **neutral** tones.

**Don't**

- Substitute **other SEEK themes** (e.g. Business) or arbitrary hex when this file says **SEEK Jobs**.
- Use **color alone** for critical meaning — pair with **text, icon, or pattern**.
- Bypass **focus-visible** styling for custom interactive elements.
- Hard-code **spacing** outside the **4px grid** without a strong reason.

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

- Primary CTA: `#E60278`
- Primary text: `#2E3849`
- Secondary text: `#5A6881`
- Page / card surface: `#FFFFFF`
- Form accent: `#1E47A9`
- Error: `#B91E1E`
- Success: `#12784F`
- Warning yellow: `#FDC221` (pair with `#723D02` text)

### Example prompts (for AI tools)

1. “Build a **SEEK Jobs** marketing hero: **white** background, **H1** at mobile **28px** / tablet **36px**, **neutral `#2E3849`** title, **secondary `#5A6881`** subtitle, **primary button** filled `**#E60278`** with **white** label, **24px** vertical gap between blocks, **8px** rounded promo card with **small shadow.”
2. “Create a **job search filter** form: **white** fields, `**#838FA5` **2px** border, **8px** radius, **16px** vertical gap between fields, **form blue `#1E47A9`** for focus ring flavor, error message in `**#B91E1E**` on `**#FEF3F3**`.”
3. “Layout a **results list** on **mobile**: single column, **16px** gaps; from **740px** use **two columns** for cards; cards **white**, `**8px`** radius, **small** shadow, title **Heading 4 scale.”
4. “Add a **success banner**: **positive `#12784F`** text on `**#E2F7F1**` background, **text small**, **8px** vertical padding using **small** space token multiples.”
5. “Implement **visited links** in a paragraph: default `**#2E3849`**, visited `**#5B2084\*\`\*, underline on.”
6. “Build a **dashboard stat tile**: **white** card, `**8px`** radius, **small** shadow, metric as **Heading 3** on tablet, caption as **text small** in `**#5A6881`**, **24px padding.”

---

## Maintenance

When `seekJobs` or **NVL base tokens** change, update **§2–§6** and the **AI prompt guide** (**§9**) so this file stays aligned with the [packages/braid-design-system](https://github.com/seek-oss/braid-design-system/tree/master/packages/braid-design-system) package in [seek-oss/braid-design-system](https://github.com/seek-oss/braid-design-system). Add brand or content guidelines in new sections when your team is ready.
