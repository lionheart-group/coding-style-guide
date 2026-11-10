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

| Version | Source (en) | Japanese | URL | llms |
|---|---|---|---|---|
| 4.x (released, default) | `fegg_versioned_docs/version-4.x/` | `i18n/ja/docusaurus-plugin-content-docs-fegg/version-4.x/` | `/docs/fegg/...` | `llms-fegg.txt` |
| 5.x (current, in development) | `fegg/` | `i18n/ja/docusaurus-plugin-content-docs-fegg/current/` | `/docs/fegg/next/...` | `llms-fegg-next.txt` |

When the skeleton releases Fegg 5 (`feature/v5` merged into its `master`), make 5.x the default:

1. `docusaurus.config.ts`, fegg plugin: `lastVersion: "current"`; `current` gets
   `label: "Fegg 5.x"` without `path` and `banner`; `4.x` gets `path: "4.x"` and
   `banner: "unmaintained"`.
2. `merge-markdown.js`: `./fegg` becomes `docs/fegg/` / `fegg`, 4.x becomes `docs/fegg/4.x/` /
   `fegg-4.x` with `inFull: false`.
3. Update this table and add a release note: `/docs/fegg/...` then shows 5.x, and 4.x moves to
   `/docs/fegg/4.x/...`.

- Link between Fegg pages with relative file paths (`[URL](../basic/url.mdx)`), not `/docs/fegg/...`:
  an absolute link always points to the default version (`lastVersion`, now 4.x).
- Import components with `@site/src/components/...`.
- A page missing in Japanese is shown in English.
- To freeze the current docs as a version: `npx docusaurus docs:version:fegg 5.x`, then add the
  version to `versions` in `docusaurus.config.ts`, copy the Japanese docs to
  `i18n/ja/docusaurus-plugin-content-docs-fegg/version-5.x/` and run `npm run write-translations`.
