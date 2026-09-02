# THE EXPERIENCE — Event Planning Concept (Multi-Page)

Restructured from a single scrolling page into 5 separate pages with a real navigation bar.

## Pages
- `index.html` — Home (hero, approach, testimonial)
- `services.html` — Services
- `work.html` — Selected Experiences (portfolio)
- `process.html` — Process
- `contact.html` — Plan an event (CTA)

`style.css` and `script.js` are shared by every page — edit them once and the change applies everywhere.

## Before sending to the prospect
- Replace "THE EXPERIENCE" with her real business name across all 5 HTML files.
- Replace the placeholder testimonial in `index.html`.
- Replace the WhatsApp link in `contact.html` (currently `https://wa.me/`).
- Replace the stock Unsplash images in `style.css` with her real event photography when available.
- Apply her actual logo, colours and typography once she sends the brand direction.

## Run
Open `index.html` directly, or use VS Code Live Server. The nav bar links between all 5 pages.

## Note
Each page repeats the same header and footer HTML — that's normal for a plain HTML/CSS/JS site with no build tool. If this grows past 5-6 pages, a static site generator (e.g. 11ty) would let you write the header/footer once, but it's not needed at this size.
