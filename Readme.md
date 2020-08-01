# Benchmark Results
Here you see how *Velo* stacks up against other in memory Caches. Most of them are LRU(least-recently-used) caches.
Config:
```bash
KEYS: 100000
RUNS: 10
OS: linux
CPU: Intel(R) Core(TM) i7-5600U CPU @ 2.60GHz x 2
RAM: 7.67 GB
```
## Table of Contents

- [Velo](#velo)
- [Cobalt](#cobalt)
- [LRU](#lru)
- [Cache](#cache)
- [Metle](#metle)

## Velo
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Velo(LRU) set x100000|10|122.044|12.204|8193|
|Velo(LRU) get x100000|10|43.092|4.309|23206|
|Velo(LRU) update x100000|10|121.675|12.168|8218|
|Velo(LRU) evict x100000|10|116.585|11.658|8577|

## Cobalt
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Cobalt(LRU) set x100000|10|504.884|50.488|1980|
|Cobalt(LRU) get x100000|10|563.310|56.331|1775|
|Cobalt(LRU) update x100000|10|597.165|59.716|1674|
|Cobalt(LRU) evict x100000|10|658.157|65.816|1519|

## LRU
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|LRU set x100000|10|155.784|15.578|6419|
|LRU get x100000|10|213.909|21.391|4674|
|LRU update x100000|10|179.190|17.919|5580|
|LRU evict x100000|10|6833.694|683.369|146|

## Cache
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Cache(LRU) set x100000|10|55579.462|5557.946|17|
|Cache(LRU) get x100000|10|127.488|12.749|7843|
|Cache(LRU) update x100000|10|66965.153|6696.515|14|
|Cache(LRU) evict x100000|10|66890.181|6689.018|14|

## Metle
|Name|Runs|Total (ms)|Average (ms)|Avg. Operations per ms|
|---|---|---|---|---|
|Metle set x100000|10|225.238|22.524|4439|
|Metle get x100000|10|60.796|6.080|16448|
|Metle update x100000|10|182.617|18.262|5475|
|Metle evict x100000|10|165.861|16.586|6029|
