# Requirements Document

## Introduction

Redesign of Sadat Shahriar's personal academic website (GitHub Pages + Jekyll) from a collection of inconsistently styled raw HTML pages into a clean, minimal, Markdown-driven site with a unified layout. The goal is a maintainable, elegant academic presence inspired by single-page academic sites, while retaining a multi-page structure for organized content.

## Glossary

- **Site**: The Jekyll-powered GitHub Pages website at the root of this repository
- **Layout_Template**: The shared Jekyll HTML layout file (`_layouts/default.html`) that wraps all page content with consistent navigation, styling, and structure
- **Content_Page**: A Markdown (`.md`) file in the repository root that contains page-specific content rendered by the Layout_Template
- **Front_Matter**: The YAML block at the top of each Content_Page (delimited by `---`) that provides metadata such as title and layout
- **Navigation_Bar**: The set of links rendered by the Layout_Template that allows visitors to move between Content_Pages
- **Profile_Section**: The header area on the landing page displaying the author's photo, name, tagline, and contact links
- **Updates_List**: A reverse-chronological list of professional milestones on the landing page
- **Jekyll**: The static site generator used by GitHub Pages to render Markdown into HTML

## Requirements

### Requirement 1: Markdown-Based Content Authoring

**User Story:** As a site owner, I want to write all page content in Markdown files, so that I can maintain the site without editing raw HTML.

#### Acceptance Criteria

1. THE Site SHALL render each Content_Page from a `.md` file using Jekyll and the Layout_Template
2. WHEN a Content_Page is created with valid Front_Matter and Markdown content, THE Site SHALL produce a styled HTML page with consistent navigation and styling
3. THE Layout_Template SHALL provide all HTML structure, CSS styling, and Navigation_Bar so that Content_Pages contain only Markdown text and Front_Matter

### Requirement 2: Unified Layout and Navigation

**User Story:** As a visitor, I want consistent navigation and styling across all pages, so that the site feels cohesive and professional.

#### Acceptance Criteria

1. THE Layout_Template SHALL render a Navigation_Bar containing links to all Content_Pages on every page
2. THE Navigation_Bar SHALL highlight or visually distinguish the currently active page
3. THE Layout_Template SHALL apply a consistent serif-based typography, color scheme, and spacing across all pages
4. WHEN the browser viewport is 768px or narrower, THE Layout_Template SHALL adapt the navigation and content layout for mobile readability

### Requirement 3: Landing Page with Profile and Updates

**User Story:** As a visitor, I want to see the author's profile summary and recent professional updates on the landing page, so that I can quickly understand who they are and what they have been doing.

#### Acceptance Criteria

1. THE Landing Content_Page SHALL display a Profile_Section containing the author's photo, full name, professional tagline, and contact links (email, LinkedIn, Google Scholar)
2. THE Landing Content_Page SHALL display an Updates_List with date-labeled entries in reverse chronological order
3. WHEN the landing page is loaded, THE Site SHALL render the profile photo from the existing image path (`docs/images/piash.jpg`)

### Requirement 4: Publications Page

**User Story:** As a visitor, I want to browse a complete list of the author's publications, so that I can review their research output.

#### Acceptance Criteria

1. THE Publications Content_Page SHALL list all 11 existing publications with full citation text
2. WHEN a publication includes a hyperlink, THE Publications Content_Page SHALL render the link as clickable
3. THE Publications Content_Page SHALL display publications in a numbered list with the author's name visually emphasized

### Requirement 5: CV/Resume Page

**User Story:** As a visitor, I want to view or download the author's resume, so that I can review their qualifications.

#### Acceptance Criteria

1. THE Resume Content_Page SHALL embed the existing PDF resume (`docs/Updated Resume 2 - Google Docs.pdf`) in an inline viewer
2. THE Resume Content_Page SHALL provide a direct download link to the PDF file

### Requirement 6: Blogs and Tutorials Page

**User Story:** As a visitor, I want to find the author's tutorials and blog posts, so that I can learn from their educational content.

#### Acceptance Criteria

1. THE Blogs Content_Page SHALL list all existing tutorial entries with titles and links
2. WHEN a tutorial has an associated resource (PDF, YouTube playlist), THE Blogs Content_Page SHALL include links to those resources

### Requirement 7: Tech Links Page

**User Story:** As a visitor, I want to browse curated technical links with brief descriptions, so that I can discover useful resources the author recommends.

#### Acceptance Criteria

1. THE Tech_Links Content_Page SHALL list each curated link with a title, URL, and a brief description (one to two sentences)
2. THE Tech_Links Content_Page SHALL include all existing links from the current Important Links page

### Requirement 8: Jekyll Configuration and Build

**User Story:** As a site owner, I want the Jekyll configuration to correctly build and serve the site on GitHub Pages, so that the site is publicly accessible.

#### Acceptance Criteria

1. THE Site SHALL remove or address the `.nojekyll` file so that GitHub Pages processes the site through Jekyll
2. THE `_config.yml` SHALL define the site title, navigation items, and any required Jekyll settings for correct Markdown rendering
3. WHEN GitHub Pages builds the repository, THE Site SHALL produce a fully functional static site with all Content_Pages accessible via the Navigation_Bar

### Requirement 9: Clean and Minimal Visual Design

**User Story:** As a site owner, I want the site to have a clean, minimal, and elegant design inspired by modern academic sites, so that it looks professional without visual clutter.

#### Acceptance Criteria

1. THE Layout_Template SHALL use a restrained color palette (neutral backgrounds, dark text, one accent color for links)
2. THE Layout_Template SHALL use generous whitespace and clear typographic hierarchy (distinct heading sizes, readable body text)
3. THE Layout_Template SHALL avoid decorative elements, heavy borders, or complex multi-column layouts in favor of a single-column content flow
