import { RUNS, MAX_KEYS, EVICT, DATA_1, DATA_2 } from "./benchmark.config.ts";
import { Cobalt, bench } from "./deps.ts";

const cache = new Cobalt({ capacity: MAX_KEYS });

bench({
  name: `Cobalt(LRU) set x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = 0; i < MAX_KEYS; i++) {
      cache.set(DATA_1[i][0], DATA_1[i][0]);
    }
    b.stop();
  },
});

bench({
  name: `Cobalt(LRU) get x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = 0; i < MAX_KEYS; i++) {
      cache.get(DATA_1[i][0]);
    }
    b.stop();
  },
});

bench({
  name: `Cobalt(LRU) update x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = 0; i < MAX_KEYS; i++) {
      cache.set(DATA_1[i][0], DATA_2[i][0]);
    }
    b.stop();
  },
});

bench({
  name: `Cobalt(LRU) evict x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = MAX_KEYS; i < EVICT; i++) {
      cache.set(DATA_1[i][0], DATA_1[i][0]);
    }
    b.stop();
  },
});
