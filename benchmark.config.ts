const MAX_KEYS = 100_000;
const EVICT = 2 * MAX_KEYS;
const RUNS = 10;

const DATA_1 = new Array<[string, number]>(EVICT);
const DATA_2 = new Array<[string, number]>(EVICT);

for (let i = 0; i < EVICT; i++) {
  DATA_1[i] = [i.toString(), Math.floor(Math.random() * 1e7)];
  DATA_2[i] = [i.toString(), Math.floor(Math.random() * 1e7)];
}

const CACHES = ["Velo", "Cobalt", "LRU", "Dash", "Metle"];

const MARKDOWN_OUT = "./Readme.md";

export { MAX_KEYS, EVICT, RUNS, DATA_1, DATA_2, CACHES, MARKDOWN_OUT };
