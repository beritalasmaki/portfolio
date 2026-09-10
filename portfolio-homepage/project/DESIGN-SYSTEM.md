# Berit Alasmäki — Portfolio Design System

Single source of truth for the portfolio site. Values originate from the built design
files (`Portfolio Hero.dc.html`, `Case Study - Industrial Data.dc.html`), with two
categories of deliberate departure from them, both called out inline below: WCAG AA
contrast corrections (the Muted, Accent dark and Accent hero tokens), and real interactivity that
those static files explicitly deferred to code (the filmstrip gallery's lightbox,
the sticky TOC's scroll-spy, focus/selection states). Use these exact values — do not
introduce new colors, sizes or radii without adding them here first.

---

## 1. Color

### Core palette

| Token | Hex | Use |
|---|---|---|
| Ink | `#222222` | All primary text, headlines, dark panels, filled buttons. **Never pure black.** |
| Body | `#4a4a4a` | Body copy, secondary paragraphs |
| Muted | `#6b6660` | Mono labels, captions, eyebrows, meta text, copyright line. **Supersedes `#8a8580`** — that value is only 3.65:1 on white, which fails WCAG AA (4.5:1) at the small sizes this token is used for everywhere. `#6b6660` passes at 5.69:1. (Absorbs the old separate "Footer meta" token — same value, one name now.) |
| Accent | `#FC890C` | Orange from the logo flourish. Underlines, markers, dots, borders, the contact block background — **decorative use only.** Never used as text color on a light background: raw accent is ~2.4:1 contrast, which fails WCAG AA even at large-text sizes. |
| Accent dark | `#A45B0B` | Accent-colored **text** at normal (non-large) sizes on light backgrounds — the sticky TOC's active-item text (15px). Passes AA at 5.15:1 (needs 4.5:1 at these sizes). |
| Accent hero | `#D9770C` | Accent-colored **text** at large-bold sizes only — currently just the hero's "forward." (part of an 800-weight, 40–84px heading). WCAG AA only requires 3:1 for large/bold text, so this stays closer to the true brand orange than Accent dark while still passing at ~3.2:1. Not for use at normal text sizes — use Accent dark there instead. |
| Background | `#ffffff` | Page background |
| Panel | `#f5f3ee` | Cards, step cards, quote blocks, tab panes |
| Panel alt | `#f0eee9` | Inactive tabs (slightly darker than white so tabs read against the page); also used as the loading-placeholder background behind case-study thumbnails |
| Soft | `#fbfaf7` | Very light fills (image frames, nested blocks) |
| Rule | `#eeece7` | Hairline dividers, light card borders |
| Rule strong | `#e2ded6` | Medium borders, inner card dividers, pill outlines |
| Ink alt | `#3a3a3a` | Dark-on-dark separators inside the dark tab column; also the body-text color for the highlight-quote callout inside each tab pane |
| Overlay | `rgba(34, 34, 34, 0.8)` | Lightbox backdrop (Ink at 80%) |

### Rules
- Two neutral background tones maximum per page (`#ffffff` + `#f5f3ee`).
- Accent orange is used sparingly: markers, underlines, active states, borders, and
  exactly one large closing block (the contact section) — **never as text color on a
  light background** (see Accent dark above).
- Text on the orange contact block is `#222222`, never white.
- Client / customer logos are normalized to `#222222`.

---

## 2. Typography

### Families

```
Headings & UI:  Manrope (400, 500, 600, 700, 800) — Google Fonts
Labels & meta:  'IBM Plex Mono' (400, 500) — Google Fonts
Fallbacks:      Helvetica, Arial, sans-serif / monospace
```

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type scale (fluid, identical on every page)

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Hero H1 | `clamp(40px, 6.2vw, 84px)` | 800 | 1.02 | -0.03em |
| Contact H2 | `clamp(34px, 5vw, 76px)` | 800 | 1.02 | -0.03em |
| Section H2 | `clamp(30px, 3.6vw, 52px)` | 800 | 1.05 | -0.025em |
| Card / pane H3 | `clamp(22px, 2.3vw, 32px)` | 800 | 1.1 | -0.02em |
| Sub-heading H4 | `clamp(19px, 1.7vw, 24px)` | 700 | 1.2 | -0.015em |
| Step numeral | `clamp(30px, 3vw, 42px)` | 800 | 1 | -0.03em |
| Lead paragraph | `clamp(16px, 1.35vw, 19px)` | 400 | 1.55–1.6 | — |
| Body | `clamp(15px, 1.15vw, 17px)` | 400 | 1.6 | — |
| Body emphasis | `clamp(15px, 1.2vw, 17px)` | 600–700 | 1.4 | — |
| Small body | `clamp(14px, 1.1vw, 16px)` | 400 | 1.6 | — |
| Closing banner | `clamp(16px, 1.4vw, 20px)` | 700 | 1.45 | — |
| Nav link | `15px` | 600 (700 in the contact block's closing links) | — | 0.01em |
| Mono label (section) | `11px` | 400 | — | 0.14em, uppercase |
| Mono label (emphasis) | `12px` | 500 | — | 0.14em, uppercase |
| Pill / button label | `13–15px` | 600 | — | 0.01–0.06em |
| Footer meta | `13px` | 400 | — | — |

### Rules
- `text-wrap: pretty` on every heading and paragraph.
- `white-space: nowrap` on all nav items, buttons, pills and captions — except
  the sticky TOC's items, which wrap (see Sticky TOC below).
- Never break words mid-character; no hyphenation.
- Body copy `max-width: 30–36em` — except case-study page body text
  (hero intro, impact intro, text sections, challenges), which reads at a
  fixed `800px`: that layout has a sticky TOC eating into the gutter, so
  the content column has more width to spare than the homepage's simpler
  stacked sections do.
- Mono is used only for labels, eyebrows, captions and numbering — never for body copy.

### Section numbering
Sections carry a mono eyebrow in the pattern `NN / lowercase label`, e.g.
`01 / your next move`, `02 / selected case studies`, `03 / about`.
Emphasized variants (inside tab panes) are **Ink** at 12px/500 — matching the
Mono label (emphasis) row above — preceded by a 24×2px accent rule.

---

## 3. Spacing

8px base scale. Every padding, margin and gap is a multiple of 8.

```
8 · 16 · 24 · 32 · 40 · 48 · 56 · 64 · 72 · 80 · 96 · 120
```

### Standard values

| Purpose | Value |
|---|---|
| Page gutter | `clamp(24px, 5vw, 72px)` |
| Section rhythm (between sections) | `clamp(64px, 9vw, 120px)` |
| Card padding | `clamp(24px, 2.6vw, 32px)` |
| Pane padding (large) | `clamp(24px, 3vw, 40px)` |
| Card footer padding | `clamp(16px, 2vw, 24px) clamp(24px, 2.6vw, 32px)` |
| Grid gap (cards) | `clamp(16px, 2vw, 32px)` |
| Grid gap (columns) | `clamp(24px, 4vw, 64px)` |
| Stack gap (in-card) | `16px` |
| Stack gap (label → value) | `8px` |
| Header / nav gap | `clamp(16px, 2.2vw, 32px)` |
| Contact block padding | `clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)` |

### Exception
- **Minimum touch target: 44px.** Icon-only interactive controls (e.g. the mobile
  nav toggle) size to 44×44px regardless of the 8px scale — this is the WCAG 2.5.5
  / platform-standard minimum tap target, not a spacing value.

---

## 4. Radii & elevation

| Token | Value | Use |
|---|---|---|
| Pill | `999px` | Buttons, tags, LinkedIn/GitHub pills |
| Card | `20px` | Cards, step cards, quote blocks |
| Frame | `14px` | Screenshot frames |
| Small | `10–12px` | Lightbox chrome, small blocks |
| Image inner | `6px` | Image inside a frame |

| Shadow | Value | Use |
|---|---|---|
| Frame default | `0 8px 22px rgba(34, 34, 34, 0.06)` | Screenshot frames |
| Frame accent | `0 16px 34px rgba(34, 34, 34, 0.16)` | One "clickable example" frame per gallery |
| Lightbox | `0 12px 30px rgba(34, 34, 34, 0.22)` | Expanded image |

Borders are always `1px solid` — `#eeece7` (light) or `#e2ded6` (medium).

---

## 5. Components

### Button — primary (filled)
```
background: #222222; color: #ffffff;
font-size: 15px; font-weight: 600; letter-spacing: 0.01em;
border-radius: 999px; padding: 16px 32px;   /* nav variant: 12px 24px */
white-space: nowrap;
```

### Button — secondary (outlined)
```
border: 1px solid #e2ded6; color: #222222;
font-size: 15px; font-weight: 600;
border-radius: 999px; padding: 16px 32px;
white-space: nowrap;
```

### Pill — tertiary (LinkedIn, GitHub)
```
font-family: 'IBM Plex Mono', monospace;
font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
color: #4a4a4a; border: 1px solid #e2ded6;
border-radius: 999px; padding: 12px 20px;
white-space: nowrap;
gap: 6px; /* between the brand mark and the label */
```
Matches the primary button's height. LinkedIn then GitHub sit 8px apart, then 8px
from the Contact button, separated from the page links by a `1px × 20px` `#e2ded6`
divider. Each pill carries its brand's icon (14×14px, `fill: currentColor` so it
tracks the pill's text color through hover/focus) before the label — purely
reinforcing, since the label text already says where the link goes, so the icon
itself is `aria-hidden`.

### Text link — accent underline
```
font-size: 15px; font-weight: 600; color: #222222;
border-bottom: 1px solid #FC890C; padding-bottom: 8px;
align-self: flex-start; white-space: nowrap;
```
Used for "Explore the case", "See the project behind the answer", "Get to know me on LinkedIn".

### Card (content / step / case study)
```
background: #f5f3ee; border-radius: 20px; overflow: hidden;
display: flex; flex-direction: column;      /* stretch in a grid row */
```
- Body: `padding: clamp(24px, 2.6vw, 32px)`, `gap: 16px`
- Optional footer: `margin-top: auto; border-top: 1px solid #e2ded6;`
  with a mono `Outcome` label + bold value
- Case-study cards: the image sits flush at the top with **no gap** — image and text
  form one seamless card (image `border-radius: 0`, card clips it via `overflow: hidden`)
- Cards in the same grid row are always equal height (`align-items: stretch`)

### Tag / method label
Understated, no pill background:
```
font-size: clamp(14px, 1.1vw, 16px); font-weight: 600; color: #222222;
white-space: nowrap;
```
Separated by a `1px × 16px` `#e2ded6` divider or 24px+ spacing.

### Tabs (homepage "your next move")
- Single joined block, `border-radius: 20px; overflow: hidden`, no gap between column
  and pane
- Tab column: inactive `#f0eee9`, **active `#222222`** with `#ffffff` text
- Tabs stretch to fill the block height equally
- Pane background matches the tab column tone so the two read as one surface
- Pure CSS (`:target` / radio), no JS
- **Below `md`, this becomes an accordion instead** — two separate markup
  blocks (desktop tablist+pane hidden, mobile accordion shown), not one
  responsive layout. Each question is its own disclosure button (`4px` left
  border, same active-state ink/white treatment as the desktop tab column);
  its answer — same eyebrow/headline/body/highlight/link content as the
  desktop pane — renders directly below that question when expanded, not in
  a shared panel after the full list. One open at a time; the first
  question's answer is open by default (matching the desktop panel, which
  always shows an active answer), the rest start collapsed. `aria-expanded`
  + `aria-controls` on the button, `role="region"` on the panel, panel
  conditionally rendered (not the `hidden` attribute).

### Screenshot frame — filmstrip gallery (case study pages)
```
background: #ffffff; border: 1px solid #eeece7; border-radius: 14px; padding: 8px;
box-shadow: 0 8px 22px rgba(34, 34, 34, 0.06);
img { border-radius: 6px; display: block; }
```
Single-row "filmstrip": every thumbnail is a uniform **210px tall**, width follows
each image's own aspect ratio (desktop shots read wider, mobile shots narrower) —
not the two-tier desktop/mobile CSS Grid an earlier draft of this doc described.
- `flex-wrap: wrap` — never horizontal-scroll; thumbnails wrap onto the next row on
  narrow viewports
- Hover/focus: shadow steps up to Frame accent (see Radii & elevation)
- Caption: mono 11px `#6b6660`, uppercase, nowrap, sits below the frame
- Clicking a thumbnail opens the Lightbox (below) — real click-to-expand
  functionality, not a static mockup affordance

### Lightbox (case study images)
Real interactive component (not the design files' CSS-only `:target` version):
- Backdrop `rgba(34, 34, 34, 0.8)`, `position: fixed; inset: 0`
- Header bar `#222222`, `border-radius: 12px` (within the general Small radius
  range, 10–12px), `padding: 12px 16px`; shows the caption, an image counter
  (`· N/M`) when there's more than one image, Previous/Next pill buttons, and a
  Close pill button
- Cursor `zoom-in` on the thumbnail, `zoom-out` on the backdrop
- Click-to-zoom on the expanded image itself: opens at 60% of its actual
  (natural) pixel size — cursor `zoom-in` — click (or Enter/Space, it's a
  real button) to jump to 100% true size — cursor `zoom-out` — click again
  to return to 60%. Resets to 60% every time a new image opens or Previous/
  Next changes the image. The image sits in its own scrollable region below
  the header bar, so a 100%-size image taller or wider than the viewport
  scrolls inside that region while the header (caption, Previous/Next,
  Close) stays fixed in place.
- Keyboard: `Escape` closes, `←`/`→` navigate between images, `Tab` is trapped
  inside the dialog (now including the zoom toggle, on viewports where it
  exists). Focus moves to Close on open and returns to the thumbnail that
  opened it on close.
- Expanded image: `border-radius: 12px`, `box-shadow` = Lightbox shadow (see Radii & elevation above)
- **Click-to-zoom is desktop-only** (`≥768px`, checked via `matchMedia`, same
  breakpoint the header's mobile nav uses). Below that, there's no toggle at
  all: the expanded image just renders at one fit-to-width size
  (`width: 100%; height: auto`, no `zoom-in`/`zoom-out` cursor, no button
  wrapper) — a tap-to-zoom toggle only fights with pinch-zoom/scroll on a
  touch viewport, and there's no pixel-detail gain from jumping to 100% on a
  small screen the way there is on desktop.

### Sticky TOC (case study pages)
- Two-column layout under the top header: TOC left (`280px`), content right
- `position: sticky; top: 32px`
- `background: #ffffff`, `border: 1px solid #eeece7`, `border-radius: 20px`, `padding: 24px`
- Items: 15px/600, 16px gap. **Exception to the general nav `white-space: nowrap`
  rule** (§2): TOC labels wrap onto a second line instead of overflowing the
  column — some section headings (e.g. "Challenges & Problem-Solving") are too
  long to fit one line even at this width.
- **Active item:** Accent dark (`#A45B0B`) text + `font-weight: 700` + `4px` left
  border in `#FC890C` + a 6px accent dot before the label (both together, not
  either/or) + `border-radius: 0 16px 16px 0`
- Inactive items: `#4a4a4a`, `font-weight: 600`, flat `4px` `#eeece7` left border
  (an always-present track the active state highlights against)
- Real scroll-spy (IntersectionObserver) drives `activeId` — not the static
  single-example the design files show
- No logo, contact info or back-link inside the TOC — those live only in the top header
- **Below `lg`, this collapses into a dropdown** instead of the always-expanded
  sidebar (which would otherwise push the whole article down): a native
  `<details>` disclosure, summary label "Navigate to...", chevron rotates
  180° open. Same link list, same scroll-spy `activeId` highlighting, as the
  desktop sidebar — both are driven by one shared IntersectionObserver.
  Selecting a link closes the dropdown. `<details>` chosen over a custom
  JS-toggled panel for its built-in keyboard/screen-reader disclosure
  semantics with no extra wiring.

### Header (all pages)
Single row, one hairline below:
```
[logo 80px]  ————————  [page links]  |  [LinkedIn pill]  [GitHub pill]  [Contact button]
```
- Logo: real vector mark (blob + signature paths, exact 1:1-scale overlay
  measured against the original `berit-logo.png`) + real text ("Berit
  Alasmäki" / "UX & Product Designer"), not a flat image — `height: 80px`
  (same in header and footer), large enough that the role line under the
  wordmark stays legible. See `Logo.tsx` and the Entrance sequence below.
- `border-bottom: 1px solid #eeece7; padding-bottom: 16px`
- Homepage links: Selected case studies · About
- Case-study pages: `← Back to work` in place of the page links
- Contact button scrolls to `#contact` on the same page (`html { scroll-behavior: smooth }`)

### Focus & selection state
Not covered by the original design files (no interactive states there) — added in
code and applies site-wide:
```
:focus-visible { outline: 2px solid #222222; outline-offset: 2px; border-radius: 4px; }
::selection { background: #FC890C; color: #222222; }
```

### Homepage entrance sequence
Plays once on load (homepage only — `Header`'s `animateLogo` prop), never on
scroll or re-render. Every stage is `ease-out`, deliberately unhurried — an
earlier, snappier pass (600ms logo, 700ms line segments) read as an instant
snap rather than a calm draw, since ease-out front-loads most of the visible
motion into the first fraction of the duration. The hero line and text now
start once the logo is mostly (not fully) drawn — waiting for its complete
1300ms read as a dead pause before anything else moved — so the whole thing
settles by ~2.55s, down from ~3.2s. `prefers-reduced-motion: reduce` shows
every element in its finished state immediately (site-wide kill-switch, see
the media query in `globals.css`), not just for this sequence.
1. **Logo signature mark** (`Logo.tsx`, 0–1300ms) — the blob is present from
   frame one; the black signature strokes in left to right. It's a filled
   brush-stroke shape, not a simple open line, so stroking it directly would
   render as a thin outline of the silhouette rather than "the pen writing
   the signature" — instead a wide horizontal bar, itself drawn with the
   same `pathLength`/`stroke-dasharray`/`stroke-dashoffset` technique as the
   hero line below, sweeps across an SVG `<mask>` that progressively reveals
   the real, unaltered signature path underneath.
2. **Hero line** (`Hero.tsx`, starts at 650ms, each path 900ms, same
   relative stagger as before) — overlaps the logo's own tail end (ease-out
   means it already reads as essentially drawn by 650ms/~60% of its
   duration) rather than waiting for the logo to fully finish, finishes
   around 2550ms.
3. **Headline → subheadline → buttons** (800ms / 980ms / 1160ms) — fade up
   (~12px, 700ms each), overlapping the hero line's own draw rather than
   waiting for it to finish. Case-study pages have no hero to lead into, so
   their header logo, and the footer's everywhere, just render finished.

### Scroll reveal (`Reveal.tsx`)
Below-the-fold content "grows in" as the user scrolls to it, rather than
just appearing: every major section on the homepage (except `Hero`, which
has its own load-in sequence above) and every section of a case-study page
is wrapped in a shared `<Reveal>` component.
- Starts `opacity: 0`, `translateY(28px) scale(0.97)`; transitions to
  `opacity: 1`, `translateY(0) scale(1)` over `700ms ease-out`
- Driven by a real `IntersectionObserver` (`threshold: 0.15`,
  `rootMargin: "0px 0px -10% 0px"` — triggers a little before the section's
  top edge reaches the bottom of the viewport), not a scroll listener
- **Fires once per section** — the observer disconnects after the first
  reveal, so scrolling back up and down never replays it; this is a one-time
  entrance, not a repeating effect
- **Progressive enhancement, not a requirement**: the hidden pre-reveal state
  is only ever applied client-side after mount (via a layout effect, so
  there's no flash of the visible state first). Server-rendered HTML, and
  any visitor whose JS fails or hasn't hydrated yet, sees the section fully
  visible from the start — content is never gated on JS to become visible
- `prefers-reduced-motion: reduce` collapses the transition to effectively
  instant via the site-wide kill-switch in `globals.css`, same as every
  other animation on the site — the section still becomes visible, it just
  doesn't visibly move
- Implemented as a single wrapping `<div>` around each section (not a hook
  each section calls, and not `cloneElement` onto the child) — the wrapper
  carries no box of its own (no padding/border/background) and sits in
  normal block/flex flow, so it doesn't disturb the `mt-rhythm` /
  `gap-[...]` spacing between sections
- Section-level only in this pass — individual cards within a grid (case
  study cards, impact cards, process steps) reveal together with their
  parent section rather than staggering card-by-card

### Back to top
Fixed bottom-right, appears on scroll, links to `#page-top`. Ink pill, mono label,
`shadow-lightbox`.

### Contact block (page closer)
```
background: #FC890C;
margin: clamp(64px, 9vw, 120px) calc(-1 * clamp(24px, 5vw, 72px)) 0;
padding: clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px);
```
Full-bleed. All text `#222222`. Contains the headline, subtext, email
(`berit.alasmaki@gmail.com`, 2px ink underline), the freelance availability line, and a
LinkedIn link.

---

## 6. Layout

- Content max width: the page uses full width with gutters; text blocks cap at 30–36em
- Two-column sections: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Card grids: `repeat(auto-fit, minmax(280px, 1fr))`
- All grids wrap; nothing scrolls horizontally
- Fluid everywhere except fixed-size assets — use `max-width`, never fixed `width`

---

## 7. Voice & copy

- Colleague describing how they work inside a team, not a consultant pitching services
- Concrete over generic: name the domain and the outcome, skip taglines
- No "fresh energy", "clarity not deliverables", or CV-style phrasing
- Sentence case in headlines; mono labels are lowercase after the number
- Availability is stated once, quietly, near the contact info

---

## 8. Assets

```
assets/berit-logo.png     Logo: orange flourish + "Berit Alasmäki" + "UX & PRODUCT DESIGNER"
assets/berit-photo.png    Profile photo on the orange organic blob
assets/<client>.png        Client logos, normalized to #222222 on a transparent
                            background (alpha computed from source luminance,
                            not a hard cutout) — never redraw
case/kem-*.png             Industrial data case screenshots
```

Client logo row: Kemira, University of Helsinki, Syke, Digione, Espoo, Vantaa,
Fintraffic, Cardiff University, CSC, Vero, Volkswagen — `#222222`, transparent
PNG (source files came in on an opaque white background; converted once so the
mark sits directly on the page, no visible card behind it).
Grid of uniform, evenly padded cells (3 cols mobile / 4 cols `sm` / 11 cols `lg`,
fixed height per breakpoint) rather than one bare row of differently-sized
logos — no card box (no background/border/radius) behind each cell, just
even spacing. Each logo scales to fit its cell via `object-fit: contain`
(Next Image `fill` + `object-contain`, `16px` padding baked into the image's
content-box), so every cell reads as the same size regardless of that logo's
own aspect ratio.

---

## 9. Technical constraints

- Static HTML + CSS. No JS, no frameworks, no animations, no hover/interactive states
  in the design files (interactivity is added later in code)
- Real HTML text everywhere — no text baked into images
- Inline styles in the design components; only `@font-face`, `@keyframes` and body
  resets belong in a style block
- `a` and `a:hover` colors are always declared (`#222222`) so links never render
  browser-default blue
