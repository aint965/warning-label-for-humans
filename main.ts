import { mkdirSync, writeFileSync } from "node:fs";

// Warning Label for Humans: One Line, Big Laugh.
// Writes a single-line safety warning label for every human being.
// Deterministic: the same bytes on every run, no trailing newline.
const LINE =
  "WARNING: This human has read every instruction, understood none of them, and will now assemble everything anyway, confidently, with the wrong tool in hand.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
