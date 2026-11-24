// "One Word, First Thought" — the entry is exactly one word, the first
// that came to mind, with no topic, no explanation and no second draft:
//
//   Jellyfish
//
// No brain, no heart, no bones, 95% water — and it has outlived the
// dinosaurs. The program prints the word to stdout and also writes it to
// the output directory as entry.txt, so the judge finds it either way.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const WORD = "Jellyfish";

function arg(name: string): string | null {
  const i = process.argv.indexOf("--" + name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : null;
}

const outDir = resolve(arg("output") ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), WORD + "\n");
console.log(WORD);
