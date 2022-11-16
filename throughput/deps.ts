// from deno.land
export {
  Velo as X_Velo,
  Options as VeloOptions,
} from "https://deno.land/x/velo@1.0.0/mod.ts";
export { default as X_Ttl } from "https://deno.land/x/ttl@1.0.1/mod.ts";
export { LRU as X_Lru } from "https://deno.land/x/lru@1.0.2/mod.ts";
export { WeakLRUCache as X_WeakLru } from "https://deno.land/x/weakcache@v1.1.4/index.js";
// from npm
export { lru as NPM_TinyLru } from "npm:tiny-lru@10.0.1";
export { default as NPM_QuickLru } from "npm:quick-lru@6.1.1";
// @ts-ignore it does export it
export { BoundedCache as NPM_Transitory } from "npm:transitory@2.2.0";
export * as NPM_HashLru from "npm:hashlru@2.3.0";
export { LRUCache as NPM_MnemonistLru } from "npm:mnemonist@0.39.5";
