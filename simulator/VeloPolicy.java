package land.deno.velo.cache.simulator.policy.product;

import static com.github.benmanes.caffeine.cache.simulator.policy.Policy.Characteristic.WEIGHTED;

import java.io.IOException;
import java.util.Set;

import com.github.benmanes.caffeine.cache.simulator.BasicSettings;
import com.github.benmanes.caffeine.cache.simulator.policy.AccessEvent;
import com.github.benmanes.caffeine.cache.simulator.policy.Policy;
import com.github.benmanes.caffeine.cache.simulator.policy.PolicyStats;
import com.typesafe.config.Config;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

@Policy.PolicySpec(name = "product.Velo", characteristics = WEIGHTED)
public class VeloPolicy implements Policy {
  private final PolicyStats policyStats;
  private final Context ctx;
  private final Value cacheBinding;

  public VeloPolicy(Config config, Set<Policy.Characteristic> characteristics) {
    this.policyStats = new PolicyStats(name());
    this.ctx = Context.newBuilder("js")
        .allowIO(true)
        .allowExperimentalOptions(true)
        .option("js.esm-eval-returns-exports", "true")
        .option("engine.WarnInterpreterOnly", "false")
        .build();

    try {
      this.cacheBinding = createCacheBinding(new BasicSettings(config));
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  @Override
  public void record(AccessEvent event) {
    Value value = getFromCache(event.key());
    if (value.isNull()) {
      setCache(event.key(), event.weight());
      policyStats.recordMiss();
    } else {
      policyStats.recordHit();
      if (event.weight() != value.asDouble()) {
        setCache(event.key(), event.weight());
      }
    }
  }

  @Override
  public PolicyStats stats() {
    return policyStats;
  }

  private Value createCacheBinding(BasicSettings settings) throws IOException {
    String src = "import { Velo } from 'velo.bundle.js';" +
        "export const cache = Velo.builder()" +
        String.format(".capacity(%s)", settings.maximumSize()) +
        ".tinyLfu().build()";

    Source source = Source.newBuilder("js", src, "temp.mjs")
        .mimeType("application/javascript+module")
        .build();

    return ctx.eval(source).getMember("cache");
  }

  private Value getFromCache(long key) {
    return cacheBinding.getMember("get").execute(key);
  }

  private void setCache(long key, int value) {
    cacheBinding.getMember("set").executeVoid(key, value);
  }
}
