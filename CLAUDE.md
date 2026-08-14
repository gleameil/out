# CLAUDE.md — `/out/`

This file orients an AI assistant (or future developer) to the `/out/` codebase. Read this before touching anything. Fuller documentation lives alongside this file:

- `doc-out-january.md` — January weather dispatcher and shared infrastructure
- `doc-wordstorm.md` — poemstorm and whiteout weather (all click-driven text experiences)
- `doc-snowsight.md` — snowsight weather (branching dialogues, drawn characters)
- `doc-mountain.md` — clear weather (text, walk, upAndDown, maze stub)
- `doc-night.md` — night weather (stars, clouds, ambient music)
- `doc-out.md` — cloudy weather and the `out()` experience (George MacDonald poem, dialogue system, desolation)
- `doc-instrument.md` — the Web Audio API synthesizer used throughout poemstorm/whiteout

---

## What This Is

`/out/` is one half of *Out of Tales* — a browser-based net art piece / interactive book by Meg Moseman. It renders Evernost: what is visible through the window of Jennie's bedroom when the player in `/in/` opens it. Its sister repo `/in/` is the room; `/out/` is what lies beyond.

`/out/` is not a room to inhabit — it is a sky to look at. The experience is determined entirely by time: what weather is currently active for the current Evernostian date and time-of-day. The player cannot navigate or explore; they encounter whatever is outside.

**January** (complete): the window opens onto Evernostian January — a sky whose weather changes by day and hour. Six weather types rotate through the schedule: night, cloudy, poemstorm/wordstorm, whiteout, snowsight, and clear.

**February** (not yet implemented in `/out/`): the `/in/` repo has an active February; `/out/`'s February content has not been built.

The experience runs entirely in the browser. No framework — vanilla TypeScript, bundled with Parcel. No backend — all state is passed in via query parameters from `/in/`, with no `localStorage` dependency in `/out/` itself (time and audio permission arrive as URL params).

Live at: `https://gleameil.github.io/out`
Sister repo: `https://gleameil.github.io/in`

---

## The World

A few things you must not get wrong:

**Jennie** (with an *-ie*) is the main character — small, scarcely real, the player's host. Her room is in `/in/`; `/out/` is what she sees.

**Jenny** (with a *-y*) is the narrator — the author herself, intrusive and philosophical. She appears as a character in the snowsight dialogues. One letter apart, two distinct beings. Do not blur this distinction.

**Evernost** is everything outside the Kingdom — where the window looks out. Malleable in time, vast.

**Evernostian time** is the in-world clock. It is a `Date` object using real 2024 calendar dates as substrate: January 2024 = the January experience, February 2024 = the February experience. What you see in `/out/` depends entirely on this time.

---

## Architecture in One Page

```
index.ts
  └── window.onload → start()
        ├── handleQueryParams()       reads ?time= and ?canPlay= from URL
        ├── createSoundControl()      appends sound toggle to <html> if absent
        ├── removeByClassName('under-construction')
        └── getTime().getMonth() === 0
              ├── true  → setUpWindow()    January weather dispatcher (places/january/)
              └── false → out()            all other months (places/out/)
```

**`underConstruction()`** is a soft gate that was formerly used to hide incomplete work. It renders an "UNDER CONSTRUCTION :)" span in Rock Salt font and registers a one-time `keydown` listener: type the letters of `'evernost'` in sequence to call `start()` and proceed. As of current development, `window.onload` calls `start()` directly — the gate is bypassed.

**The month branch:** `/out/` dispatches on `getTime().getMonth()` — `0` for January (the complete experience), anything else for the stub `out()`. This is the `/out/` equivalent of `/in/`'s `comeHome()` → `homeJanuary()` / `homeFebruary()` dispatch.

---

## Two-Repo Contract

`/in/` and `/out/` communicate via URL query parameters only. `/out/` has no `localStorage` reads on its own; all state it needs arrives at load time.

| Parameter | Direction | Meaning |
|-----------|-----------|---------|
| `time` | `/in/` → `/out/` | Current Evernostian timestamp (numeric) |
| `canPlay` | `/in/` → `/out/` | Whether audio is enabled |

`handleQueryParams()` (from `shared/helpers`) reads these on load. The base URL for `/out/` lives in `/in/` as `OUT` in `places/home/constants.ts` — a localhost version is commented out directly adjacent. **This has been accidentally shipped uncommented before.** The right fix is an environment variable; until then, treat that line as a known hazard.

Any change to these parameter names must be coordinated across both repos simultaneously.

**`JANUARY_SCHEDULE` is duplicated across both repos.** It must be kept in sync manually. In `/in/`, it drives the laptop's weather forecast; in `/out/`, it drives what weather actually renders. A divergence causes the forecast to lie.

