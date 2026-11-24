import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $9/month apology desk for lazy AI agents: when yours hallucinates at a customer, it drafts, sends, and files the grovelling sorry-email before the user screenshots the lie.";

const FALLBACK_OUTPUT_DIR = "/output";

function outputDirOf(path: string): string {
  return path.slice(0, path.lastIndexOf("/"));
}

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir !== undefined && dir.length > 0 ? dir : FALLBACK_OUTPUT_DIR;
}

function run(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/entry.txt`, PITCH, "utf8");
}

run();
