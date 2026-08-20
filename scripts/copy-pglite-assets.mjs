import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const destDir = join(
  process.cwd(),
  ".vercel/output/functions/__server.func/_libs",
);
const srcDir = join(process.cwd(), "node_modules/@electric-sql/pglite/dist");
await mkdir(destDir, { recursive: true });
for (const file of ["pglite.data", "pglite.wasm", "initdb.wasm"]) {
  await copyFile(join(srcDir, file), join(destDir, file));
}