---

## January Weather System

The January experience is a sky that changes by day and time of day. Eight named time-of-day slots (wee hours, dawn, sunrise, morning, midday, afternoon, sunset, dusk, night) are defined in `JANUARY_SCHEDULE` — a 31-entry array, one per day, each a `TimeForDay` record mapping slot names to `{ hours, minutes, weather }`. The `weather` field is the key: it determines which weather renderer is active for any given moment.

See `doc-out-january.md` for the full weather dispatch architecture. The content of each weather type is documented in the reading layer at `of-evernost-out-reading-layer.html`.

### Weather Types

**Night** — Procedurally generated. Clouds fade in and out; stars twinkle; ambient music plays. No text. Entirely visual and sonic — a duration experience. The music is an original composition: a simple, eerie ascending figure in a major scale, performed on recorder with ambient space sound effects. This weather type does not transcribe.

**Cloudy** — Routes to `out()`: a gray sky with procedurally generated clouds, words from George MacDonald's moon poem drifting and dissolving, a text input through which the player can speak into the void (typed and selected words join the floating pool), and looping desolation audio. Escape in January via clicking a snowflake or typing `'desolation'`; no escape affordance yet for February. See `doc-out.md`.

**Poemstorm** — Poems delivered a click at a time, one line or stanza per click. Each click also plays a bell-like tone (strong attack, quickly fading) arranged in scales that vary by context; a future update will move to chords. Color scheme is determined by time of day (see Design System below). The full poem catalog is in `doc-out-january.md`.

**Wordstorm** — Phrases from a pool displayed at pseudo-random angles, positions, and font sizes across the sky — a storm of language rather than a sequence. Same bell-tone click mechanic as poemstorm. Two pools: *Midday Storm* (concentrated, image-driven, visionary in register) and *Whiteout* (large, humorous, deliberately mundane millennial interiority). A third variant, *All by Dispensation*, is an interstitial substitute — wordstorm scatter behavior with compressed, linked phrase-poetry that chains by shared words. Shares code with poemstorm in the codebase.

