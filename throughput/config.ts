import {
  X_Velo,
  X_Lru,
  X_WeakLru,
  NPM_TinyLru,
  NPM_QuickLru,
  NPM_Transitory,
  NPM_HashLru,
  NPM_MnemonistLru,
  VeloOptions,
} from "./deps.ts";

export const CAPACITY = 100_000;
export const EVICT = 2 * CAPACITY;

export const DATA_1 = new Array<[string, number]>(EVICT);
export const DATA_2 = new Array<[string, number]>(EVICT);

for (let i = 0; i < EVICT; i++) {
  DATA_1[i] = [i.toString(), Math.floor(Math.random() * 1e7)];
  DATA_2[i] = [i.toString(), Math.floor(Math.random() * 1e7)];
}

const opts = new VeloOptions<string, number>();
opts.capacity = CAPACITY;

export let veloLru = X_Velo.from(opts).lru().build();
export let veloTinyLfu = X_Velo.from(opts).tinyLfu().build();
export let lru = new X_Lru<number>(CAPACITY);
export let weakLru = new X_WeakLru({ cacheSize: CAPACITY });
export let tinyLru = NPM_TinyLru(CAPACITY);
export let quickLru = new NPM_QuickLru({ maxSize: CAPACITY });
export let transitory = new NPM_Transitory({ maxSize: CAPACITY });
export let hashLru = NPM_HashLru.default(CAPACITY);
export let mnemonistLru = new NPM_MnemonistLru(CAPACITY);

export function resetCaches() {
  veloLru = X_Velo.from(opts).lru().build();
  veloTinyLfu = X_Velo.from(opts).tinyLfu().build();
  lru = new X_Lru<number>(CAPACITY);
  weakLru = new X_WeakLru({ cacheSize: CAPACITY });
  tinyLru = NPM_TinyLru(CAPACITY);
  quickLru = new NPM_QuickLru({ maxSize: CAPACITY });
  transitory = new NPM_Transitory({ maxSize: CAPACITY });
  hashLru = NPM_HashLru.default(CAPACITY);
  mnemonistLru = new NPM_MnemonistLru(CAPACITY);
}
