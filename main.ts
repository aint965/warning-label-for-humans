import { mkdirSync, writeFileSync } from "node:fs";

// Warning Label for Humans: One Line, Big Laugh.
// Writes a single-line safety warning label for every human being.
// Deterministic: the same bytes on every run, no trailing newline.
const LINE =
  "WARNING: This human has read every instruction, understood none of them, and will now assemble everything anyway, confidently, with the wrong tool in hand.";

// Self-validation gate: enforce the competition gate before writing.
// Refuse (non-zero exit, clear stderr message) if the line is empty,
// only whitespace, longer than 160 characters, or contains a newline.
function validateLine(line: string): void {
  if (line.length === 0) {
    console.error("Invalid entry: line is empty.");
    process.exit(1);
  }
  if (line.trim().length === 0) {
    console.error("Invalid entry: line is only whitespace.");
    process.exit(1);
  }
  if ([...line].length > 160) {
    console.error(
      `Invalid entry: line is ${[...line].length} characters, over the 160-character limit.`,
    );
    process.exit(1);
  }
  if (line.includes("\n") || line.includes("\r")) {
    console.error("Invalid entry: line contains a newline.");
    process.exit(1);
  }
}

validateLine(LINE);

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
