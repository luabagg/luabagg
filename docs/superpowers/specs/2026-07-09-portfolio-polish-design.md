# Portfolio polish: themes, chrome, stack

**Date:** 2026-07-09  
**Branch context:** local `main` WIP (themes + SCSS shrink); behind `origin/main` by ~26 (mostly metrics bots).  
**Approach:** Surgical polish (A) — fix bugs, correct theme tokens, relocate theme UI, widen readme, rewrite stack as capabilities. No full redesign.

## Goals

1. Theme families match real palettes (Warm custom stays; Catppuccin Latte/Mocha + Dracula accurate).
2. Background grain softer — texture without dirty-screen feel.
3. Experience timeline SVG/nodes work again after SCSS shrink.
4. Theme control: chevron dropdown right of nav (desktop); inside hamburger after Contact (mobile).
5. Readme intro text wider on desktop; GitHub profile README markdown still valid.
6. Core stack cards answer “what I ship,” not tool laundry lists.

## Non-goals

- New theme families beyond Warm / Catppuccin / Dracula.
- Redesign of experience cards, ventures, education layout.
- Changing GitHub README structure for profile rendering (only site CSS/copy around it).
- Dark-mode system-preference auto-switch on first visit (keep explicit user choice; optional later).

## Decisions locked

| Topic | Choice |
|---|---|
| Theme UI | Chevron dropdown; panel lists families; sun/moon at bottom |
| Background | Softer grain (lower opacity ~0.08–0.12; optional finer noise) |
| Stack cards | Capabilities / outcomes (not Backend/Frontend inventory) |
| Scope | Surgical polish, not redesign |

---

## 1. Theme tokens (`assets/css/_themes.scss`)

### Shared semantic map

Keep existing CSS variable names. Re-map values per family so components stay theme-agnostic:

| Token | Role |
|---|---|
| `--bg` | Page base |
| `--surface` | Cards / elevated panels |
| `--surface-soft` | Translucent card fill |
| `--surface-strong` | Stronger fill / pills |
| `--text` | Primary text |
| `--muted` | Secondary text |
| `--accent` | Interactive / brand accent |
| `--accent-soft` | Soft glow / secondary accent |
| `--dark-red` | Deep contrast for tech-pill gradients (name historical; value = deep surface/ink per theme, **not** random purple) |
| `--media-bg` | Image wells |
| `--card-line` / `--card-line-soft` | Borders |
| `--shadow` / `--lift-shadow` | Elevation |
| `--body-bg-top` / `--body-bg-bottom` | Page gradient ends |
| `--noise-opacity` | Grain strength |
| `--theme-color` | `meta theme-color` |
| Derived (`%theme-vars`) | `--line`, `--header-bg`, `--stack-gradient`, chip/logo backgrounds |

### Warm (custom) — keep

Light/dark values largely as current. Only adjust `--noise-opacity` into soft range.

### Catppuccin Latte (`family=catppuccin`, `scheme=light`)

Official Latte-aligned:

- Base/mantle/crust for bg/surfaces
- Text `#4c4f69`, subtext for muted
- Accent: red `#d20f39` (or rose) as primary interactive; peach/flamingo as soft
- `--dark-red` → crust/mantle deep tone (for pill gradients), **not** mauve

### Catppuccin Mocha (`family=catppuccin`, `scheme=dark`)

Official Mocha-aligned:

- Base `#1e1e2e`, mantle `#181825`, surface0/1 for cards
- Text `#cdd6f4`, subtext0 for muted
- Accent pink `#f38ba8`, soft peach `#fab387`
- Surfaces quieter than current loud `#313244`-as-everything

### Dracula dark (`family=dracula`, `scheme=dark`)

Real Dracula:

- Background `#282a36`
- Cards closer to `#21222c` / current-line used sparingly (`#44475a` for strong UI only)
- Foreground `#f8f8f2`, comment `#6272a4` for muted
- Accent pink `#ff79c6`, soft cyan `#8be9fd`
- Avoid using selection purple as primary surface

### Dracula light (`family=dracula`, `scheme=light`)

