// source.config.ts
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
var { docs, meta } = defineDocs({
  dir: "content/docs"
});
var chConfig = {
  components: {
    code: "Code"
  }
};
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: (v) => [[remarkCodeHike, chConfig], ...v],
    recmaPlugins: [[recmaCodeHike, chConfig]]
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
