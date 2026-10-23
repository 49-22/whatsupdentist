# Search Visibility Roadmap

Site: https://whatsupdentist.com/

Use this checklist to track technical SEO, search indexing, and the trust signals that matter for dental information. Search engines and AI search tools make their own indexing and ranking decisions; completing these tasks does not guarantee placement or citations.

## Implemented

- [x] Added a descriptive site title, search description, and social sharing metadata.
- [x] Added the homepage canonical URL and an XML sitemap for the homepage and international-patients page.
- [x] Allowed general web crawlers and named AI crawlers in `public/robots.txt`, and listed the sitemap there.
- [x] Added Organization and Person structured data, connected to the supplied LinkedIn profiles.
- [x] Added visible links to the dentist and company LinkedIn profiles.
- [x] Added route-aware titles, descriptions, canonical URLs, and a `noindex` directive for the booking route in the React app, and pre-rendered route-specific metadata into production HTML.
- [x] Confirmed the production build and existing test pass after these changes.

## Next Actions

- [x] Confirmed the deployed JavaScript bundle matches the latest local production build.
- [x] Confirmed the robots file, sitemap, homepage, international-patients page, booking page, logo, and manifest return HTTP 200 over HTTPS.
- [x] **High priority:** Pre-rendered route-specific titles, descriptions, canonical URLs, and indexing instructions into the initial HTML. Verified the deployed homepage, booking page, and international-patients page return the expected metadata before JavaScript runs.
- [ ] Set up Google Search Console, verify domain ownership, submit the sitemap, and inspect important URLs for indexing errors.
- [ ] Set up Bing Webmaster Tools, verify the domain, and submit the sitemap. Importing the verified Google Search Console property may be available.
- [ ] Review crawl and indexing reports after deployment; request indexing for important pages when appropriate.
- [ ] Add the dentist's full verified qualifications, registration details, experience, and review information to the site. Do not publish details until confirmed.
- [ ] Explain what a virtual dental consultation can assess, what requires an in-person examination, how to prepare a video, and when to seek urgent care. Have a dentist review this health information.
- [ ] Create useful, original pages for real patient questions, such as virtual dental second opinions, video consultation preparation, pricing, and dental care for international patients. Link related pages together.
- [ ] Add genuine patient reviews only with permission, and keep pricing, contact details, and service descriptions consistent wherever they appear.
- [ ] Add or improve a Google Business Profile only if the practice meets Google's eligibility rules for its real-world location or service area. Do not use a fictitious address.
- [ ] Test mobile usability, accessibility, image descriptions, and page loading speed; fix issues found in Search Console or performance audits.

## Rendering Limitation

This site uses a client-rendered React app, with route-specific metadata pre-rendered into the production HTML for the homepage, booking page, and international-patients page. The route content itself is still rendered by JavaScript. Deployments must serve each route's generated `index.html` before applying any single-page-app fallback. The booking page's `noindex` directive is present in its initial HTML.

The robots file permits OpenAI's search crawler, but there is no general ChatGPT webmaster console or guarantee of inclusion. Crawl access is only one part of discoverability; useful, accurate content and reliable indexing still matter.