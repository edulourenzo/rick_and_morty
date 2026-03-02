## Context

The project is a single-page application (HTML/CSS/JS) that displays Rick
and Morty characters retrieved from the public API. The UI uses a custom
Portal Gun cursor and Web Animations API for portal effects. There is no
build step; changes must run directly in the browser.

## Goals / Non-Goals

**Goals:**
- Implement `laser-effect` as a lightweight, dependency-free feature that
  enables a user-triggered visual laser from the cursor, with optional
  highlight interaction when the beam overlaps a character card.

**Non-Goals:**
- No server-side components or API changes. No external libraries.

## Decisions

- Implementation location: add minimal markup in `index.html`, styles in
  `style.css`, and behavior in `script.js` to follow existing conventions.
- Rendering approach: use an absolutely-positioned `<div>` or `<svg>` for the
  beam, animated with `requestAnimationFrame` for precise pointer follow and
  CSS transforms for visual stretching. Avoid creating many DOM nodes.
- Pointer handling: use Pointer Events (pointerdown/pointerup/pointermove)
  with `setPointerCapture` when appropriate to support touch and mouse.
- Collision detection: use element.getBoundingClientRect() on character
  cards and simple line-rectangle intersection math to determine visual
  highlight. Keep collision checks throttled (on animation frame).

## Risks / Trade-offs

- Risk: continuous collision checks may impact performance on low-end devices.
  Mitigation: only run collision checks while laser is active and batch with
  requestAnimationFrame; debounce activation if necessary.
- Risk: differing pointer behaviors across devices. Mitigation: rely on
  Pointer Events and test basic touch/mouse flows.

## Migration Plan

- Deploy by adding the three files edits and verifying in-browser behavior.
- Rollback: remove added CSS and JS sections; feature is opt-in via a toggle
  so disabling the toggle effectively reverts user-visible behavior.

## Open Questions

- Should the laser be persistent across page reloads (persist setting)?