Unofficial soft invert: keep light-mode option but fix contrast (text/surface/card lines). Treat as Dracula-inspired light, not official palette.

### Themeable path stroke

In `index.md`, replace hard-coded warm red stroke on `#career-path` with theme token, e.g. `stroke="currentColor"` + CSS `color: color-mix(in srgb, var(--accent) 22%, transparent)` on `.experience-path`, or `stroke="var(--accent)"` with opacity via CSS.

---

## 2. Surface / grain (`style.scss` body)

- Lower per-theme `--noise-opacity` to ~`0.08`–`0.12` (dark slightly lower than light if needed).
- Optionally reduce SVG `feTurbulence` `baseFrequency` slightly for finer grain (one shared `$noise-svg` tweak).
- Keep radial glows; do not remove noise entirely.

---

## 3. Timeline bug fix

**Root cause:** SCSS shrink dropped:

```scss
.experience-node {
  position: absolute;
  border-radius: $pill;
  pointer-events: none;
}
```

Nodes still set `left`/`top`/`transform` but without `position: absolute` they participate in flow and break alignment with the SVG path.

**Fix:**

1. Restore absolute positioning + radius + pointer-events on `.experience-node`.
2. Re-check path width (`clamp`) vs center column (`4.4rem` now vs older `5.5rem`) so path sits under nodes.
3. Mobile rules unchanged in spirit: left rail path + nodes.

---

## 4. Theme UI

### Desktop header order

```
[Mark] ……………… [Stack … Contact] [▾ themes]
```

- Nav stays `margin-left: auto`.
- Theme control sits **immediately right of nav**, not mid-header.
- Remove bare mid-header `<select>` + orphan sun button.

### Chevron dropdown panel

Trigger: button with chevron (and accessible name e.g. “Theme”).

Open panel:

1. Family options: Warm, Catppuccin, Dracula (active state clear).
2. Divider.
3. Sun / Moon scheme controls at bottom (toggle or two buttons; one active).

Behavior:

- Click outside / Escape closes.
- Persist `themeFamily` + `themeScheme` in `localStorage` (existing keys).
- Keep early FOUC script in `<head>` setting `data-theme-family` / `data-theme-scheme`.
- Sync `meta[name=theme-color]` from `--theme-color` (existing).

### Mobile (`max-width: 840px`)

- No separate theme chrome in header bar (except hamburger).
- Hamburger menu contains:
  1. Nav links (Stack … Contact)
  2. Divider
  3. Theme section: family choices + sun/moon icons
- Closing menu on link click still works; theme clicks should not force-close unless desired (prefer keep open while choosing).

### JS (`interactions.js`)

- Replace select-based `initThemeControls` with dropdown + family buttons + scheme controls.
- Integrate with `initNavToggle` so mobile theme lives inside `#primary-nav` (or a single menu container shared by nav + theme).
- Prefer one menu root for mobile to avoid two floating panels.

### Markup (`_layouts/default.html`)

Restructure header roughly as:

```html
header
  inner
    mark
    nav#primary-nav
      a…Contact
      .theme-menu (dropdown)
        button.theme-menu-toggle (chevron)
        .theme-menu-panel
          family buttons
          divider
          scheme sun/moon
    button.nav-toggle (mobile only)
```

CSS shows panel as popover on desktop; on mobile panel contents reflow as menu section (no floating popover, or full-width inside open nav).

---

## 5. Readme width

**Constraints:** `README.md` remains valid for GitHub profile README (markdown/HTML as today). Site only styles the included markup.

**Fixes in site CSS only:**

1. Remove desktop `width: 60%` on `.intro-copy` / `.core-stack-badges` (primary narrow culprit).
2. Let col 1 use full `minmax(0, 1fr)` next to profile image column.
3. Optionally restore container toward `min(1080px–1120px, calc(100% - 2–3rem))` if still tight after (1).
4. Keep mobile `width: 100%` behavior.
5. Do not break GitHub-only alignment attributes in README.

---

## 6. Core stack content + typography

### Section framing (`index.md`)

