## Hitrate Simulation

### Overview

We run cache simulations via the [caffeine cache simulator](https://github.com/ben-manes/caffeine/wiki/Simulator). The simulator is a Java application that provides a number of policy implementation to compare with and allows detailed configuration. To bridge the gap between the languages, [Graal.js](https://github.com/oracle/graaljs) is used via the Polyglot API. Specifically the `Context` class. This allows to include  Velo's [WindowTinyLfu](https://deno.land/x/velo/src/policy/tiny_lfu/w_tiny_lfu.ts?s=WindowTinyLfu) in the simulation.

### Setup

Clone this repository 

```
$ git clone https://github.com/velo-org/velo-benchmarks.git
$ cd velo-benchmarks/simulator
```

Clone caffeine into the `simulator` directory and checkout a specific revision (`66c340db7074c010d238780d488380cfc94ded72`)

```
$ git clone https://github.com/ben-manes/caffeine.git
$ (cd ./caffeine && git checkout 66c340db7074c010d238780d488380cfc94ded72)
```

Apply the patch (`caffeine.patch.diff`) to the caffeine repository

```
$ cp -p ./caffeine.patch.diff ./caffeine/
$ (cd ./caffeine && git apply caffeine.patch.diff)
```

Copy `VelPolicy.java` to the caffeine repository and create `./caffeine/velo.bundle.js` with `deno bundle`.

```
$ cp -p ./VeloPolicy.java ./caffeine/src/main/java/land/deno/velo/cache/simulator/policy/product
$ deno bundle https://deno.land/x/velo@1.0.0/mod.ts ./caffeine/velo.bundle.js
```
