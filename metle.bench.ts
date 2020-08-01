import { RUNS, MAX_KEYS, EVICT, DATA_1, DATA_2 } from "./benchmark.config.ts";
import { bench, Metle } from "./deps.ts";

const cache = new Metle({ TTL: 0, maxRequest: 1 });

bench({
  name: `Metle set x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = 0; i < MAX_KEYS; i++) {
      cache.setItem(DATA_1[i][0], DATA_1[i][0]);
    }
    b.stop();
  },
});

bench({
  name: `Metle get x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = 0; i < MAX_KEYS; i++) {
      cache.getItem(DATA_1[i][0]);
    }
    b.stop();
  },
});

bench({
  name: `Metle update x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = 0; i < MAX_KEYS; i++) {
      cache.setItem(DATA_1[i][0], DATA_2[i][0]);
    }
    b.stop();
  },
});

bench({
  name: `Metle evict x${MAX_KEYS}`,
  runs: RUNS,
  func(b): void {
    b.start();
    for (let i = MAX_KEYS; i < EVICT; i++) {
      cache.setItem(DATA_1[i][0], DATA_1[i][0]);
    }
    b.stop();
  },
});
