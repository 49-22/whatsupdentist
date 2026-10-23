const fs = require('fs');
const path = require('path');
const routeMetadata = require('../src/routeMetadata.json');

const buildDirectory = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDirectory, 'index.html');

function escapeAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceRequired(html, pattern, replacement, description) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${description} in ${indexPath}`);
  }
  return html.replace(pattern, replacement);
}

function renderRouteHtml(template, route, metadata) {
  const canonicalUrl = `https://whatsupdentist.com${route === '/' ? '/' : route}`;
  const robots = metadata.index
    ? 'index, follow, max-image-preview:large'
    : 'noindex, follow';
  const title = escapeAttribute(metadata.title);
  const description = escapeAttribute(metadata.description);
  const escapedCanonicalUrl = escapeAttribute(canonicalUrl);

  let html = replaceRequired(
    template,
    /<title>[\s\S]*?<\/title>/,
    `<title>${title}</title>`,
    'the title element'
  );
  const replacements = [
    [
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
      'the description meta tag'
    ],
    [
      /<meta name="robots" content="[^"]*"\s*\/>/,
      `<meta name="robots" content="${robots}" />`,
      'the robots meta tag'
    ],
    [
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${escapedCanonicalUrl}" />`,
      'the canonical link'
    ],
    [
      /<meta property="og:url" content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${escapedCanonicalUrl}" />`,
      'the Open Graph URL meta tag'
    ],
    [
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
      'the Open Graph title meta tag'
    ],
    [
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
      'the Open Graph description meta tag'
    ],
    [
      /<meta name="twitter:title" content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`,
      'the Twitter title meta tag'
    ],
    [
      /<meta name="twitter:description" content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
      'the Twitter description meta tag'
    ]
  ];

  for (const [pattern, replacement, description] of replacements) {
    html = replaceRequired(html, pattern, replacement, description);
  }

  return html;
}

if (!fs.existsSync(indexPath)) {
  throw new Error(`Production build entry point was not found: ${indexPath}`);
}

const template = fs.readFileSync(indexPath, 'utf8');

for (const [route, metadata] of Object.entries(routeMetadata)) {
  if (route === '/') continue;

  const outputDirectory = path.join(buildDirectory, route.slice(1));
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(outputDirectory, 'index.html'),
    renderRouteHtml(template, route, metadata)
  );
}
