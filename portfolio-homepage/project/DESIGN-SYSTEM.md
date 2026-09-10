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
| Pill | `999px` | Buttons, tags, LinkedIn pill |
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

### Pill — tertiary (LinkedIn)
```
font-family: 'IBM Plex Mono', monospace;
font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
color: #4a4a4a; border: 1px solid #e2ded6;
border-radius: 999px; padding: 12px 20px;
white-space: nowrap;
```
Matches the primary button's height. Sits 8px from the Contact button, separated from
the page links by a `1px × 20px` `#e2ded6` divider.

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
  inside the dialog (now including the zoom toggle). Focus moves to Close on
  open and returns to the thumbnail that opened it on close.
- Expanded image: `border-radius: 12px`, `box-shadow` = Lightbox shadow (see Radii & elevation above)

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

### Header (all pages)
Single row, one hairline below:
```
[logo 80px]  ————————  [page links]  |  [LinkedIn pill]  [Contact button]
```
- Logo: `assets/berit-logo.png`, `height: 80px` (same in header and footer) —
  large enough that the "UX & Product Designer" role line under the
  wordmark stays legible
- `border-bottom: 1px solid #eeece7; padding-bottom: 16px`
- Homepage links: Selected case studies · About
- Case-study pages: `← Back to work` in place of the page links
- Contact button scrolls to `#contact` on the same page (`html { scroll-behavior: smooth }`)

### Focus & selection state
Not covered by the original design files (no interactive states there) — added in
code and applies site-wide:
```
:focus-visible { outline: 2px solid #FC890C; outline-offset: 2px; border-radius: 4px; }
::selection { background: #FC890C; color: #222222; }
```

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
assets/<client>.png        Client logos, normalized to #222222 — never redraw
case/kem-*.png             Industrial data case screenshots
```

Client logo row: Kemira, University of Helsinki, Syke, Digione, Espoo, Vantaa,
Fintraffic, Cardiff University, CSC, Vero, Volkswagen — one row, uniform height,
`#222222`.

---

## 9. Technical constraints

- Static HTML + CSS. No JS, no frameworks, no animations, no hover/interactive states
  in the design files (interactivity is added later in code)
- Real HTML text everywhere — no text baked into images
- Inline styles in the design components; only `@font-face`, `@keyframes` and body
  resets belong in a style block
- `a` and `a:hover` colors are always declared (`#222222`) so links never render
  browser-default blue