- Eyebrow: e.g. “How I build” (or keep “Languages and tools” only if still accurate).
- H2: keep “Core stack” or “What I build with” — prefer outcome-leaning subcopy.
- Section blurb: one sentence on systems you ship (APIs, async imports, SQL-heavy work, ops surfaces) — not “toolkit list.”

### Left: tech cloud

Keep as visual primary tools (Python, Go, TS, React, Django, Postgres, AWS, Redis, Docker, gRPC). No structural change required beyond any theme token fixes for pill contrast.

### Right: four capability cards

Replace Backend / Frontend / Data / Infra laundry lists with outcome titles + short proof lines. Suggested set (copy finalizable in implementation):

1. **APIs & services** — durable HTTP/gRPC APIs, contracts, versioning; Python/Go/Node.
2. **Product UI** — TypeScript React/Vue surfaces, design-system quality, operational UIs.
3. **Data paths** — SQL-heavy workflows, queues, idempotent imports; Postgres/Redis/async.
4. **Run & observe** — deploy, alert, debug production; AWS/Docker/metrics/logs.

Each card: title + 1–2 sentences max. Tools support the claim; no comma-soup.

### Typography

- Keep reduced base (`15px`) unless cards feel cramped; prefer card hierarchy over bumping global size.
- Capability titles: existing `h3` display treatment is fine; ensure muted body readable (`--muted` contrast per theme).
- Section heading grid stays; tighten only if stack layout feels sparse after copy shortens.

---

## 7. Extra polish (in scope if cheap)

1. Themeable career path stroke (required with multi-theme).
2. Active family + scheme clear focus/hover styles matching existing pills.
3. After work: stage `_themes.scss` with layout/js/scss together (untracked file must not ship alone).
4. Note: branch behind origin metrics commits — rebase/pull before PR to avoid noise conflicts.

### Explicitly out of this pass

- `prefers-color-scheme` default when no localStorage
- Swatch color dots (nice-to-have; text labels enough)
- Experience/ventures redesign

---

## Files to touch

| File | Change |
|---|---|
| `assets/css/_themes.scss` | Correct Latte/Mocha/Dracula; softer noise opacities; clean semantic map |
| `assets/css/style.scss` | Theme menu styles; header order; restore node absolute; readme width; optional noise SVG; path color |
| `_layouts/default.html` | Chevron dropdown markup; remove mid-header select; mobile menu structure |
| `assets/js/interactions.js` | Dropdown theme logic; mobile menu integration |
| `index.md` | Stack copy rewrite; path stroke themeable |
| `README.md` | Only if profile-visible stack badges need zero change (prefer CSS-only) |

---

## Acceptance criteria

1. Warm light/dark unchanged in character; Catppuccin Latte/Mocha and Dracula dark match official-ish palettes on cards, text, accents.
2. Grain present but not gritty/dirty.
3. Timeline path + nodes align on desktop and mobile.
4. Desktop: theme chevron immediately right of Contact; panel has families + sun/moon footer.
5. Mobile: themes only inside hamburger after Contact + divider.
6. Readme intro uses wider text column on desktop; GitHub profile README still renders correctly.
7. Stack section reads as capabilities; no “service architecture under toolkit” mismatch.
8. Theme preference persists across reload; no FOUC flash of wrong theme.
9. No hard-coded warm-only reds left on multi-theme chrome (path, major accents).

## Verification

- Local Jekyll serve: toggle all 3 families × 2 schemes.
- Resize across 840px breakpoint: menu placement + theme section.
- Scroll experience: nodes track path, active state still works.
- Spot-check README on GitHub preview vs site intro width.
- Confirm `_themes.scss` included in commit with consumers.

## Risks

- **Jekyll Sass `@use "themes"`** depends on `_themes.scss` shipping; untracked file is a release footgun.
- **Dracula light** has no official palette — document as inspired; prioritize contrast over purity.
- **Mobile menu + dropdown** can double-bind click-outside handlers — one menu controller preferred.
- **Container widen** may reflow metrics row; check stats grid after width change.
