bench:
	deno run --allow-hrtime --allow-write --allow-read --unstable --allow-env --allow-run mod.ts $(filter) $(out)