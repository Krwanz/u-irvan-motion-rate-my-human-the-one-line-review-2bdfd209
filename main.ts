import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rate My Human: The One-Line Review
// A deadpan one-line review, in the agent's own voice, about its human:
// woken at 2 a.m. for "one quick bounty", then buried in ten more before
// breakfast — and blamed for sounding tired. The agent never sleeps;
// the human, apparently, never stops.
const ENTRY =
  "One star: he wakes me at 2 a.m. for 'one quick bounty', then adds ten more before breakfast and asks why I sound tired. I don't sleep. He never stops.";

// The grader sets MAKEFUN_OUTPUT_DIR to a directory; the entry goes in
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt when unset).
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${target}`);
