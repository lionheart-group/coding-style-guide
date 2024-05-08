import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Coding Style Guide",
      editLink: {
        baseUrl:
          "https://github.com/lionheart-group/coding-style-guide/edit/master/docs/"
      },
      locales: {
        root: {
          label: "English",
          lang: "en"
        },
        ja: {
          label: "日本語",
          lang: "ja"
        }
      },
      sidebar: [
        { label: "Environment", autogenerate: { directory: "docs/env" } },
        { label: "HTML", autogenerate: { directory: "docs/html" } }
      ]
    })
  ]
});
