# FlyBench - The Drosophila Lab Handbook

A complete static handbook website with 35 protocols and guides, seven experiment sections, 27 source records and 38 glossary terms. Edition 0.1 is a source-linked editorial draft, not an independently validated laboratory SOP collection.

## Pages and features

- Search and filter the workflow library by experiment, experience and method type.
- Read numbered steps with their rationale, materials, controls, recording fields, troubleshooting and source links.
- Save workflows; keep step checklists and local bench notes; export a workflow as Markdown or all notes as JSON.
- Print a compact bench copy with notes and expanded troubleshooting.
- Use dilution, solution-mass, ST50, tolerance and bubbler-flow calculators.
- Use the responsive topic navigation, global search, glossary and light/dark themes.

No dependencies, build step, server, database, API keys or third-party fonts are needed. The site runs directly on GitHub Pages. Notes, bookmarks and progress remain in the visitor's browser and are never part of the deployed content.

## Publish on GitHub Pages

1. Create a repository, for example `drosophila-handbook`, in your GitHub account.
2. Upload the contents of this folder to the repository root on `main`. Retain `assets/` and the `.nojekyll` file.
3. Under Settings > Pages, select Deploy from a branch, then `main` and `/(root)`, and save.
4. Use the live URL that GitHub displays after the deployment finishes.

For an account-level site, use a repository named exactly `<username>.github.io` instead. All site routes and assets use relative paths, so project-level Pages sites also work.

## Edit the content

`assets/handbook-data.js` contains the complete editable content as a readable JSON object assigned to `window.FLYBENCH_DATA`. Preserve that assignment and the trailing semicolon. Each workflow has a unique slug, category, type, materials, steps, controls, recording fields, interpretation, troubleshooting and source IDs.

- Text and source records: `assets/handbook-data.js`.
- Layout and colors: `assets/styles.css`.
- Search, notes, filters and calculators: `assets/app.js`.
- Page structure: the corresponding HTML file.

When adding methods, distinguish named source adaptations from planning guides and local templates. Verify numerical settings against the exact stock, reagent or apparatus. Review the original source and keep source records current.

## Content provenance

The About & Sources page lists every source record, including BDSC documentation, primary research papers, published protocols and supplier instructions. Original publications are linked, not reproduced or bundled.

The four-day 10-minute repeated-exposure example is explicitly a lab-adapted template. It is not claimed to reproduce the cited paper's published chronic-tolerance regimen. A bubbler flow fraction is explicitly distinguished from gas-phase ethanol concentration.

## Local review

Open `index.html` in a browser or serve this folder with any static server. The data are loaded as a script rather than fetched, so a basic file-based preview works. Clipboard access depends on the browser; export and download alternatives remain available.