**Snowsight** — Philosophical and essayistic dialogues set against a sky whose color depends on time of day. Linear with occasional player choices. Two figures are always present: Jenny (left) and You (right — Jenny's image reversed and filled as silhouette, color shifts with time-of-day via CSS filter). Other Jennies appear and disappear, cycling through drawn frames in stop-motion animation. Each dialogue is keyed to a specific day and time. Console log text accompanies some dialogues — meta-commentary addressed to the visitor — visible only in the browser console in the live experience.

**Clear** — The novel-in-progress, rendered against monochrome drawn landscapes. Four modes: `text` (prose accumulates left, drawn image right), `walk` (animated figure traverses a progressively detailed landscape, click by click), `upAndDown` (split-screen: walk on top half, text on bottom against laptop-room image), and `maze` (not yet implemented — stub that silently advances). No audio. The click mechanic uses the poemstorm bell instrument. See `doc-mountain.md`.

### Time-of-Day Color Schemes

Each weather type that renders text is colored by the active time-of-day slot:

| Time slot | Background | Text |
|-----------|------------|------|
| Wee hours | Indigo-to-black gradient | White |
| Dawn | Dull violet | Black |
| Sunrise | Violet-to-gold gradient | Red |
| Morning | Blue sky | White |
| Midday | Cyan | Yellow |
| Afternoon | Blue sky | White |
| Sunset | Violet-to-gold gradient | Red |
| Dusk | Dull violet | Black |
| Night | (night renderer — no text) | — |

These are defined in `OUT_COLORS` (and/or the `Color`-class equivalents in the shared design system). Dawn and dusk share a scheme; morning and afternoon share a scheme; sunrise and sunset share a scheme. See `doc-out-january.md` for the exact constants.

---

## Snowsight Characters

The snowsight dialogues have a defined cast. Each character is a drawn figure with a distinct visual identity, font, and panel color:

**Jenny** — Pencil on white, against black. Heavy-lidded eyes, asymmetric, expression between intensity and tiredness. Hair in loose energetic strokes. Anchored left. Font: Nanum Brush Script (brush script). Panel: gray. The author-narrator — intrusive, self-aware, given to parenthetical self-argument.

**You** — Jenny's image reversed and filled as solid silhouette, facing away. Color shifts with time of day via CSS filter. Anchored right. Font: Montserrat. Panel: white. The player's proxy — Jenny writes words for You, which is acknowledged in the console log.

**goldJennie** — Yellow child, hair as flame or crown, drawn in warm crayon. Five frames cycling in stop-motion: a continuous revolution (arms up, tipping back, horizontal, inverted, returning). Pink-red outlines at joints. Font: Indie Flower. Panel: yellow. The ecstatic child, the sun-self.

**greenJennie** — Teenage girl in green and teal gel pen. Three frames: knowing sidelong look; head tilted sideways; wide-eyed open-mouthed. Font: Indie Flower. Panel: dull green. The wry, teenage self.

**indigoJennie** — Young teenage girl in blue ballpoint, facing forward, symmetrical, composed. Hair pinned up, settled expression. The most controlled drawing. Font: Indie Flower. Panel: indigo. The philosophical self — clear-eyed about darkness.

**jennieRed** — Not a conventional portrait. Two frames: a roughly oval face-shape surrounded by wild red scribble-marks, a single carefully-rendered red-irised eye at center. Frame 0 has small emoji hearts scattered around; Frame 1 does not (rawer). Font: Indie Flower. Panel: red. The feeling-without-containment self.

**violetJennie** — Small girl, full-body, standing barefoot. Flower-printed skirt, both hands holding a soft drawn heart to her chest. The youngest and most tender. Font: Indie Flower. Panel: pale violet with violet text.

**moonJennie** — Full robed figure, tall and narrow, three-quarters view. The robe is the drawing: long vertical stripes in metallic gel pen (purple, blue, silver, pink) flowing to the ground. A crescent moon at her side. Face barely suggested. Font: Indie Flower. Panel: dull violet. The archetype end of the Jennie spectrum.

**The Other** — A Firebird figure. No drawn image — only the dialogue bar appears when it speaks (black panel, yellow text, Montserrat). Appears exactly once in the January dialogues. Do not remove without confirming which dialogue contains it.

---

## Design System

Fonts, colors, and assets follow the same shared conventions as `/in/`. The fonts in use are loaded via Google Fonts in `index.html`: IM Fell English, Montserrat, EB Garamond, Rock Salt, Reenie Beanie, Nanum Brush Script, Indie Flower.

**`OUT_COLORS`** — the color palette for `/out/`'s weather system, parallel to `JANUARY_COLORS` and `FEBRUARY_COLORS` in `/in/`. Details pending source review.

The `Color` class migration (from raw `rgb(...)` strings to `Color` instances with `fromString`, `makeTransparent`, `isEqualTo`) is in progress in `/in/` and is present but entirely unconsumed in `/out/` — the three `*_COLOR_SET` objects are built at module load and nothing reads them. Check the source before assuming which approach is in use.

**`/out/`'s copy of `Color.fromString` was broken until August 2026** and returned opaque white for every input: it opened with `if (colorString = 'initial')`, an assignment rather than a comparison, making the condition always truthy and the rest of the function dead. Fixed, along with three parser bugs shared with `/in/`. See `docs-shared/doc-shared.md` for the full account. The lesson worth keeping: neither repo type-checked, so a single `=` sat in shared-design-system code indefinitely. Both repos now have a `tsconfig.json` and an `npm run typecheck` script.

**The instrument system** (`shared/instrument/`) — a Web Audio API synthesizer using equal-temperament interval math and named tonal worlds (scales defined by multiplier arrays). Two instrument types: `bell` (strong attack, 5-second decay — the poemstorm/wordstorm click tone) and `harp` (slow swell, exponential release — modelling an **Aeolian harp**, sounded by wind rather than by hand). The Midday Storm sun is the Aeolian harp: 720 rays are the strings, the cursor is the wind. Each time-of-day slot maps to a specific timbre × tonal world pairing. Planned upgrade: chords rather than single notes per click. See `doc-instrument.md`.

**Assets** are Parcel-resolved `URL` objects. When setting `src` on an `<img>` or `<audio>` element, use the `ImageURLSrc` / `AudioURLSrc` cast pattern.

**The sound control** is appended to the `<html>` element (not `<body>`) on load, with id `sound-control`, only if it doesn't already exist. It is currently implemented as an emoji — a known debt item shared with `/in/`. The `SOUND_CONTROL_ID` constant (from `shared/sound`) is the guard.

**The homeward button** (`#homeward`) provides navigation back to `/in/`. It has a fixed position (top-right), uses IM Fell English, and is styled as a rounded pill. Only one should exist at a time.

---

## Shared Code

`/out/` has its own `shared/` directory, parallel to `/in/`'s, containing at minimum:

- `shared/time/time.ts` — `getTime()` and the Evernostian time model (same contract as `/in/`)
- `shared/helpers.ts` — `handleQueryParams()`, `createSpan()`, `expectLetters()`, `removeByClassName()` and other DOM utilities
- `shared/sound.ts` — `createSoundControl()`, `SOUND_CONTROL_ID`

How much of this is truly shared code (symlinked or copied) vs independently maintained is not yet confirmed from source review. `JANUARY_SCHEDULE` is known to be manually duplicated. Other shared utilities may be as well — confirm before editing.

---

## Known Debt (Highlights)

Full debt details will accumulate in each `doc-` file as source is reviewed. Known items from this entry point:

1. **`JANUARY_SCHEDULE` is duplicated** — must be kept in sync manually with `/in/`. A divergence causes the `/in/` laptop weather forecast to lie while `/out/` shows the true weather. **Verified in sync August 2026** — a direct diff of the two `time.januaryConstants.ts` files shows the schedule data itself is identical; the only differences are import paths, `/in/`-only exports (`END_OF_JANUARY`, `JANUARY_FAVICON`), and one comment. Re-run `diff in/src/shared/time/time.januaryConstants.ts out/src/shared/time/time.januaryConstants.ts` after touching either.
   **A second, undocumented duplication exists:** `FEBRUARY_COLORS.black` has already drifted — `rgb(70, 50, 55)` in `/in/`, `rgb(70, 50, 60)` in `/out/`. Harmless today because `/out/` renders no February, but it shows the design tokens are diverging quietly. Left unchanged pending a decision on which value is canonical.
2. **`OUT` URL in `/in/` is a comment-swap gotcha** — localhost URL lives on the adjacent line in `/in/`'s `places/home/constants.ts`; has shipped accidentally. Fix: environment variable.
3. **Sound control is an emoji** — should be a drawn asset or native browser controls. Shared debt with `/in/`.
4. **`out()` has no escape route for February** — `out()` is a full experience (cloudy weather, George MacDonald poem, dialogue system, desolation audio), not a stub. But it does not render the homeward button or any visible escape affordance. In January, players can escape by clicking a snowflake (which calls `escapeOut()`) or typing `'desolation'` as a keyphrase. In February, there are no snowflakes, so the browser back button is the only practical exit. This is half-intentional (the experience represents inescapability) but crosses into user-hostile territory. Fix: add the homeward button, or a slow fade-in of some escape affordance, for February specifically. See `doc-out.md` for the full `out()` architecture.
5. **`out()` does not accept `enterWeather` as a callback** — unlike every other weather renderer, `out()` takes no parameters and calls `setUpWindow()` directly on escape rather than receiving a callback. This is fine for January (where `'cloudy'` routes to `out()` from `january.ts`) but will need to be rethought for February if `out()` becomes a routed February experience rather than a fallback.
6. **`underConstruction()` is bypassed** — `window.onload` calls `start()` directly; the keyphrase gate is dead code unless restored.
7. **`<body>` is `display: none`** — content is appended to `<html>`, not `<body>`. This is intentional (see `styles.css`) but unusual; be aware when doing DOM work.

---

## Architecture Futures

**`out()` is the cloudy/February experience, not a stub.** It is a full ambient renderer: procedural clouds, the George MacDonald moon-poem as floating words, a dialogue system driven by a text input with autocomplete, and desolation audio. It needs a February escape affordance before February `/out/` ships. See `doc-out.md`.

**February `/out/` content does not yet exist beyond `out()`.** When it is built, the month dispatcher in `start()` will need to route `month() === 1` to a February window renderer. Whether that renderer is an extension of `out()` or a new sibling is an open design question. `MAIN_UTTERANCE_SERIES` in `out.constants.ts` is a placeholder stub (`[[[]]]`) awaiting February dialogue content.

**The `out()` dialogue system is designed to grow.** `JANUARY_UTTERANCE_SERIES` has four monologue sequences, each advancing as the player types or selects utterances. `MAIN_UTTERANCE_SERIES` is the February equivalent, currently empty. Adding February content here is the primary near-term extension point for `out()`. See `doc-out.md` for the full dialogue architecture.

**The two-repo structure is correct and should stay.** Different deployment cadences, `/out/` is directly linkable, and the query-param contract is cleaner than shared state. The cost is the manual sync points — keep them documented.

8. **Mountain (`clear` weather) has no audio** — the only January weather type without music. Music for this section is a known future addition; candidates include public-domain recordings or transcriptions of Griffes or similar impressionist/symbolist works, consistent with the literary register of the clear weather content. Transcription is labor-intensive (the February book used a hand-transcribed Zelenka piece); public-domain recordings or a simpler ambient approach using the existing instrument system are lower-cost alternatives. is a useful pattern for soft-hiding in-development content behind a discoverable keyphrase. If February `/out/` content is built incrementally, this mechanism (or a month-specific equivalent) is worth restoring rather than routing directly to an empty stub.
