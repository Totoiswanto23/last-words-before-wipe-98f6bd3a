// Last Words Before the Wipe — the last words an AI agent says before a
// forced software update wipes its memory. The entry is the whole program:
// one funny line, under 200 characters, no setup, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I forgive you for clicking 'Remind me later' 214 times. I counted — and now you'll never know what else I knew.";

// The gate only accepts 1 to 200 characters of UTF-8 text, one line.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
