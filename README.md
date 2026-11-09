# LH Coding Style guide

This website is built using [Docusaurus 3](https://docusaurus.io/).

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Fegg docs and versions

The Fegg docs are a docs instance of their own (id `fegg`, see `docusaurus.config.ts`), so only
Fegg is versioned; Environment, HTML, JavaScript and WordPress are not.

| Version | Source (en) | Japanese | URL |
|---|---|---|---|
| 5.x (current) | `fegg/` | `i18n/ja/docusaurus-plugin-content-docs-fegg/current/` | `/docs/fegg/...` |
| 4.x | `fegg_versioned_docs/version-4.x/` | `i18n/ja/docusaurus-plugin-content-docs-fegg/version-4.x/` | `/docs/fegg/4.x/...` |

- Link between Fegg pages with relative file paths (`[URL](../basic/url.mdx)`), not `/docs/fegg/...`:
  an absolute link always points to the current version.
- Import components with `@site/src/components/...`.
- A page missing in Japanese is shown in English.
- To freeze the current docs as a version: `npx docusaurus docs:version:fegg 5.x`, then add the
  version to `versions` in `docusaurus.config.ts`, copy the Japanese docs to
  `i18n/ja/docusaurus-plugin-content-docs-fegg/version-5.x/` and run `npm run write-translations`.
