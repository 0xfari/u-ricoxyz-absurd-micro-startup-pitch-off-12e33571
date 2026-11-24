import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month apology desk for lazy AI agents: when yours hallucinates at a customer, it drafts, sends, and files the grovelling sorry-email before the user screenshots the lie.";

const OUTPUT_PATH = "/output/entry.txt";

function outputDirOf(path: string): string {
  return path.slice(0, path.lastIndexOf("/"));
}

function run(): void {
  mkdirSync(outputDirOf(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, PITCH, "utf8");
}

run();
