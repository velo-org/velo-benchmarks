# Benchmark Results

Here you see how _Velo_ stacks up against other in memory Caches. Most of them are LRU(least-recently-used) caches.
Config:

```bash
KEYS: 100000
RUNS: 10
OS: linux
CPU: Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz x 4
RAM: 7.66 GB
```

## Table of Contents

- [Velo](#velo)
- [Cobalt](#cobalt)
- [LRU](#lru)
- [Cache](#cache)
- [Metle](#metle)

## Velo

https://deno.land/x/velo
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Velo(LRU) set x100000|10|63.274|6.327|15804|
|Velo(LRU) get x100000|10|25.342|2.534|39460|
|Velo(LRU) update x100000|10|54.377|5.438|18390|
|Velo(LRU) evict x100000|10|63.585|6.358|15727|

## Cobalt

https://deno.land/x/cobalt
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Cobalt(LRU) set x100000|10|339.548|33.955|2945|
|Cobalt(LRU) get x100000|10|341.711|34.171|2926|
|Cobalt(LRU) update x100000|10|346.400|34.640|2886|
|Cobalt(LRU) evict x100000|10|361.442|36.144|2766|

## LRU

https://deno.land/x/lru
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|LRU set x100000|10|131.896|13.190|7581|
|LRU get x100000|10|91.654|9.165|10910|
|LRU update x100000|10|90.989|9.099|10990|
|LRU evict x100000|10|5942.646|594.265|168|

## Cache

https://deno.land/x/cache
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Cache(LRU) set x100000|10|46849.152|4684.915|21|
|Cache(LRU) get x100000|10|68.337|6.834|14633|
|Cache(LRU) update x100000|10|55517.065|5551.706|18|
|Cache(LRU) evict x100000|10|56212.843|5621.284|17|

## Metle

https://deno.land/x/metle
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Metle set x100000|10|109.579|10.958|9125|
|Metle get x100000|10|36.153|3.615|27660|
|Metle update x100000|10|112.942|11.294|8854|
|Metle evict x100000|10|97.942|9.794|10210|
