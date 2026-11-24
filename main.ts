// Famous Last Words at 1 Percent — make.fun entry.
// Writes a single line: the funniest last words a phone says at 1% battery.
// Deterministic, standard library only, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: the phone turns its own death into a threat —
// it takes the user's 6 a.m. alarm down with it, then signs off sweetly.
// "Sleep tight" is the punch: a bedtime blessing delivered as a threat.
const LINE = "If I die, your 6 a.m. alarm dies with me. Sleep tight.";

// The gate allows 1–199 characters, one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 199 || /\n/.test(LINE) || !LINE.trim()) {
  throw new Error(`entry line is invalid (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
