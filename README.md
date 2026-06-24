# MyPortfolio

A modern personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

[![Deploy To GitHub Pages](https://github.com/BhaskarT1/MyPortfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/BhaskarT1/MyPortfolio/actions/workflows/deploy.yml)
[![Live on GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-22c55e?logo=github)](https://bhaskart1.github.io/MyPortfolio/)

## Live Site

- Portfolio URL: https://bhaskart1.github.io/MyPortfolio/
- Latest deployment runs: https://github.com/BhaskarT1/MyPortfolio/actions/workflows/deploy.yml

## Local Development

1. Install dependencies:
	npm install
2. Start development server:
	npm run dev
3. Build production bundle:
	npm run build

## Deployment (GitHub Actions + GitHub Pages)

1. Keep your deployment branch as main.
2. Go to repository Settings > Pages.
3. Set Source to GitHub Actions.
4. Push to main or run the workflow manually.

The workflow file is located at:

- .github/workflows/deploy.yml

Notes:

- The Vite base path is computed automatically during Actions builds.
- This supports both user/org pages and project pages.

## Custom Domain Setup

If you want your portfolio on a custom domain (for example, portfolio.yourdomain.com):

1. In your DNS provider, create a CNAME record:
	- Host/Name: portfolio (or your chosen subdomain)
	- Value/Target: bhaskart1.github.io
2. In repository Settings > Pages > Custom domain, enter your domain.
3. Enable Enforce HTTPS after DNS propagates.
4. Add a CNAME file inside public with your domain as the only line.

Example public/CNAME content:

portfolio.yourdomain.com

## SEO Setup (Meta Tags)

Add the following tags inside the head of index.html for better search and social previews:

```html
<meta name="description" content="Bhaskar Tikale - Fullstack Developer portfolio showcasing web, mobile, and AI projects." />
<meta name="keywords" content="Bhaskar Tikale, Fullstack Developer, React, Node.js, Portfolio, Web Developer" />
<meta name="author" content="Bhaskar Tikale" />

<meta property="og:type" content="website" />
<meta property="og:title" content="Bhaskar Tikale | Portfolio" />
<meta property="og:description" content="Fullstack developer building modern, reliable, and high-performance products." />
<meta property="og:url" content="https://bhaskart1.github.io/MyPortfolio/" />
<meta property="og:image" content="https://bhaskart1.github.io/MyPortfolio/preview.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Bhaskar Tikale | Portfolio" />
<meta name="twitter:description" content="Fullstack developer building modern, reliable, and high-performance products." />
<meta name="twitter:image" content="https://bhaskart1.github.io/MyPortfolio/preview.png" />
```

Recommended extras:

- Add preview.png in public for social cards.
- Keep page title and description short and role-focused.
- Re-submit your URL in Google Search Console after major updates.
