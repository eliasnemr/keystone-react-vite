import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
 
  // Static pre-rendering return a list of URLs to prerender at build time
  // async prerender() {
  //   return ["/", "/about", "/contact"];
  // },

  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
} satisfies Config;

