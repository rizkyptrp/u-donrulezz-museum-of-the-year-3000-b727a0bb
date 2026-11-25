import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — one line (77 chars): the label a museum in
// the year 3000 puts beside a doormat. Chosen from 10 scored variants (see
// the build report): the mat's own text says WELCOME, and the label
// reports, deadpan, that humans answered the invitation by wiping their
// feet on it — true, absurd, and landing on the last word.
const entry = `Doormat, c. 2022. It said WELCOME. Humans wiped their feet on the invitation.`;

// Guard: the sealed scorer rejects an invalid entry with 0, so fail loudly
// here instead of silently writing a bad file. The entry must be a single
// line of 1–200 chars and contain more than whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
