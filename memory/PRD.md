# The Realm Survivor RPG — Official Website

## Original problem statement (current)
Rebrand the entire website from "7 Days to Die" to **The Realm Survivor RPG** by Monarchy Knuckle Games
(Steam app 4008180). Keep only Home, Media, Support, and a new PIMPS page; remove all other pages.
No remnants of 7 Days to Die anywhere. Use provided Website Background (all pages), Media Page Background
(Media page), and the provided logo (white bg removed, 1.5× size, top-left on all pages). Use the Steam
gameplay trailer playable on the Home page, and all Steam screenshots hosted locally.

## Game info (source: Steam)
- Title: The Realm Survivor RPG · Dev/Pub: Monarchy Knuckle Games · Release: Coming Soon
- Genres: Action, Adventure, RPG, Indie, Early Access
- Urban open-world beat 'em up survival RPG; travel realms; moral choices (Demonic/Deviant/Divine).
- Steam: https://store.steampowered.com/app/4008180/The_Realm_Survivor_RPG/

## Implemented (2026-06-05) — Full rebrand
- **Pages:** Home, Media, Support (Coming Soon), PIMPS (Coming Soon), 404. Removed About, News,
  NewsPost, FAQ, Buy, Community.
- **Assets (all local in `/public/realm/`):** logo.png (white bg removed + cropped, 1.5× via Wordmark),
  website_bg.jpg, media_bg.jpg, trailer.mp4 (Steam HLS → 720p web mp4, ~86MB, self-hosted, playable
  inline on Home & Media), trailer_poster.jpg, shots/ss_01..35.jpg (35 screenshots).
- **Layout:** fixed full-page background that swaps to Media Page Background on `/media`, Website
  Background elsewhere. Age gate removed.
- **Home:** hero (genres, title, tagline, hook, CTAs, inline trailer), story, Demonic/Deviant/Divine
  paths, 12-feature grid, screenshot strip, CTA.
- **Media:** media background, inline trailer, 35-screenshot masonry gallery + lightbox.
- **Support & PIMPS:** big theme-matched "Coming Soon" (purple/blue/white) + wishlist CTA.
- **Backend:** stripped all 7DTD scraping/proxy endpoints; back to clean boilerplate (status only).
- **Branding:** index.html title/meta/OG updated; theme tokens (purple/blue) retained.
- **Verified:** all 4 pages render; logo top-left; correct backgrounds; trailer player + 35 shots;
  grep confirms ZERO 7 Days to Die remnants in code/public. Lint clean (JS + Python).

## Backlog / Next
- P1: Fill in real Support & PIMPS content when provided.
- P2: Compress trailer further or add adaptive quality; add real social links when available.
