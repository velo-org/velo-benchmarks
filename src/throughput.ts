import { CAPACITY, DATA_1, DATA_2 } from "./config.ts";

import { veloLru } from "./config.ts";

Deno.bench({ name: "veloLru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloLru.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "veloLru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloLru.set(DATA_1[0][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "veloLru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloLru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "veloLru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloLru.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "veloLru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloLru.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { veloTinyLfu } from "./config.ts";

Deno.bench({ name: "veloTinyLfu fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloTinyLfu.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "veloTinyLfu set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloTinyLfu.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "veloTinyLfu scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloTinyLfu.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "veloTinyLfu update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloTinyLfu.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "veloTinyLfu evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    veloTinyLfu.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { lru } from "./config.ts";

Deno.bench({ name: "lru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    lru.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "lru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    lru.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "lru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    lru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "lru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    lru.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "lru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    lru.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { weakLru } from "./config.ts";

Deno.bench({ name: "weakLru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    weakLru.set(DATA_1[i][0], { i: DATA_1[i][1] });
  }
});

Deno.bench({ name: "weakLru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    weakLru.set(DATA_1[0][0], { i: DATA_1[0][1] });
  }
});

Deno.bench({ name: "weakLru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    weakLru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "weakLru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    weakLru.set(DATA_1[i][0], { i: DATA_2[i][1] });
  }
});

Deno.bench({ name: "weakLru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    weakLru.set(DATA_2[i][0], { i: DATA_2[i][1] });
  }
});

import { tinyLru } from "./config.ts";

Deno.bench({ name: "tinyLru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    tinyLru.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "tinyLru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    tinyLru.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "tinyLru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    tinyLru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "tinyLru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    tinyLru.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "tinyLru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    tinyLru.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { quickLru } from "./config.ts";

Deno.bench({ name: "quickLru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    quickLru.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "quickLru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    quickLru.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "quickLru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    quickLru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "quickLru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    quickLru.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "quickLru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    quickLru.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { transitory } from "./config.ts";

Deno.bench({ name: "transitory fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    transitory.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "transitory set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    transitory.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "transitory scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    transitory.getIfPresent(DATA_1[i][0]);
  }
});

Deno.bench({ name: "transitory update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    transitory.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "transitory evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    transitory.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { hashLru } from "./config.ts";

Deno.bench({ name: "hashLru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    hashLru.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "hashLru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    hashLru.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "hashLru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    hashLru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "hashLru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    hashLru.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "hashLru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    hashLru.set(DATA_2[i][0], DATA_2[i][1]);
  }
});

import { mnemonistLru } from "./config.ts";

Deno.bench({ name: "mnemonistLru fill cache", group: "fill_cache" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    mnemonistLru.set(DATA_1[i][0], DATA_1[i][1]);
  }
});

Deno.bench({ name: "mnemonistLru set", group: "set" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    mnemonistLru.set(DATA_1[0][0], DATA_1[0][1]);
  }
});

Deno.bench({ name: "mnemonistLru scan", group: "scan" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    mnemonistLru.get(DATA_1[i][0]);
  }
});

Deno.bench({ name: "mnemonistLru update", group: "update" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    mnemonistLru.set(DATA_1[i][0], DATA_2[i][1]);
  }
});

Deno.bench({ name: "mnemonistLru evict", group: "evict" }, () => {
  for (let i = 0; i < CAPACITY; i++) {
    mnemonistLru.set(DATA_2[i][0], DATA_2[i][1]);
  }
});
