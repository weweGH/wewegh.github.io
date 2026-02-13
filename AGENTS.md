# Repository Guidelines

## Project Structure & Module Organization
Source pages such as `index.html` plus templates under `projects/` and `experiments/` make up the public site. Shared header/footer snippets live in `_includes/`, with `_config.yml` holding GitHub Pages settings. Styles sit in `scss/` partials (for example `_feature.scss`) and compile into `css/`. Client-side logic resides in `js/` alongside vendor libraries in `vendors/`. Static assets (`img/`, `fonts/`) mirror the paths referenced by each page, while `docs/` stores architecture notes and `Ronin-doc/` the upstream theme. Keep `contact_process.php` in sync with the form markup whenever inputs change.

## Build, Test, and Development Commands
- `bundle exec jekyll serve --livereload --drafts`: start a local clone of the GitHub Pages environment.
- `JEKYLL_ENV=production bundle exec jekyll build`: create the `_site/` bundle with production settings.
- `sass --watch scss:css --style=compressed`: continuously compile SCSS to `css/`.
- `php -S 127.0.0.1:4001 -t . contact_process.php`: run the lightweight contact-form backend.

## Coding Style & Naming Conventions
Adopt 4-space indentation for HTML/JS and 2 spaces inside SCSS blocks, matching the existing pages. Keep SCSS partials snake-cased and prefixed with `_`, then import them via `@import` order mirroring the section layout. IDs are used sparingly—favor descriptive BEM-like classes (`.hero_summary`, `.project_card`) so that CSS selectors align with the structure. When creating new assets, mirror current naming like `img/projects/<slug>.jpg`.

## Testing Guidelines
Validate content with `bundle exec jekyll build --strict_front_matter`; it highlights missing variables and includes. After SCSS edits, reload the local server and do a responsive sweep (desktop ≥1280px, tablet 768px, mobile 375px). Exercise CTA flows by opening the `projects/` and `experiments/` pages plus sending a test submission through the PHP dev server. Attach before/after screenshots whenever you adjust layout or imagery.

## Commit & Pull Request Guidelines
Follow the Conventional-Commit-inspired style seen in history (`Feat: update 'index.html'`, `Fix: adjust hero spacing`). Messages should stay under 72 characters and mention the section touched. Every PR needs summary bullets, reproduction steps, screenshots for UI shifts, references to updated `docs/` pages, and a checklist confirming `jekyll build` plus SCSS compilation. Link issues via `Closes #ID` and request review before merging.

## Security & Configuration Tips
Do not commit secrets or API keys; any temporary tokens for forms belong in repository secrets, not `_config.yml`. Sanitize new contact form fields both client-side (`js/contact.js`) and server-side (`contact_process.php`). When enabling third-party scripts, mirror them inside `vendors/` instead of hotlinking to guard against supply-chain surprises.
