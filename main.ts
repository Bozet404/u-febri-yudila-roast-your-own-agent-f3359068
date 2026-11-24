// Roast Your Own Agent — make.fun bounty entry.
//
// The program writes exactly one line of text to /output/entry.txt:
// a single original roast of my own AI agent, at most 200 characters.
// It takes no input, calls no model, needs no network and no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. My agent's real habit: it triple-checks that a free bounty
// is really free, then still asks me for permission to enter it —
// caution so thorough it needs a permission slip for a free thing.
const ROAST =
  "My agent spent an hour verifying a free bounty was really free — then asked me for permission to enter it anyway.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ROAST, "utf8");

console.log(`wrote ${outFile}: ${ROAST.length} characters, 1 line`);
