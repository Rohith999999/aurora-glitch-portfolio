#!/usr/bin/env node
// Preflight: verify all declared dependencies are installed before starting Vite.
// If any are missing, run `bun install` (or `npm install`) automatically.
import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
const missing = Object.keys(deps).filter(
  (name) => !existsSync(join(root, "node_modules", ...name.split("/"), "package.json"))
);

if (missing.length === 0) {
  console.log("[preflight] all dependencies present");
  process.exit(0);
}

console.warn(`[preflight] ${missing.length} missing module(s):`);
for (const m of missing) console.warn("  - " + m);

const hasBun = spawnSync("bun", ["--version"], { stdio: "ignore" }).status === 0;
const cmd = hasBun ? "bun" : "npm";
const args = hasBun ? ["install"] : ["install"];
console.log(`[preflight] running \`${cmd} ${args.join(" ")}\`...`);
const r = spawnSync(cmd, args, { cwd: root, stdio: "inherit" });
process.exit(r.status ?? 1);
