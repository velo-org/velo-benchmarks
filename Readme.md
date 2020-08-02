# Benchmark Results
Here you see how *Velo* stacks up against other in memory Caches. Most of them are LRU(least-recently-used) caches.
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
- [Dash](#dash)
- [Metle](#metle)

## Velo
https://deno.land/x/velo
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Velo(LRU) set x100000|10|65.573|6.557|15250|
|Velo(LRU) get x100000|10|25.072|2.507|39885|
|Velo(LRU) update x100000|10|61.172|6.117|16347|
|Velo(LRU) evict x100000|10|68.858|6.886|14522|

## Cobalt
https://deno.land/x/cobalt
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Cobalt(LRU) set x100000|10|339.238|33.924|2947|
|Cobalt(LRU) get x100000|10|339.893|33.989|2942|
|Cobalt(LRU) update x100000|10|337.898|33.790|2959|
|Cobalt(LRU) evict x100000|10|336.917|33.692|2968|

## LRU
https://deno.land/x/lru
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|LRU set x100000|10|138.979|13.898|7195|
|LRU get x100000|10|88.447|8.845|11306|
|LRU update x100000|10|89.584|8.958|11162|
|LRU evict x100000|10|5884.397|588.440|169|

## Dash
https://deno.land/x/dash
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Dash(LRU) set x100000|10|51712.660|5171.266|19|
|Dash(LRU) get x100000|10|86.004|8.600|11627|
|Dash(LRU) update x100000|10|65887.715|6588.772|15|
|Dash(LRU) evict x100000|10|59478.478|5947.848|16|

## Metle
https://deno.land/x/metle
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Metle set x100000|10|108.137|10.814|9247|
|Metle get x100000|10|26.807|2.681|37303|
|Metle update x100000|10|108.063|10.806|9253|
|Metle evict x100000|10|98.779|9.878|10123|
