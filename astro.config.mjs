import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Coding Style Guide",
      editLink: {
        baseUrl: 'https://github.com/lionheart-group/coding-style-guide/edit/master/docs/'
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        ja: {
          label: '日本語',
        },
      }
    })
  ]
});
