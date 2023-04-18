import remarkAbbr from "remark-abbr";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { fileURLToPath } from "url";
import relativeImages from "mdsvex-relative-images";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: {
    blog: path.join(dirname, "./src/routes/blog/[slug]/+layout.svelte"),
  },

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [remarkAbbr],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
      },
    ],
  ],
  remarkPlugins: [relativeImages],
});

export default config;
