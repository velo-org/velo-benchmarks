import { platform } from "https://deno.land/std/node/os.ts";
import {
  runBenchmarks,
  bench,
  BenchmarkResult,
} from "https://deno.land/std/testing/bench.ts";

import {
  prettyBenchmarkResult,
  prettyBenchmarkProgress,
} from "https://deno.land/x/pretty_benching@v0.1.1/mod.ts";
import { Cobalt } from "https://deno.land/x/cobalt/mod.ts";
import { LRU as LRUCache } from "https://deno.land/x/lru/mod.ts";
import { Cache as DashLRU } from "https://deno.land/x/dash/mod.ts";
import { Metle } from "https://deno.land/x/metle/mod.ts";
import { LRU as VeloLRU } from "https://x.nest.land/velo@0.1.2/mod.ts";

export {
  prettyBenchmarkProgress,
  prettyBenchmarkResult,
  platform,
  runBenchmarks,
  bench,
  BenchmarkResult,
  Cobalt,
  LRUCache,
  DashLRU,
  Metle,
  VeloLRU,
};
