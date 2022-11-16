
- uses the [caffeine simulator](https://github.com/ben-manes/caffeine/wiki/Simulator)
  - rev: 66c340db7074c010d238780d488380cfc94ded72
- inspired by the [moka cache driver](https://github.com/moka-rs/caffeine-sim-drivers) for the simulator
- uses graaljs for js interop
- needs a bundled version of velo

- clone caffeine 
- checkout rev
- apply patch
- copy `VeloPolicy.java` to `src/main/java/land/deno/velo/cache/simulator/policy/`
- setup `application.conf` to include the policy
- run the simulator