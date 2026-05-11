# RR Skillverse v2 — Linear × MasterClass Design

This directory contains the v2 redesign of RR Skillverse.
**It is fully standalone and does not modify any files in `public/`.**

## Files

| File | Description |
|---|---|
| `v2.css` | Shared design system — tokens, reset, all component classes |
| `index.html` | Split hero landing page |
| `courses.html` | 2-panel Skillverse Library |
| `learn.html` | AI learning portal with sidebar TOC |
| `profile.html` | MasterClass-style instructor About page |

## Design Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#09090b` | Page background |
| `--accent` | `#3b82f6` | Electric blue — CTAs, active states |
| `--gold` | `#f59e0b` | Warm gold — MCT badge, stars |
| `--green` | `#22c55e` | Success, done states |
| `--font` | Inter | All UI text |
| `--mono` | JetBrains Mono | Numbers, badges, code |

## Asset Paths

All assets reference `../` relative paths from `public/v2/`:
- Images: `../images/raushanranjan.jpg`
- JS data: `../js/courses-data.js`
- AI agent: `../ai-agent.html`

The original `public/js/nav.js` is **not used** here because it
hardcodes relative paths (`href="index.html"`, `src="images/..."`)
that would break from the `v2/` subfolder. Each page has inline nav.

## Rollback

To revert to v1 at any time:
1. Delete the `public/v2/` directory (or just stop linking to it)
2. No changes were made to any file in `public/`
3. The original site at `public/index.html` continues to work

## Activate v2

To make v2 the primary experience, update your server/CDN to
route root traffic to `public/v2/index.html` instead of
`public/index.html`. No other changes needed.
