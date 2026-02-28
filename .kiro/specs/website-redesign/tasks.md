# Implementation Plan: Website Redesign

## Overview

Transform the existing HTML-based academic site into a Markdown-driven Jekyll site with a unified layout template, external CSS, and clean navigation. Tasks proceed from infrastructure (config, layout, CSS) to content migration (each page as Markdown), then final cleanup.

## Tasks

- [x] 1. Set up Jekyll infrastructure
  - [x] 1.1 Delete the `.nojekyll` file so GitHub Pages processes the site through Jekyll
    - _Requirements: 8.1_
  - [x] 1.2 Update `_config.yml` with new navigation structure, site title, and default layout settings
    - Define `title: Sadat Shahriar`
    - Define `nav` array with 5 items: About, Publications, Resume, Blogs & Tutorials, Tech Links
    - Add `defaults` block to auto-apply `layout: default` to all pages
    - _Requirements: 8.2, 2.1_
  - [x] 1.3 Create `_layouts/default.html` layout template
    - HTML skeleton with `<head>` (charset, viewport, title, stylesheet link)
    - Site header with site title linked to home
    - Navigation bar iterating over `site.nav` with active page highlighting via `page.url` comparison
    - Main content area with `{{ content }}`
    - Minimal footer with copyright year
    - _Requirements: 1.3, 2.1, 2.2, 2.3_
  - [x] 1.4 Create `assets/css/style.css` with the complete site stylesheet
    - Serif typography (Georgia, Times New Roman)
    - Restrained color palette: `#fafafa` background, `#333` text, `#2c5f8a` accent
    - Single-column layout, max-width 750px, centered
    - Navigation styles with active state (bottom border or weight)
    - Profile section styles (circular photo, centered name/tagline)
    - Update item styles (date-labeled entries with left border accent)
    - Publication list styles (numbered, bold author name)
    - Responsive media query for ≤768px (stacked nav, adjusted padding)
    - _Requirements: 2.3, 2.4, 9.1, 9.2, 9.3_

- [x] 2. Checkpoint - Verify infrastructure
  - Ensure Jekyll builds successfully with the layout and CSS. Ask the user if questions arise.

- [x] 3. Create landing page content
  - [x] 3.1 Create `index.md` with profile section and updates list
    - Front matter: `layout: default`, `title: About`
    - Profile section with photo (`docs/images/piash.jpg`), name, tagline, contact links (email, LinkedIn, Google Scholar)
    - Updates list with all 6 existing date-labeled entries in reverse chronological order
    - _Requirements: 3.1, 3.2, 3.3_
  - [ ]* 3.2 Write property test for updates chronological ordering
    - **Property 4: Updates reverse chronological ordering**
    - **Validates: Requirements 3.2**

- [x] 4. Create publications page
  - [x] 4.1 Create `publications.md` with all 11 publications
    - Front matter: `layout: default`, `title: Publications`
    - Numbered list with full citation text for each publication
    - Bold the author's name ("**Sadat Shahriar**") in each entry
    - Include clickable hyperlinks where publications have URLs
    - _Requirements: 4.1, 4.2, 4.3_

- [x] 5. Create remaining content pages
  - [x] 5.1 Create `resume.md` with PDF embed and download link
    - Front matter: `layout: default`, `title: Resume`
    - Embed PDF using `<embed>` tag pointing to `docs/Updated Resume 2 - Google Docs.pdf`
    - Add a direct download link to the PDF
    - _Requirements: 5.1, 5.2_
  - [x] 5.2 Create `blogs.md` with tutorial entries
    - Front matter: `layout: default`, `title: Blogs & Tutorials`
    - List all 3 existing tutorials with titles and links
    - Include associated resources (PDF links, YouTube playlist link)
    - _Requirements: 6.1, 6.2_
  - [x] 5.3 Create `tech-links.md` with curated links and descriptions
    - Front matter: `layout: default`, `title: Tech Links`
    - Include both existing links from Important Links page
    - Add a title, clickable URL, and 1-2 sentence description for each entry
    - _Requirements: 7.1, 7.2_

- [x] 6. Checkpoint - Verify all content pages
  - Ensure all 5 content pages render correctly through the layout. Ensure navigation works across all pages. Ask the user if questions arise.

- [x] 7. Cleanup old HTML files
  - [x] 7.1 Remove old HTML content files that are replaced by Markdown equivalents
    - Remove `index.html`, `publication.html`, `resume.html`, `projects.html`, `contact.html`, `blogs_and_tutorials.html`, `Important_links.html`
    - Keep `Blogs_and_Tutorials/` directory (contains tutorial HTML pages still linked from blogs.md)
    - Keep `docs/` directory (contains images and PDFs still in use)
    - _Requirements: 8.3_1`

- [x] 8. Final checkpoint - Verify complete site
  - Ensure the full site builds and all pages are accessible via navigation. Ensure no broken links to removed files. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- The old HTML files are removed last to avoid breaking the site during migration
