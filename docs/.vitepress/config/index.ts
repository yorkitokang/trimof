import { defineConfig } from "vitepress";
import themeConfig from "./theme";
import head from "./head";
import { DESCRIPTION as description, LANG as lang, TITLE as title } from "./info";
import markdownItKatex from 'markdown-it-katex'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  description,
  head,
  ignoreDeadLinks: true, // TODO: remove this line when all links are fixed
  lang,
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  themeConfig,
  title
});

