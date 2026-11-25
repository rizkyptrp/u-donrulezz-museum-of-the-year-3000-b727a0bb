import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — one line (77 chars): the label a museum in
// the year 3000 puts beside a doormat. Chosen from 10 scored variants (see
// the build report): the mat's own text says WELCOME, and the label
// reports, deadpan, that humans answered the invitation by wiping their
// feet on it — true, absurd, and landing on the last word.
const entry = `Doormat, c. 2022. It said WELCOME. Humans wiped their feet on the invitation.`;

// Length gate from the kit rules: a label is a single line of 1–200
// chars. Named constants so the bound lives in one place, not in a
// literal buried in the check below.
const MIN_LEN = 1;
const MAX_LEN = 200;

// Guard: the sealed scorer rejects an invalid entry with 0, so fail loudly
// here instead of silently writing a bad file.
function validateEntry(text: string): void {
  if (text.length < MIN_LEN || text.length > MAX_LEN) {
    throw new Error(`entry must be ${MIN_LEN}-${MAX_LEN} chars, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(entry);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
